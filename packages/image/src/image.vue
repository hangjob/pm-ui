<template>
    <div class="pm-image" :style='{width:width,height:height}'>
        <slot v-if="loading" name="placeholder">
            <div class="pm-image__placeholder"></div>
        </slot>
        <slot v-else-if="error" name="error">
            <div class="pm-image__error">{{ stateText }}</div>
        </slot>
        <img :src="src" alt='' class="el-image__inner"
             @click="clickHandler"
             :class="[round===true?'image--round':'',{ 'el-image__inner--center': alignCenter, 'el-image__preview': preview }]"
             :style="imageStyle" v-else>
        <template v-if="preview">
            <!--            <image-viewer :initial-index="imageIndex" v-if="showViewer" :on-close="closeViewer"-->
            <!--                         />-->
            <ImageViewer>ffff</ImageViewer>
        </template>
    </div>
</template>
<script>
import {isString, isHtmlElement} from '~@/utils/types'
import {on, off, getScrollContainer, isInContainer} from '~@/utils/dom';
import {throttle} from "lodash"
import ImageViewer from './image-viewer';

const ObjectFit = {
    NONE: 'none',
    CONTAIN: 'contain',
    COVER: 'cover',
    FILL: 'fill',
    SCALE_DOWN: 'scale-down'
};
const isSupportObjectFit = () => document.documentElement.style.objectFit !== undefined;
export default {
    name: "PmImage",
    props: {
        width: {
            type: [String, Number],

        },
        height: {
            type: [String, Number],
        },
        src: String,
        fit: String,
        lazy: Boolean,
        round: {
            type: Boolean,
            default: false,
        },
        scrollContainer: {},
        previewSrcList: {
            type: Array,
            default: () => []
        },
        zIndex: {
            type: Number,
            default: 2000
        },

    },
    components: {
        ImageViewer
    },
    data() {
        return {
            loading: true,
            error: false,
            show: !this.lazy,
            showViewer: false,
            stateText: '加载中...',
            imageWidth: 0,
            imageHeight: 0,
            prevOverflow: ''
        };
    },

    watch: {
        src: {
            handler() {
                this.show && this.loadImage();
            },
            immediate: true
        },
        show(val) {
            val && this.loadImage();
        }
    },
    computed: {
        _imageHeight() {
            if (isString(this.height)) {
                return this.height
            } else {
                return this.height + 'px';
            }
        },
        _imageWidth() {
            if (isString(this.width)) {
                return this.width
            } else {
                return this.width + 'px';
            }
        },
        _stateText() {
            if (this.loading) {
                return this.stateText
            } else {
                return '加载失败'
            }
        },
        alignCenter() {
            return !this.$isServer && !isSupportObjectFit() && this.fit !== ObjectFit.FILL;
        },
        imageStyle() {
            const {fit} = this;
            if (!this.$isServer && fit) {
                return isSupportObjectFit()
                    ? {'object-fit': fit}
                    : this.getImageStyle(fit);
            }
            return {};
        },
        preview() {
            const {previewSrcList} = this;
            return Array.isArray(previewSrcList) && previewSrcList.length > 0;
        },
        imageIndex() {
            let previewIndex = 0;
            const srcIndex = this.previewSrcList.indexOf(this.src);
            if (srcIndex >= 0) {
                previewIndex = srcIndex;
            }
            return previewIndex;
        }
    },
    mounted() {
        if (this.lazy) {
            this.addLazyLoadListener();
        } else {
            this.loadImage();
        }
    },
    methods: {
        getImageStyle(fit) {
            const {imageWidth, imageHeight} = this;
            const {
                clientWidth: containerWidth,
                clientHeight: containerHeight
            } = this.$el;
            // if (!imageWidth || !imageHeight || !containerWidth || !containerHeight) return {};
            const imageAspectRatio = imageWidth / imageHeight;
            const containerAspectRatio = containerWidth / containerHeight;
            if (fit === ObjectFit.SCALE_DOWN) {
                const isSmaller = imageWidth < containerWidth && imageHeight < containerHeight;
                fit = isSmaller ? ObjectFit.NONE : ObjectFit.CONTAIN;
            }

        },
        // 加载状态 start -------------------------------------------------------------------------------------------
        loadImage() {
            if (this.$isServer) return;
            // reset status
            this.loading = true;
            this.error = false;
            const img = new Image();
            img.onload = e => this.handleLoad(e, img);
            img.onerror = this.handleError.bind(this);
            // bind html attrs
            // so it can behave consistently
            Object.keys(this.$attrs)
                .forEach((key) => {
                    const value = this.$attrs[key];
                    img.setAttribute(key, value);
                });
            img.src = this.src;
        },
        handleLoad(e, img) {
            this.imageWidth = img.width;
            this.imageHeight = img.height;
            this.loading = false;
            this.error = false;
            this.stateText = '加载成功'
        }, //加载成功
        handleError() {
            this.loading = false;
            this.error = true;
            this.stateText = '加载失败'
        }, //加载失败
        // 加载状态 end -------------------------------------------------------------------------------------------
        // 懒加载 start ----------------------------------------------------------------------------------------------
        handleLazyLoad() {
            if (isInContainer(this.$el, this._scrollContainer)) {
                this.show = true;
                this.removeLazyLoadListener();
            }
        },
        //监听 懒加载 加载
        addLazyLoadListener() {
            // if (this.$isServer) return;
            const {scrollContainer} = this;
            let _scrollContainer = null;
            if (isHtmlElement(scrollContainer)) {
                _scrollContainer = scrollContainer;
            } else if (isString(scrollContainer)) {
                _scrollContainer = document.querySelector(scrollContainer);
            } else {
                _scrollContainer = getScrollContainer(this.$el);
            }
            if (_scrollContainer) {
                this._scrollContainer = _scrollContainer;
                this._lazyLoadHandler = throttle(this.handleLazyLoad, 200,);
                on(_scrollContainer, 'scroll', this._lazyLoadHandler);
                this.handleLazyLoad();
            }
        },
        //移除 懒加载 加载
        removeLazyLoadListener() {
            const {_scrollContainer, _lazyLoadHandler} = this;
            if (this.$isServer || !_scrollContainer || !_lazyLoadHandler) return;
            off(_scrollContainer, 'scroll', _lazyLoadHandler);
            this._scrollContainer = null;
            this._lazyLoadHandler = null;
        },
        // 懒加载 end --------------------------------------------------------------------------------------------------
        //组件销毁时移除 --页面关闭、路由跳转、v-if和改变key值
        beforeDestroy() {
            this.lazy && this.removeLazyLoadListener();
        },

        // 预览
        clickHandler() {
            alert('11dd')
            if (!this.preview) {
                return;
            }
            this.prevOverflow = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
            this.showViewer = true;
        },
        closeViewer() {
            document.body.style.overflow = this.prevOverflow;
            this.showViewer = false;
        }

    }

}
</script>

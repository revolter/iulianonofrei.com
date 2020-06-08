<template>
    <div class="window">
        <div class="bar">
            <div class="close left"></div><div class="minimize left"></div><div class="maximize left"></div>
            <div class="title"><slot name="title"></slot></div>
            <div class="close right placeholder"></div><div class="minimize right placeholder"></div><div class="maximize right placeholder"></div>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
    @mixin linear-gradient($from, $to) {
        background: $to;
        background: linear-gradient(to bottom, $from 0%,$to 100%);
    }

    .window {
        position: relative;
        margin: 0 auto;

        text-align: left;
        border-radius: 4px;
        border: 0.5px solid rgba(0, 0, 0, 0.65);
        box-shadow: 0 18px 50px rgba(0, 0, 0, 0.52);

        overflow: hidden;

        &:before {
            content: "";

            position: absolute;
            width: 100%;
            height: 100%;

            border-radius: inherit;
            box-sizing: border-box;
            border: 1px solid rgba(255, 255, 255, 0.15);
            pointer-events: none;
        }

        .bar {
            @include linear-gradient(#434549, #37383b);
            display: flex;
            border-bottom: 1px solid #000;

            line-height: 0;

            %bar-icon {
                flex-shrink: 0;
                $margin: 10px;
                $size: 12px;

                &.left {
                    margin: $margin $margin $margin 0;

                    &:first-child {
                        margin-left: $margin;
                    }
                }

                &.right {
                    margin: $margin 0 $margin $margin;

                    &:last-child {
                        margin-right: $margin;
                    }
                }

                width: $size;
                height: $size;

                border-radius: $size / 2;
            }

            .close {
                @extend %bar-icon;

                background-color: #ff6259;
            }

            .minimize {
                @extend %bar-icon;

                background-color: #ffbd2e;
            }

            .maximize {
                @extend %bar-icon;

                background-color: #28ca42;
            }

            .placeholder {
                visibility: hidden;
            }

            .title {
                flex-grow: 1;
                min-width: 0;

                color: #b8b9bc;
                text-align: center;
                line-height: normal;

                & span {
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
            }
        }
    }
</style>

<template>
    <div class="window">
        <div class="bar">
            <div class="close"></div><div class="minimize"></div><div class="maximize"></div>
            <span class="title"><slot name="title"></slot></span>
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
        background-color: #002834;
        max-width: 800px;
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
            line-height: 0;

            %bar-icon {
                $margin: 10px;
                $size: 12px;

                display: inline-block;
                margin: $margin 0 $margin $margin;

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

            .title {
                position: absolute;
                top: 0;
                left: 50%;
                transform: translateX(-50%);

                color: #b8b9bc;
                line-height: normal;
            }
        }
    }
</style>

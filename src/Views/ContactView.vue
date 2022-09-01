<script setup>
import { ref } from "@vue/reactivity";

const isActive = ref(false);

function toggleActive() {
    isActive.value = !isActive.value;
}
</script>
        
        <template>
    <nav>
        <div class="links-container">
            <a class="link" href="https://www.linkedin.com/in/cianjansen" target="_blank">LinkedIn</a>
            <a class="link" href="mailto::cian@cianjansen.com">Email</a>
        </div>

        <button @click="toggleActive" :class="[isActive ? 'menu active' : 'menu']">
            <svg viewBox="0 0 64 48">
                <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
            </svg>
        </button>
    </nav>
</template>
        
        <style lang="scss">
        $color-white: black;
        $color-black: #ddd;
        $color-gray: #ddd;
        
        /* Animations */
        @mixin slide-in-out {
            -webkit-transition-duration: 0.5s;
            -moz-transition-duration: 0.5s;
            -o-transition-duration: 0.5s;
            transition-duration: 0.5s;
        }
        
        nav {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: left;
            margin-top: 1rem;
            margin-left: 1rem;
            row-gap: 2em;
        
            /* Links Styling */
        
            .links-container {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                text-align: left;
                font-size: 4rem;
        
                @media screen and (max-width: 2000px) {
                    font-size: 3rem;
                }
        
                @media screen and (max-width: 1500px) {
                    font-size: 2.5rem;
                }
        
                @media screen and (max-width: 1000px) {
                    font-size: 2rem;
                }
            }
        
            .nav-links-container {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                width: 100%;
                height: 70%;
            }
        
            /* Menu Button Styling */
        
            .menu {
                display: none;
                --color: black;
                z-index: 99999;
                width: 42px;
                height: 42px;
                padding: 0;
                margin: 0;
                margin-right: -2.5rem;
                outline: none;
                position: relative;
                border: none;
                background: none;
                cursor: pointer;
                -webkit-appearence: none;
                -webkit-tap-highlight-color: transparent;
        
                svg {
                    width: 64px;
                    height: 48px;
                    top: -6px;
                    left: -14px;
                    stroke: var(--color);
                    stroke-width: 4px;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    fill: none;
                    display: block;
                    position: absolute;
        
                    path {
                        transition: stroke-dasharray var(--duration, 0.85s) var(--easing, ease) var(--delay, 0s), stroke-dashoffset var(--duration, 0.85s) var(--easing, ease) var(--delay, 0s);
                        stroke-dasharray: var(--array-1, 26px) var(--array-2, 100px);
                        stroke-dashoffset: var(--offset, 126px);
                        transform: translateZ(0);
        
                        &:nth-child(2) {
                            --duration: 0.7s;
                            --easing: ease-in;
                            --offset: 100px;
                            --array-2: 74px;
                        }
        
                        &:nth-child(3) {
                            --offset: 133px;
                            --array-2: 107px;
                        }
                    }
                }
        
                &.active {
                    svg {
                        path {
                            --offset: 57px;
        
                            &:nth-child(1),
                            &:nth-child(3) {
                                --delay: 0.15s;
                                --easing: cubic-bezier(0.2, 0.4, 0.2, 1.1);
                            }
        
                            &:nth-child(2) {
                                --duration: 0.4s;
                                --offset: 2px;
                                --array-1: 1px;
                            }
        
                            &:nth-child(3) {
                                --offset: 58px;
                            }
                        }
                    }
                }
        
                @media screen and (max-width: 1200px) {
                    display: flex;
                }
            }
        
            /* Single link Styling */
        
            .link {
                font-size: 1em;
                font-weight: 400;
                color: $color-gray;
                text-decoration: none;
                line-height: inherit;
                background-image: linear-gradient(180deg, transparent 95%, $color-black 0);
                background-repeat: no-repeat;
                background-size: 0 100%;
                transition: background-size 0.4s ease;
                user-select: none;
        
                &:hover {
                    background-size: 100% 100%;
                    cursor: pointer;
                }
            }
        }
        </style>
        
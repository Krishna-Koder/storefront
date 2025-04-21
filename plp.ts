import LiveSearchPLP from "@repo/storefront-product-listing-page";

declare global {
    interface Window {
        LiveSearchPLP: typeof LiveSearchPLP;
    }
}

window.LiveSearchPLP = LiveSearchPLP;


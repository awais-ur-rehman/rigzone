declare global {
    interface Window {
        grecaptcha?: any;
    }
}

let scriptLoadingPromise: Promise<void> | null = null;

export function loadRecaptcha(siteKey: string): Promise<void> {
    if (typeof window === 'undefined') return Promise.resolve();
    if (window.grecaptcha) return Promise.resolve();
    if (scriptLoadingPromise) return scriptLoadingPromise;

    scriptLoadingPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
        document.head.appendChild(script);
    });

    return scriptLoadingPromise;
}

export async function executeRecaptcha(action: string, siteKey: string): Promise<string> {
    await loadRecaptcha(siteKey);
    // Wait until grecaptcha is fully ready
    await new Promise<void>((resolve, reject) => {
        const ready = () => resolve();
        const start = Date.now();
        const timeoutMs = 8000;
        function check() {
            if (window.grecaptcha && typeof window.grecaptcha.ready === 'function') {
                window.grecaptcha.ready(ready);
            } else if (Date.now() - start > timeoutMs) {
                reject(new Error('reCAPTCHA failed to initialize'));
            } else {
                setTimeout(check, 50);
            }
        }
        check();
    });

    if (!window.grecaptcha || typeof window.grecaptcha.execute !== 'function') {
        throw new Error('reCAPTCHA execute not available');
    }
    return await window.grecaptcha.execute(siteKey, { action });
}



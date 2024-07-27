<script lang="ts">
    import { LOCALES } from '@/i18n/config';
    import { useLanguage } from '@/i18n/utils';
    import { getRelativeLocaleUrl } from 'astro:i18n';

    const url = new URL(window.location.href);
    const { t, lang } = useLanguage(new URL(url));
    const slug = url.pathname.replace(`/${lang}`, '');

    function switchLocales() {
        if (lang === LOCALES.FR) {
            window.location.href = getRelativeLocaleUrl(LOCALES.EN, slug);
        } else {
            window.location.href = getRelativeLocaleUrl(LOCALES.FR, slug);

        }
    }
</script>

<button on:click={switchLocales}>( {t("lang.picker")} )</button>
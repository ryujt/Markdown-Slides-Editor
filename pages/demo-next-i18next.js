import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useRef, useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router';

export default function LanguageSwitch() {
    const select = useRef(null);
    const router = useRouter();
    const { t } = useTranslation('common');

    useEffect(() => {
        const activeLanguage = router?.locales?.find((el) => el === router.locale);
        select.current.value = activeLanguage;
    }, []);

    const handleChange = () => {
        // window.location.href = `/${select.current.value}${router.asPath}`;
        const tag = select.current.value;
        const { asPath } = router;
        router.push(asPath, asPath, { locale: tag });
    };

    return (
        <>
            <p>{t('title')}</p>

            <select onChange={handleChange} ref={select}>
                {router?.locales?.map((language, index) => (
                    <option key={index} value={language}>
                        {language}
                    </option>
                ))}
            </select>
        </>
    );
};

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['common'])),
            // namespace "common" from common.json in ./public/locales/{language}/{namespace}.json format
            // Will be passed to the page component as props
        },
    };
}
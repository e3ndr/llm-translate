export declare type LanguageDirection = 'ltr' | 'rtl';

export declare interface Language {
	code: LanguageCode;
	name: string;
	direction: LanguageDirection;
	children: Language[];
}

export enum LanguageCode {
	'aa' = 'aa',
	'aa-DJ' = 'aa-DJ',
	'aa-ER' = 'aa-ER',
	'ab' = 'ab',
	'af' = 'af',
	'af-NA' = 'af-NA',
	'ak' = 'ak',
	'am' = 'am',
	'an' = 'an',
	'ar' = 'ar',
	'ar-AE' = 'ar-AE',
	'ar-BH' = 'ar-BH',
	'ar-DJ' = 'ar-DJ',
	'ar-DZ' = 'ar-DZ',
	'ar-EG' = 'ar-EG',
	'ar-EH' = 'ar-EH',
	'ar-ER' = 'ar-ER',
	'ar-IL' = 'ar-IL',
	'ar-IQ' = 'ar-IQ',
	'ar-JO' = 'ar-JO',
	'ar-KM' = 'ar-KM',
	'ar-KW' = 'ar-KW',
	'ar-LB' = 'ar-LB',
	'ar-LY' = 'ar-LY',
	'ar-MA' = 'ar-MA',
	'ar-MR' = 'ar-MR',
	'ar-OM' = 'ar-OM',
	'ar-PS' = 'ar-PS',
	'ar-QA' = 'ar-QA',
	'ar-SA' = 'ar-SA',
	'ar-SD' = 'ar-SD',
	'ar-SO' = 'ar-SO',
	'ar-SS' = 'ar-SS',
	'ar-SY' = 'ar-SY',
	'ar-TD' = 'ar-TD',
	'ar-TN' = 'ar-TN',
	'ar-YE' = 'ar-YE',
	'as' = 'as',
	'az' = 'az',
	'az-Arab' = 'az-Arab',
	'az-Arab-IQ' = 'az-Arab-IQ',
	'az-Arab-TR' = 'az-Arab-TR',
	'az-Cyrl' = 'az-Cyrl',
	'az-Latn' = 'az-Latn',
	'ba' = 'ba',
	'be' = 'be',
	'be-tarask' = 'be-tarask',
	'bg' = 'bg',
	'bg-BG' = 'bg-BG',
	'bm' = 'bm',
	'bm-Nkoo' = 'bm-Nkoo',
	'bn' = 'bn',
	'bn-IN' = 'bn-IN',
	'bo' = 'bo',
	'bo-IN' = 'bo-IN',
	'br' = 'br',
	'bs' = 'bs',
	'bs-Cyrl' = 'bs-Cyrl',
	'bs-Latn' = 'bs-Latn',
	'ca' = 'ca',
	'ca-AD' = 'ca-AD',
	'ca-ES' = 'ca-ES',
	'ca-FR' = 'ca-FR',
	'ca-IT' = 'ca-IT',
	'ce' = 'ce',
	'co' = 'co',
	'cs' = 'cs',
	'cs-CZ' = 'cs-CZ',
	'cv' = 'cv',
	'cy' = 'cy',
	'da' = 'da',
	'da-DK' = 'da-DK',
	'da-GL' = 'da-GL',
	'de' = 'de',
	'de-AT' = 'de-AT',
	'de-BE' = 'de-BE',
	'de-CH' = 'de-CH',
	'de-DE' = 'de-DE',
	'de-IT' = 'de-IT',
	'de-LI' = 'de-LI',
	'de-LU' = 'de-LU',
	'dv' = 'dv',
	'dz' = 'dz',
	'ee' = 'ee',
	'ee-TG' = 'ee-TG',
	'el' = 'el',
	'el-CY' = 'el-CY',
	'el-GR' = 'el-GR',
	'el-polyton' = 'el-polyton',
	'en' = 'en',
	'en-AE' = 'en-AE',
	'en-AG' = 'en-AG',
	'en-AI' = 'en-AI',
	'en-AS' = 'en-AS',
	'en-AT' = 'en-AT',
	'en-AU' = 'en-AU',
	'en-BB' = 'en-BB',
	'en-BE' = 'en-BE',
	'en-BI' = 'en-BI',
	'en-BM' = 'en-BM',
	'en-BS' = 'en-BS',
	'en-BW' = 'en-BW',
	'en-BZ' = 'en-BZ',
	'en-CA' = 'en-CA',
	'en-CC' = 'en-CC',
	'en-CH' = 'en-CH',
	'en-CK' = 'en-CK',
	'en-CM' = 'en-CM',
	'en-CX' = 'en-CX',
	'en-CY' = 'en-CY',
	'en-CZ' = 'en-CZ',
	'en-DE' = 'en-DE',
	'en-DG' = 'en-DG',
	'en-DK' = 'en-DK',
	'en-DM' = 'en-DM',
	'en-ER' = 'en-ER',
	'en-ES' = 'en-ES',
	'en-FI' = 'en-FI',
	'en-FJ' = 'en-FJ',
	'en-FK' = 'en-FK',
	'en-FM' = 'en-FM',
	'en-FR' = 'en-FR',
	'en-GB' = 'en-GB',
	'en-GD' = 'en-GD',
	'en-GG' = 'en-GG',
	'en-GH' = 'en-GH',
	'en-GI' = 'en-GI',
	'en-GM' = 'en-GM',
	'en-GS' = 'en-GS',
	'en-GU' = 'en-GU',
	'en-GY' = 'en-GY',
	'en-HK' = 'en-HK',
	'en-HU' = 'en-HU',
	'en-ID' = 'en-ID',
	'en-IE' = 'en-IE',
	'en-IL' = 'en-IL',
	'en-IM' = 'en-IM',
	'en-IN' = 'en-IN',
	'en-IO' = 'en-IO',
	'en-IT' = 'en-IT',
	'en-JE' = 'en-JE',
	'en-JM' = 'en-JM',
	'en-KE' = 'en-KE',
	'en-KI' = 'en-KI',
	'en-KN' = 'en-KN',
	'en-KY' = 'en-KY',
	'en-LC' = 'en-LC',
	'en-LR' = 'en-LR',
	'en-LS' = 'en-LS',
	'en-MG' = 'en-MG',
	'en-MH' = 'en-MH',
	'en-MO' = 'en-MO',
	'en-MP' = 'en-MP',
	'en-MS' = 'en-MS',
	'en-MT' = 'en-MT',
	'en-MU' = 'en-MU',
	'en-MV' = 'en-MV',
	'en-MW' = 'en-MW',
	'en-MY' = 'en-MY',
	'en-NA' = 'en-NA',
	'en-NF' = 'en-NF',
	'en-NG' = 'en-NG',
	'en-NL' = 'en-NL',
	'en-NO' = 'en-NO',
	'en-NR' = 'en-NR',
	'en-NU' = 'en-NU',
	'en-NZ' = 'en-NZ',
	'en-PG' = 'en-PG',
	'en-PH' = 'en-PH',
	'en-PK' = 'en-PK',
	'en-PL' = 'en-PL',
	'en-PN' = 'en-PN',
	'en-PR' = 'en-PR',
	'en-PT' = 'en-PT',
	'en-PW' = 'en-PW',
	'en-RO' = 'en-RO',
	'en-RW' = 'en-RW',
	'en-SB' = 'en-SB',
	'en-SC' = 'en-SC',
	'en-SD' = 'en-SD',
	'en-SE' = 'en-SE',
	'en-SG' = 'en-SG',
	'en-SH' = 'en-SH',
	'en-SI' = 'en-SI',
	'en-SK' = 'en-SK',
	'en-SL' = 'en-SL',
	'en-SS' = 'en-SS',
	'en-SX' = 'en-SX',
	'en-SZ' = 'en-SZ',
	'en-TC' = 'en-TC',
	'en-TK' = 'en-TK',
	'en-TO' = 'en-TO',
	'en-TT' = 'en-TT',
	'en-TV' = 'en-TV',
	'en-TZ' = 'en-TZ',
	'en-UG' = 'en-UG',
	'en-UM' = 'en-UM',
	'en-VC' = 'en-VC',
	'en-VG' = 'en-VG',
	'en-VI' = 'en-VI',
	'en-VU' = 'en-VU',
	'en-WS' = 'en-WS',
	'en-ZA' = 'en-ZA',
	'en-ZM' = 'en-ZM',
	'en-ZW' = 'en-ZW',
	'eo' = 'eo',
	'es' = 'es',
	'es-AR' = 'es-AR',
	'es-BO' = 'es-BO',
	'es-BR' = 'es-BR',
	'es-BZ' = 'es-BZ',
	'es-CL' = 'es-CL',
	'es-CO' = 'es-CO',
	'es-CR' = 'es-CR',
	'es-CU' = 'es-CU',
	'es-DO' = 'es-DO',
	'es-EA' = 'es-EA',
	'es-EC' = 'es-EC',
	'es-ES' = 'es-ES',
	'es-GQ' = 'es-GQ',
	'es-GT' = 'es-GT',
	'es-HN' = 'es-HN',
	'es-IC' = 'es-IC',
	'es-MX' = 'es-MX',
	'es-NI' = 'es-NI',
	'es-PA' = 'es-PA',
	'es-PE' = 'es-PE',
	'es-PH' = 'es-PH',
	'es-PR' = 'es-PR',
	'es-PY' = 'es-PY',
	'es-SV' = 'es-SV',
	'es-US' = 'es-US',
	'es-UY' = 'es-UY',
	'es-VE' = 'es-VE',
	'et' = 'et',
	'et-EE' = 'et-EE',
	'eu' = 'eu',
	'fa' = 'fa',
	'fa-AF' = 'fa-AF',
	'fa-IR' = 'fa-IR',
	'ff' = 'ff',
	'ff-Adlm' = 'ff-Adlm',
	'ff-Adlm-BF' = 'ff-Adlm-BF',
	'ff-Adlm-CM' = 'ff-Adlm-CM',
	'ff-Adlm-GH' = 'ff-Adlm-GH',
	'ff-Adlm-GM' = 'ff-Adlm-GM',
	'ff-Adlm-GW' = 'ff-Adlm-GW',
	'ff-Adlm-LR' = 'ff-Adlm-LR',
	'ff-Adlm-MR' = 'ff-Adlm-MR',
	'ff-Adlm-NE' = 'ff-Adlm-NE',
	'ff-Adlm-NG' = 'ff-Adlm-NG',
	'ff-Adlm-SL' = 'ff-Adlm-SL',
	'ff-Adlm-SN' = 'ff-Adlm-SN',
	'ff-Latn' = 'ff-Latn',
	'ff-Latn-BF' = 'ff-Latn-BF',
	'ff-Latn-CM' = 'ff-Latn-CM',
	'ff-Latn-GH' = 'ff-Latn-GH',
	'ff-Latn-GM' = 'ff-Latn-GM',
	'ff-Latn-GN' = 'ff-Latn-GN',
	'ff-Latn-GW' = 'ff-Latn-GW',
	'ff-Latn-LR' = 'ff-Latn-LR',
	'ff-Latn-MR' = 'ff-Latn-MR',
	'ff-Latn-NE' = 'ff-Latn-NE',
	'ff-Latn-NG' = 'ff-Latn-NG',
	'ff-Latn-SL' = 'ff-Latn-SL',
	'fi' = 'fi',
	'fi-FI' = 'fi-FI',
	'fil-PH' = 'fil-PH',
	'fo' = 'fo',
	'fo-DK' = 'fo-DK',
	'fr' = 'fr',
	'fr-BE' = 'fr-BE',
	'fr-BF' = 'fr-BF',
	'fr-BI' = 'fr-BI',
	'fr-BJ' = 'fr-BJ',
	'fr-BL' = 'fr-BL',
	'fr-CA' = 'fr-CA',
	'fr-CD' = 'fr-CD',
	'fr-CF' = 'fr-CF',
	'fr-CG' = 'fr-CG',
	'fr-CH' = 'fr-CH',
	'fr-CI' = 'fr-CI',
	'fr-CM' = 'fr-CM',
	'fr-DJ' = 'fr-DJ',
	'fr-DZ' = 'fr-DZ',
	'fr-FR' = 'fr-FR',
	'fr-GA' = 'fr-GA',
	'fr-GF' = 'fr-GF',
	'fr-GN' = 'fr-GN',
	'fr-GP' = 'fr-GP',
	'fr-GQ' = 'fr-GQ',
	'fr-HT' = 'fr-HT',
	'fr-KM' = 'fr-KM',
	'fr-LU' = 'fr-LU',
	'fr-MA' = 'fr-MA',
	'fr-MC' = 'fr-MC',
	'fr-MF' = 'fr-MF',
	'fr-MG' = 'fr-MG',
	'fr-ML' = 'fr-ML',
	'fr-MQ' = 'fr-MQ',
	'fr-MR' = 'fr-MR',
	'fr-MU' = 'fr-MU',
	'fr-NC' = 'fr-NC',
	'fr-NE' = 'fr-NE',
	'fr-PF' = 'fr-PF',
	'fr-PM' = 'fr-PM',
	'fr-RE' = 'fr-RE',
	'fr-RW' = 'fr-RW',
	'fr-SC' = 'fr-SC',
	'fr-SN' = 'fr-SN',
	'fr-SY' = 'fr-SY',
	'fr-TD' = 'fr-TD',
	'fr-TG' = 'fr-TG',
	'fr-TN' = 'fr-TN',
	'fr-VU' = 'fr-VU',
	'fr-WF' = 'fr-WF',
	'fr-YT' = 'fr-YT',
	'fy' = 'fy',
	'ga' = 'ga',
	'ga-GB' = 'ga-GB',
	'gd' = 'gd',
	'gl' = 'gl',
	'gn' = 'gn',
	'gu' = 'gu',
	'gu-IN' = 'gu-IN',
	'gv' = 'gv',
	'ha' = 'ha',
	'ha-Arab' = 'ha-Arab',
	'ha-Arab-SD' = 'ha-Arab-SD',
	'ha-GH' = 'ha-GH',
	'ha-NE' = 'ha-NE',
	'he' = 'he',
	'he-IL' = 'he-IL',
	'hi' = 'hi',
	'hi-IN' = 'hi-IN',
	'hi-Latn' = 'hi-Latn',
	'hr' = 'hr',
	'hr-BA' = 'hr-BA',
	'hr-HR' = 'hr-HR',
	'ht' = 'ht',
	'hu' = 'hu',
	'hu-HU' = 'hu-HU',
	'hy' = 'hy',
	'ia' = 'ia',
	'id' = 'id',
	'id-ID' = 'id-ID',
	'ie' = 'ie',
	'ig' = 'ig',
	'ii' = 'ii',
	'ik' = 'ik',
	'io' = 'io',
	'is' = 'is',
	'it' = 'it',
	'it-CH' = 'it-CH',
	'it-IT' = 'it-IT',
	'it-SM' = 'it-SM',
	'it-VA' = 'it-VA',
	'iu' = 'iu',
	'iu-Latn' = 'iu-Latn',
	'ja' = 'ja',
	'ja-JP' = 'ja-JP',
	'jv' = 'jv',
	'ka' = 'ka',
	'ki' = 'ki',
	'kk' = 'kk',
	'kk-Arab' = 'kk-Arab',
	'kk-Cyrl' = 'kk-Cyrl',
	'kk-KZ' = 'kk-KZ',
	'kl' = 'kl',
	'km' = 'km',
	'kn' = 'kn',
	'kn-IN' = 'kn-IN',
	'ko' = 'ko',
	'ko-CN' = 'ko-CN',
	'ko-KP' = 'ko-KP',
	'ko-KR' = 'ko-KR',
	'ks' = 'ks',
	'ks-Arab' = 'ks-Arab',
	'ks-Deva' = 'ks-Deva',
	'ku' = 'ku',
	'kw' = 'kw',
	'ky' = 'ky',
	'la' = 'la',
	'lb' = 'lb',
	'lg' = 'lg',
	'ln' = 'ln',
	'ln-AO' = 'ln-AO',
	'ln-CF' = 'ln-CF',
	'ln-CG' = 'ln-CG',
	'lo' = 'lo',
	'lt' = 'lt',
	'lt-LT' = 'lt-LT',
	'lu' = 'lu',
	'lv' = 'lv',
	'lv-LV' = 'lv-LV',
	'mg' = 'mg',
	'mi' = 'mi',
	'mk' = 'mk',
	'ml' = 'ml',
	'ml-IN' = 'ml-IN',
	'mn' = 'mn',
	'mn-Mong' = 'mn-Mong',
	'mn-Mong-MN' = 'mn-Mong-MN',
	'mr' = 'mr',
	'mr-IN' = 'mr-IN',
	'ms' = 'ms',
	'ms-Arab' = 'ms-Arab',
	'ms-Arab-BN' = 'ms-Arab-BN',
	'ms-BN' = 'ms-BN',
	'ms-ID' = 'ms-ID',
	'ms-SG' = 'ms-SG',
	'mt' = 'mt',
	'my' = 'my',
	'nb' = 'nb',
	'nb-SJ' = 'nb-SJ',
	'nd' = 'nd',
	'ne' = 'ne',
	'ne-IN' = 'ne-IN',
	'nl' = 'nl',
	'nl-AW' = 'nl-AW',
	'nl-BE' = 'nl-BE',
	'nl-BQ' = 'nl-BQ',
	'nl-CW' = 'nl-CW',
	'nl-NL' = 'nl-NL',
	'nl-SR' = 'nl-SR',
	'nl-SX' = 'nl-SX',
	'nn' = 'nn',
	'no' = 'no',
	'no-NO' = 'no-NO',
	'nr' = 'nr',
	'nv' = 'nv',
	'ny' = 'ny',
	'oc' = 'oc',
	'oc-ES' = 'oc-ES',
	'om' = 'om',
	'om-KE' = 'om-KE',
	'or' = 'or',
	'os' = 'os',
	'os-RU' = 'os-RU',
	'pa' = 'pa',
	'pa-IN' = 'pa-IN',
	'pa-Arab' = 'pa-Arab',
	'pa-Guru' = 'pa-Guru',
	'pl' = 'pl',
	'pl-PL' = 'pl-PL',
	'ps' = 'ps',
	'ps-PK' = 'ps-PK',
	'pt' = 'pt',
	'pt-AO' = 'pt-AO',
	'pt-BR' = 'pt-BR',
	'pt-CH' = 'pt-CH',
	'pt-CV' = 'pt-CV',
	'pt-GQ' = 'pt-GQ',
	'pt-GW' = 'pt-GW',
	'pt-LU' = 'pt-LU',
	'pt-MO' = 'pt-MO',
	'pt-MZ' = 'pt-MZ',
	'pt-PT' = 'pt-PT',
	'pt-ST' = 'pt-ST',
	'pt-TL' = 'pt-TL',
	'qu' = 'qu',
	'qu-BO' = 'qu-BO',
	'qu-EC' = 'qu-EC',
	'rm' = 'rm',
	'rn' = 'rn',
	'ro' = 'ro',
	'ro-MD' = 'ro-MD',
	'ro-RO' = 'ro-RO',
	'ru' = 'ru',
	'ru-BY' = 'ru-BY',
	'ru-KG' = 'ru-KG',
	'ru-KZ' = 'ru-KZ',
	'ru-MD' = 'ru-MD',
	'ru-RU' = 'ru-RU',
	'ru-UA' = 'ru-UA',
	'rw' = 'rw',
	'sa' = 'sa',
	'sc' = 'sc',
	'sd' = 'sd',
	'sd-Arab' = 'sd-Arab',
	'sd-Deva' = 'sd-Deva',
	'se' = 'se',
	'se-FI' = 'se-FI',
	'se-SE' = 'se-SE',
	'sg' = 'sg',
	'si' = 'si',
	'sk' = 'sk',
	'sk-SK' = 'sk-SK',
	'sl' = 'sl',
	'sl-SI' = 'sl-SI',
	'sn' = 'sn',
	'so' = 'so',
	'so-DJ' = 'so-DJ',
	'so-ET' = 'so-ET',
	'so-KE' = 'so-KE',
	'sq' = 'sq',
	'sq-MK' = 'sq-MK',
	'sq-XK' = 'sq-XK',
	'sr' = 'sr',
	'sr-RS' = 'sr-RS',
	'sr-Cyrl' = 'sr-Cyrl',
	'sr-Cyrl-BA' = 'sr-Cyrl-BA',
	'sr-Cyrl-ME' = 'sr-Cyrl-ME',
	'sr-Cyrl-XK' = 'sr-Cyrl-XK',
	'sr-Latn' = 'sr-Latn',
	'sr-Latn-BA' = 'sr-Latn-BA',
	'sr-Latn-ME' = 'sr-Latn-ME',
	'sr-Latn-XK' = 'sr-Latn-XK',
	'ss' = 'ss',
	'ss-SZ' = 'ss-SZ',
	'st' = 'st',
	'st-LS' = 'st-LS',
	'su' = 'su',
	'su-Latn' = 'su-Latn',
	'sv' = 'sv',
	'sv-AX' = 'sv-AX',
	'sv-FI' = 'sv-FI',
	'sv-SE' = 'sv-SE',
	'sw' = 'sw',
	'sw-CD' = 'sw-CD',
	'sw-KE' = 'sw-KE',
	'sw-TZ' = 'sw-TZ',
	'sw-UG' = 'sw-UG',
	'ta' = 'ta',
	'ta-IN' = 'ta-IN',
	'ta-LK' = 'ta-LK',
	'ta-MY' = 'ta-MY',
	'ta-SG' = 'ta-SG',
	'te' = 'te',
	'te-IN' = 'te-IN',
	'tg' = 'tg',
	'th' = 'th',
	'th-TH' = 'th-TH',
	'ti' = 'ti',
	'ti-ER' = 'ti-ER',
	'tk' = 'tk',
	'tl' = 'tl',
	'tn' = 'tn',
	'tn-BW' = 'tn-BW',
	'to' = 'to',
	'tr' = 'tr',
	'tr-CY' = 'tr-CY',
	'tr-TR' = 'tr-TR',
	'ts' = 'ts',
	'tt' = 'tt',
	'ug' = 'ug',
	'uk' = 'uk',
	'uk-UA' = 'uk-UA',
	'ur' = 'ur',
	'ur-IN' = 'ur-IN',
	'ur-PK' = 'ur-PK',
	'uz' = 'uz',
	'uz-Arab' = 'uz-Arab',
	'uz-Cyrl' = 'uz-Cyrl',
	'uz-Latn' = 'uz-Latn',
	've' = 've',
	'vi' = 'vi',
	'vi-VN' = 'vi-VN',
	'vo' = 'vo',
	'wa' = 'wa',
	'wo' = 'wo',
	'xh' = 'xh',
	'yi' = 'yi',
	'yo' = 'yo',
	'yo-BJ' = 'yo-BJ',
	'za' = 'za',
	'zh' = 'zh',
	'zh-CH' = 'zh-CH',
	'zh-TW' = 'zh-TW',
	'zh-Hans' = 'zh-Hans',
	'zh-Hans-HK' = 'zh-Hans-HK',
	'zh-Hans-MO' = 'zh-Hans-MO',
	'zh-Hans-MY' = 'zh-Hans-MY',
	'zh-Hans-SG' = 'zh-Hans-SG',
	'zh-Hant' = 'zh-Hant',
	'zh-Hant-HK' = 'zh-Hant-HK',
	'zh-Hant-MO' = 'zh-Hant-MO',
	'zh-Hant-MY' = 'zh-Hant-MY',
	'zh-Latn' = 'zh-Latn',
	'zu' = 'zu',
	'zu-ZA' = 'zu-ZA'
}

export const ROOT_LANGUAGES: Language[] = [
	{
		code: LanguageCode['aa'],
		name: 'Afar',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['aa-DJ'], name: 'Afar (Djibouti)', direction: 'ltr', children: [] },
			{ code: LanguageCode['aa-ER'], name: 'Afar (Eritrea)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['ab'], name: 'Abkhazian', direction: 'ltr', children: [] },
	{ code: LanguageCode['af'], name: 'Afrikaans', direction: 'ltr', children: [] },
	{ code: LanguageCode['ak'], name: 'Akan', direction: 'ltr', children: [] },
	{ code: LanguageCode['am'], name: 'Amharic', direction: 'ltr', children: [] },
	{ code: LanguageCode['an'], name: 'Aragonese', direction: 'ltr', children: [] },
	{
		code: LanguageCode['af'],
		name: 'Afrikaans',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['af-NA'], name: 'Afrikaans (Namibia)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['ak'], name: 'Akan', direction: 'ltr', children: [] },
	{ code: LanguageCode['am'], name: 'Amharic', direction: 'ltr', children: [] },
	{ code: LanguageCode['an'], name: 'Aragonese', direction: 'ltr', children: [] },
	{
		code: LanguageCode['ar'],
		name: 'Arabic',
		direction: 'rtl',
		children: [
			{
				code: LanguageCode['ar-AE'],
				name: 'Arabic (United Arab Emirates)',
				direction: 'rtl',
				children: []
			},
			{ code: LanguageCode['ar-BH'], name: 'Arabic (Bahrain)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-DJ'], name: 'Arabic (Djibouti)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-DZ'], name: 'Arabic (Algeria)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-EG'], name: 'Arabic (Egypt)', direction: 'rtl', children: [] },
			{
				code: LanguageCode['ar-EH'],
				name: 'Arabic (Western Sahara)',
				direction: 'rtl',
				children: []
			},
			{ code: LanguageCode['ar-ER'], name: 'Arabic (Eritrea)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-IL'], name: 'Arabic (Israel)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-IQ'], name: 'Arabic (Iraq)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-JO'], name: 'Arabic (Jordan)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-KM'], name: 'Arabic (Comoros)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-KW'], name: 'Arabic (Kuwait)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-LB'], name: 'Arabic (Lebanon)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-LY'], name: 'Arabic (Libya)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-MA'], name: 'Arabic (Morocco)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-MR'], name: 'Arabic (Mauritania)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-OM'], name: 'Arabic (Oman)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-PS'], name: 'Arabic (Palestine)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-QA'], name: 'Arabic (Qatar)', direction: 'rtl', children: [] },
			{
				code: LanguageCode['ar-SA'],
				name: 'Arabic (Saudi Arabia)',
				direction: 'rtl',
				children: []
			},
			{ code: LanguageCode['ar-SD'], name: 'Arabic (Sudan)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-SO'], name: 'Arabic (Somalia)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-SS'], name: 'Arabic (South Sudan)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-SY'], name: 'Arabic (Syria)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-TD'], name: 'Arabic (Chad)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-TN'], name: 'Arabic (Tunisia)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ar-YE'], name: 'Arabic (Yemen)', direction: 'rtl', children: [] }
		]
	},
	{ code: LanguageCode['as'], name: 'Assamese', direction: 'ltr', children: [] },
	{
		code: LanguageCode['az'],
		name: 'Azerbaijani',
		direction: 'ltr',
		children: [
			{
				code: LanguageCode['az-Arab'],
				name: 'Azerbaijani (Arabic)',
				direction: 'rtl',
				children: []
			},
			{
				code: LanguageCode['az-Arab-IQ'],
				name: 'Azerbaijani (Arabic, Iraq)',
				direction: 'rtl',
				children: []
			},
			{
				code: LanguageCode['az-Arab-TR'],
				name: 'Azerbaijani (Arabic, Turkey)',
				direction: 'rtl',
				children: []
			},
			{
				code: LanguageCode['az-Cyrl'],
				name: 'Azerbaijani (Cyrillic)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['az-Latn'], name: 'Azerbaijani (Latin)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['ba'], name: 'Bashkir', direction: 'ltr', children: [] },
	{
		code: LanguageCode['be'],
		name: 'Belarusian',
		direction: 'ltr',
		children: [
			{
				code: LanguageCode['be-tarask'],
				name: 'Belarusian (Taraškievica)',
				direction: 'ltr',
				children: []
			}
		]
	},
	{
		code: LanguageCode['bg'],
		name: 'Bulgarian',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['bg-BG'], name: 'Bulgarian (Bulgaria)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['bm'],
		name: 'Bambara',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['bm-Nkoo'], name: "Bambara (N'Ko)", direction: 'rtl', children: [] }
		]
	},
	{
		code: LanguageCode['bn'],
		name: 'Bengali',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['bn-IN'], name: 'Bengali (India)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['bo'],
		name: 'Tibetan',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['bo-IN'], name: 'Tibetan (India)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['br'], name: 'Breton', direction: 'ltr', children: [] },
	{
		code: LanguageCode['bs'],
		name: 'Bosnian',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['bs-Cyrl'], name: 'Bosnian (Cyrillic)', direction: 'ltr', children: [] },
			{ code: LanguageCode['bs-Latn'], name: 'Bosnian (Latin)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['ca'],
		name: 'Catalan',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['ca-AD'], name: 'Catalan (Andorra)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ca-ES'], name: 'Catalan (Spain)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ca-FR'], name: 'Catalan (France)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ca-IT'], name: 'Catalan (Italy)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['ce'], name: 'Chechen', direction: 'ltr', children: [] },
	{ code: LanguageCode['co'], name: 'Corsican', direction: 'ltr', children: [] },
	{
		code: LanguageCode['cs'],
		name: 'Czech',
		direction: 'ltr',
		children: [
			{
				code: LanguageCode['cs-CZ'],
				name: 'Czech (Czech Republic)',
				direction: 'ltr',
				children: []
			}
		]
	},
	{ code: LanguageCode['cv'], name: 'Chuvash', direction: 'ltr', children: [] },
	{ code: LanguageCode['cy'], name: 'Welsh', direction: 'ltr', children: [] },
	{
		code: LanguageCode['da'],
		name: 'Danish',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['da-DK'], name: 'Danish (Denmark)', direction: 'ltr', children: [] },
			{ code: LanguageCode['da-GL'], name: 'Danish (Greenland)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['de'],
		name: 'German',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['de-AT'], name: 'German (Austria)', direction: 'ltr', children: [] },
			{ code: LanguageCode['de-BE'], name: 'German (Belgium)', direction: 'ltr', children: [] },
			{ code: LanguageCode['de-CH'], name: 'German (Switzerland)', direction: 'ltr', children: [] },
			{ code: LanguageCode['de-DE'], name: 'German (Germany)', direction: 'ltr', children: [] },
			{ code: LanguageCode['de-IT'], name: 'German (Italy)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['de-LI'],
				name: 'German (Liechtenstein)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['de-LU'], name: 'German (Luxembourg)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['dv'], name: 'Divehi', direction: 'rtl', children: [] },
	{ code: LanguageCode['dz'], name: 'Dzongkha', direction: 'ltr', children: [] },
	{
		code: LanguageCode['ee'],
		name: 'Ewe',
		direction: 'ltr',
		children: [{ code: LanguageCode['ee-TG'], name: 'Ewe (Togo)', direction: 'ltr', children: [] }]
	},
	{
		code: LanguageCode['el'],
		name: 'Greek',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['el-CY'], name: 'Greek (Cyprus)', direction: 'ltr', children: [] },
			{ code: LanguageCode['el-GR'], name: 'Greek (Greece)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['el-polyton'],
				name: 'Greek (Polytonic)',
				direction: 'ltr',
				children: []
			}
		]
	},
	{
		code: LanguageCode['en'],
		name: 'English',
		direction: 'ltr',
		children: [
			{
				code: LanguageCode['en-AE'],
				name: 'English (United Arab Emirates)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['en-AG'],
				name: 'English (Antigua and Barbuda)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-AI'], name: 'English (Anguilla)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-AS'],
				name: 'English (American Samoa)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-AT'], name: 'English (Austria)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-AU'], name: 'English (Australia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-BB'], name: 'English (Barbados)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-BE'], name: 'English (Belgium)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-BI'], name: 'English (Burundi)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-BM'], name: 'English (Bermuda)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-BS'], name: 'English (Bahamas)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-BW'], name: 'English (Botswana)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-BZ'], name: 'English (Belize)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-CA'], name: 'English (Canada)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-CC'],
				name: 'English (Cocos Islands)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['en-CH'],
				name: 'English (Switzerland)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['en-CK'],
				name: 'English (Cook Islands)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-CM'], name: 'English (Cameroon)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-CX'],
				name: 'English (Christmas Island)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-CY'], name: 'English (Cyprus)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-CZ'],
				name: 'English (Czech Republic)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-DE'], name: 'English (Germany)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-DG'],
				name: 'English (Diego Garcia)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-DK'], name: 'English (Denmark)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-DM'], name: 'English (Dominica)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-ER'], name: 'English (Eritrea)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-ES'], name: 'English (Spain)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-FI'], name: 'English (Finland)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-FJ'], name: 'English (Fiji)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-FK'],
				name: 'English (Falkland Islands)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-FM'], name: 'English (Micronesia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-FR'], name: 'English (France)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-GB'],
				name: 'English (United Kingdom)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-GD'], name: 'English (Grenada)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-GG'], name: 'English (Guernsey)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-GH'], name: 'English (Ghana)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-GI'], name: 'English (Gibraltar)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-GM'], name: 'English (Gambia)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-GS'],
				name: 'English (South Georgia and the South Sandwich Islands)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-GU'], name: 'English (Guam)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-GY'], name: 'English (Guyana)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-HK'], name: 'English (Hong Kong)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-HU'], name: 'English (Hungary)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-ID'], name: 'English (Indonesia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-IE'], name: 'English (Ireland)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-IL'], name: 'English (Israel)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-IM'],
				name: 'English (Isle of Man)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-IN'], name: 'English (India)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-IO'],
				name: 'English (British Indian Ocean Territory)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-IT'], name: 'English (Italy)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-JE'], name: 'English (Jersey)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-JM'], name: 'English (Jamaica)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-KE'], name: 'English (Kenya)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-KI'], name: 'English (Kiribati)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-KN'],
				name: 'English (Saint Kitts and Nevis)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['en-KY'],
				name: 'English (Cayman Islands)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['en-LC'],
				name: 'English (Saint Lucia)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-LR'], name: 'English (Liberia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-LS'], name: 'English (Lesotho)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-MG'], name: 'English (Madagascar)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-MH'],
				name: 'English (Marshall Islands)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-MO'], name: 'English (Macau)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-MP'],
				name: 'English (Northern Mariana Islands)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-MS'], name: 'English (Montserrat)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-MT'], name: 'English (Malta)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-MU'], name: 'English (Mauritius)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-MV'], name: 'English (Maldives)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-MW'], name: 'English (Malawi)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-MY'], name: 'English (Malaysia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-NA'], name: 'English (Namibia)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-NF'],
				name: 'English (Norfolk Island)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-NG'], name: 'English (Nigeria)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-NL'],
				name: 'English (Netherlands)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-NO'], name: 'English (Norway)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-NR'], name: 'English (Nauru)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-NU'], name: 'English (Niue)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-NZ'],
				name: 'English (New Zealand)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['en-PG'],
				name: 'English (Papua New Guinea)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['en-PH'],
				name: 'English (Philippines)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-PK'], name: 'English (Pakistan)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-PL'], name: 'English (Poland)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-PN'],
				name: 'English (Pitcairn Islands)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['en-PR'],
				name: 'English (Puerto Rico)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-PT'], name: 'English (Portugal)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-PW'], name: 'English (Palau)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-RO'], name: 'English (Romania)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-RW'], name: 'English (Rwanda)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-SB'],
				name: 'English (Solomon Islands)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-SC'], name: 'English (Seychelles)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-SD'], name: 'English (Sudan)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-SE'], name: 'English (Sweden)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-SG'], name: 'English (Singapore)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-SH'],
				name: 'English (Saint Helena)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-SI'], name: 'English (Slovenia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-SK'], name: 'English (Slovakia)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-SL'],
				name: 'English (Sierra Leone)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['en-SS'],
				name: 'English (South Sudan)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['en-SX'],
				name: 'English (Sint Maarten)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-SZ'], name: 'English (Eswatini)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-TC'],
				name: 'English (Turks and Caicos Islands)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-TK'], name: 'English (Tokelau)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-TO'], name: 'English (Tonga)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-TT'],
				name: 'English (Trinidad and Tobago)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-TV'], name: 'English (Tuvalu)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-TZ'], name: 'English (Tanzania)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-UG'], name: 'English (Uganda)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-UM'],
				name: 'English (United States Minor Outlying Islands)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['en-VC'],
				name: 'English (Saint Vincent and the Grenadines)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['en-VG'],
				name: 'English (British Virgin Islands)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['en-VI'],
				name: 'English (United States Virgin Islands)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-VU'], name: 'English (Vanuatu)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-WS'], name: 'English (Samoa)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['en-ZA'],
				name: 'English (South Africa)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['en-ZM'], name: 'English (Zambia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['en-ZW'], name: 'English (Zimbabwe)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['eo'], name: 'Esperanto', direction: 'ltr', children: [] },
	{
		code: LanguageCode['es'],
		name: 'Spanish',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['es-AR'], name: 'Spanish (Argentina)', direction: 'ltr', children: [] },
			{ code: LanguageCode['es-BO'], name: 'Spanish (Bolivia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['es-BR'], name: 'Spanish (Brazil)', direction: 'ltr', children: [] },
			{ code: LanguageCode['es-BZ'], name: 'Spanish (Belize)', direction: 'ltr', children: [] },
			{ code: LanguageCode['es-CL'], name: 'Spanish (Chile)', direction: 'ltr', children: [] },
			{ code: LanguageCode['es-CO'], name: 'Spanish (Colombia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['es-CR'], name: 'Spanish (Costa Rica)', direction: 'ltr', children: [] },
			{ code: LanguageCode['es-CU'], name: 'Spanish (Cuba)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['es-DO'],
				name: 'Spanish (Dominican Republic)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['es-EA'],
				name: 'Spanish (Ceuta and Melilla)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['es-EC'], name: 'Spanish (Ecuador)', direction: 'ltr', children: [] },
			{ code: LanguageCode['es-ES'], name: 'Spanish (Spain)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['es-GQ'],
				name: 'Spanish (Equatorial Guinea)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['es-GT'], name: 'Spanish (Guatemala)', direction: 'ltr', children: [] },
			{ code: LanguageCode['es-HN'], name: 'Spanish (Honduras)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['es-IC'],
				name: 'Spanish (Canary Islands)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['es-MX'], name: 'Spanish (Mexico)', direction: 'ltr', children: [] },
			{ code: LanguageCode['es-NI'], name: 'Spanish (Nicaragua)', direction: 'ltr', children: [] },
			{ code: LanguageCode['es-PA'], name: 'Spanish (Panama)', direction: 'ltr', children: [] },
			{ code: LanguageCode['es-PE'], name: 'Spanish (Peru)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['es-PH'],
				name: 'Spanish (Philippines)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['es-PR'],
				name: 'Spanish (Puerto Rico)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['es-PY'], name: 'Spanish (Paraguay)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['es-SV'],
				name: 'Spanish (El Salvador)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['es-US'],
				name: 'Spanish (United States)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['es-UY'], name: 'Spanish (Uruguay)', direction: 'ltr', children: [] },
			{ code: LanguageCode['es-VE'], name: 'Spanish (Venezuela)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['et'],
		name: 'Estonian',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['et-EE'], name: 'Estonian (Estonia)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['eu'], name: 'Basque', direction: 'ltr', children: [] },
	{
		code: LanguageCode['fa'],
		name: 'Persian',
		direction: 'rtl',
		children: [
			{
				code: LanguageCode['fa-AF'],
				name: 'Persian (Afghanistan)',
				direction: 'rtl',
				children: []
			},
			{ code: LanguageCode['fa-IR'], name: 'Persian (Iran)', direction: 'rtl', children: [] }
		]
	},
	{
		code: LanguageCode['ff'],
		name: 'Fulah',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['ff-Adlm'], name: 'Fulah (Adlam)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['ff-Adlm-BF'],
				name: 'Fulah (Adlam, Burkina Faso)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Adlm-CM'],
				name: 'Fulah (Adlam, Cameroon)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Adlm-GH'],
				name: 'Fulah (Adlam, Ghana)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Adlm-GM'],
				name: 'Fulah (Adlam, Gambia)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Adlm-GW'],
				name: 'Fulah (Adlam, Guinea-Bissau)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Adlm-LR'],
				name: 'Fulah (Adlam, Liberia)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Adlm-MR'],
				name: 'Fulah (Adlam, Mauritania)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Adlm-NE'],
				name: 'Fulah (Adlam, Niger)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Adlm-NG'],
				name: 'Fulah (Adlam, Nigeria)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Adlm-SL'],
				name: 'Fulah (Adlam, Sierra Leone)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Adlm-SN'],
				name: 'Fulah (Adlam, Senegal)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['ff-Latn'], name: 'Fulah (Latin)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['ff-Latn-BF'],
				name: 'Fulah (Latin, Burkina Faso)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Latn-CM'],
				name: 'Fulah (Latin, Cameroon)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Latn-GH'],
				name: 'Fulah (Latin, Ghana)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Latn-GM'],
				name: 'Fulah (Latin, Gambia)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Latn-GN'],
				name: 'Fulah (Latin, Guinea)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Latn-GW'],
				name: 'Fulah (Latin, Guinea-Bissau)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Latn-LR'],
				name: 'Fulah (Latin, Liberia)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Latn-MR'],
				name: 'Fulah (Latin, Mauritania)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Latn-NE'],
				name: 'Fulah (Latin, Niger)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Latn-NG'],
				name: 'Fulah (Latin, Nigeria)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['ff-Latn-SL'],
				name: 'Fulah (Latin, Sierra Leone)',
				direction: 'ltr',
				children: []
			}
		]
	},
	{
		code: LanguageCode['fi'],
		name: 'Finnish',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['fi-FI'], name: 'Finnish (Finland)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['fil-PH'], name: 'Filipino (Philippines)', direction: 'ltr', children: [] },
	{
		code: LanguageCode['fo'],
		name: 'Faroese',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['fo-DK'], name: 'Faroese (Denmark)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['fr'],
		name: 'French',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['fr-BE'], name: 'French (Belgium)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['fr-BF'],
				name: 'French (Burkina Faso)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['fr-BI'], name: 'French (Burundi)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-BJ'], name: 'French (Benin)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['fr-BL'],
				name: 'French (Saint Barthélemy)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['fr-CA'], name: 'French (Canada)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['fr-CD'],
				name: 'French (Congo - Kinshasa)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['fr-CF'],
				name: 'French (Central African Republic)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['fr-CG'],
				name: 'French (Congo - Brazzaville)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['fr-CH'], name: 'French (Switzerland)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-CI'], name: 'French (Ivory Coast)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-CM'], name: 'French (Cameroon)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-DJ'], name: 'French (Djibouti)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-DZ'], name: 'French (Algeria)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-FR'], name: 'French (France)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-GA'], name: 'French (Gabon)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['fr-GF'],
				name: 'French (French Guiana)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['fr-GN'], name: 'French (Guinea)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-GP'], name: 'French (Guadeloupe)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['fr-GQ'],
				name: 'French (Equatorial Guinea)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['fr-HT'], name: 'French (Haiti)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-KM'], name: 'French (Comoros)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-LU'], name: 'French (Luxembourg)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-MA'], name: 'French (Morocco)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-MC'], name: 'French (Monaco)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['fr-MF'],
				name: 'French (Saint Martin)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['fr-MG'], name: 'French (Madagascar)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-ML'], name: 'French (Mali)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-MQ'], name: 'French (Martinique)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-MR'], name: 'French (Mauritania)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-MU'], name: 'French (Mauritius)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['fr-NC'],
				name: 'French (New Caledonia)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['fr-NE'], name: 'French (Niger)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['fr-PF'],
				name: 'French (French Polynesia)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['fr-PM'],
				name: 'French (Saint Pierre and Miquelon)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['fr-RE'], name: 'French (Réunion)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-RW'], name: 'French (Rwanda)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-SC'], name: 'French (Seychelles)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-SN'], name: 'French (Senegal)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-SY'], name: 'French (Syria)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-TD'], name: 'French (Chad)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-TG'], name: 'French (Togo)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-TN'], name: 'French (Tunisia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['fr-VU'], name: 'French (Vanuatu)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['fr-WF'],
				name: 'French (Wallis and Futuna)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['fr-YT'], name: 'French (Mayotte)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['fy'], name: 'Western Frisian', direction: 'ltr', children: [] },
	{
		code: LanguageCode['ga'],
		name: 'Irish',
		direction: 'ltr',
		children: [
			{
				code: LanguageCode['ga-GB'],
				name: 'Irish (United Kingdom)',
				direction: 'ltr',
				children: []
			}
		]
	},
	{ code: LanguageCode['gd'], name: 'Scottish Gaelic', direction: 'ltr', children: [] },
	{ code: LanguageCode['gl'], name: 'Galician', direction: 'ltr', children: [] },
	{ code: LanguageCode['gn'], name: 'Guarani', direction: 'ltr', children: [] },
	{
		code: LanguageCode['gu'],
		name: 'Gujarati',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['gu-IN'], name: 'Gujarati (India)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['gv'], name: 'Manx', direction: 'ltr', children: [] },
	{
		code: LanguageCode['ha'],
		name: 'Hausa',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['ha-Arab'], name: 'Hausa (Arabic)', direction: 'rtl', children: [] },
			{
				code: LanguageCode['ha-Arab-SD'],
				name: 'Hausa (Arabic, Sudan)',
				direction: 'rtl',
				children: []
			},
			{ code: LanguageCode['ha-GH'], name: 'Hausa (Ghana)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ha-NE'], name: 'Hausa (Niger)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['he'],
		name: 'Hebrew',
		direction: 'rtl',
		children: [
			{ code: LanguageCode['he-IL'], name: 'Hebrew (Israel)', direction: 'rtl', children: [] }
		]
	},
	{
		code: LanguageCode['hi'],
		name: 'Hindi',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['hi-IN'], name: 'Hindi (India)', direction: 'ltr', children: [] },
			{ code: LanguageCode['hi-Latn'], name: 'Hindi (Latin)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['hr'],
		name: 'Croatian',
		direction: 'ltr',
		children: [
			{
				code: LanguageCode['hr-BA'],
				name: 'Croatian (Bosnia and Herzegovina)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['hr-HR'], name: 'Croatian (Croatia)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['ht'], name: 'Haitian', direction: 'ltr', children: [] },
	{
		code: LanguageCode['hu'],
		name: 'Hungarian',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['hu-HU'], name: 'Hungarian (Hungary)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['hy'], name: 'Armenian', direction: 'ltr', children: [] },
	{ code: LanguageCode['ia'], name: 'Interlingua', direction: 'ltr', children: [] },
	{
		code: LanguageCode['id'],
		name: 'Indonesian',
		direction: 'ltr',
		children: [
			{
				code: LanguageCode['id-ID'],
				name: 'Indonesian (Indonesia)',
				direction: 'ltr',
				children: []
			}
		]
	},
	{ code: LanguageCode['ie'], name: 'Interlingue', direction: 'ltr', children: [] },
	{ code: LanguageCode['ig'], name: 'Igbo', direction: 'ltr', children: [] },
	{ code: LanguageCode['ii'], name: 'Sichuan Yi', direction: 'ltr', children: [] },
	{ code: LanguageCode['ik'], name: 'Inupiaq', direction: 'ltr', children: [] },
	{ code: LanguageCode['io'], name: 'Ido', direction: 'ltr', children: [] },
	{ code: LanguageCode['is'], name: 'Icelandic', direction: 'ltr', children: [] },
	{
		code: LanguageCode['it'],
		name: 'Italian',
		direction: 'ltr',
		children: [
			{
				code: LanguageCode['it-CH'],
				name: 'Italian (Switzerland)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['it-IT'], name: 'Italian (Italy)', direction: 'ltr', children: [] },
			{ code: LanguageCode['it-SM'], name: 'Italian (San Marino)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['it-VA'],
				name: 'Italian (Vatican City)',
				direction: 'ltr',
				children: []
			}
		]
	},
	{
		code: LanguageCode['iu'],
		name: 'Inuktitut',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['iu-Latn'], name: 'Inuktitut (Latin)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['ja'],
		name: 'Japanese',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['ja-JP'], name: 'Japanese (Japan)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['jv'], name: 'Javanese', direction: 'ltr', children: [] },
	{ code: LanguageCode['ka'], name: 'Georgian', direction: 'ltr', children: [] },
	{ code: LanguageCode['ki'], name: 'Kikuyu', direction: 'ltr', children: [] },
	{
		code: LanguageCode['kk'],
		name: 'Kazakh',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['kk-Arab'], name: 'Kazakh (Arabic)', direction: 'ltr', children: [] },
			{ code: LanguageCode['kk-Cyrl'], name: 'Kazakh (Cyrillic)', direction: 'ltr', children: [] },
			{ code: LanguageCode['kk-KZ'], name: 'Kazakh (Kazakhstan)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['kl'], name: 'Kalaallisut', direction: 'ltr', children: [] },
	{ code: LanguageCode['km'], name: 'Central Khmer', direction: 'ltr', children: [] },
	{
		code: LanguageCode['kn'],
		name: 'Kannada',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['kn-IN'], name: 'Kannada (India)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['ko'],
		name: 'Korean',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['ko-CN'], name: 'Korean (China)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ko-KP'], name: 'Korean (North Korea)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ko-KR'], name: 'Korean (South Korea)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['ks'],
		name: 'Kashmiri',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['ks-Arab'], name: 'Kashmiri (Arabic)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['ks-Deva'],
				name: 'Kashmiri (Devanagari)',
				direction: 'ltr',
				children: []
			}
		]
	},
	{ code: LanguageCode['ku'], name: 'Kurdish', direction: 'ltr', children: [] },
	{ code: LanguageCode['kw'], name: 'Cornish', direction: 'ltr', children: [] },
	{ code: LanguageCode['ky'], name: 'Kyrgyz', direction: 'ltr', children: [] },
	{ code: LanguageCode['la'], name: 'Latin', direction: 'ltr', children: [] },
	{ code: LanguageCode['lb'], name: 'Luxembourgish', direction: 'ltr', children: [] },
	{ code: LanguageCode['lg'], name: 'Ganda', direction: 'ltr', children: [] },
	{
		code: LanguageCode['ln'],
		name: 'Lingala',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['ln-AO'], name: 'Lingala (Angola)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['ln-CF'],
				name: 'Lingala (Central African Republic)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['ln-CG'], name: 'Lingala (Congo)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['lo'], name: 'Lao', direction: 'ltr', children: [] },
	{
		code: LanguageCode['lt'],
		name: 'Lithuanian',
		direction: 'ltr',
		children: [
			{
				code: LanguageCode['lt-LT'],
				name: 'Lithuanian (Lithuania)',
				direction: 'ltr',
				children: []
			}
		]
	},
	{ code: LanguageCode['lu'], name: 'Luba-Katanga', direction: 'ltr', children: [] },
	{
		code: LanguageCode['lv'],
		name: 'Latvian',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['lv-LV'], name: 'Latvian (Latvia)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['mg'], name: 'Malagasy', direction: 'ltr', children: [] },
	{ code: LanguageCode['mi'], name: 'Maori', direction: 'ltr', children: [] },
	{ code: LanguageCode['mk'], name: 'Macedonian', direction: 'ltr', children: [] },
	{
		code: LanguageCode['ml'],
		name: 'Malayalam',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['ml-IN'], name: 'Malayalam (India)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['mn'],
		name: 'Mongolian',
		direction: 'ltr',
		children: [
			{
				code: LanguageCode['mn-Mong'],
				name: 'Mongolian (Mongolian script)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['mn-Mong-MN'],
				name: 'Mongolian (Mongolian script, Mongolia)',
				direction: 'ltr',
				children: []
			}
		]
	},
	{
		code: LanguageCode['mr'],
		name: 'Marathi',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['mr-IN'], name: 'Marathi (India)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['ms'],
		name: 'Malay',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['ms-Arab'], name: 'Malay (Arabic)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['ms-Arab-BN'],
				name: 'Malay (Arabic, Brunei)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['ms-BN'], name: 'Malay (Brunei)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ms-ID'], name: 'Malay (Indonesia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ms-SG'], name: 'Malay (Singapore)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['mt'], name: 'Maltese', direction: 'ltr', children: [] },
	{ code: LanguageCode['my'], name: 'Burmese', direction: 'ltr', children: [] },
	{
		code: LanguageCode['nb'],
		name: 'Norwegian Bokmål',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['nb-SJ'], name: 'Norwegian Bokmål', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['nd'], name: 'North Ndebele', direction: 'ltr', children: [] },
	{ code: LanguageCode['ne'], name: 'Nepali', direction: 'ltr', children: [] },
	{ code: LanguageCode['ne-IN'], name: 'Nepali (India)', direction: 'ltr', children: [] },
	{
		code: LanguageCode['nl'],
		name: 'Dutch',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['nl-AW'], name: 'Dutch (Aruba)', direction: 'ltr', children: [] },
			{ code: LanguageCode['nl-BE'], name: 'Dutch (Belgium)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['nl-BQ'],
				name: 'Dutch (Caribbean Netherlands)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['nl-CW'], name: 'Dutch (Curaçao)', direction: 'ltr', children: [] },
			{ code: LanguageCode['nl-NL'], name: 'Dutch (Netherlands)', direction: 'ltr', children: [] },
			{ code: LanguageCode['nl-SR'], name: 'Dutch (Suriname)', direction: 'ltr', children: [] },
			{ code: LanguageCode['nl-SX'], name: 'Dutch (Sint Maarten)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['nn'], name: 'Norwegian Nynorsk', direction: 'ltr', children: [] },
	{
		code: LanguageCode['no'],
		name: 'Norwegian',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['no-NO'], name: 'Norwegian (Norway)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['nr'], name: 'South Ndebele', direction: 'ltr', children: [] },
	{ code: LanguageCode['nv'], name: 'Navajo', direction: 'ltr', children: [] },
	{ code: LanguageCode['ny'], name: 'Chichewa', direction: 'ltr', children: [] },
	{
		code: LanguageCode['oc'],
		name: 'Occitan',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['oc-ES'], name: 'Occitan (Spain)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['om'],
		name: 'Oromo',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['om-KE'], name: 'Oromo (Kenya)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['or'], name: 'Oriya', direction: 'ltr', children: [] },
	{
		code: LanguageCode['os'],
		name: 'Ossetian',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['os-RU'], name: 'Ossetian (Russia)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['pa'],
		name: 'Punjabi',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['pa-IN'], name: 'Punjabi (India)', direction: 'ltr', children: [] },
			{ code: LanguageCode['pa-Arab'], name: 'Punjabi (Arabic)', direction: 'rtl', children: [] },
			{ code: LanguageCode['pa-Guru'], name: 'Punjabi (Gurmukhi)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['pl'],
		name: 'Polish',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['pl-PL'], name: 'Polish (Poland)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['ps'],
		name: 'Pashto',
		direction: 'rtl',
		children: [
			{ code: LanguageCode['ps-PK'], name: 'Pashto (Pakistan)', direction: 'rtl', children: [] }
		]
	},
	{
		code: LanguageCode['pt'],
		name: 'Portuguese',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['pt-AO'], name: 'Portuguese (Angola)', direction: 'ltr', children: [] },
			{ code: LanguageCode['pt-BR'], name: 'Portuguese (Brazil)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['pt-CH'],
				name: 'Portuguese (Switzerland)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['pt-CV'],
				name: 'Portuguese (Cape Verde)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['pt-GQ'],
				name: 'Portuguese (Equatorial Guinea)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['pt-GW'],
				name: 'Portuguese (Guinea-Bissau)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['pt-LU'],
				name: 'Portuguese (Luxembourg)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['pt-MO'], name: 'Portuguese (Macau)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['pt-MZ'],
				name: 'Portuguese (Mozambique)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['pt-PT'],
				name: 'Portuguese (Portugal)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['pt-ST'],
				name: 'Portuguese (São Tomé and Príncipe)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['pt-TL'],
				name: 'Portuguese (Timor-Leste)',
				direction: 'ltr',
				children: []
			}
		]
	},
	{
		code: LanguageCode['qu'],
		name: 'Quechua',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['qu-BO'], name: 'Quechua (Bolivia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['qu-EC'], name: 'Quechua (Ecuador)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['rm'], name: 'Romansh', direction: 'ltr', children: [] },
	{ code: LanguageCode['rn'], name: 'Rundi', direction: 'ltr', children: [] },
	{
		code: LanguageCode['ro'],
		name: 'Romanian',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['ro-MD'], name: 'Romanian (Moldova)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ro-RO'], name: 'Romanian (Romania)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['ru'],
		name: 'Russian',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['ru-BY'], name: 'Russian (Belarus)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ru-KG'], name: 'Russian (Kyrgyzstan)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ru-KZ'], name: 'Russian (Kazakhstan)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ru-MD'], name: 'Russian (Moldova)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ru-RU'], name: 'Russian (Russia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ru-UA'], name: 'Russian (Ukraine)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['rw'], name: 'Kinyarwanda', direction: 'ltr', children: [] },
	{ code: LanguageCode['sa'], name: 'Sanskrit', direction: 'ltr', children: [] },
	{ code: LanguageCode['sc'], name: 'Sardinian', direction: 'ltr', children: [] },
	{
		code: LanguageCode['sd'],
		name: 'Sindhi',
		direction: 'rtl',
		children: [
			{ code: LanguageCode['sd-Arab'], name: 'Sindhi (Arabic)', direction: 'rtl', children: [] },
			{ code: LanguageCode['sd-Deva'], name: 'Sindhi (Devanagari)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['se'],
		name: 'Northern Sami',
		direction: 'ltr',
		children: [
			{
				code: LanguageCode['se-FI'],
				name: 'Northern Sami (Finland)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['se-SE'],
				name: 'Northern Sami (Sweden)',
				direction: 'ltr',
				children: []
			}
		]
	},
	{ code: LanguageCode['sg'], name: 'Sango', direction: 'ltr', children: [] },
	{ code: LanguageCode['si'], name: 'Sinhala', direction: 'ltr', children: [] },
	{
		code: LanguageCode['sk'],
		name: 'Slovak',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['sk-SK'], name: 'Slovak (Slovakia)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['sl'],
		name: 'Slovenian',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['sl-SI'], name: 'Slovenian (Slovenia)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['sn'], name: 'Shona', direction: 'ltr', children: [] },
	{
		code: LanguageCode['so'],
		name: 'Somali',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['so-DJ'], name: 'Somali (Djibouti)', direction: 'ltr', children: [] },
			{ code: LanguageCode['so-ET'], name: 'Somali (Ethiopia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['so-KE'], name: 'Somali (Kenya)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['sq'],
		name: 'Albanian',
		direction: 'ltr',
		children: [
			{
				code: LanguageCode['sq-MK'],
				name: 'Albanian (North Macedonia)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['sq-XK'], name: 'Albanian (Kosovo)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['sr'],
		name: 'Serbian',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['sr-RS'], name: 'Serbian (Serbia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['sr-Cyrl'], name: 'Serbian (Cyrillic)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['sr-Cyrl-BA'],
				name: 'Serbian (Cyrillic, Bosnia and Herzegovina)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['sr-Cyrl-ME'],
				name: 'Serbian (Cyrillic, Montenegro)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['sr-Cyrl-XK'],
				name: 'Serbian (Cyrillic, Kosovo)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['sr-Latn'], name: 'Serbian (Latin)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['sr-Latn-BA'],
				name: 'Serbian (Latin, Bosnia and Herzegovina)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['sr-Latn-ME'],
				name: 'Serbian (Latin, Montenegro)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['sr-Latn-XK'],
				name: 'Serbian (Latin, Kosovo)',
				direction: 'ltr',
				children: []
			}
		]
	},
	{
		code: LanguageCode['ss'],
		name: 'Swati',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['ss-SZ'], name: 'Swati (Eswatini)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['st'],
		name: 'Southern Sotho',
		direction: 'ltr',
		children: [
			{
				code: LanguageCode['st-LS'],
				name: 'Southern Sotho (Lesotho)',
				direction: 'ltr',
				children: []
			}
		]
	},
	{
		code: LanguageCode['su'],
		name: 'Sundanese',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['su-Latn'], name: 'Sundanese (Latin)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['sv'],
		name: 'Swedish',
		direction: 'ltr',
		children: [
			{
				code: LanguageCode['sv-AX'],
				name: 'Swedish (Åland Islands)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['sv-FI'], name: 'Swedish (Finland)', direction: 'ltr', children: [] },
			{ code: LanguageCode['sv-SE'], name: 'Swedish (Sweden)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['sw'],
		name: 'Swahili',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['sw-CD'], name: 'Swahili (Congo)', direction: 'ltr', children: [] },
			{ code: LanguageCode['sw-KE'], name: 'Swahili (Kenya)', direction: 'ltr', children: [] },
			{ code: LanguageCode['sw-TZ'], name: 'Swahili (Tanzania)', direction: 'ltr', children: [] },
			{ code: LanguageCode['sw-UG'], name: 'Swahili (Uganda)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['ta'],
		name: 'Tamil',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['ta-IN'], name: 'Tamil (India)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ta-LK'], name: 'Tamil (Sri Lanka)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ta-MY'], name: 'Tamil (Malaysia)', direction: 'ltr', children: [] },
			{ code: LanguageCode['ta-SG'], name: 'Tamil (Singapore)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['te'],
		name: 'Telugu',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['te-IN'], name: 'Telugu (India)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['tg'], name: 'Tajik', direction: 'ltr', children: [] },
	{
		code: LanguageCode['th'],
		name: 'Thai',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['th-TH'], name: 'Thai (Thailand)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['ti'],
		name: 'Tigrinya',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['ti-ER'], name: 'Tigrinya (Eritrea)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['tk'], name: 'Turkmen', direction: 'ltr', children: [] },
	{ code: LanguageCode['tl'], name: 'Tagalog', direction: 'ltr', children: [] },
	{
		code: LanguageCode['tn'],
		name: 'Tswana',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['tn-BW'], name: 'Tswana (Botswana)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['to'], name: 'Tonga', direction: 'ltr', children: [] },
	{
		code: LanguageCode['tr'],
		name: 'Turkish',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['tr-CY'], name: 'Turkish (Cyprus)', direction: 'ltr', children: [] },
			{ code: LanguageCode['tr-TR'], name: 'Turkish (Turkey)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['ts'], name: 'Tsonga', direction: 'ltr', children: [] },
	{ code: LanguageCode['tt'], name: 'Tatar', direction: 'ltr', children: [] },
	{ code: LanguageCode['ug'], name: 'Uyghur', direction: 'ltr', children: [] },
	{
		code: LanguageCode['uk'],
		name: 'Ukrainian',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['uk-UA'], name: 'Ukrainian (Ukraine)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['ur'],
		name: 'Urdu',
		direction: 'rtl',
		children: [
			{ code: LanguageCode['ur-IN'], name: 'Urdu (India)', direction: 'rtl', children: [] },
			{ code: LanguageCode['ur-PK'], name: 'Urdu (Pakistan)', direction: 'rtl', children: [] }
		]
	},
	{
		code: LanguageCode['uz'],
		name: 'Uzbek',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['uz-Arab'], name: 'Uzbek (Arabic)', direction: 'rtl', children: [] },
			{ code: LanguageCode['uz-Cyrl'], name: 'Uzbek (Cyrillic)', direction: 'ltr', children: [] },
			{ code: LanguageCode['uz-Latn'], name: 'Uzbek (Latin)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['ve'], name: 'Venda', direction: 'ltr', children: [] },
	{
		code: LanguageCode['vi'],
		name: 'Vietnamese',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['vi-VN'], name: 'Vietnamese (Vietnam)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['vo'], name: 'Volapük', direction: 'ltr', children: [] },
	{ code: LanguageCode['wa'], name: 'Walloon', direction: 'ltr', children: [] },
	{ code: LanguageCode['wo'], name: 'Wolof', direction: 'ltr', children: [] },
	{ code: LanguageCode['xh'], name: 'Xhosa', direction: 'ltr', children: [] },
	{ code: LanguageCode['yi'], name: 'Yiddish', direction: 'ltr', children: [] },
	{
		code: LanguageCode['yo'],
		name: 'Yoruba',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['yo-BJ'], name: 'Yoruba (Benin)', direction: 'ltr', children: [] }
		]
	},
	{ code: LanguageCode['za'], name: 'Zhuang', direction: 'ltr', children: [] },
	{
		code: LanguageCode['zh'],
		name: 'Chinese',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['zh-CH'], name: 'Chinese (China)', direction: 'ltr', children: [] },
			{ code: LanguageCode['zh-TW'], name: 'Chinese (Taiwan)', direction: 'ltr', children: [] },
			{
				code: LanguageCode['zh-Hans'],
				name: 'Chinese (Simplified)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['zh-Hans-HK'],
				name: 'Chinese (Simplified, Hong Kong)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['zh-Hans-MO'],
				name: 'Chinese (Simplified, Macau)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['zh-Hans-MY'],
				name: 'Chinese (Simplified, Malaysia)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['zh-Hans-SG'],
				name: 'Chinese (Simplified, Singapore)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['zh-Hant'],
				name: 'Chinese (Traditional)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['zh-Hant-HK'],
				name: 'Chinese (Traditional, Hong Kong)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['zh-Hant-MO'],
				name: 'Chinese (Traditional, Macau)',
				direction: 'ltr',
				children: []
			},
			{
				code: LanguageCode['zh-Hant-MY'],
				name: 'Chinese (Traditional, Malaysia)',
				direction: 'ltr',
				children: []
			},
			{ code: LanguageCode['zh-Latn'], name: 'Chinese (Latin)', direction: 'ltr', children: [] }
		]
	},
	{
		code: LanguageCode['zu'],
		name: 'Zulu',
		direction: 'ltr',
		children: [
			{ code: LanguageCode['zu-ZA'], name: 'Zulu (South Africa)', direction: 'ltr', children: [] }
		]
	}
];

export const ROOT_LANGUAGES_SORTED = ROOT_LANGUAGES.sort((a, b) => a.name.localeCompare(b.name));

// @ts-ignore
export const ROOT_LANGUAGES_MAPPED: Record<LanguageCode, Language> = Object.fromEntries(
	ROOT_LANGUAGES.map((language) => [language.code, language])
);

// @ts-ignore
export const ALL_LANGUAGES_MAPPED: Record<LanguageCode, Language> = {};
for (const language of ROOT_LANGUAGES) {
	ALL_LANGUAGES_MAPPED[language.code] = language;
	for (const child of language.children) {
		ALL_LANGUAGES_MAPPED[child.code] = child;
	}
}

/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface TranslationLanguage {
  name: string;
  value: string;
}

export const translationOptions: TranslationLanguage[] = [
  { name: "Afrikaans 🇿🇦", value: "af" },
  { name: "Albanian 🇦🇱", value: "sq" },
  { name: "Amharic 🇪🇹", value: "am" },
  { name: "Arabic 🇸🇦", value: "ar" },
  { name: "Armenian 🇦🇲", value: "hy" },
  { name: "Assamese 🇮🇳", value: "as" },
  { name: "Aymara 🇧🇴", value: "ay" },
  { name: "Azerbaijani 🇦🇿", value: "az" },
  { name: "Bambara 🇲🇱", value: "bm" },
  { name: "Basque 🇪🇸", value: "eu" },
  { name: "Belarusian 🇧🇾", value: "be" },
  { name: "Bengali 🇧🇩", value: "bn" },
  { name: "Bhojpuri 🇮🇳", value: "bho" },
  { name: "Bosnian 🇧🇦", value: "bs" },
  { name: "Bulgarian 🇧🇬", value: "bg" },
  { name: "Catalan 🇪🇸", value: "ca" },
  { name: "Cebuano 🇵🇭", value: "ceb" },
  { name: "Chinese (Simplified) 🇨🇳", value: "zh" },
  { name: "Chinese (Traditional) 🇹🇼", value: "zh-TW" },
  { name: "Corsican 🇫🇷", value: "co" },
  { name: "Croatian 🇭🇷", value: "hr" },
  { name: "Czech 🇨🇿", value: "cs" },
  { name: "Danish 🇩🇰", value: "da" },
  { name: "Dhivehi 🇲🇻", value: "dv" },
  { name: "Dogri 🇮🇳", value: "doi" },
  { name: "Dutch 🇳🇱", value: "nl" },
  { name: "English 🇺🇸", value: "en" },
  { name: "Esperanto 🌍", value: "eo" },
  { name: "Estonian 🇪🇪", value: "et" },
  { name: "Ewe 🇬🇭", value: "ee" },
  { name: "Filipino (Tagalog) 🇵🇭", value: "fil" },
  { name: "Finnish 🇫🇮", value: "fi" },
  { name: "French 🇫🇷", value: "fr" },
  { name: "Frisian 🇳🇱", value: "fy" },
  { name: "Galician 🇪🇸", value: "gl" },
  { name: "Georgian 🇬🇪", value: "ka" },
  { name: "German 🇩🇪", value: "de" },
  { name: "Greek 🇬🇷", value: "el" },
  { name: "Guarani 🇵🇾", value: "gn" },
  { name: "Gujarati 🇮🇳", value: "gu" },
  { name: "Haitian Creole 🇭🇹", value: "ht" },
  { name: "Hausa 🇳🇬", value: "ha" },
  { name: "Hawaiian 🇺🇸", value: "haw" },
  { name: "Hebrew 🇮🇱", value: "he" },
  { name: "Hindi 🇮🇳", value: "hi" },
  { name: "Hmong 🇨🇳", value: "hmn" },
  { name: "Hungarian 🇭🇺", value: "hu" },
  { name: "Icelandic 🇮🇸", value: "is" },
  { name: "Igbo 🇳🇬", value: "ig" },
  { name: "Ilocano 🇵🇭", value: "ilo" },
  { name: "Indonesian 🇮🇩", value: "id" },
  { name: "Irish 🇮🇪", value: "ga" },
  { name: "Italian 🇮🇹", value: "it" },
  { name: "Japanese 🇯🇵", value: "ja" },
  { name: "Javanese 🇮🇩", value: "jv" },
  { name: "Kannada 🇮🇳", value: "kn" },
  { name: "Kazakh 🇰🇿", value: "kk" },
  { name: "Khmer 🇰🇭", value: "km" },
  { name: "Kinyarwanda 🇷🇼", value: "rw" },
  { name: "Konkani 🇮🇳", value: "gom" },
  { name: "Korean 🇰🇷", value: "ko" },
  { name: "Krio 🇸🇱", value: "kri" },
  { name: "Kurdish 🇮🇶", value: "ku" },
  { name: "Kurdish (Sorani) 🇮🇶", value: "ckb" },
  { name: "Kyrgyz 🇰🇬", value: "ky" },
  { name: "Lao 🇱🇦", value: "lo" },
  { name: "Latin 🇻🇦", value: "la" },
  { name: "Latvian 🇱🇻", value: "lv" },
  { name: "Lingala 🇨🇩", value: "ln" },
  { name: "Lithuanian 🇱🇹", value: "lt" },
  { name: "Luganda 🇺🇬", value: "lg" },
  { name: "Luxembourgish 🇱🇺", value: "lb" },
  { name: "Macedonian 🇲🇰", value: "mk" },
  { name: "Maithili 🇮🇳", value: "mai" },
  { name: "Malagasy 🇲🇬", value: "mg" },
  { name: "Malay 🇲🇾", value: "ms" },
  { name: "Malayalam 🇮🇳", value: "ml" },
  { name: "Maltese 🇲🇹", value: "mt" },
  { name: "Maori 🇳🇿", value: "mi" },
  { name: "Marathi 🇮🇳", value: "mr" },
  { name: "Meiteilon (Manipuri) 🇮🇳", value: "mni-Mtei" },
  { name: "Mizo 🇮🇳", value: "lus" },
  { name: "Mongolian 🇲🇳", value: "mn" },
  { name: "Myanmar (Burmese) 🇲🇲", value: "my" },
  { name: "Nepali 🇳🇵", value: "ne" },
  { name: "Norwegian 🇳🇴", value: "no" },
  { name: "Nyanja (Chichewa) 🇲🇼", value: "ny" },
  { name: "Odia (Oriya) 🇮🇳", value: "or" },
  { name: "Oromo 🇪🇹", value: "om" },
  { name: "Pashto 🇦🇫", value: "ps" },
  { name: "Persian 🇮🇷", value: "fa" },
  { name: "Polish 🇵🇱", value: "pl" },
  { name: "Portuguese (Portugal, Brazil) 🇧🇷", value: "pt" },
  { name: "Punjabi 🇮🇳", value: "pa" },
  { name: "Quechua 🇵🇪", value: "qu" },
  { name: "Romanian 🇷🇴", value: "ro" },
  { name: "Russian 🇷🇺", value: "ru" },
  { name: "Samoan 🇼🇸", value: "sm" },
  { name: "Sanskrit 🇮🇳", value: "sa" },
  { name: "Scots Gaelic 🏴󠁧󠁢󠁳󠁣󠁴󠁿", value: "gd" },
  { name: "Sepedi 🇿🇦", value: "nso" },
  { name: "Serbian 🇷🇸", value: "sr" },
  { name: "Sesotho 🇱🇸", value: "st" },
  { name: "Shona 🇿🇼", value: "sn" },
  { name: "Sindhi 🇵🇰", value: "sd" },
  { name: "Sinhala (Sinhalese) 🇱🇰", value: "si" },
  { name: "Spanish 🇪🇸", value: "es" },
  { name: "Slovak 🇸🇰", value: "sk" },
  { name: "Slovenian 🇸🇮", value: "sl" },
  { name: "Somali 🇸🇴", value: "so" },
  { name: "Sundanese 🇮🇩", value: "su" },
  { name: "Swahili 🇹🇿", value: "sw" },
  { name: "Swedish 🇸🇪", value: "sv" },
  { name: "Tagalog (Filipino) 🇵🇭", value: "tl" },
  { name: "Tajik 🇹🇯", value: "tg" },
  { name: "Tamil 🇮🇳", value: "ta" },
  { name: "Tatar 🇷🇺", value: "tt" },
  { name: "Telugu 🇮🇳", value: "te" },
  { name: "Thai 🇹🇭", value: "th" },
  { name: "Tigrinya 🇪🇷", value: "ti" },
  { name: "Tsonga 🇿🇦", value: "ts" },
  { name: "Turkish 🇹🇷", value: "tr" },
  { name: "Turkmen 🇹🇲", value: "tk" },
  { name: "Twi (Akan) 🇬🇭", value: "ak" },
  { name: "Ukrainian 🇺🇦", value: "uk" },
  { name: "Urdu 🇵🇰", value: "ur" },
  { name: "Uyghur 🇨🇳", value: "ug" },
  { name: "Uzbek 🇺🇿", value: "uz" },
  { name: "Vietnamese 🇻🇳", value: "vi" },
  { name: "Welsh 🏴󠁧󠁢󠁷󠁬󠁳󠁿", value: "cy" },
  { name: "Xhosa 🇿🇦", value: "xh" },
  { name: "Yiddish 🇮🇱", value: "yi" },
  { name: "Yoruba 🇳🇬", value: "yo" },
  { name: "Zulu 🇿🇦", value: "zu" }
];

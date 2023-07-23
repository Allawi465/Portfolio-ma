import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

let headers = { 'accept-language': 'en,no;q=0.5' };
let languages = new Negotiator({ headers }).languages();
let locales = ['en', 'no'];
let defaultLocale = 'no';

match(languages, locales, defaultLocale);

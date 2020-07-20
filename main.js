(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _europepmc_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _europepmc_parser__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _arxiv_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arxiv_parser__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_interfaces__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("natural");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return correlationWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cutOffs; });
const correlationWeights = {
    querySynonymWordFreq: 0.5,
    queryWordFreq: 1,
};
const cutOffs = {
    minimumWordDistance: 0.85,
    maintainScoreWithinPercent: 10,
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_scraper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_scraper__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _europepmc_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _europepmc_parser__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _arxiv_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _arxiv_parser__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("xml2js");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return constants; });
const constants = {
    MIN_TAB_COUNT: 5,
    SENTENCES_PER_PARAGRAPH: 5,
    MIN_CHAR_COUNT_PER_PARAGRAPH: 20,
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return runEuropePMCScrapers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foodmedicine_scraper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries


/**
 * Construct the google scholars url which will be scraped
 * @param pageSize - the number of articles to get
 */
function createEuropePMCUrl(query, pageSize, synonym = true) {
    return encodeURI(`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${query}&synonym=${synonym}&pageSize=${pageSize}`);
}
function runEuropePMCScrapers(query, querySynonyms, pageSize) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const queryUrl = createEuropePMCUrl(query, pageSize);
        const remedyScraper = new _foodmedicine_scraper__WEBPACK_IMPORTED_MODULE_1__[/* Scraper */ "a"](_parsers__WEBPACK_IMPORTED_MODULE_2__[/* EuropePMCParser */ "b"], {
            url: queryUrl,
            tag: {
                query,
                querySynonyms,
            },
        });
        const articleHeads = yield remedyScraper.run();
        return articleHeads;
    });
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findQueryResults; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foodmedicine_scholars_scraper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _foodmedicine_article_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);



function findQueryResults(query, db, opts) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const articleHeads = yield Object(_foodmedicine_scholars_scraper__WEBPACK_IMPORTED_MODULE_1__[/* runScholarsScraper */ "a"])(query, db, (opts === null || opts === void 0 ? void 0 : opts.numberOfArticles) || 25);
        const downloadProms = articleHeads.map((articleHead) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const evaluatedArticle = yield _foodmedicine_article_parser__WEBPACK_IMPORTED_MODULE_2__[/* evaluateArticle */ "a"](articleHead, db);
            return evaluatedArticle;
        }));
        const allEvaluatedArticles = yield Promise.all(downloadProms);
        const allParagraphsStandalone = [];
        // For each evaluated article paragraph, form the ParsedArticleParagraphStandalone and push
        // it to the array of all parsed article paragraphs
        allEvaluatedArticles.forEach((article) => {
            const standaloneParagraphs = article.paragraphs.map((paragraph) => {
                return Object.assign({ head: article.head }, paragraph);
            });
            allParagraphsStandalone.push(...standaloneParagraphs);
        });
        // Sort in descending order and remove empty items
        allParagraphsStandalone.sort((a, b) => b.correlationScore - a.correlationScore);
        const allParagraphsStandaloneFiltered = allParagraphsStandalone.filter((paragraph) => { var _a; return ((_a = paragraph.body) === null || _a === void 0 ? void 0 : _a.trim().length) > 0; });
        return allParagraphsStandaloneFiltered.slice(0, (opts === null || opts === void 0 ? void 0 : opts.maxNumberOfParagraphs) || allParagraphsStandalone.length);
    });
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _scraper_scholars_scraper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _scraper_scholars_scraper__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return runScholarsScraper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foodmedicine_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _europepmc_scraper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _arxiv_scraper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var _foodmedicine_word_explorer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);





/**
 * Find all the PDF urls which could have related articles to the remedy
 * @returns an array of PDF urls
 */
function runScholarsScraper(query, db, pageSize) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const querySynonyms = yield Object(_foodmedicine_word_explorer__WEBPACK_IMPORTED_MODULE_4__[/* getSynonyms */ "a"])(query);
        if (db === _foodmedicine_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* ScholarsDB */ "a"].EUROPE_PMC) {
            return Object(_europepmc_scraper__WEBPACK_IMPORTED_MODULE_2__[/* runEuropePMCScrapers */ "a"])(query, querySynonyms, pageSize);
        }
        else if (db === _foodmedicine_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* ScholarsDB */ "a"].ARXIV) {
            return Object(_arxiv_scraper__WEBPACK_IMPORTED_MODULE_3__[/* runArxivScrapers */ "a"])(query, querySynonyms, pageSize);
        }
        return Object(_europepmc_scraper__WEBPACK_IMPORTED_MODULE_2__[/* runEuropePMCScrapers */ "a"])(query, querySynonyms, pageSize);
    });
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScholarsDB; });
var ScholarsDB;
(function (ScholarsDB) {
    ScholarsDB[ScholarsDB["ARXIV"] = 0] = "ARXIV";
    ScholarsDB[ScholarsDB["EUROPE_PMC"] = 1] = "EUROPE_PMC";
})(ScholarsDB || (ScholarsDB = {}));


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scraper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);


/**
 * A generalized scraper abstraction class
 * This class can scrape different sites of pdfs
 * @param IRet - is the return interface for a scraped site or article
 */
class Scraper {
    constructor(parser, ...urlsWithTags) {
        this.parser = parser;
        this.urlsWithTags = urlsWithTags;
    }
    /**
     * Retrieves the source code of a url
     */
    getSiteSource(url) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const ret = yield node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(url);
            return yield ret.text();
        });
    }
    scrapeSiteSinglePage(url, opts) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.info("Scraping for", url);
            const source = yield this.getSiteSource(url);
            return yield this.parser.parserF(source, opts);
        });
    }
    /**
     * Run the scraper for the inputed websites
     */
    run() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // create an array of promises to concurrently perform web scraping
            const pageScrapingProms = this.urlsWithTags.map((urlWithTag) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return yield this.scrapeSiteSinglePage(urlWithTag.url, {
                    tag: urlWithTag.tag,
                });
            }));
            const scrapedRes = yield Promise.all(pageScrapingProms);
            // Because each individual page returns an array of results,
            // results will be an array of arrays which should be flattened
            return scrapedRes.flat();
        });
    }
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EuropePMCParser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_1__);


/**
 * A parser for https://www.ebi.ac.uk/europepmc/webservices/rest/
 */
const EuropePMCParser = {
    parserF: (xml, opts) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        if (!opts) {
            throw 'Options must be passed into this scraper';
        }
        const parser = new xml2js__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        const jsonRes = yield parser.parseStringPromise(xml);
        const allResults = jsonRes.responseWrapper.resultList[0].result;
        const parsedHeads = allResults.map((res) => {
            return {
                id: res.id[0],
                title: res.title[0],
                fullTextDownloadLink: `https://www.ebi.ac.uk/europepmc/webservices/rest/${res.id[0]}/fullTextXML`,
                query: opts.tag.query,
                querySynonyms: opts.tag.querySynonyms,
            };
        });
        return parsedHeads;
    }),
};


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArxivParser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_1__);


/**
 * A parser for http://export.arxiv.org/api/query
 */
const ArxivParser = {
    parserF: (xml, opts) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        if (!opts) {
            throw 'Options must be passed into this scraper';
        }
        const parser = new xml2js__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        const jsonRes = yield parser.parseStringPromise(xml);
        const allResults = jsonRes.feed.entry || [];
        const parsedHeads = allResults
            .map((res) => {
            const pdfDownloadLinks = res.link
                .filter((linkItem) => linkItem.$.title === 'pdf')
                .map((linkItem) => linkItem.$.href);
            const fullTextDownloadLink = pdfDownloadLinks[0] || null;
            return {
                id: res.id,
                title: res.title,
                fullTextDownloadLink,
                query: opts.tag.query,
                querySynonyms: opts.tag.querySynonyms,
            };
        })
            .filter((parsedHead) => parsedHead.fullTextDownloadLink !== null);
        return parsedHeads;
    }),
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSynonyms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wordnet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34);
/* harmony import */ var wordnet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wordnet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var natural__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var natural__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(natural__WEBPACK_IMPORTED_MODULE_3__);




const wordnetLookup = util__WEBPACK_IMPORTED_MODULE_1__["promisify"](wordnet__WEBPACK_IMPORTED_MODULE_2__["lookup"]);
function getSynonyms(word) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        // n is for the nouns
        const synonymWordsArrProms = word.split(' ').map((individualWord) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                return (yield wordnetLookup(natural__WEBPACK_IMPORTED_MODULE_3__["PorterStemmer"].stem(individualWord))).map((def) => def.meta.words.map((item) => item.word));
            }
            catch (e) {
                console.error('Error finding synonyms for %s. Error %s', individualWord, e);
                return [[]];
            }
        }));
        const synonymWordsArr = yield Promise.all(synonymWordsArrProms);
        // make sure the items in the array are all truthy
        const synonymWords = synonymWordsArr
            .flat(Infinity)
            .filter((synonym) => synonym && !word.includes(synonym));
        if (!synonymWords) {
            return [];
        }
        console.info('Found synonym words for %s:', word, synonymWords);
        return synonymWords;
    });
}
// TODO add glossary def to word meaning


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _correlation_score_correlation_score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _correlation_score_correlation_score__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EuropePMCParser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_2__);



function downloadArticle(url) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const ret = yield node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(url);
        return yield ret.text();
    });
}
/**
 * A parser for https://www.ebi.ac.uk/europepmc/webservices/rest/
 */
const EuropePMCParser = {
    parserF: (xmlDownloadLink, opts) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        const xml = yield downloadArticle(xmlDownloadLink);
        if (!(opts === null || opts === void 0 ? void 0 : opts.parsedArticleHead)) {
            throw 'Please add in the parsed head';
        }
        const $ = cheerio__WEBPACK_IMPORTED_MODULE_2__["load"](xml);
        const paragraphTexts = $('p')
            .map((i, el) => $(el).text())
            .get();
        const paragraphs = paragraphTexts.map((paragraphText) => opts.getCorrelationScore(paragraphText, opts.parsedArticleHead.query, opts.parsedArticleHead.querySynonyms));
        const article = {
            head: opts.parsedArticleHead,
            paragraphs,
        };
        return article;
    }),
};


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArxivParser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foodmedicine_pdf_explorer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);


/**
 * A parser for https://www.ebi.ac.uk/europepmc/webservices/rest/
 */
const ArxivParser = {
    parserF: (fileUrl, opts) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        if (!(opts === null || opts === void 0 ? void 0 : opts.parsedArticleHead)) {
            throw new Error('Please add in the parsed head');
        }
        const paragraphTexts = yield Object(_foodmedicine_pdf_explorer__WEBPACK_IMPORTED_MODULE_1__[/* getParagraphsFromPDFUrl */ "a"])(fileUrl);
        try {
            const paragraphs = paragraphTexts.map((paragraphText) => opts.getCorrelationScore(paragraphText, opts.parsedArticleHead.query, opts.parsedArticleHead.querySynonyms));
            const article = {
                head: opts.parsedArticleHead,
                paragraphs,
            };
            return article;
        }
        catch (e) {
            console.error(`Error parsing article from Arxiv. Skipping the article `, e);
            return {
                head: opts.parsedArticleHead,
                paragraphs: [],
            };
        }
    }),
};


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export splitTextToParagraphs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getParagraphsFromPDFUrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdf_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var pdf_parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdf_parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pdf_explorer_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);




/**
 * Check whether the paragraphs contains valid information
 */
function paragraphContainsInformation(body) {
    return body.length > _pdf_explorer_constants__WEBPACK_IMPORTED_MODULE_3__[/* constants */ "a"].MIN_CHAR_COUNT_PER_PARAGRAPH && body.includes('.');
}
function getCharCount(text, pattern) {
    return (text.match(pattern) || []).length;
}
function groupSentencesIntoParagraphs(sentences) {
    let syntheticParagraphsInd = 0;
    const syntheticParagraphs = [];
    sentences.forEach((sentence, i) => {
        if (!syntheticParagraphs[syntheticParagraphsInd]) {
            syntheticParagraphs[syntheticParagraphsInd] = sentence + '. ';
        }
        else {
            syntheticParagraphs[syntheticParagraphsInd] += sentence + '. ';
        }
        if (i % _pdf_explorer_constants__WEBPACK_IMPORTED_MODULE_3__[/* constants */ "a"].SENTENCES_PER_PARAGRAPH === 0) {
            syntheticParagraphsInd++;
        }
    });
    return syntheticParagraphs;
}
/**
 * Split text into paragraph by first attempting to split by the tab character.
 * If the tab character does not appear more than {@code MIN_TAB_COUNT} number of times,
 * synthetically create paragraphs by grouping sentences together.
 */
function splitTextToParagraphs(rawText) {
    const tabCount = getCharCount(rawText, /\t/g);
    if (tabCount > _pdf_explorer_constants__WEBPACK_IMPORTED_MODULE_3__[/* constants */ "a"].MIN_TAB_COUNT) {
        return rawText.split('\t').filter(paragraphContainsInformation);
    }
    const sentences = rawText.split('.');
    return groupSentencesIntoParagraphs(sentences).filter(paragraphContainsInformation);
}
function getParagraphsFromPDFUrl(url) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const fetchRes = yield node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(url);
        const buff = yield fetchRes.buffer();
        const pdfData = yield pdf_parse__WEBPACK_IMPORTED_MODULE_2___default()(buff);
        return splitTextToParagraphs(pdfData.text);
    });
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return evaluateArticle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foodmedicine_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _correlation_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var natural__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var natural__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(natural__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);





const tokenizer = new natural__WEBPACK_IMPORTED_MODULE_3__["WordTokenizer"]();
/**
 * Find word frequencies through fuzzy search
 */
function findWordFreqFuzzy(word, paragraph) {
    const tokenizedParagraph = tokenizer.tokenize(paragraph);
    const overallFreqScore = tokenizedParagraph.reduce((freq, paragraphWord) => {
        // distance ranges from 0 to 1. 1 being a perfect match
        const distance = natural__WEBPACK_IMPORTED_MODULE_3__["JaroWinklerDistance"](word, paragraphWord);
        return freq + (distance > _correlation_constants__WEBPACK_IMPORTED_MODULE_2__[/* cutOffs */ "b"].minimumWordDistance ? distance : 0);
    }, 0);
    return overallFreqScore;
}
function findWordsFreqFuzzy(words, paragraph) {
    return words
        .map((word) => findWordFreqFuzzy(word, paragraph))
        .reduce((total, score) => total + score, 0);
}
/**
 * Compute the correlation score based off of the inputs
 * Current features include query frequencies, query synonym frequencies
 */
function computeScore(queryFreq, querySynonymWordFreq) {
    const queryScore = queryFreq * _correlation_constants__WEBPACK_IMPORTED_MODULE_2__[/* correlationWeights */ "a"].queryWordFreq;
    const querySynonymScore = querySynonymWordFreq * _correlation_constants__WEBPACK_IMPORTED_MODULE_2__[/* correlationWeights */ "a"].querySynonymWordFreq;
    return querySynonymScore + queryScore;
}
function stemString(input) {
    return natural__WEBPACK_IMPORTED_MODULE_3__["PorterStemmer"].tokenizeAndStem(input).join(' ');
}
function getWholeParagraphCorrelationScore(paragraph, query, querySynonyms) {
    const queryStem = stemString(query);
    const paragraphStem = stemString(paragraph);
    const querySynonymFreq = findWordsFreqFuzzy(querySynonyms, paragraphStem);
    const correlationScore = computeScore(findWordFreqFuzzy(queryStem, paragraphStem), querySynonymFreq);
    return {
        body: paragraph,
        correlationScore,
    };
}
/**
 * Get the correlation score for the segment of a paragraph with the most matches
 * Will shorten the paragraph as much as possible while trying to mantain the same correlation score
 * + or - {@code maintainWithinPercent}
 */
function getShortestParagraphCorrelationScore(paragraph, query, querySynonyms, maintainWithinPercent = _correlation_constants__WEBPACK_IMPORTED_MODULE_2__[/* cutOffs */ "b"].maintainScoreWithinPercent) {
    function calculatePercentageDifference(x, y) {
        return Math.abs((x - y) / x) * 100;
    }
    const sentences = paragraph.split('.');
    // remove the last element if it is empty
    if (!sentences[sentences.length - 1]) {
        sentences.pop();
    }
    const initScore = getWholeParagraphCorrelationScore(paragraph, query, querySynonyms).correlationScore;
    let currentScore = initScore;
    let leftInd = 0;
    let rightIndNonInclusive = sentences.length;
    // Attempts to remove sentences from the beginning of the paragraph
    // while having the correlation score stay within half of the {@code maintainWithinPercent}
    while (calculatePercentageDifference(initScore, currentScore) <=
        maintainWithinPercent / 2 &&
        leftInd != rightIndNonInclusive) {
        currentScore = getWholeParagraphCorrelationScore(sentences.slice(leftInd, rightIndNonInclusive).join('.'), query, querySynonyms).correlationScore;
        leftInd++;
    }
    // Attempts to remove sentences from the end of the paragraph
    // while having the correlation score stay within {@code maintainWithinPercent}
    while (calculatePercentageDifference(initScore, currentScore) <=
        maintainWithinPercent &&
        leftInd != rightIndNonInclusive) {
        currentScore = getWholeParagraphCorrelationScore(sentences.slice(leftInd, rightIndNonInclusive).join('.'), query, querySynonyms).correlationScore;
        rightIndNonInclusive--;
    }
    // Increment {@code rightIndNonInclusive} because the new correlation score may be
    // over the alloted percentage range after the prior loop. Thus, the last sentence removed
    // is added back
    rightIndNonInclusive =
        rightIndNonInclusive < sentences.length
            ? rightIndNonInclusive + 1
            : rightIndNonInclusive;
    return {
        correlationScore: currentScore,
        body: sentences.slice(leftInd, rightIndNonInclusive).join('.'),
    };
}
function evaluateArticle(articleHead, db) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        console.info(`Downloaded data for ${articleHead.query} with url ${articleHead.fullTextDownloadLink}`);
        if (db === _foodmedicine_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* ScholarsDB */ "a"].EUROPE_PMC) {
            const parser = _parser__WEBPACK_IMPORTED_MODULE_4__[/* EuropePMCParser */ "b"];
            return (yield parser.parserF(articleHead.fullTextDownloadLink, {
                parsedArticleHead: articleHead,
                getCorrelationScore: getShortestParagraphCorrelationScore,
            }));
        }
        else if (db === _foodmedicine_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* ScholarsDB */ "a"].ARXIV) {
            const parser = _parser__WEBPACK_IMPORTED_MODULE_4__[/* ArxivParser */ "a"];
            return (yield parser.parserF(articleHead.fullTextDownloadLink, {
                parsedArticleHead: articleHead,
                getCorrelationScore: getShortestParagraphCorrelationScore,
            }));
        }
        const parser = _parser__WEBPACK_IMPORTED_MODULE_4__[/* EuropePMCParser */ "b"];
        return (yield parser.parserF(articleHead.fullTextDownloadLink, {
            parsedArticleHead: articleHead,
            getCorrelationScore: getShortestParagraphCorrelationScore,
        }));
    });
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);



const app = express__WEBPACK_IMPORTED_MODULE_0__();
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
// app.use(
//   cors({
//     origin: [
//       'http://localhost:4200',
//       'https://schopal.netlify.app',
//       'https://schopal.neocities.org',
//     ],
//   })
// );
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1__["json"]());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1__["urlencoded"]({ extended: true }));
app.use('/api', _controllers__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (app);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);


const router = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
router.use('/search', _search__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _daos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);



const router = express__WEBPACK_IMPORTED_MODULE_1__["Router"]();
/**
 * Search the database for correlated paragraphs
 * @query q - query string
 * @query db - which db to use
 * @query maxNumberOfParagraphs - optional max number of paragraphs
 * @query numberOfArticles - optional number of articles to search
 */
router.get('/', (req, res, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const query = req.query.q;
    const results = yield Object(_daos__WEBPACK_IMPORTED_MODULE_2__[/* findQueryResults */ "a"])(query, parseInt(req.query.db), {
        numberOfArticles: parseInt(req.query.numberOfArticles),
        maxNumberOfParagraphs: parseInt(req.query.maxNumberOfParagraphs),
    });
    res.status(200).json(results);
}));
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return runArxivScrapers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foodmedicine_scraper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries


/**
 * Construct the google scholars url which will be scraped
 * @param pageSize - the number of articles to get
 */
function createArxivUrl(query, pageSize) {
    return encodeURI(`http://export.arxiv.org/api/query?search_query=all:${query}&start=0&max_results=${pageSize}`);
}
function runArxivScrapers(query, querySynonyms, pageSize) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const queryUrl = createArxivUrl(query, pageSize);
        const remedyScraper = new _foodmedicine_scraper__WEBPACK_IMPORTED_MODULE_1__[/* Scraper */ "a"](_parsers__WEBPACK_IMPORTED_MODULE_2__[/* ArxivParser */ "a"], {
            url: queryUrl,
            tag: {
                query,
                querySynonyms,
            },
        });
        const articleHeads = yield remedyScraper.run();
        return articleHeads;
    });
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_word_explorer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_word_explorer__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("wordnet");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_pdf_explorer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_pdf_explorer__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("pdf-parse");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);

const port = process.env.PORT || 3333;
const server = _app_app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].listen(port, () => {
    console.info(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map
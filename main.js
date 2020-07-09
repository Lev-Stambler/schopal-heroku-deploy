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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
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

module.exports = require("natural");

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["b"]; });




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findQueryResults; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foodmedicine_scholars_scraper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony import */ var _foodmedicine_article_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);



function findQueryResults(query, opts) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        // The query is passed in twice in order to not interfere with the cross feature
        const articleHeads = yield Object(_foodmedicine_scholars_scraper__WEBPACK_IMPORTED_MODULE_1__[/* runScholarsScraper */ "a"])(query, (opts === null || opts === void 0 ? void 0 : opts.numberOfArticles) || 25);
        const downloadProms = articleHeads.map((articleHead) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const evaluatedArticle = yield _foodmedicine_article_parser__WEBPACK_IMPORTED_MODULE_2__[/* evaluateArticle */ "b"](articleHead, _foodmedicine_article_parser__WEBPACK_IMPORTED_MODULE_2__[/* EbiParser */ "a"]);
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _scraper_scholars_scraper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _scraper_scholars_scraper__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return runScholarsScraper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foodmedicine_scraper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _foodmedicine_word_explorer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries



/**
 * Construct the google scholars url which will be scraped
 * @param pageSize - the number of articles to get
 */
function createEuropePMCUrl(query, pageSize, synonym = true) {
    return encodeURI(`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${query}&synonym=${synonym}&pageSize=${pageSize}`);
}
/**
 * Find all the PDF urls which could have related articles to the remedy
 * @returns an array of PDF urls
 */
function runScholarsScraper(query, pageSize = 25) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const queryUrl = createEuropePMCUrl(query, pageSize);
        const querySynonyms = yield Object(_foodmedicine_word_explorer__WEBPACK_IMPORTED_MODULE_3__[/* getSynonyms */ "a"])(query);
        const remedyScraper = new _foodmedicine_scraper__WEBPACK_IMPORTED_MODULE_1__[/* Scraper */ "a"](_parsers__WEBPACK_IMPORTED_MODULE_2__[/* EuropePMCParser */ "a"], {
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scraper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EuropePMCParser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
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
                xmlFullTextDownloadLink: `https://www.ebi.ac.uk/europepmc/webservices/rest/${res.id[0]}/fullTextXML`,
                query: opts.tag.query,
                querySynonyms: opts.tag.querySynonyms,
            };
        });
        return parsedHeads;
    }),
};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSynonyms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wordnet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var wordnet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wordnet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var natural__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _parser__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony import */ var _correlation_score_correlation_score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _correlation_score_correlation_score__WEBPACK_IMPORTED_MODULE_1__["a"]; });





/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _ebi_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _ebi_parser__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EbiParser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cheerio__WEBPACK_IMPORTED_MODULE_1__);


/**
 * A parser for https://www.ebi.ac.uk/europepmc/webservices/rest/
 */
const EbiParser = {
    parserF: (xml, opts) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        if (!(opts === null || opts === void 0 ? void 0 : opts.parsedArticleHead)) {
            throw 'Please add in the parsed head';
        }
        const $ = cheerio__WEBPACK_IMPORTED_MODULE_1__["load"](xml);
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return evaluateArticle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _correlation_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var natural__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var natural__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(natural__WEBPACK_IMPORTED_MODULE_3__);




const tokenizer = new natural__WEBPACK_IMPORTED_MODULE_3__["WordTokenizer"]();
function downloadArticle(url) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const ret = yield node_fetch__WEBPACK_IMPORTED_MODULE_1__(url);
        return yield ret.text();
    });
}
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
    return (querySynonymScore + queryScore);
}
function stemString(input) {
    return natural__WEBPACK_IMPORTED_MODULE_3__["PorterStemmer"].tokenizeAndStem(input).join(' ');
}
function getWholeParagraphCorrelationScore(paragraph, query, querySynonyms) {
    const queryStem = stemString(query);
    const paragraphStemmed = stemString(paragraph);
    const querySynonymFreq = findWordsFreqFuzzy(querySynonyms, paragraphStemmed);
    const correlationScore = computeScore(findWordFreqFuzzy(queryStem, paragraphStemmed), querySynonymFreq);
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
function evaluateArticle(articleHead, parser) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const inputXML = yield downloadArticle(articleHead.xmlFullTextDownloadLink);
        console.info(`Downloaded XML for ${articleHead.query} with url ${articleHead.xmlFullTextDownloadLink}`);
        // Parser functions return an array, but in this case, only the first result is relevant
        return (yield parser.parserF(inputXML, {
            parsedArticleHead: articleHead,
            getCorrelationScore: getShortestParagraphCorrelationScore,
        }));
    });
}


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);




const app = express__WEBPACK_IMPORTED_MODULE_0__();
app.use(cors__WEBPACK_IMPORTED_MODULE_2__({
    origin: [
        'http://localhost:4200',
        'https://schopal.netlify.app',
        'https://schopal.neocities.org',
    ],
}));
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1__["json"]());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1__["urlencoded"]({ extended: true }));
app.use('/api', _controllers__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (app);


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);


const router = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
router.use('/search', _search__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _daos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21);



const router = express__WEBPACK_IMPORTED_MODULE_1__["Router"]();
/**
 * Search the database for correlated paragraphs
 * @query q - query string
 * @query maxNumberOfParagraphs - optional max number of paragraphs
 * @query numberOfArticles - optional number of articles to search
 */
router.get('/', (req, res, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const query = req.query.q;
    const results = yield Object(_daos__WEBPACK_IMPORTED_MODULE_2__[/* findQueryResults */ "a"])(query, {
        numberOfArticles: parseInt(req.query.numberOfArticles),
        maxNumberOfParagraphs: parseInt(req.query.maxNumberOfParagraphs),
    });
    res.status(200).json(results);
}));
/* harmony default export */ __webpack_exports__["a"] = (router);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_scraper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_scraper__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _europepmc_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _europepmc_parser__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("xml2js");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_word_explorer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _lib_word_explorer__WEBPACK_IMPORTED_MODULE_0__["a"]; });




/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("wordnet");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);

const port = process.env.PORT || 3333;
const server = _app_app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].listen(port, () => {
    console.info(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map
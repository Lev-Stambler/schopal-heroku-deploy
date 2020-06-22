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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api-express/src/app/app.ts":
/*!*****************************************!*\
  !*** ./apps/api-express/src/app/app.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers */ "./apps/api-express/src/app/controllers/index.ts");




const app = express__WEBPACK_IMPORTED_MODULE_0__();
app.use(cors__WEBPACK_IMPORTED_MODULE_2__({
    origin: ['http://localhost:4200'],
}));
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1__["json"]());
app.use(body_parser__WEBPACK_IMPORTED_MODULE_1__["urlencoded"]({ extended: true }));
app.use('/api', _controllers__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (app);


/***/ }),

/***/ "./apps/api-express/src/app/controllers/index.ts":
/*!*******************************************************!*\
  !*** ./apps/api-express/src/app/controllers/index.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search */ "./apps/api-express/src/app/controllers/search.ts");


const router = express__WEBPACK_IMPORTED_MODULE_0__["Router"]();
router.use('/search', _search__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./apps/api-express/src/app/controllers/search.ts":
/*!********************************************************!*\
  !*** ./apps/api-express/src/app/controllers/search.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _daos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../daos */ "./apps/api-express/src/app/daos/index.ts");



const router = express__WEBPACK_IMPORTED_MODULE_1__["Router"]();
/**
 * Search the database for correlated paragraphs
 * @query q - query string
 * @query maxNumberOfParagraphs - optional max number of paragraphs
 * @query numberOfArticles - optional number of articles to search
 */
router.get('/', (req, res, next) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    const query = req.query.q;
    const results = yield Object(_daos__WEBPACK_IMPORTED_MODULE_2__["findQueryResults"])(query, {
        numberOfArticles: parseInt(req.query.numberOfArticles),
        maxNumberOfParagraphs: parseInt(req.query.maxNumberOfParagraphs),
    });
    res.status(200).json(results);
}));
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./apps/api-express/src/app/daos/index.ts":
/*!************************************************!*\
  !*** ./apps/api-express/src/app/daos/index.ts ***!
  \************************************************/
/*! exports provided: findQueryResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search */ "./apps/api-express/src/app/daos/search.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findQueryResults", function() { return _search__WEBPACK_IMPORTED_MODULE_0__["findQueryResults"]; });




/***/ }),

/***/ "./apps/api-express/src/app/daos/search.ts":
/*!*************************************************!*\
  !*** ./apps/api-express/src/app/daos/search.ts ***!
  \*************************************************/
/*! exports provided: findQueryResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findQueryResults", function() { return findQueryResults; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foodmedicine_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @foodmedicine/interfaces */ "./libs/interfaces/src/index.ts");
/* harmony import */ var _foodmedicine_scholars_scraper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @foodmedicine/scholars-scraper */ "./libs/scholars-scraper/src/index.ts");
/* harmony import */ var _foodmedicine_article_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @foodmedicine/article-parser */ "./libs/article-parser/src/index.ts");




function findQueryResults(query, opts) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        // The query is the impact and the recommendation is left blank
        const articleHeads = yield _foodmedicine_scholars_scraper__WEBPACK_IMPORTED_MODULE_2__["runScholarsScraper"](query, '', (opts === null || opts === void 0 ? void 0 : opts.numberOfArticles) || 5);
        const downloadProms = articleHeads.map((articleHead) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const evaluatedArticle = yield _foodmedicine_article_parser__WEBPACK_IMPORTED_MODULE_3__["evaluateArticle"](articleHead, _foodmedicine_article_parser__WEBPACK_IMPORTED_MODULE_3__["EbiParser"]);
            return evaluatedArticle;
        }));
        const allEvaluatedArticles = yield Promise.all(downloadProms);
        const allParagraphsStandalone = [];
        allEvaluatedArticles.forEach((article) => {
            const standaloneParagraphs = article.paragraphs.map((paragraph) => {
                return Object.assign({ head: article.head, 
                    // set default backsUpClaim to notApplicable. This later gets changed manually in the JSON file
                    backsUpClaim: _foodmedicine_interfaces__WEBPACK_IMPORTED_MODULE_1__["ArticleParagraphBacksUpClaim"].notApplicable }, paragraph);
            });
            allParagraphsStandalone.push(...standaloneParagraphs);
        });
        // Sort in descending order and remove empty items
        allParagraphsStandalone.sort((a, b) => b.correlationScore - a.correlationScore);
        const allParagraphsStandaloneFiltered = allParagraphsStandalone.filter((paragraph) => paragraph.body &&
            paragraph.body !== '' &&
            paragraph.body.trim().length > 0);
        return allParagraphsStandaloneFiltered.slice(0, (opts === null || opts === void 0 ? void 0 : opts.maxNumberOfParagraphs) || allParagraphsStandalone.length);
    });
}


/***/ }),

/***/ "./apps/api-express/src/main.ts":
/*!**************************************!*\
  !*** ./apps/api-express/src/main.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app */ "./apps/api-express/src/app/app.ts");

const port = process.env.port || 3333;
const server = _app_app__WEBPACK_IMPORTED_MODULE_0__["default"].listen(port, () => {
    console.info(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);


/***/ }),

/***/ "./libs/article-parser/src/index.ts":
/*!******************************************!*\
  !*** ./libs/article-parser/src/index.ts ***!
  \******************************************/
/*! exports provided: EbiParser, evaluateArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./libs/article-parser/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EbiParser", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["EbiParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "evaluateArticle", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["evaluateArticle"]; });




/***/ }),

/***/ "./libs/article-parser/src/lib/correlation-score/correlation-constants.ts":
/*!********************************************************************************!*\
  !*** ./libs/article-parser/src/lib/correlation-score/correlation-constants.ts ***!
  \********************************************************************************/
/*! exports provided: correlationWeights, cutOffs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "correlationWeights", function() { return correlationWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cutOffs", function() { return cutOffs; });
const correlationWeights = {
    // impact cross recommendation is high to place an emphasis on
    // having both impact and recommendation within one paragraph
    impactCrossRecommendation: 8,
    impactSynonymWordFreq: 0.5,
    impactWordFreq: 1,
    recommendationWordFreq: 1,
    recommendationSynonymWordFreq: 0.5,
};
const cutOffs = {
    minimumWordDistance: 0.85,
    maintainScoreWithinPercent: 10,
};


/***/ }),

/***/ "./libs/article-parser/src/lib/correlation-score/correlation-score.ts":
/*!****************************************************************************!*\
  !*** ./libs/article-parser/src/lib/correlation-score/correlation-score.ts ***!
  \****************************************************************************/
/*! exports provided: evaluateArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluateArticle", function() { return evaluateArticle; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _correlation_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./correlation-constants */ "./libs/article-parser/src/lib/correlation-score/correlation-constants.ts");
/* harmony import */ var natural__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! natural */ "natural");
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
        return freq + (distance > _correlation_constants__WEBPACK_IMPORTED_MODULE_2__["cutOffs"].minimumWordDistance ? distance : 0);
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
 * Current features include impact frequencies, recommendation frequencies, impact x recommendation
 * Paragraph length
 */
function computeScore(impactFreq, recommendationFreq, impactSynonymFreq, recommendationSynonymFreq, paragraphWordCount) {
    const impactScore = impactFreq * _correlation_constants__WEBPACK_IMPORTED_MODULE_2__["correlationWeights"].impactWordFreq;
    const recommendationScore = recommendationFreq * _correlation_constants__WEBPACK_IMPORTED_MODULE_2__["correlationWeights"].recommendationWordFreq;
    const impactSynonymScore = impactSynonymFreq * _correlation_constants__WEBPACK_IMPORTED_MODULE_2__["correlationWeights"].impactSynonymWordFreq;
    const recommendationSynonymScore = recommendationSynonymFreq *
        _correlation_constants__WEBPACK_IMPORTED_MODULE_2__["correlationWeights"].recommendationSynonymWordFreq;
    const crossScore = impactFreq *
        recommendationFreq *
        _correlation_constants__WEBPACK_IMPORTED_MODULE_2__["correlationWeights"].impactCrossRecommendation;
    // ensures that both impact and recommendation are seen in the same paragraph
    return (impactScore +
        recommendationScore +
        crossScore +
        impactSynonymScore +
        recommendationSynonymScore);
}
function stemString(input) {
    return natural__WEBPACK_IMPORTED_MODULE_3__["PorterStemmer"].tokenizeAndStem(input).join(' ');
}
function getWholeParagraphCorrelationScore(paragraph, impacted, recommendation, impactedSynonyms, recommendationSynonyms) {
    const impactedStem = stemString(impacted);
    const paragraphStemmed = stemString(paragraph);
    const recommendationStem = stemString(recommendation);
    const impactSynonymFreq = findWordsFreqFuzzy(impactedSynonyms, paragraphStemmed);
    const recommendationSynonymFreq = findWordsFreqFuzzy(recommendationSynonyms, paragraphStemmed);
    const correlationScore = computeScore(findWordFreqFuzzy(impactedStem, paragraphStemmed), findWordFreqFuzzy(recommendationStem, paragraphStemmed), impactSynonymFreq, recommendationSynonymFreq, paragraph.split(' ').length);
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
function getShortestParagraphCorrelationScore(paragraph, impacted, recommendation, impactedSynonyms, recommendationSynonyms, maintainWithinPercent = _correlation_constants__WEBPACK_IMPORTED_MODULE_2__["cutOffs"].maintainScoreWithinPercent) {
    function calculatePercentageDifference(x, y) {
        return Math.abs((x - y) / x) * 100;
    }
    const sentences = paragraph.split('.');
    // remove the last element if it is empty
    if (!sentences[sentences.length - 1]) {
        sentences.pop();
    }
    const initScore = getWholeParagraphCorrelationScore(paragraph, impacted, recommendation, impactedSynonyms, recommendationSynonyms).correlationScore;
    let currentScore = initScore;
    let leftInd = 0;
    let rightIndNonInclusive = sentences.length;
    // Attempts to remove sentences from the beginning of the paragraph
    // while having the correlation score stay within half of the {@code maintainWithinPercent}
    while (calculatePercentageDifference(initScore, currentScore) <=
        maintainWithinPercent / 2 &&
        leftInd != rightIndNonInclusive) {
        currentScore = getWholeParagraphCorrelationScore(sentences.slice(leftInd, rightIndNonInclusive).join('.'), impacted, recommendation, impactedSynonyms, recommendationSynonyms).correlationScore;
        leftInd++;
    }
    // Attempts to remove sentences from the end of the paragraph
    // while having the correlation score stay within {@code maintainWithinPercent}
    while (calculatePercentageDifference(initScore, currentScore) <=
        maintainWithinPercent &&
        leftInd != rightIndNonInclusive) {
        currentScore = getWholeParagraphCorrelationScore(sentences.slice(leftInd, rightIndNonInclusive).join('.'), impacted, recommendation, impactedSynonyms, recommendationSynonyms).correlationScore;
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
        console.info(`Downloaded XML for ${articleHead.impacted} for ${articleHead.recommendation} with url ${articleHead.xmlFullTextDownloadLink}`);
        // Parser functions return an array, but in this case, only the first result is relevant
        return (yield parser.parserF(inputXML, {
            parsedArticleHead: articleHead,
            impacted: articleHead.impacted,
            recommendation: articleHead.recommendation,
            getCorrelationScore: getShortestParagraphCorrelationScore,
        }));
    });
}


/***/ }),

/***/ "./libs/article-parser/src/lib/index.ts":
/*!**********************************************!*\
  !*** ./libs/article-parser/src/lib/index.ts ***!
  \**********************************************/
/*! exports provided: EbiParser, evaluateArticle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ "./libs/article-parser/src/lib/parser/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EbiParser", function() { return _parser__WEBPACK_IMPORTED_MODULE_0__["EbiParser"]; });

/* harmony import */ var _correlation_score_correlation_score__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./correlation-score/correlation-score */ "./libs/article-parser/src/lib/correlation-score/correlation-score.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "evaluateArticle", function() { return _correlation_score_correlation_score__WEBPACK_IMPORTED_MODULE_1__["evaluateArticle"]; });





/***/ }),

/***/ "./libs/article-parser/src/lib/parser/ebi-parser.ts":
/*!**********************************************************!*\
  !*** ./libs/article-parser/src/lib/parser/ebi-parser.ts ***!
  \**********************************************************/
/*! exports provided: EbiParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbiParser", function() { return EbiParser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cheerio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cheerio */ "cheerio");
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
        const paragraphs = paragraphTexts.map((paragraphText) => opts.getCorrelationScore(paragraphText, opts.parsedArticleHead.impacted, opts.parsedArticleHead.recommendation, opts.parsedArticleHead.impactedSynonyms, opts.parsedArticleHead.recommendationSynonyms));
        const article = {
            head: opts.parsedArticleHead,
            paragraphs,
        };
        return article;
    }),
};


/***/ }),

/***/ "./libs/article-parser/src/lib/parser/index.ts":
/*!*****************************************************!*\
  !*** ./libs/article-parser/src/lib/parser/index.ts ***!
  \*****************************************************/
/*! exports provided: EbiParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ebi_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ebi-parser */ "./libs/article-parser/src/lib/parser/ebi-parser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EbiParser", function() { return _ebi_parser__WEBPACK_IMPORTED_MODULE_0__["EbiParser"]; });




/***/ }),

/***/ "./libs/interfaces/src/index.ts":
/*!**************************************!*\
  !*** ./libs/interfaces/src/index.ts ***!
  \**************************************/
/*! exports provided: ArticleParagraphBacksUpClaim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/interfaces */ "./libs/interfaces/src/lib/interfaces.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleParagraphBacksUpClaim", function() { return _lib_interfaces__WEBPACK_IMPORTED_MODULE_0__["ArticleParagraphBacksUpClaim"]; });




/***/ }),

/***/ "./libs/interfaces/src/lib/interfaces.ts":
/*!***********************************************!*\
  !*** ./libs/interfaces/src/lib/interfaces.ts ***!
  \***********************************************/
/*! exports provided: ArticleParagraphBacksUpClaim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleParagraphBacksUpClaim", function() { return ArticleParagraphBacksUpClaim; });
var ArticleParagraphBacksUpClaim;
(function (ArticleParagraphBacksUpClaim) {
    ArticleParagraphBacksUpClaim["yes"] = "y";
    ArticleParagraphBacksUpClaim["no"] = "n";
    ArticleParagraphBacksUpClaim["notApplicable"] = "na";
})(ArticleParagraphBacksUpClaim || (ArticleParagraphBacksUpClaim = {}));


/***/ }),

/***/ "./libs/scholars-scraper/src/index.ts":
/*!********************************************!*\
  !*** ./libs/scholars-scraper/src/index.ts ***!
  \********************************************/
/*! exports provided: runScholarsScraper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ "./libs/scholars-scraper/src/lib/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runScholarsScraper", function() { return _lib__WEBPACK_IMPORTED_MODULE_0__["runScholarsScraper"]; });




/***/ }),

/***/ "./libs/scholars-scraper/src/lib/index.ts":
/*!************************************************!*\
  !*** ./libs/scholars-scraper/src/lib/index.ts ***!
  \************************************************/
/*! exports provided: runScholarsScraper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scraper_scholars_scraper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scraper/scholars-scraper */ "./libs/scholars-scraper/src/lib/scraper/scholars-scraper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "runScholarsScraper", function() { return _scraper_scholars_scraper__WEBPACK_IMPORTED_MODULE_0__["runScholarsScraper"]; });




/***/ }),

/***/ "./libs/scholars-scraper/src/lib/parsers/index.ts":
/*!********************************************************!*\
  !*** ./libs/scholars-scraper/src/lib/parsers/index.ts ***!
  \********************************************************/
/*! exports provided: ScholarsParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scholars_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scholars-parser */ "./libs/scholars-scraper/src/lib/parsers/scholars-parser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScholarsParser", function() { return _scholars_parser__WEBPACK_IMPORTED_MODULE_0__["ScholarsParser"]; });




/***/ }),

/***/ "./libs/scholars-scraper/src/lib/parsers/scholars-parser.ts":
/*!******************************************************************!*\
  !*** ./libs/scholars-scraper/src/lib/parsers/scholars-parser.ts ***!
  \******************************************************************/
/*! exports provided: ScholarsParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScholarsParser", function() { return ScholarsParser; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xml2js */ "xml2js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _foodmedicine_word_explorer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @foodmedicine/word-explorer */ "./libs/word-explorer/src/index.ts");



/**
 * A parser for https://www.ebi.ac.uk/europepmc/webservices/rest/
 */
const ScholarsParser = {
    parserF: (xml, opts) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
        if (!opts) {
            throw 'Options must be passed into this scraper';
        }
        const parser = new xml2js__WEBPACK_IMPORTED_MODULE_1__["Parser"]();
        const jsonRes = yield parser.parseStringPromise(xml);
        const allResults = jsonRes.responseWrapper.resultList[0].result;
        const recommendationSynonyms = yield _foodmedicine_word_explorer__WEBPACK_IMPORTED_MODULE_2__["getSynonyms"](opts.tag.recommendation);
        const parsedHeads = allResults.map((res) => {
            return {
                id: res.id[0],
                title: res.title[0],
                xmlFullTextDownloadLink: `https://www.ebi.ac.uk/europepmc/webservices/rest/${res.id[0]}/fullTextXML`,
                recommendation: opts.tag.recommendation,
                impacted: opts.tag.impacted,
                impactedSynonyms: opts.tag.impactedSynonyms,
                recommendationSynonyms: recommendationSynonyms,
            };
        });
        return parsedHeads;
    }),
};


/***/ }),

/***/ "./libs/scholars-scraper/src/lib/scraper/scholars-scraper.ts":
/*!*******************************************************************!*\
  !*** ./libs/scholars-scraper/src/lib/scraper/scholars-scraper.ts ***!
  \*******************************************************************/
/*! exports provided: runScholarsScraper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runScholarsScraper", function() { return runScholarsScraper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foodmedicine_scraper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @foodmedicine/scraper */ "./libs/scraper/src/index.ts");
/* harmony import */ var _parsers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../parsers */ "./libs/scholars-scraper/src/lib/parsers/index.ts");
/* harmony import */ var _foodmedicine_word_explorer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @foodmedicine/word-explorer */ "./libs/word-explorer/src/index.ts");

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries



/**
 * Construct the google scholars url which will be scraped
 * @param pageSize - the number of articles to get
 */
function createScholarsUrl(impacted, solution, pageSize, synonym = true) {
    return encodeURI(`https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${solution} ${impacted}&synonym=${synonym}&pageSize=${pageSize}`);
}
/**
 * Find all the PDF urls which could have related articles to the remedy
 * @param remedy - one particular impacted and a set of recommendations
 * @returns an array of PDF urls
 */
function runScholarsScraper(impacted, recommendation, pageSize = 25) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const queryUrl = createScholarsUrl(impacted, recommendation, pageSize);
        const impactedSynonyms = yield Object(_foodmedicine_word_explorer__WEBPACK_IMPORTED_MODULE_3__["getSynonyms"])(impacted);
        const remedyScraper = new _foodmedicine_scraper__WEBPACK_IMPORTED_MODULE_1__["Scraper"](_parsers__WEBPACK_IMPORTED_MODULE_2__["ScholarsParser"], {
            url: queryUrl,
            tag: {
                recommendation: recommendation,
                impacted: impacted,
                impactedSynonyms,
            },
        });
        const articleHeads = yield remedyScraper.run();
        return articleHeads;
    });
}


/***/ }),

/***/ "./libs/scraper/src/index.ts":
/*!***********************************!*\
  !*** ./libs/scraper/src/index.ts ***!
  \***********************************/
/*! exports provided: Scraper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_scraper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/scraper */ "./libs/scraper/src/lib/scraper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scraper", function() { return _lib_scraper__WEBPACK_IMPORTED_MODULE_0__["Scraper"]; });




/***/ }),

/***/ "./libs/scraper/src/lib/scraper.ts":
/*!*****************************************!*\
  !*** ./libs/scraper/src/lib/scraper.ts ***!
  \*****************************************/
/*! exports provided: Scraper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scraper", function() { return Scraper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ "node-fetch");
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

/***/ "./libs/word-explorer/src/index.ts":
/*!*****************************************!*\
  !*** ./libs/word-explorer/src/index.ts ***!
  \*****************************************/
/*! exports provided: getSynonyms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_word_explorer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/word-explorer */ "./libs/word-explorer/src/lib/word-explorer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getSynonyms", function() { return _lib_word_explorer__WEBPACK_IMPORTED_MODULE_0__["getSynonyms"]; });




/***/ }),

/***/ "./libs/word-explorer/src/lib/word-explorer.ts":
/*!*****************************************************!*\
  !*** ./libs/word-explorer/src/lib/word-explorer.ts ***!
  \*****************************************************/
/*! exports provided: getSynonyms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSynonyms", function() { return getSynonyms; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var wordnet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wordnet */ "wordnet");
/* harmony import */ var wordnet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(wordnet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var natural__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! natural */ "natural");
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

/***/ 0:
/*!********************************************!*\
  !*** multi ./apps/api-express/src/main.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/levst/code/foodasmedicine/food-as-medicine-checker/apps/api-express/src/main.ts */"./apps/api-express/src/main.ts");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cheerio":
/*!**************************!*\
  !*** external "cheerio" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "natural":
/*!**************************!*\
  !*** external "natural" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("natural");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "wordnet":
/*!**************************!*\
  !*** external "wordnet" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("wordnet");

/***/ }),

/***/ "xml2js":
/*!*************************!*\
  !*** external "xml2js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xml2js");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map
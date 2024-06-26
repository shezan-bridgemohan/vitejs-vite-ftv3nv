import "./chunk-CEQRFMJQ.js";

// node_modules/@nevware21/ts-utils/dist/es5/mod/ts-utils.js
function _pureAssign(func1, func2) {
  return func1 || func2;
}
function _pureRef(value, name) {
  return value[name];
}
var UNDEF_VALUE = void 0;
var NULL_VALUE = null;
var EMPTY = "";
var FUNCTION = "function";
var OBJECT = "object";
var PROTOTYPE = "prototype";
var __PROTO__ = "__proto__";
var UNDEFINED = "undefined";
var CONSTRUCTOR = "constructor";
var SYMBOL = "Symbol";
var POLYFILL_TAG = "_polyfill";
var LENGTH = "length";
var NAME = "name";
var CALL = "call";
var TO_STRING = "toString";
var ObjClass = _pureAssign(Object);
var ObjProto = _pureRef(ObjClass, PROTOTYPE);
var StrCls = _pureAssign(String);
var StrProto = _pureRef(StrCls, PROTOTYPE);
var MathCls = _pureAssign(Math);
var ArrCls = _pureAssign(Array);
var ArrProto = _pureRef(ArrCls, PROTOTYPE);
var ArrSlice = _pureRef(ArrProto, "slice");
function safe(func, argArray) {
  try {
    return {
      v: func.apply(this, argArray)
    };
  } catch (e) {
    return { e };
  }
}
function safeGet(cb, defValue) {
  var result = safe(cb);
  return result.e ? defValue : result.v;
}
var _primitiveTypes;
function _createIs(theType) {
  return function(value) {
    return typeof value === theType;
  };
}
function _createObjIs(theName) {
  var theType = "[object " + theName + "]";
  return function(value) {
    return !!(value && objToString(value) === theType);
  };
}
function objToString(value) {
  return ObjProto[TO_STRING].call(value);
}
function isUndefined(value) {
  return typeof value === UNDEFINED || value === UNDEFINED;
}
function isNullOrUndefined(value) {
  return value === NULL_VALUE || isUndefined(value);
}
function isStrictNullOrUndefined(value) {
  return value === NULL_VALUE || !isDefined(value);
}
function isDefined(arg) {
  return !!arg || arg !== UNDEF_VALUE;
}
function isPrimitiveType(theType) {
  !_primitiveTypes && (_primitiveTypes = ["string", "number", "boolean", UNDEFINED, "symbol", "bigint"]);
  return theType !== OBJECT && _primitiveTypes.indexOf(theType) !== -1;
}
var isString = _createIs("string");
var isFunction = _createIs(FUNCTION);
function isObject(value) {
  if (!value && isNullOrUndefined(value)) {
    return false;
  }
  return !!value && typeof value === OBJECT;
}
var isArray = _pureRef(ArrCls, "isArray");
var isDate = _createObjIs("Date");
var isNumber = _createIs("number");
var isBoolean = _createIs("boolean");
var isRegExp = _createObjIs("RegExp");
var isFile = _createObjIs("File");
var isFormData = _createObjIs("FormData");
var isBlob = _createObjIs("Blob");
var isArrayBuffer = _createObjIs("ArrayBuffer");
var isError = _createObjIs("Error");
function isPromiseLike(value) {
  return !!(value && value.then && isFunction(value.then));
}
function isTruthy(value) {
  return !(!value || safeGet(function() {
    return !(value && 0 + value);
  }, !value));
}
var objGetOwnPropertyDescriptor = _pureRef(ObjClass, "getOwnPropertyDescriptor");
function objHasOwnProperty(obj, prop) {
  return !!obj && ObjProto.hasOwnProperty[CALL](obj, prop);
}
var objHasOwn = _pureAssign(_pureRef(ObjClass, "hasOwn"), polyObjHasOwn);
function polyObjHasOwn(obj, prop) {
  return objHasOwnProperty(obj, prop) || !!objGetOwnPropertyDescriptor(obj, prop);
}
function objForEachKey(theObject, callbackfn, thisArg) {
  if (theObject && isObject(theObject)) {
    for (var prop in theObject) {
      if (objHasOwn(theObject, prop)) {
        if (callbackfn[CALL](thisArg || theObject, prop, theObject[prop]) === -1) {
          break;
        }
      }
    }
  }
}
function _createKeyValueMap(values, keyType, valueType, completeFn) {
  var theMap = {};
  objForEachKey(values, function(key, value) {
    theMap[key] = keyType ? value : key;
    theMap[value] = valueType ? value : key;
  });
  return completeFn(theMap);
}
var asString = _pureAssign(StrCls);
var ERROR_TYPE = "[object Error]";
function dumpObj(object, format) {
  var propertyValueDump = EMPTY;
  var objType = ObjProto[TO_STRING][CALL](object);
  if (objType === ERROR_TYPE) {
    object = { stack: asString(object.stack), message: asString(object.message), name: asString(object.name) };
  }
  try {
    propertyValueDump = JSON.stringify(object, NULL_VALUE, format ? typeof format === "number" ? format : 4 : UNDEF_VALUE);
    propertyValueDump = propertyValueDump && propertyValueDump.replace(/"(\w+)"\s*:\s{0,1}/g, "$1: ") || asString(object);
  } catch (e) {
    propertyValueDump = " - " + dumpObj(e, format);
  }
  return objType + ": " + propertyValueDump;
}
function throwError(message) {
  throw new Error(message);
}
function throwTypeError(message) {
  throw new TypeError(message);
}
function throwRangeError(message) {
  throw new RangeError(message);
}
function polyObjEntries(value) {
  var result = [];
  objForEachKey(value, function(key, value2) {
    result.push([key, value2]);
  });
  return result;
}
var _objFreeze = _pureRef(ObjClass, "freeze");
function _doNothing(value) {
  return value;
}
function _getProto(value) {
  return value[__PROTO__] || NULL_VALUE;
}
var objAssign = _pureRef(ObjClass, "assign");
var objKeys = _pureRef(ObjClass, "keys");
function objDeepFreeze(value) {
  if (_objFreeze) {
    objForEachKey(value, function(key, value2) {
      if (isArray(value2) || isObject(value2)) {
        _objFreeze(value2);
      }
    });
  }
  return objFreeze(value);
}
var objFreeze = _pureAssign(_objFreeze, _doNothing);
var objSeal = _pureAssign(_pureRef(ObjClass, "seal"), _doNothing);
var objGetPrototypeOf = _pureAssign(_pureRef(ObjClass, "getPrototypeOf"), _getProto);
var objEntries = _pureAssign(_pureRef(ObjClass, "entries"), polyObjEntries);
function createEnum(values) {
  return _createKeyValueMap(values, 1, 0, objDeepFreeze);
}
function createEnumKeyMap(values) {
  return _createKeyValueMap(values, 0, 0, objDeepFreeze);
}
function createSimpleMap(values) {
  var mapClass = {};
  objForEachKey(values, function(key, value) {
    mapClass[key] = value[1];
    mapClass[value[0]] = value[1];
  });
  return objDeepFreeze(mapClass);
}
function createTypeMap(values) {
  return createSimpleMap(values);
}
var _wellKnownSymbolMap = createEnumKeyMap({
  asyncIterator: 0,
  hasInstance: 1,
  isConcatSpreadable: 2,
  iterator: 3,
  match: 4,
  matchAll: 5,
  replace: 6,
  search: 7,
  species: 8,
  split: 9,
  toPrimitive: 10,
  toStringTag: 11,
  unscopables: 12
});
var GLOBAL_CONFIG_KEY = "__tsUtils$gblCfg";
var _globalCfg;
function _getGlobalValue() {
  var result;
  if (typeof globalThis !== UNDEFINED) {
    result = globalThis;
  }
  if (!result && typeof self !== UNDEFINED) {
    result = self;
  }
  if (!result && typeof window !== UNDEFINED) {
    result = window;
  }
  if (!result && typeof global !== UNDEFINED) {
    result = global;
  }
  return result;
}
function _getGlobalConfig() {
  if (!_globalCfg) {
    var gbl = safe(_getGlobalValue).v || {};
    _globalCfg = gbl[GLOBAL_CONFIG_KEY] = gbl[GLOBAL_CONFIG_KEY] || {};
  }
  return _globalCfg;
}
var _unwrapFunction = _unwrapFunctionWithPoly;
function _unwrapFunctionWithPoly(funcName, clsProto, polyFunc) {
  var clsFn = clsProto && clsProto[funcName];
  return function(thisArg) {
    var theFunc = thisArg && thisArg[funcName] || clsFn;
    if (theFunc || polyFunc) {
      var theArgs = arguments;
      return (theFunc || polyFunc).apply(thisArg, theFunc ? ArrSlice[CALL](theArgs, 1) : theArgs);
    }
    throwTypeError('"' + asString(funcName) + '" not defined for ' + dumpObj(thisArg));
  };
}
function _unwrapProp(propName) {
  return function(thisArg) {
    return thisArg[propName];
  };
}
var mathMin = _pureRef(MathCls, "min");
var mathMax = _pureRef(MathCls, "max");
var strSlice = _unwrapFunction("slice", StrProto);
var strSubstring = _unwrapFunction("substring", StrProto);
var strSubstr = _unwrapFunctionWithPoly("substr", StrProto, polyStrSubstr);
function polyStrSubstr(value, start, length) {
  if (isNullOrUndefined(value)) {
    throwTypeError("Invalid " + dumpObj(value));
  }
  if (length < 0) {
    return EMPTY;
  }
  start = start || 0;
  if (start < 0) {
    start = mathMax(start + value[LENGTH], 0);
  }
  if (isUndefined(length)) {
    return strSlice(value, start);
  }
  return strSlice(value, start, start + length);
}
function strLeft(value, count) {
  return strSubstring(value, 0, count);
}
var UNIQUE_REGISTRY_ID = "_urid";
var _polySymbols;
function _globalSymbolRegistry() {
  if (!_polySymbols) {
    var gblCfg = _getGlobalConfig();
    _polySymbols = gblCfg.gblSym = gblCfg.gblSym || { k: {}, s: {} };
  }
  return _polySymbols;
}
var _wellKnownSymbolCache;
function polyNewSymbol(description) {
  var theSymbol = {
    description: asString(description),
    toString: function() {
      return SYMBOL + "(" + description + ")";
    }
  };
  theSymbol[POLYFILL_TAG] = true;
  return theSymbol;
}
function polySymbolFor(key) {
  var registry = _globalSymbolRegistry();
  if (!objHasOwn(registry.k, key)) {
    var newSymbol_1 = polyNewSymbol(key);
    var regId_1 = objKeys(registry.s).length;
    newSymbol_1[UNIQUE_REGISTRY_ID] = function() {
      return regId_1 + "_" + newSymbol_1[TO_STRING]();
    };
    registry.k[key] = newSymbol_1;
    registry.s[newSymbol_1[UNIQUE_REGISTRY_ID]()] = asString(key);
  }
  return registry.k[key];
}
function polyGetKnownSymbol(name) {
  !_wellKnownSymbolCache && (_wellKnownSymbolCache = {});
  var result;
  var knownName = _wellKnownSymbolMap[name];
  if (knownName) {
    result = _wellKnownSymbolCache[knownName] = _wellKnownSymbolCache[knownName] || polyNewSymbol(SYMBOL + "." + knownName);
  }
  return result;
}
var propMap = {
  e: "enumerable",
  c: "configurable",
  v: "value",
  w: "writable",
  g: "get",
  s: "set"
};
function _createProp(value) {
  var prop = {};
  prop[propMap["c"]] = true;
  prop[propMap["e"]] = true;
  if (value.l) {
    prop.get = function() {
      return value.l.v;
    };
    var desc = objGetOwnPropertyDescriptor(value.l, "v");
    if (desc && desc.set) {
      prop.set = function(newValue) {
        value.l.v = newValue;
      };
    }
  }
  objForEachKey(value, function(key, value2) {
    prop[propMap[key]] = isUndefined(value2) ? prop[propMap[key]] : value2;
  });
  return prop;
}
var objDefineProp = _pureRef(ObjClass, "defineProperty");
var objDefineProperties = _pureRef(ObjClass, "defineProperties");
function objDefine(target, key, propDesc) {
  return objDefineProp(target, key, _createProp(propDesc));
}
var _globalLazyTestHooks;
function _initTestHooks() {
  _globalLazyTestHooks = _getGlobalConfig();
}
function getLazy(cb) {
  var lazyValue = {};
  !_globalLazyTestHooks && _initTestHooks();
  lazyValue.b = _globalLazyTestHooks.lzy;
  objDefineProp(lazyValue, "v", {
    configurable: true,
    get: function() {
      var result = cb();
      if (!_globalLazyTestHooks.lzy) {
        objDefineProp(lazyValue, "v", {
          value: result
        });
      }
      lazyValue.b = _globalLazyTestHooks.lzy;
      return result;
    }
  });
  return lazyValue;
}
function createCachedValue(value) {
  return objDefineProp({
    toJSON: function() {
      return value;
    }
  }, "v", { value });
}
var WINDOW = "window";
var _cachedGlobal;
function _getGlobalInstFn(getFn, theArgs) {
  var cachedValue;
  return function() {
    !_globalLazyTestHooks && _initTestHooks();
    (!cachedValue || _globalLazyTestHooks.lzy) && (cachedValue = createCachedValue(safe(getFn, theArgs).v));
    return cachedValue.v;
  };
}
function getGlobal(useCached) {
  !_globalLazyTestHooks && _initTestHooks();
  (!_cachedGlobal || useCached === false || _globalLazyTestHooks.lzy) && (_cachedGlobal = createCachedValue(safe(_getGlobalValue).v || NULL_VALUE));
  return _cachedGlobal.v;
}
function getInst(name, useCached) {
  var gbl = !_cachedGlobal || useCached === false ? getGlobal(useCached) : _cachedGlobal.v;
  if (gbl && gbl[name]) {
    return gbl[name];
  }
  if (name === WINDOW) {
    return getWindow();
  }
  return NULL_VALUE;
}
function hasDocument() {
  return !!getDocument();
}
var getDocument = _getGlobalInstFn(getInst, ["document"]);
function hasWindow() {
  return !!getWindow();
}
var getWindow = _getGlobalInstFn(getInst, [WINDOW]);
function hasNavigator() {
  return !!getNavigator();
}
var getNavigator = _getGlobalInstFn(getInst, ["navigator"]);
function hasHistory() {
  return !!getHistory();
}
var getHistory = _getGlobalInstFn(getInst, ["history"]);
var isNode = _getGlobalInstFn(function() {
  return !!safe(function() {
    return process && (process.versions || {}).node;
  }).v;
});
var isWebWorker = _getGlobalInstFn(function() {
  return !!safe(function() {
    return self && self instanceof WorkerGlobalScope;
  }).v;
});
var _symbol;
var _symbolFor;
function _initSymbol() {
  _symbol = createCachedValue(safe(getInst, [SYMBOL]).v);
  return _symbol;
}
function _getSymbolKey(key) {
  var gblSym = (!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol();
  return gblSym.v ? gblSym.v[key] : UNDEF_VALUE;
}
var isSymbol = _createIs("symbol");
function hasSymbol() {
  return !!getSymbol();
}
function getSymbol() {
  !_globalLazyTestHooks && _initTestHooks();
  return ((!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol()).v;
}
function getKnownSymbol(name, noPoly) {
  var knownName = _wellKnownSymbolMap[name];
  !_globalLazyTestHooks && _initTestHooks();
  var sym = (!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol();
  return sym.v ? sym.v[knownName || name] : !noPoly ? polyGetKnownSymbol(name) : UNDEF_VALUE;
}
function newSymbol(description, noPoly) {
  !_globalLazyTestHooks && _initTestHooks();
  var sym = (!_globalLazyTestHooks.lzy ? _symbol : 0) || _initSymbol();
  return sym.v ? sym.v(description) : !noPoly ? polyNewSymbol(description) : NULL_VALUE;
}
function symbolFor(key) {
  !_globalLazyTestHooks && _initTestHooks();
  _symbolFor = (!_globalLazyTestHooks.lzy ? _symbolFor : 0) || createCachedValue(safe(_getSymbolKey, ["for"]).v);
  return (_symbolFor.v || polySymbolFor)(key);
}
function isIterator(value) {
  return !!value && isFunction(value.next);
}
function isIterable(value) {
  return !isStrictNullOrUndefined(value) && isFunction(value[getKnownSymbol(3)]);
}
var _iterSymbol$1;
function iterForOf(iter, callbackfn, thisArg) {
  if (iter) {
    if (!isIterator(iter)) {
      !_iterSymbol$1 && (_iterSymbol$1 = createCachedValue(getKnownSymbol(3)));
      iter = iter[_iterSymbol$1.v] ? iter[_iterSymbol$1.v]() : null;
    }
    if (isIterator(iter)) {
      var err = UNDEF_VALUE;
      var iterResult = UNDEF_VALUE;
      try {
        var count = 0;
        while (!(iterResult = iter.next()).done) {
          if (callbackfn[CALL](thisArg || iter, iterResult.value, count, iter) === -1) {
            break;
          }
          count++;
        }
      } catch (failed) {
        err = { e: failed };
        if (iter.throw) {
          iterResult = NULL_VALUE;
          iter.throw(err);
        }
      } finally {
        try {
          if (iterResult && !iterResult.done) {
            iter.return && iter.return(iterResult);
          }
        } finally {
          if (err) {
            throw err.e;
          }
        }
      }
    }
  }
}
function fnApply(fn, thisArg, argArray) {
  return fn.apply(thisArg, argArray);
}
function arrAppend(target, elms) {
  if (!isUndefined(elms) && target) {
    if (isArray(elms)) {
      fnApply(target.push, target, elms);
    } else if (isIterator(elms) || isIterable(elms)) {
      iterForOf(elms, function(elm) {
        target.push(elm);
      });
    } else {
      target.push(elms);
    }
  }
  return target;
}
var arrEvery = _unwrapFunction("every", ArrProto);
var arrFilter = _unwrapFunction("filter", ArrProto);
function arrForEach(theArray, callbackfn, thisArg) {
  if (theArray) {
    var len = theArray[LENGTH] >>> 0;
    for (var idx = 0; idx < len; idx++) {
      if (idx in theArray) {
        if (callbackfn[CALL](thisArg || theArray, theArray[idx], idx, theArray) === -1) {
          break;
        }
      }
    }
  }
}
var arrIndexOf = _unwrapFunction("indexOf", ArrProto);
var arrLastIndexOf = _unwrapFunction("lastIndexOf", ArrProto);
var arrMap = _unwrapFunction("map", ArrProto);
function arrSlice(theArray, start, end) {
  return (theArray && theArray["slice"] || ArrSlice).apply(theArray, ArrSlice[CALL](arguments, 1));
}
function polyArrIncludes(theArray, searchElement, fromIndex) {
  return arrIndexOf(theArray, searchElement, fromIndex) !== -1;
}
function polyArrFind(theArray, callbackFn, thisArg) {
  var result;
  var idx = polyArrFindIndex(theArray, callbackFn, thisArg);
  return idx !== -1 ? theArray[idx] : result;
}
function polyArrFindIndex(theArray, callbackFn, thisArg) {
  var result = -1;
  arrForEach(theArray, function(value, index) {
    if (callbackFn[CALL](thisArg | theArray, value, index, theArray)) {
      result = index;
      return -1;
    }
  });
  return result;
}
function polyArrFindLast(theArray, callbackFn, thisArg) {
  var result;
  var idx = polyArrFindLastIndex(theArray, callbackFn, thisArg);
  return idx !== -1 ? theArray[idx] : result;
}
function polyArrFindLastIndex(theArray, callbackFn, thisArg) {
  var result = -1;
  var len = theArray[LENGTH] >>> 0;
  for (var idx = len - 1; idx >= 0; idx--) {
    if (idx in theArray && callbackFn[CALL](thisArg | theArray, theArray[idx], idx, theArray)) {
      result = idx;
      break;
    }
  }
  return result;
}
function polyArrFrom(theValue, mapFn, thisArg) {
  if (isArray(theValue)) {
    var result_1 = arrSlice(theValue);
    return mapFn ? arrMap(result_1, mapFn, thisArg) : result_1;
  }
  var result = [];
  iterForOf(theValue, function(value, cnt) {
    return result.push(mapFn ? mapFn[CALL](thisArg, value, cnt) : value);
  });
  return result;
}
var arrFind = _unwrapFunctionWithPoly("find", ArrProto, polyArrFind);
var arrFindIndex = _unwrapFunctionWithPoly("findIndex", ArrProto, polyArrFindIndex);
var arrFindLast = _unwrapFunctionWithPoly("findLast", ArrProto, polyArrFindLast);
var arrFindLastIndex = _unwrapFunctionWithPoly("findLastIndex", ArrProto, polyArrFindLastIndex);
var arrFrom = _pureAssign(_pureRef(ArrCls, "from"), polyArrFrom);
var arrIncludes = _unwrapFunctionWithPoly("includes", ArrProto, polyArrIncludes);
var arrReduce = _unwrapFunction("reduce", ArrProto);
var arrSome = _unwrapFunction("some", ArrProto);
var objCreate = _pureAssign(_pureRef(ObjClass, "create"), polyObjCreate);
function polyObjCreate(obj) {
  if (!obj) {
    return {};
  }
  var type = typeof obj;
  if (type !== OBJECT && type !== FUNCTION) {
    throwTypeError("Prototype must be an Object or function: " + dumpObj(obj));
  }
  function tempFunc() {
  }
  tempFunc[PROTOTYPE] = obj;
  return new tempFunc();
}
var _isProtoArray;
function objSetPrototypeOf(obj, proto) {
  var fn = ObjClass["setPrototypeOf"] || function(d, b) {
    var _a12;
    !_isProtoArray && (_isProtoArray = createCachedValue((_a12 = {}, _a12[__PROTO__] = [], _a12) instanceof Array));
    _isProtoArray.v ? d[__PROTO__] = b : objForEachKey(b, function(key, value) {
      return d[key] = value;
    });
  };
  return fn(obj, proto);
}
function _createCustomError(name, d, b) {
  safe(objDefine, [d, NAME, { v: name, c: true, e: false }]);
  d = objSetPrototypeOf(d, b);
  function __() {
    this[CONSTRUCTOR] = d;
    safe(objDefine, [this, NAME, { v: name, c: true, e: false }]);
  }
  d[PROTOTYPE] = b === NULL_VALUE ? objCreate(b) : (__[PROTOTYPE] = b[PROTOTYPE], new __());
  return d;
}
function _setName(baseClass, name) {
  name && (baseClass[NAME] = name);
}
function createCustomError(name, constructCb, errorBase) {
  var theBaseClass = errorBase || Error;
  var orgName = theBaseClass[PROTOTYPE][NAME];
  var captureFn = Error.captureStackTrace;
  return _createCustomError(name, function() {
    var _this = this;
    var theArgs = arguments;
    try {
      safe(_setName, [theBaseClass, name]);
      var _self = fnApply(theBaseClass, _this, ArrSlice[CALL](theArgs)) || _this;
      if (_self !== _this) {
        var orgProto = objGetPrototypeOf(_this);
        if (orgProto !== objGetPrototypeOf(_self)) {
          objSetPrototypeOf(_self, orgProto);
        }
      }
      captureFn && captureFn(_self, _this[CONSTRUCTOR]);
      constructCb && constructCb(_self, theArgs);
      return _self;
    } finally {
      safe(_setName, [theBaseClass, orgName]);
    }
  }, theBaseClass);
}
var _unsupportedError;
function throwUnsupported(message) {
  if (!_unsupportedError) {
    _unsupportedError = createCustomError("UnsupportedError");
  }
  throw new _unsupportedError(message);
}
function utcNow() {
  return (Date.now || polyUtcNow)();
}
function polyUtcNow() {
  return (/* @__PURE__ */ new Date()).getTime();
}
function _createTrimFn(exp) {
  return function _doTrim(value) {
    if (isNullOrUndefined(value)) {
      throwTypeError("strTrim called [" + dumpObj(value) + "]");
    }
    if (value && value.replace) {
      value = value.replace(exp, EMPTY);
    }
    return value;
  };
}
var polyStrTrim = _createTrimFn(/^\s+|(?=\s)\s+$/g);
var polyStrTrimStart = _createTrimFn(/^\s+/g);
var polyStrTrimEnd = _createTrimFn(/(?=\s)\s+$/g);
var strTrim = _unwrapFunctionWithPoly("trim", StrProto, polyStrTrim);
var strTrimStart = _unwrapFunctionWithPoly("trimStart", StrProto, polyStrTrimStart);
var strTrimLeft = _pureAssign(strTrimStart);
var strTrimEnd = _unwrapFunctionWithPoly("trimEnd", StrProto, polyStrTrimEnd);
var strTrimRight = _pureAssign(strTrimEnd);
var strUpper = _unwrapFunction("toUpperCase", StrProto);
var strLower = _unwrapFunction("toLowerCase", StrProto);
var mathFloor = _pureRef(MathCls, "floor");
var mathCeil = _pureRef(MathCls, "ceil");
var mathTrunc = _pureAssign(_pureRef(MathCls, "trunc"), polyMathTrunc);
function polyMathTrunc(value) {
  var theValue = +value;
  return (theValue > 0 ? mathFloor : mathCeil)(theValue);
}
function mathToInt(value, throwInfinity) {
  var result = +value;
  if (result == Infinity && throwInfinity) {
    throwRangeError("invalid value [" + dumpObj(value) + "]");
  }
  return result !== result || result === 0 ? 0 : mathTrunc(result);
}
var strRepeat = _unwrapFunctionWithPoly("repeat", StrProto, polyStrRepeat);
function polyStrRepeat(value, count) {
  if (isNullOrUndefined(value)) {
    throwTypeError("can't convert [" + dumpObj(value) + "]");
  }
  count = mathToInt(count, true);
  if (count < 0) {
    throwRangeError("invalid count must be >= 0 && < Infinity");
  }
  var pad = isString(value) ? value : asString(value);
  var result = EMPTY;
  for (; count > 0; (count >>>= 1) && (pad += pad)) {
    if (count & 1) {
      result += pad;
    }
  }
  return result;
}
function _padValue(value, targetLength, padString) {
  var result = EMPTY;
  targetLength = mathToInt(targetLength, true);
  targetLength >>= 0;
  var len = value[LENGTH];
  if (len < targetLength) {
    result = isNullOrUndefined(padString) ? " " : asString(padString);
    targetLength = targetLength - len;
    if (targetLength > result[LENGTH]) {
      result = strRepeat(result, mathCeil(targetLength / result[LENGTH]));
    }
    if (result[LENGTH] > targetLength) {
      result = strSubstring(result, 0, targetLength);
    }
  }
  return result;
}
var strPadStart = _unwrapFunctionWithPoly("padStart", StrProto, polyStrPadStart);
var strPadEnd = _unwrapFunctionWithPoly("padEnd", StrProto, polyStrPadEnd);
function polyStrPadStart(value, targetLength, padString) {
  return _padValue(value, targetLength, padString) + value;
}
function polyStrPadEnd(value, targetLength, padString) {
  return value + _padValue(value, targetLength, padString);
}
var _fnToString;
var _objCtrFnString;
var _gblWindow;
function isPlainObject(value) {
  if (!value || typeof value !== OBJECT) {
    return false;
  }
  if (!_gblWindow) {
    _gblWindow = hasWindow() ? getWindow() : true;
  }
  var result = false;
  if (value !== _gblWindow) {
    if (!_objCtrFnString) {
      _fnToString = Function[PROTOTYPE][TO_STRING];
      _objCtrFnString = _fnToString[CALL](ObjClass);
    }
    try {
      var proto = objGetPrototypeOf(value);
      result = !proto;
      if (!result) {
        if (objHasOwnProperty(proto, CONSTRUCTOR)) {
          proto = proto[CONSTRUCTOR];
        }
        result = proto && typeof proto === FUNCTION && _fnToString[CALL](proto) === _objCtrFnString;
      }
    } catch (ex) {
    }
  }
  return result;
}
function _defaultDeepCopyHandler(details) {
  details.value && plainObjDeepCopyHandler(details);
  return true;
}
var defaultDeepCopyHandlers = [
  arrayDeepCopyHandler,
  plainObjDeepCopyHandler,
  functionDeepCopyHandler,
  dateDeepCopyHandler
];
function _getSetVisited(visitMap, source, newPath, cb) {
  var theEntry;
  arrForEach(visitMap, function(entry) {
    if (entry.k === source) {
      theEntry = entry;
      return -1;
    }
  });
  if (!theEntry) {
    theEntry = { k: source, v: source };
    visitMap.push(theEntry);
    cb(theEntry);
  }
  return theEntry.v;
}
function _deepCopy(visitMap, value, ctx, key) {
  var userHandler = ctx.handler;
  var newPath = ctx.path ? key ? ctx.path.concat(key) : ctx.path : [];
  var newCtx = {
    handler: ctx.handler,
    src: ctx.src,
    path: newPath
  };
  var theType = typeof value;
  var isPlain = false;
  var isPrim = false;
  if (value && theType === OBJECT) {
    isPlain = isPlainObject(value);
  } else {
    isPrim = value === NULL_VALUE || isPrimitiveType(theType);
  }
  var details = {
    type: theType,
    isPrim,
    isPlain,
    value,
    result: value,
    path: newPath,
    origin: ctx.src,
    copy: function(source, newKey) {
      return _deepCopy(visitMap, source, newKey ? newCtx : ctx, newKey);
    },
    copyTo: function(target, source) {
      return _copyProps(visitMap, target, source, newCtx);
    }
  };
  if (!details.isPrim) {
    return _getSetVisited(visitMap, value, newPath, function(newEntry) {
      objDefine(details, "result", {
        g: function() {
          return newEntry.v;
        },
        s: function(newValue) {
          newEntry.v = newValue;
        }
      });
      var idx = 0;
      var handler = userHandler;
      while (!(handler || (idx < defaultDeepCopyHandlers.length ? defaultDeepCopyHandlers[idx++] : _defaultDeepCopyHandler))[CALL](ctx, details)) {
        handler = NULL_VALUE;
      }
    });
  }
  if (userHandler && userHandler[CALL](ctx, details)) {
    return details.result;
  }
  return value;
}
function _copyProps(visitMap, target, source, ctx) {
  if (!isNullOrUndefined(source)) {
    for (var key in source) {
      target[key] = _deepCopy(visitMap, source[key], ctx, key);
    }
  }
  return target;
}
function objCopyProps(target, source, handler) {
  var ctx = {
    handler,
    src: source,
    path: []
  };
  return _copyProps([], target, source, ctx);
}
function objDeepCopy(source, handler) {
  var ctx = {
    handler,
    src: source
  };
  return _deepCopy([], source, ctx);
}
function arrayDeepCopyHandler(details) {
  var value = details.value;
  if (isArray(value)) {
    var target = details.result = [];
    target.length = value.length;
    details.copyTo(target, value);
    return true;
  }
  return false;
}
function dateDeepCopyHandler(details) {
  var value = details.value;
  if (isDate(value)) {
    details.result = new Date(value.getTime());
    return true;
  }
  return false;
}
function functionDeepCopyHandler(details) {
  if (details.type === FUNCTION) {
    return true;
  }
  return false;
}
function plainObjDeepCopyHandler(details) {
  var value = details.value;
  if (value && details.isPlain) {
    var target = details.result = {};
    details.copyTo(target, value);
    return true;
  }
  return false;
}
function _doExtend(target, theArgs) {
  arrForEach(theArgs, function(theArg) {
    objCopyProps(target, theArg);
  });
  return target;
}
function deepExtend(target, obj1, obj2, obj3, obj4, obj5, obj6) {
  return _doExtend(objDeepCopy(target) || {}, ArrSlice[CALL](arguments));
}
function objExtend(target, obj1, obj2, obj3, obj4, obj5, obj6) {
  return _doExtend(target || {}, ArrSlice[CALL](arguments));
}
var getLength = _unwrapProp(LENGTH);
var _perf;
function getPerformance() {
  !_globalLazyTestHooks && _initTestHooks();
  (!_perf || _globalLazyTestHooks.lzy) && (_perf = createCachedValue(safe(getInst, ["performance"]).v));
  return _perf.v;
}
function perfNow() {
  var perf = getPerformance();
  if (perf && perf.now) {
    return perf.now();
  }
  return utcNow();
}
function elapsedTime(startTime) {
  return perfNow() - startTime;
}
function polyStrSymSplit(value, splitter, limit) {
  var splitFn = splitter && splitter[getKnownSymbol(9)];
  return splitFn ? splitFn(value, limit) : [value];
}
var strSplit = _unwrapFunction("split", StrProto);
var strSymSplit = _unwrapFunctionWithPoly("split", StrProto, !hasSymbol() ? polyStrSymSplit : null);
function setValueByKey(target, path, value) {
  if (target && path) {
    var parts = strSplit(path, ".");
    var lastKey = parts.pop();
    arrForEach(parts, function(key) {
      if (isNullOrUndefined(target[key])) {
        target[key] = {};
      }
      target = target[key];
    });
    target[lastKey] = value;
  }
}
var strEndsWith = _unwrapFunctionWithPoly("endsWith", StrProto, polyStrEndsWith);
function polyStrEndsWith(value, searchString, length) {
  if (!isString(value)) {
    throwTypeError("'" + dumpObj(value) + "' is not a string");
  }
  var searchValue = isString(searchString) ? searchString : asString(searchString);
  var end = !isUndefined(length) && length < value[LENGTH] ? length : value[LENGTH];
  return strSubstring(value, end - searchValue[LENGTH], end) === searchValue;
}
var strIndexOf = _unwrapFunction("indexOf", StrProto);
var strLastIndexOf = _unwrapFunction("lastIndexOf", StrProto);
var strIncludes = _unwrapFunctionWithPoly("includes", StrProto, polyStrIncludes);
var strContains = _pureAssign(strIncludes);
function polyStrIncludes(value, searchString, position) {
  if (isRegExp(searchString)) {
    throwTypeError("'searchString' must not be a regular expression" + dumpObj(searchString));
  }
  return strIndexOf(value, asString(searchString), position) !== -1;
}
var strStartsWith = _unwrapFunctionWithPoly("startsWith", StrProto, polyStrStartsWith);
function polyStrStartsWith(value, searchString, position) {
  if (!isString(value)) {
    throwTypeError("'" + dumpObj(value) + "' is not a string");
  }
  var searchValue = isString(searchString) ? searchString : asString(searchString);
  var pos = position > 0 ? position : 0;
  return strSubstring(value, pos, pos + searchValue[LENGTH]) === searchValue;
}
var REF = "ref";
var UNREF = "unref";
var HAS_REF = "hasRef";
var ENABLED = "enabled";
function _createTimerHandler(startTimer, refreshFn, cancelFn) {
  var ref = true;
  var timerId = startTimer ? refreshFn(NULL_VALUE) : NULL_VALUE;
  var theTimerHandler;
  function _unref() {
    ref = false;
    timerId && timerId[UNREF] && timerId[UNREF]();
    return theTimerHandler;
  }
  function _cancel() {
    timerId && cancelFn(timerId);
    timerId = NULL_VALUE;
  }
  function _refresh() {
    timerId = refreshFn(timerId);
    if (!ref) {
      _unref();
    }
    return theTimerHandler;
  }
  function _setEnabled(value) {
    !value && timerId && _cancel();
    value && !timerId && _refresh();
  }
  theTimerHandler = {
    cancel: _cancel,
    refresh: _refresh
  };
  theTimerHandler[HAS_REF] = function() {
    if (timerId && timerId[HAS_REF]) {
      return timerId[HAS_REF]();
    }
    return ref;
  };
  theTimerHandler[REF] = function() {
    ref = true;
    timerId && timerId[REF] && timerId[REF]();
    return theTimerHandler;
  };
  theTimerHandler[UNREF] = _unref;
  theTimerHandler = objDefineProp(theTimerHandler, ENABLED, {
    get: function() {
      return !!timerId;
    },
    set: _setEnabled
  });
  return {
    h: theTimerHandler,
    dn: function() {
      timerId = NULL_VALUE;
    }
  };
}
function _createTimeoutWith(startTimer, overrideFn, theArgs) {
  var isArr = isArray(overrideFn);
  var len = isArr ? overrideFn.length : 0;
  var setFn = (len > 0 ? overrideFn[0] : !isArr ? overrideFn : UNDEF_VALUE) || setTimeout;
  var clearFn = (len > 1 ? overrideFn[1] : UNDEF_VALUE) || clearTimeout;
  var timerFn = theArgs[0];
  theArgs[0] = function() {
    handler.dn();
    fnApply(timerFn, UNDEF_VALUE, ArrSlice[CALL](arguments));
  };
  var handler = _createTimerHandler(startTimer, function(timerId) {
    if (timerId) {
      if (timerId.refresh) {
        timerId.refresh();
        return timerId;
      }
      fnApply(clearFn, UNDEF_VALUE, [timerId]);
    }
    return fnApply(setFn, UNDEF_VALUE, theArgs);
  }, function(timerId) {
    fnApply(clearFn, UNDEF_VALUE, [timerId]);
  });
  return handler.h;
}
function scheduleTimeout(callback, timeout) {
  return _createTimeoutWith(true, UNDEF_VALUE, ArrSlice[CALL](arguments));
}
function createTimeout(callback, timeout) {
  return _createTimeoutWith(false, UNDEF_VALUE, ArrSlice[CALL](arguments));
}
var _defaultIdleTimeout = 100;
var _maxExecutionTime = 50;
function hasIdleCallback() {
  return !!getIdleCallback();
}
var getIdleCallback = _getGlobalInstFn(getInst, ["requestIdleCallback"]);
var getCancelIdleCallback = _getGlobalInstFn(getInst, ["cancelIdleCallback"]);
function scheduleIdleCallback(callback, options) {
  function _createDeadline(timedOut) {
    var startTime = perfNow();
    return {
      didTimeout: timedOut,
      timeRemaining: function() {
        return _maxExecutionTime - elapsedTime(startTime);
      }
    };
  }
  if (hasIdleCallback()) {
    var handler_1 = _createTimerHandler(true, function(idleId) {
      idleId && getCancelIdleCallback()(idleId);
      return getIdleCallback()(function(deadline) {
        handler_1.dn();
        callback(deadline || _createDeadline(false));
      }, options);
    }, function(idleId) {
      getCancelIdleCallback()(idleId);
    });
    return handler_1.h;
  }
  var timeout = (options || {}).timeout;
  if (isUndefined(timeout)) {
    timeout = _defaultIdleTimeout;
  }
  return scheduleTimeout(function() {
    callback(_createDeadline(true));
  }, timeout);
}

// node_modules/@microsoft/dynamicproto-js/dist-es5/DynamicProto.js
var _a;
var Constructor = "constructor";
var Prototype = "prototype";
var strFunction = "function";
var DynInstFuncTable = "_dynInstFuncs";
var DynProxyTag = "_isDynProxy";
var DynClassName = "_dynClass";
var DynClassNamePrefix = "_dynCls$";
var DynInstChkTag = "_dynInstChk";
var DynAllowInstChkTag = DynInstChkTag;
var DynProtoDefaultOptions = "_dfOpts";
var UnknownValue = "_unknown_";
var str__Proto = "__proto__";
var DynProtoBaseProto = "_dyn" + str__Proto;
var DynProtoGlobalSettings = "__dynProto$Gbl";
var DynProtoCurrent = "_dynInstProto";
var strUseBaseInst = "useBaseInst";
var strSetInstFuncs = "setInstFuncs";
var Obj = Object;
var _objGetPrototypeOf = Obj["getPrototypeOf"];
var _objGetOwnProps = Obj["getOwnPropertyNames"];
var _gbl = getGlobal();
var _gblInst = _gbl[DynProtoGlobalSettings] || (_gbl[DynProtoGlobalSettings] = {
  o: (_a = {}, _a[strSetInstFuncs] = true, _a[strUseBaseInst] = true, _a),
  n: 1e3
  // Start new global index @ 1000 so we "fix" some cases when mixed with 1.1.6 or earlier
});
function _isObjectOrArrayPrototype(target) {
  return target && (target === Obj[Prototype] || target === Array[Prototype]);
}
function _isObjectArrayOrFunctionPrototype(target) {
  return _isObjectOrArrayPrototype(target) || target === Function[Prototype];
}
function _getObjProto(target) {
  var newProto;
  if (target) {
    if (_objGetPrototypeOf) {
      return _objGetPrototypeOf(target);
    }
    var curProto = target[str__Proto] || target[Prototype] || (target[Constructor] ? target[Constructor][Prototype] : null);
    newProto = target[DynProtoBaseProto] || curProto;
    if (!objHasOwnProperty(target, DynProtoBaseProto)) {
      delete target[DynProtoCurrent];
      newProto = target[DynProtoBaseProto] = target[DynProtoCurrent] || target[DynProtoBaseProto];
      target[DynProtoCurrent] = curProto;
    }
  }
  return newProto;
}
function _forEachProp(target, func) {
  var props = [];
  if (_objGetOwnProps) {
    props = _objGetOwnProps(target);
  } else {
    for (var name_1 in target) {
      if (typeof name_1 === "string" && objHasOwnProperty(target, name_1)) {
        props.push(name_1);
      }
    }
  }
  if (props && props.length > 0) {
    for (var lp = 0; lp < props.length; lp++) {
      func(props[lp]);
    }
  }
}
function _isDynamicCandidate(target, funcName, skipOwn) {
  return funcName !== Constructor && typeof target[funcName] === strFunction && (skipOwn || objHasOwnProperty(target, funcName)) && funcName !== str__Proto && funcName !== Prototype;
}
function _throwTypeError(message) {
  throwTypeError("DynamicProto: " + message);
}
function _getInstanceFuncs(thisTarget) {
  var instFuncs = objCreate(null);
  _forEachProp(thisTarget, function(name) {
    if (!instFuncs[name] && _isDynamicCandidate(thisTarget, name, false)) {
      instFuncs[name] = thisTarget[name];
    }
  });
  return instFuncs;
}
function _hasVisited(values, value) {
  for (var lp = values.length - 1; lp >= 0; lp--) {
    if (values[lp] === value) {
      return true;
    }
  }
  return false;
}
function _getBaseFuncs(classProto, thisTarget, instFuncs, useBaseInst) {
  function _instFuncProxy(target, funcHost, funcName) {
    var theFunc = funcHost[funcName];
    if (theFunc[DynProxyTag] && useBaseInst) {
      var instFuncTable = target[DynInstFuncTable] || {};
      if (instFuncTable[DynAllowInstChkTag] !== false) {
        theFunc = (instFuncTable[funcHost[DynClassName]] || {})[funcName] || theFunc;
      }
    }
    return function() {
      return theFunc.apply(target, arguments);
    };
  }
  var baseFuncs = objCreate(null);
  _forEachProp(instFuncs, function(name) {
    baseFuncs[name] = _instFuncProxy(thisTarget, instFuncs, name);
  });
  var baseProto = _getObjProto(classProto);
  var visited = [];
  while (baseProto && !_isObjectArrayOrFunctionPrototype(baseProto) && !_hasVisited(visited, baseProto)) {
    _forEachProp(baseProto, function(name) {
      if (!baseFuncs[name] && _isDynamicCandidate(baseProto, name, !_objGetPrototypeOf)) {
        baseFuncs[name] = _instFuncProxy(thisTarget, baseProto, name);
      }
    });
    visited.push(baseProto);
    baseProto = _getObjProto(baseProto);
  }
  return baseFuncs;
}
function _getInstFunc(target, funcName, proto, currentDynProtoProxy) {
  var instFunc = null;
  if (target && objHasOwnProperty(proto, DynClassName)) {
    var instFuncTable = target[DynInstFuncTable] || objCreate(null);
    instFunc = (instFuncTable[proto[DynClassName]] || objCreate(null))[funcName];
    if (!instFunc) {
      _throwTypeError("Missing [" + funcName + "] " + strFunction);
    }
    if (!instFunc[DynInstChkTag] && instFuncTable[DynAllowInstChkTag] !== false) {
      var canAddInst = !objHasOwnProperty(target, funcName);
      var objProto = _getObjProto(target);
      var visited = [];
      while (canAddInst && objProto && !_isObjectArrayOrFunctionPrototype(objProto) && !_hasVisited(visited, objProto)) {
        var protoFunc = objProto[funcName];
        if (protoFunc) {
          canAddInst = protoFunc === currentDynProtoProxy;
          break;
        }
        visited.push(objProto);
        objProto = _getObjProto(objProto);
      }
      try {
        if (canAddInst) {
          target[funcName] = instFunc;
        }
        instFunc[DynInstChkTag] = 1;
      } catch (e) {
        instFuncTable[DynAllowInstChkTag] = false;
      }
    }
  }
  return instFunc;
}
function _getProtoFunc(funcName, proto, currentDynProtoProxy) {
  var protoFunc = proto[funcName];
  if (protoFunc === currentDynProtoProxy) {
    protoFunc = _getObjProto(proto)[funcName];
  }
  if (typeof protoFunc !== strFunction) {
    _throwTypeError("[" + funcName + "] is not a " + strFunction);
  }
  return protoFunc;
}
function _populatePrototype(proto, className, target, baseInstFuncs, setInstanceFunc) {
  function _createDynamicPrototype(proto2, funcName) {
    var dynProtoProxy = function() {
      var instFunc = _getInstFunc(this, funcName, proto2, dynProtoProxy) || _getProtoFunc(funcName, proto2, dynProtoProxy);
      return instFunc.apply(this, arguments);
    };
    dynProtoProxy[DynProxyTag] = 1;
    return dynProtoProxy;
  }
  if (!_isObjectOrArrayPrototype(proto)) {
    var instFuncTable = target[DynInstFuncTable] = target[DynInstFuncTable] || objCreate(null);
    if (!_isObjectOrArrayPrototype(instFuncTable)) {
      var instFuncs_1 = instFuncTable[className] = instFuncTable[className] || objCreate(null);
      if (instFuncTable[DynAllowInstChkTag] !== false) {
        instFuncTable[DynAllowInstChkTag] = !!setInstanceFunc;
      }
      if (!_isObjectOrArrayPrototype(instFuncs_1)) {
        _forEachProp(target, function(name) {
          if (_isDynamicCandidate(target, name, false) && target[name] !== baseInstFuncs[name]) {
            instFuncs_1[name] = target[name];
            delete target[name];
            if (!objHasOwnProperty(proto, name) || proto[name] && !proto[name][DynProxyTag]) {
              proto[name] = _createDynamicPrototype(proto, name);
            }
          }
        });
      }
    }
  }
}
function _checkPrototype(classProto, thisTarget) {
  if (_objGetPrototypeOf) {
    var visited = [];
    var thisProto = _getObjProto(thisTarget);
    while (thisProto && !_isObjectArrayOrFunctionPrototype(thisProto) && !_hasVisited(visited, thisProto)) {
      if (thisProto === classProto) {
        return true;
      }
      visited.push(thisProto);
      thisProto = _getObjProto(thisProto);
    }
    return false;
  }
  return true;
}
function _getObjName(target, unknownValue) {
  if (objHasOwnProperty(target, Prototype)) {
    return target.name || unknownValue || UnknownValue;
  }
  return ((target || {})[Constructor] || {}).name || unknownValue || UnknownValue;
}
function dynamicProto(theClass, target, delegateFunc, options) {
  if (!objHasOwnProperty(theClass, Prototype)) {
    _throwTypeError("theClass is an invalid class definition.");
  }
  var classProto = theClass[Prototype];
  if (!_checkPrototype(classProto, target)) {
    _throwTypeError("[" + _getObjName(theClass) + "] not in hierarchy of [" + _getObjName(target) + "]");
  }
  var className = null;
  if (objHasOwnProperty(classProto, DynClassName)) {
    className = classProto[DynClassName];
  } else {
    className = DynClassNamePrefix + _getObjName(theClass, "_") + "$" + _gblInst.n;
    _gblInst.n++;
    classProto[DynClassName] = className;
  }
  var perfOptions = dynamicProto[DynProtoDefaultOptions];
  var useBaseInst = !!perfOptions[strUseBaseInst];
  if (useBaseInst && options && options[strUseBaseInst] !== void 0) {
    useBaseInst = !!options[strUseBaseInst];
  }
  var instFuncs = _getInstanceFuncs(target);
  var baseFuncs = _getBaseFuncs(classProto, target, instFuncs, useBaseInst);
  delegateFunc(target, baseFuncs);
  var setInstanceFunc = !!_objGetPrototypeOf && !!perfOptions[strSetInstFuncs];
  if (setInstanceFunc && options) {
    setInstanceFunc = !!options[strSetInstFuncs];
  }
  _populatePrototype(classProto, className, target, instFuncs, setInstanceFunc !== false);
}
dynamicProto[DynProtoDefaultOptions] = _gblInst.o;

// node_modules/@microsoft/applicationinsights-shims/dist-es5/Constants.js
var strShimFunction = "function";
var strShimObject = "object";
var strShimUndefined = "undefined";
var strShimPrototype = "prototype";
var ObjClass2 = Object;
var ObjProto2 = ObjClass2[strShimPrototype];

// node_modules/@microsoft/applicationinsights-shims/dist-es5/TsLibShims.js
var SymbolObj = (getGlobal() || {})["Symbol"];
var ReflectObj = (getGlobal() || {})["Reflect"];
var strHasOwnProperty = "hasOwnProperty";
var __objAssignFnImpl = function(t) {
  for (var s, i = 1, n = arguments.length; i < n; i++) {
    s = arguments[i];
    for (var p in s) {
      if (ObjProto2[strHasOwnProperty].call(s, p)) {
        t[p] = s[p];
      }
    }
  }
  return t;
};
var __assignFn = objAssign || __objAssignFnImpl;
var extendStaticsFn = function(d, b) {
  extendStaticsFn = ObjClass2["setPrototypeOf"] || // tslint:disable-next-line: only-arrow-functions
  { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || // tslint:disable-next-line: only-arrow-functions
  function(d2, b2) {
    for (var p in b2) {
      if (b2[strHasOwnProperty](p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStaticsFn(d, b);
};
function __extendsFn(d, b) {
  if (typeof b !== strShimFunction && b !== null) {
    throwTypeError("Class extends value " + String(b) + " is not a constructor or null");
  }
  extendStaticsFn(d, b);
  function __() {
    this.constructor = d;
  }
  d[strShimPrototype] = b === null ? objCreate(b) : (__[strShimPrototype] = b[strShimPrototype], new __());
}
function __spreadArrayFn(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
    to[j] = from[i];
  }
  return to;
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK.Enums/EnumHelperFuncs.js
var createEnumStyle = createEnum;
var createValueMap = createTypeMap;

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK.Enums/EventsDiscardedReason.js
var EventsDiscardedReason = createEnumStyle({
  /**
   * Unknown.
   */
  Unknown: 0,
  /**
   * Status set to non-retryable.
   */
  NonRetryableStatus: 1,
  /**
   * The event is invalid.
   */
  InvalidEvent: 2,
  /**
   * The size of the event is too large.
   */
  SizeLimitExceeded: 3,
  /**
   * The server is not accepting events from this instrumentation key.
   */
  KillSwitch: 4,
  /**
   * The event queue is full.
   */
  QueueFull: 5
  /* eEventsDiscardedReason.QueueFull */
});
var BatchDiscardedReason = createEnumStyle({
  /**
   * Unknown.
   */
  Unknown: 0,
  /**
    * Status set to non-retryable after sending
    */
  NonRetryableStatus: 1,
  /**
   * Batches with lower number of critical events are dropped to free up storage space
   */
  CleanStorage: 2,
  /**
   * The batches in storage exceed max allowed time
   */
  MaxInStorageTimeExceeded: 3
  /* eBatchDiscardedReason.MaxInStorageTimeExceeded */
});

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/__DynamicConstants.js
var _DYN_TO_LOWER_CASE = "toLowerCase";
var _DYN_BLK_VAL = "blkVal";
var _DYN_LENGTH = "length";
var _DYN_RD_ONLY = "rdOnly";
var _DYN_NOTIFY = "notify";
var _DYN_WARN_TO_CONSOLE = "warnToConsole";
var _DYN_THROW_INTERNAL = "throwInternal";
var _DYN_SET_DF = "setDf";
var _DYN_WATCH = "watch";
var _DYN_LOGGER = "logger";
var _DYN_APPLY = "apply";
var _DYN_PUSH = "push";
var _DYN_SPLICE = "splice";
var _DYN_HDLR = "hdlr";
var _DYN_CANCEL = "cancel";
var _DYN_INITIALIZE = "initialize";
var _DYN_IDENTIFIER = "identifier";
var _DYN_REMOVE_NOTIFICATION_0 = "removeNotificationListener";
var _DYN_ADD_NOTIFICATION_LIS1 = "addNotificationListener";
var _DYN_IS_INITIALIZED = "isInitialized";
var _DYN_GET_NOTIFY_MGR = "getNotifyMgr";
var _DYN_GET_PLUGIN = "getPlugin";
var _DYN_POLL_INTERNAL_LOGS = "pollInternalLogs";
var _DYN_NAME = "name";
var _DYN_TIME = "time";
var _DYN_PROCESS_NEXT = "processNext";
var _DYN_GET_PROCESS_TEL_CONT2 = "getProcessTelContext";
var _DYN_ENABLED = "enabled";
var _DYN_STOP_POLLING_INTERNA3 = "stopPollingInternalLogs";
var _DYN_UNLOAD = "unload";
var _DYN_ON_COMPLETE = "onComplete";
var _DYN_VERSION = "version";
var _DYN_LOGGING_LEVEL_CONSOL4 = "loggingLevelConsole";
var _DYN_CREATE_NEW = "createNew";
var _DYN_TEARDOWN = "teardown";
var _DYN_MESSAGE_ID = "messageId";
var _DYN_MESSAGE = "message";
var _DYN_IS_ASYNC = "isAsync";
var _DYN_DIAG_LOG = "diagLog";
var _DYN__DO_TEARDOWN = "_doTeardown";
var _DYN_UPDATE = "update";
var _DYN_GET_NEXT = "getNext";
var _DYN_SET_NEXT_PLUGIN = "setNextPlugin";
var _DYN_PROTOCOL = "protocol";
var _DYN_USER_AGENT = "userAgent";
var _DYN_SPLIT = "split";
var _DYN_NODE_TYPE = "nodeType";
var _DYN_REPLACE = "replace";
var _DYN_LOG_INTERNAL_MESSAGE = "logInternalMessage";
var _DYN_TYPE = "type";
var _DYN_HANDLER = "handler";
var _DYN_STATUS = "status";
var _DYN_GET_RESPONSE_HEADER = "getResponseHeader";
var _DYN_GET_ALL_RESPONSE_HEA5 = "getAllResponseHeaders";
var _DYN_IS_CHILD_EVT = "isChildEvt";
var _DYN_DATA = "data";
var _DYN_GET_CTX = "getCtx";
var _DYN_SET_CTX = "setCtx";
var _DYN_COMPLETE = "complete";
var _DYN_ITEMS_RECEIVED = "itemsReceived";
var _DYN_URL_STRING = "urlString";
var _DYN_SEND_POST = "sendPOST";
var _DYN_HEADERS = "headers";
var _DYN_TIMEOUT = "timeout";
var _DYN_SET_REQUEST_HEADER = "setRequestHeader";
var _DYN_TRACE_ID = "traceId";
var _DYN_SPAN_ID = "spanId";
var _DYN_TRACE_FLAGS = "traceFlags";

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/AggregationError.js
var aggregationErrorType;
function throwAggregationError(message, sourceErrors) {
  if (!aggregationErrorType) {
    aggregationErrorType = createCustomError("AggregationError", function(self2, args) {
      if (args[
        _DYN_LENGTH
        /* @min:%2elength */
      ] > 1) {
        self2.errors = args[1];
      }
    });
  }
  var theMessage = message || "One or more errors occurred.";
  arrForEach(sourceErrors, function(srcError, idx) {
    theMessage += "\n".concat(idx, " > ").concat(dumpObj(srcError));
  });
  throw new aggregationErrorType(theMessage, sourceErrors || []);
}

// node_modules/@nevware21/ts-async/dist/es5/mod/ts-async.js
var STR_PROMISE = "Promise";
var REJECTED = "rejected";
function doAwaitResponse(value, cb) {
  return doAwait(value, function(value2) {
    return cb ? cb({
      status: "fulfilled",
      rejected: false,
      value: value2
    }) : value2;
  }, function(reason) {
    return cb ? cb({
      status: REJECTED,
      rejected: true,
      reason
    }) : reason;
  });
}
function doAwait(value, resolveFn, rejectFn, finallyFn) {
  var result = value;
  try {
    if (isPromiseLike(value)) {
      if (resolveFn || rejectFn) {
        result = value.then(resolveFn, rejectFn);
      }
    } else {
      try {
        if (resolveFn) {
          result = resolveFn(value);
        }
      } catch (err) {
        if (rejectFn) {
          result = rejectFn(err);
        } else {
          throw err;
        }
      }
    }
  } finally {
    if (finallyFn) {
      doFinally(result, finallyFn);
    }
  }
  return result;
}
function doFinally(value, finallyFn) {
  var result = value;
  if (finallyFn) {
    if (isPromiseLike(value)) {
      if (value.finally) {
        result = value.finally(finallyFn);
      } else {
        result = value.then(function(value2) {
          finallyFn();
          return value2;
        }, function(reason) {
          finallyFn();
          throw reason;
        });
      }
    } else {
      finallyFn();
    }
  }
  return result;
}
var _debugState;
var _debugResult;
var _debugHandled;
var _promiseDebugEnabled = false;
function _addDebugState$1(thePromise, stateFn, resultFn, handledFn) {
  _debugState = _debugState || { toString: function() {
    return "[[PromiseState]]";
  } };
  _debugResult = _debugResult || { toString: function() {
    return "[[PromiseResult]]";
  } };
  _debugHandled = _debugHandled || { toString: function() {
    return "[[PromiseIsHandled]]";
  } };
  var props = {};
  props[_debugState] = { get: stateFn };
  props[_debugResult] = { get: resultFn };
  props[_debugHandled] = { get: handledFn };
  objDefineProperties(thePromise, props);
}
var STRING_STATES = [
  "pending",
  "resolving",
  "resolved",
  REJECTED
];
var DISPATCH_EVENT = "dispatchEvent";
var _hasInitEvent;
function _hasInitEventFn(doc) {
  var evt;
  if (doc && doc.createEvent) {
    evt = doc.createEvent("Event");
  }
  return !!evt && evt.initEvent;
}
function emitEvent(target, evtName, populateEvent, useNewEvent) {
  var doc = getDocument();
  !_hasInitEvent && (_hasInitEvent = createCachedValue(!!safe(_hasInitEventFn, [doc]).v));
  var theEvt = _hasInitEvent.v ? doc.createEvent("Event") : useNewEvent ? new Event(evtName) : {};
  populateEvent && populateEvent(theEvt);
  if (_hasInitEvent.v) {
    theEvt.initEvent(evtName, false, true);
  }
  if (theEvt && target[DISPATCH_EVENT]) {
    target[DISPATCH_EVENT](theEvt);
  } else {
    var handler = target["on" + evtName];
    if (handler) {
      handler(theEvt);
    } else {
      var theConsole = getInst("console");
      theConsole && (theConsole["error"] || theConsole["log"])(evtName, dumpObj(theEvt));
    }
  }
}
var NODE_UNHANDLED_REJECTION = "unhandledRejection";
var UNHANDLED_REJECTION = NODE_UNHANDLED_REJECTION.toLowerCase();
var _currentPromiseId = [];
var _uniquePromiseId = 0;
var _unhandledRejectionTimeout = 10;
var _aggregationError;
var _hasPromiseRejectionEvent;
function dumpFnObj(value) {
  if (isFunction(value)) {
    return value.toString();
  }
  return dumpObj(value);
}
function _createAggregationError(values) {
  !_aggregationError && (_aggregationError = createCachedValue(safe(getInst, ["AggregationError"]).v || createCustomError("AggregationError", function(self2, args) {
    self2.errors = args[0];
  })));
  return new _aggregationError.v(values);
}
function _createPromise(newPromise, processor, executor) {
  var additionalArgs = arrSlice(arguments, 3);
  var _state = 0;
  var _hasResolved = false;
  var _settledValue;
  var _queue = [];
  var _id = _uniquePromiseId++;
  var _parentId = _currentPromiseId.length > 0 ? _currentPromiseId[_currentPromiseId.length - 1] : void 0;
  var _handled = false;
  var _unHandledRejectionHandler = null;
  var _thePromise;
  function _then(onResolved, onRejected) {
    try {
      _currentPromiseId.push(_id);
      _handled = true;
      _unHandledRejectionHandler && _unHandledRejectionHandler.cancel();
      _unHandledRejectionHandler = null;
      var thenPromise = newPromise(function(resolve, reject) {
        _queue.push(function() {
          try {
            var handler = _state === 2 ? onResolved : onRejected;
            var value = isUndefined(handler) ? _settledValue : isFunction(handler) ? handler(_settledValue) : handler;
            if (isPromiseLike(value)) {
              value.then(resolve, reject);
            } else if (handler) {
              resolve(value);
            } else if (_state === 3) {
              reject(value);
            } else {
              resolve(value);
            }
          } catch (e) {
            reject(e);
          }
        });
        if (_hasResolved) {
          _processQueue();
        }
      }, additionalArgs);
      return thenPromise;
    } finally {
      _currentPromiseId.pop();
    }
  }
  function _catch(onRejected) {
    return _then(void 0, onRejected);
  }
  function _finally(onFinally) {
    var thenFinally = onFinally;
    var catchFinally = onFinally;
    if (isFunction(onFinally)) {
      thenFinally = function(value) {
        onFinally && onFinally();
        return value;
      };
      catchFinally = function(reason) {
        onFinally && onFinally();
        throw reason;
      };
    }
    return _then(thenFinally, catchFinally);
  }
  function _strState() {
    return STRING_STATES[_state];
  }
  function _processQueue() {
    if (_queue.length > 0) {
      var pending = _queue.slice();
      _queue = [];
      _handled = true;
      _unHandledRejectionHandler && _unHandledRejectionHandler.cancel();
      _unHandledRejectionHandler = null;
      processor(pending);
    }
  }
  function _createSettleIfFn(newState, allowState) {
    return function(theValue) {
      if (_state === allowState) {
        if (newState === 2 && isPromiseLike(theValue)) {
          _state = 1;
          theValue.then(_createSettleIfFn(2, 1), _createSettleIfFn(3, 1));
          return;
        }
        _state = newState;
        _hasResolved = true;
        _settledValue = theValue;
        _processQueue();
        if (!_handled && newState === 3 && !_unHandledRejectionHandler) {
          _unHandledRejectionHandler = scheduleTimeout(_notifyUnhandledRejection, _unhandledRejectionTimeout);
        }
      }
    };
  }
  function _notifyUnhandledRejection() {
    if (!_handled) {
      _handled = true;
      if (isNode()) {
        process.emit(NODE_UNHANDLED_REJECTION, _settledValue, _thePromise);
      } else {
        var gbl = getWindow() || getGlobal();
        !_hasPromiseRejectionEvent && (_hasPromiseRejectionEvent = createCachedValue(safe(getInst, [STR_PROMISE + "RejectionEvent"]).v));
        emitEvent(gbl, UNHANDLED_REJECTION, function(theEvt) {
          objDefine(theEvt, "promise", { g: function() {
            return _thePromise;
          } });
          theEvt.reason = _settledValue;
          return theEvt;
        }, !!_hasPromiseRejectionEvent.v);
      }
    }
  }
  _thePromise = {
    then: _then,
    "catch": _catch,
    finally: _finally
  };
  objDefineProp(_thePromise, "state", {
    get: _strState
  });
  if (_promiseDebugEnabled) {
    _addDebugState$1(_thePromise, _strState, function() {
      return objToString(_settledValue);
    }, function() {
      return _handled;
    });
  }
  if (hasSymbol()) {
    _thePromise[getKnownSymbol(11)] = "IPromise";
  }
  function _toString() {
    return "IPromise" + (_promiseDebugEnabled ? "[" + _id + (!isUndefined(_parentId) ? ":" + _parentId : "") + "]" : "") + " " + _strState() + (_hasResolved ? " - " + dumpFnObj(_settledValue) : "");
  }
  _thePromise.toString = _toString;
  (function _initialize() {
    if (!isFunction(executor)) {
      throwTypeError(STR_PROMISE + ": executor is not a function - " + dumpFnObj(executor));
    }
    var _rejectFn = _createSettleIfFn(3, 0);
    try {
      executor.call(_thePromise, _createSettleIfFn(2, 0), _rejectFn);
    } catch (e) {
      _rejectFn(e);
    }
  })();
  return _thePromise;
}
function _createAllPromise(newPromise) {
  return function(input) {
    var additionalArgs = arrSlice(arguments, 1);
    return newPromise(function(resolve, reject) {
      try {
        var values_1 = [];
        var pending_1 = 1;
        iterForOf(input, function(item, idx) {
          if (item) {
            pending_1++;
            doAwait(item, function(value) {
              values_1[idx] = value;
              if (--pending_1 === 0) {
                resolve(values_1);
              }
            }, reject);
          }
        });
        pending_1--;
        if (pending_1 === 0) {
          resolve(values_1);
        }
      } catch (e) {
        reject(e);
      }
    }, additionalArgs);
  };
}
function _createResolvedPromise(newPromise) {
  return function(value) {
    var additionalArgs = arrSlice(arguments, 1);
    if (isPromiseLike(value)) {
      return value;
    }
    return newPromise(function(resolve) {
      resolve(value);
    }, additionalArgs);
  };
}
function _createRejectedPromise(newPromise) {
  return function(reason) {
    var additionalArgs = arrSlice(arguments, 1);
    return newPromise(function(_resolve, reject) {
      reject(reason);
    }, additionalArgs);
  };
}
function _createAllSettledPromise(newPromise) {
  return createCachedValue(function(input) {
    var additionalArgs = arrSlice(arguments, 1);
    return newPromise(function(resolve, reject) {
      var values = [];
      var pending = 1;
      function processItem(item, idx) {
        pending++;
        doAwaitResponse(item, function(value) {
          if (value.rejected) {
            values[idx] = {
              status: REJECTED,
              reason: value.reason
            };
          } else {
            values[idx] = {
              status: "fulfilled",
              value: value.value
            };
          }
          if (--pending === 0) {
            resolve(values);
          }
        });
      }
      try {
        if (isArray(input)) {
          arrForEach(input, processItem);
        } else if (isIterable(input)) {
          iterForOf(input, processItem);
        } else {
          throwTypeError("Input is not an iterable");
        }
        pending--;
        if (pending === 0) {
          resolve(values);
        }
      } catch (e) {
        reject(e);
      }
    }, additionalArgs);
  });
}
function _createRacePromise(newPromise) {
  return createCachedValue(function(input) {
    var additionalArgs = arrSlice(arguments, 1);
    return newPromise(function(resolve, reject) {
      var isDone = false;
      function processItem(item) {
        doAwaitResponse(item, function(value) {
          if (!isDone) {
            isDone = true;
            if (value.rejected) {
              reject(value.reason);
            } else {
              resolve(value.value);
            }
          }
        });
      }
      try {
        if (isArray(input)) {
          arrForEach(input, processItem);
        } else if (isIterable(input)) {
          iterForOf(input, processItem);
        } else {
          throwTypeError("Input is not an iterable");
        }
      } catch (e) {
        reject(e);
      }
    }, additionalArgs);
  });
}
function _createAnyPromise(newPromise) {
  return createCachedValue(function(input) {
    var additionalArgs = arrSlice(arguments, 1);
    return newPromise(function(resolve, reject) {
      var theErros = [];
      var pending = 1;
      var isDone = false;
      function processItem(item, idx) {
        pending++;
        doAwaitResponse(item, function(value) {
          if (!value.rejected) {
            isDone = true;
            resolve(value.value);
            return;
          } else {
            theErros[idx] = value.reason;
          }
          if (--pending === 0 && !isDone) {
            reject(_createAggregationError(theErros));
          }
        });
      }
      try {
        if (isArray(input)) {
          arrForEach(input, processItem);
        } else if (isIterable(input)) {
          iterForOf(input, processItem);
        } else {
          throwTypeError("Input is not an iterable");
        }
        pending--;
        if (pending === 0 && !isDone) {
          reject(_createAggregationError(theErros));
        }
      } catch (e) {
        reject(e);
      }
    }, additionalArgs);
  });
}
function syncItemProcessor(pending) {
  arrForEach(pending, function(fn) {
    try {
      fn();
    } catch (e) {
    }
  });
}
function timeoutItemProcessor(timeout) {
  var callbackTimeout = isNumber(timeout) ? timeout : 0;
  return function(pending) {
    scheduleTimeout(function() {
      syncItemProcessor(pending);
    }, callbackTimeout);
  };
}
function idleItemProcessor(timeout) {
  var options;
  if (timeout >= 0) {
    options = {
      timeout: +timeout
    };
  }
  return function(pending) {
    scheduleIdleCallback(function(deadline) {
      syncItemProcessor(pending);
    }, options);
  };
}
var _allAsyncSettledCreator;
var _raceAsyncCreator;
var _anyAsyncCreator;
function createAsyncPromise(executor, timeout) {
  return _createPromise(createAsyncPromise, timeoutItemProcessor(timeout), executor, timeout);
}
var createAsyncAllPromise = _createAllPromise(createAsyncPromise);
var createAsyncResolvedPromise = _createResolvedPromise(createAsyncPromise);
var createAsyncRejectedPromise = _createRejectedPromise(createAsyncPromise);
function createAsyncAllSettledPromise(input, timeout) {
  !_allAsyncSettledCreator && (_allAsyncSettledCreator = _createAllSettledPromise(createAsyncPromise));
  return _allAsyncSettledCreator.v(input, timeout);
}
function createAsyncRacePromise(values, timeout) {
  !_raceAsyncCreator && (_raceAsyncCreator = _createRacePromise(createAsyncPromise));
  return _raceAsyncCreator.v(values, timeout);
}
function createAsyncAnyPromise(values, timeout) {
  !_anyAsyncCreator && (_anyAsyncCreator = _createAnyPromise(createAsyncPromise));
  return _anyAsyncCreator.v(values, timeout);
}
var _promiseCls;
function createNativePromise(executor, timeout) {
  !_promiseCls && (_promiseCls = createCachedValue(safe(getInst, [STR_PROMISE]).v || null));
  var PrmCls = _promiseCls.v;
  if (!PrmCls) {
    return createAsyncPromise(executor);
  }
  if (!isFunction(executor)) {
    throwTypeError(STR_PROMISE + ": executor is not a function - " + dumpObj(executor));
  }
  var _state = 0;
  function _strState() {
    return STRING_STATES[_state];
  }
  var thePromise = new PrmCls(function(resolve, reject) {
    function _resolve(value) {
      _state = 2;
      resolve(value);
    }
    function _reject(reason) {
      _state = 3;
      reject(reason);
    }
    executor(_resolve, _reject);
  });
  objDefineProp(thePromise, "state", {
    get: _strState
  });
  return thePromise;
}
var createNativeResolvedPromise = _createResolvedPromise(createNativePromise);
var createNativeRejectedPromise = _createRejectedPromise(createNativePromise);
function createSyncPromise(executor) {
  return _createPromise(createSyncPromise, syncItemProcessor, executor);
}
var createSyncAllPromise = _createAllPromise(createSyncPromise);
var createSyncResolvedPromise = _createResolvedPromise(createSyncPromise);
var createSyncRejectedPromise = _createRejectedPromise(createSyncPromise);
var _defaultIdleTimeout2;
function createIdlePromise(executor, timeout) {
  var theTimeout = isUndefined(timeout) ? _defaultIdleTimeout2 : timeout;
  return _createPromise(createIdlePromise, idleItemProcessor(theTimeout), executor, theTimeout);
}
var createIdleAllPromise = _createAllPromise(createIdlePromise);
var createIdleResolvedPromise = _createResolvedPromise(createIdlePromise);
var createIdleRejectedPromise = _createRejectedPromise(createIdlePromise);
var _promiseCreator;
function createPromise(executor, timeout) {
  !_promiseCreator && (_promiseCreator = createCachedValue(createNativePromise));
  return _promiseCreator.v.call(this, executor, timeout);
}
var createAllPromise = _createAllPromise(createPromise);
var createResolvedPromise = _createResolvedPromise(createPromise);
var createRejectedPromise = _createRejectedPromise(createPromise);
var toStringTagSymbol = getKnownSymbol(11);
var PolyPromise = function() {
  function PolyPromiseImpl(executor) {
    this._$ = createAsyncPromise(executor);
    if (toStringTagSymbol) {
      this[toStringTagSymbol] = "Promise";
    }
    objDefineProp(this, "state", {
      get: function() {
        return this._$.state;
      }
    });
  }
  PolyPromiseImpl.all = createAsyncAllPromise;
  PolyPromiseImpl.race = createAsyncRacePromise;
  PolyPromiseImpl.any = createAsyncAnyPromise;
  PolyPromiseImpl.reject = createAsyncRejectedPromise;
  PolyPromiseImpl.resolve = createAsyncResolvedPromise;
  PolyPromiseImpl.allSettled = createAsyncAllSettledPromise;
  var theProto = PolyPromiseImpl.prototype;
  theProto.then = function(onResolved, onRejected) {
    return this._$.then(onResolved, onRejected);
  };
  theProto.catch = function(onRejected) {
    return this._$.catch(onRejected);
  };
  theProto.finally = function(onfinally) {
    return this._$.finally(onfinally);
  };
  return PolyPromiseImpl;
}();

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/InternalConstants.js
var UNDEFINED_VALUE = void 0;
var STR_EMPTY = "";
var STR_CHANNELS = "channels";
var STR_CORE = "core";
var STR_CREATE_PERF_MGR = "createPerfMgr";
var STR_DISABLED = "disabled";
var STR_EXTENSION_CONFIG = "extensionConfig";
var STR_EXTENSIONS = "extensions";
var STR_PROCESS_TELEMETRY = "processTelemetry";
var STR_PRIORITY = "priority";
var STR_EVENTS_SENT = "eventsSent";
var STR_EVENTS_DISCARDED = "eventsDiscarded";
var STR_EVENTS_SEND_REQUEST = "eventsSendRequest";
var STR_PERF_EVENT = "perfEvent";
var STR_OFFLINE_STORE = "offlineEventsStored";
var STR_OFFLINE_SENT = "offlineBatchSent";
var STR_OFFLINE_DROP = "offlineBatchDrop";
var STR_GET_PERF_MGR = "getPerfMgr";
var STR_DOMAIN = "domain";
var STR_PATH = "path";
var STR_NOT_DYNAMIC_ERROR = "Not dynamic - ";

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/HelperFuncs.js
var strGetPrototypeOf = "getPrototypeOf";
var rCamelCase = /-([a-z])/g;
var rNormalizeInvalid = /([^\w\d_$])/g;
var rLeadingNumeric = /^(\d+[\w\d_$])/;
var _getObjProto2 = Object[strGetPrototypeOf];
function isNotNullOrUndefined(value) {
  return !isNullOrUndefined(value);
}
function normalizeJsName(name) {
  var value = name;
  if (value && isString(value)) {
    value = value[
      _DYN_REPLACE
      /* @min:%2ereplace */
    ](rCamelCase, function(_all, letter) {
      return letter.toUpperCase();
    });
    value = value[
      _DYN_REPLACE
      /* @min:%2ereplace */
    ](rNormalizeInvalid, "_");
    value = value[
      _DYN_REPLACE
      /* @min:%2ereplace */
    ](rLeadingNumeric, function(_all, match) {
      return "_" + match;
    });
  }
  return value;
}
function strContains2(value, search) {
  if (value && search) {
    return strIndexOf(value, search) !== -1;
  }
  return false;
}
function toISOString(date) {
  return date && date.toISOString() || "";
}
function getExceptionName(object) {
  if (isError(object)) {
    return object[
      _DYN_NAME
      /* @min:%2ename */
    ];
  }
  return STR_EMPTY;
}
function setValue(target, field, value, valChk, srcChk) {
  var theValue = value;
  if (target) {
    theValue = target[field];
    if (theValue !== value && (!srcChk || srcChk(theValue)) && (!valChk || valChk(value))) {
      theValue = value;
      target[field] = theValue;
    }
  }
  return theValue;
}
function getSetValue(target, field, defValue) {
  var theValue;
  if (target) {
    theValue = target[field];
    if (!theValue && isNullOrUndefined(theValue)) {
      theValue = !isUndefined(defValue) ? defValue : {};
      target[field] = theValue;
    }
  } else {
    theValue = !isUndefined(defValue) ? defValue : {};
  }
  return theValue;
}
function _createProxyFunction(source, funcName) {
  var srcFunc = null;
  var src = null;
  if (isFunction(source)) {
    srcFunc = source;
  } else {
    src = source;
  }
  return function() {
    var originalArguments = arguments;
    if (srcFunc) {
      src = srcFunc();
    }
    if (src) {
      return src[funcName][
        _DYN_APPLY
        /* @min:%2eapply */
      ](src, originalArguments);
    }
  };
}
function proxyAssign(target, source, chkSet) {
  if (target && source && isObject(target) && isObject(source)) {
    var _loop_1 = function(field2) {
      if (isString(field2)) {
        var value = source[field2];
        if (isFunction(value)) {
          if (!chkSet || chkSet(field2, true, source, target)) {
            target[field2] = _createProxyFunction(source, field2);
          }
        } else if (!chkSet || chkSet(field2, false, source, target)) {
          if (objHasOwn(target, field2)) {
            delete target[field2];
          }
          objDefine(target, field2, {
            g: function() {
              return source[field2];
            },
            s: function(theValue) {
              source[field2] = theValue;
            }
          });
        }
      }
    };
    for (var field in source) {
      _loop_1(field);
    }
  }
  return target;
}
function proxyFunctionAs(target, name, source, theFunc, overwriteTarget) {
  if (target && name && source) {
    if (overwriteTarget !== false || isUndefined(target[name])) {
      target[name] = _createProxyFunction(source, theFunc);
    }
  }
}
function proxyFunctions(target, source, functionsToProxy, overwriteTarget) {
  if (target && source && isObject(target) && isArray(functionsToProxy)) {
    arrForEach(functionsToProxy, function(theFuncName) {
      if (isString(theFuncName)) {
        proxyFunctionAs(target, theFuncName, source, theFuncName, overwriteTarget);
      }
    });
  }
  return target;
}
function createClassFromInterface(defaults) {
  return (
    /** @class */
    /* @__PURE__ */ function() {
      function class_1() {
        var _this = this;
        if (defaults) {
          objForEachKey(defaults, function(field, value) {
            _this[field] = value;
          });
        }
      }
      return class_1;
    }()
  );
}
function optimizeObject(theObject) {
  if (theObject && objAssign) {
    theObject = ObjClass2(objAssign({}, theObject));
  }
  return theObject;
}
function objExtend2(obj1, obj2, obj3, obj4, obj5, obj6) {
  var theArgs = arguments;
  var extended = theArgs[0] || {};
  var argLen = theArgs[
    _DYN_LENGTH
    /* @min:%2elength */
  ];
  var deep = false;
  var idx = 1;
  if (argLen > 0 && isBoolean(extended)) {
    deep = extended;
    extended = theArgs[idx] || {};
    idx++;
  }
  if (!isObject(extended)) {
    extended = {};
  }
  for (; idx < argLen; idx++) {
    var arg = theArgs[idx];
    var isArgArray = isArray(arg);
    var isArgObj = isObject(arg);
    for (var prop in arg) {
      var propOk = isArgArray && prop in arg || isArgObj && objHasOwn(arg, prop);
      if (!propOk) {
        continue;
      }
      var newValue = arg[prop];
      var isNewArray = void 0;
      if (deep && newValue && ((isNewArray = isArray(newValue)) || isPlainObject(newValue))) {
        var clone = extended[prop];
        if (isNewArray) {
          if (!isArray(clone)) {
            clone = [];
          }
        } else if (!isPlainObject(clone)) {
          clone = {};
        }
        newValue = objExtend2(deep, clone, newValue);
      }
      if (newValue !== void 0) {
        extended[prop] = newValue;
      }
    }
  }
  return extended;
}
function isFeatureEnabled(feature, cfg) {
  var rlt = false;
  var ft = cfg && cfg.featureOptIn && cfg.featureOptIn[feature];
  if (feature && ft) {
    var mode = ft.mode;
    rlt = mode == 3 || mode == 1;
  }
  return rlt;
}
function getResponseText(xhr) {
  try {
    return xhr.responseText;
  } catch (e) {
  }
  return null;
}
function formatErrorMessageXdr(xdr, message) {
  if (xdr) {
    return "XDomainRequest,Response:" + getResponseText(xdr) || "";
  }
  return message;
}
function formatErrorMessageXhr(xhr, message) {
  if (xhr) {
    return "XMLHttpRequest,Status:" + xhr[
      _DYN_STATUS
      /* @min:%2estatus */
    ] + ",Response:" + getResponseText(xhr) || xhr.response || "";
  }
  return message;
}
function prependTransports(theTransports, newTransports) {
  if (newTransports) {
    if (isNumber(newTransports)) {
      theTransports = [newTransports].concat(theTransports);
    } else if (isArray(newTransports)) {
      theTransports = newTransports.concat(theTransports);
    }
  }
  return theTransports;
}
var strDisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
var strWithCredentials = "withCredentials";
var strTimeout = "timeout";
function openXhr(method, urlString, withCredentials, disabled, isSync, timeout) {
  if (disabled === void 0) {
    disabled = false;
  }
  if (isSync === void 0) {
    isSync = false;
  }
  function _wrapSetXhrProp(xhr2, prop, value) {
    try {
      xhr2[prop] = value;
    } catch (e) {
    }
  }
  var xhr = new XMLHttpRequest();
  if (disabled) {
    _wrapSetXhrProp(xhr, strDisabledPropertyName, disabled);
  }
  if (withCredentials) {
    _wrapSetXhrProp(xhr, strWithCredentials, withCredentials);
  }
  xhr.open(method, urlString, !isSync);
  if (withCredentials) {
    _wrapSetXhrProp(xhr, strWithCredentials, withCredentials);
  }
  if (!isSync && timeout) {
    _wrapSetXhrProp(xhr, strTimeout, timeout);
  }
  return xhr;
}
function convertAllHeadersToMap(headersString) {
  var headers = {};
  if (isString(headersString)) {
    var headersArray = strTrim(headersString)[
      _DYN_SPLIT
      /* @min:%2esplit */
    ](/[\r\n]+/);
    arrForEach(headersArray, function(headerEntry) {
      if (headerEntry) {
        var idx = headerEntry.indexOf(": ");
        if (idx !== -1) {
          var header = strTrim(headerEntry.substring(0, idx))[
            _DYN_TO_LOWER_CASE
            /* @min:%2etoLowerCase */
          ]();
          var value = strTrim(headerEntry.substring(idx + 1));
          headers[header] = value;
        } else {
          headers[strTrim(headerEntry)] = 1;
        }
      }
    });
  }
  return headers;
}
function _appendHeader(theHeaders, xhr, name) {
  if (!theHeaders[name] && xhr && xhr[
    _DYN_GET_RESPONSE_HEADER
    /* @min:%2egetResponseHeader */
  ]) {
    var value = xhr[
      _DYN_GET_RESPONSE_HEADER
      /* @min:%2egetResponseHeader */
    ](name);
    if (value) {
      theHeaders[name] = strTrim(value);
    }
  }
  return theHeaders;
}
var STR_KILL_DURATION_HEADER = "kill-duration";
var STR_KILL_DURATION_SECONDS_HEADER = "kill-duration-seconds";
var STR_TIME_DELTA_HEADER = "time-delta-millis";
function _getAllResponseHeaders(xhr, isOneDs) {
  var theHeaders = {};
  if (!xhr[
    _DYN_GET_ALL_RESPONSE_HEA5
    /* @min:%2egetAllResponseHeaders */
  ]) {
    if (!!isOneDs) {
      theHeaders = _appendHeader(theHeaders, xhr, STR_TIME_DELTA_HEADER);
      theHeaders = _appendHeader(theHeaders, xhr, STR_KILL_DURATION_HEADER);
      theHeaders = _appendHeader(theHeaders, xhr, STR_KILL_DURATION_SECONDS_HEADER);
    }
  } else {
    theHeaders = convertAllHeadersToMap(xhr[
      _DYN_GET_ALL_RESPONSE_HEA5
      /* @min:%2egetAllResponseHeaders */
    ]());
  }
  return theHeaders;
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/EnvUtils.js
var strDocumentMode = "documentMode";
var strLocation = "location";
var strConsole = "console";
var strJSON = "JSON";
var strCrypto = "crypto";
var strMsCrypto = "msCrypto";
var strReactNative = "ReactNative";
var strMsie = "msie";
var strTrident = "trident/";
var strXMLHttpRequest = "XMLHttpRequest";
var _isTrident = null;
var _navUserAgentCheck = null;
var _enableMocks = false;
var _useXDomainRequest = null;
var _beaconsSupported = null;
function _hasProperty(theClass, property) {
  var supported = false;
  if (theClass) {
    try {
      supported = property in theClass;
      if (!supported) {
        var proto = theClass[strShimPrototype];
        if (proto) {
          supported = property in proto;
        }
      }
    } catch (e) {
    }
    if (!supported) {
      try {
        var tmp = new theClass();
        supported = !isUndefined(tmp[property]);
      } catch (e) {
      }
    }
  }
  return supported;
}
function getLocation(checkForMock) {
  if (checkForMock && _enableMocks) {
    var mockLocation = getInst("__mockLocation");
    if (mockLocation) {
      return mockLocation;
    }
  }
  if (typeof location === strShimObject && location) {
    return location;
  }
  return getInst(strLocation);
}
function getConsole() {
  if (typeof console !== strShimUndefined) {
    return console;
  }
  return getInst(strConsole);
}
function hasJSON() {
  return Boolean(typeof JSON === strShimObject && JSON || getInst(strJSON) !== null);
}
function getJSON() {
  if (hasJSON()) {
    return JSON || getInst(strJSON);
  }
  return null;
}
function getCrypto() {
  return getInst(strCrypto);
}
function getMsCrypto() {
  return getInst(strMsCrypto);
}
function isReactNative() {
  var nav = getNavigator();
  if (nav && nav.product) {
    return nav.product === strReactNative;
  }
  return false;
}
function isIE() {
  var nav = getNavigator();
  if (nav && (nav[
    _DYN_USER_AGENT
    /* @min:%2euserAgent */
  ] !== _navUserAgentCheck || _isTrident === null)) {
    _navUserAgentCheck = nav[
      _DYN_USER_AGENT
      /* @min:%2euserAgent */
    ];
    var userAgent = (_navUserAgentCheck || STR_EMPTY)[
      _DYN_TO_LOWER_CASE
      /* @min:%2etoLowerCase */
    ]();
    _isTrident = strContains2(userAgent, strMsie) || strContains2(userAgent, strTrident);
  }
  return _isTrident;
}
function getIEVersion(userAgentStr) {
  if (userAgentStr === void 0) {
    userAgentStr = null;
  }
  if (!userAgentStr) {
    var navigator_1 = getNavigator() || {};
    userAgentStr = navigator_1 ? (navigator_1.userAgent || STR_EMPTY)[
      _DYN_TO_LOWER_CASE
      /* @min:%2etoLowerCase */
    ]() : STR_EMPTY;
  }
  var ua = (userAgentStr || STR_EMPTY)[
    _DYN_TO_LOWER_CASE
    /* @min:%2etoLowerCase */
  ]();
  if (strContains2(ua, strMsie)) {
    var doc = getDocument() || {};
    return Math.max(parseInt(ua[
      _DYN_SPLIT
      /* @min:%2esplit */
    ](strMsie)[1]), doc[strDocumentMode] || 0);
  } else if (strContains2(ua, strTrident)) {
    var tridentVer = parseInt(ua[
      _DYN_SPLIT
      /* @min:%2esplit */
    ](strTrident)[1]);
    if (tridentVer) {
      return tridentVer + 4;
    }
  }
  return null;
}
function isBeaconsSupported(useCached) {
  if (_beaconsSupported === null || useCached === false) {
    _beaconsSupported = hasNavigator() && Boolean(getNavigator().sendBeacon);
  }
  return _beaconsSupported;
}
function isFetchSupported(withKeepAlive) {
  var isSupported = false;
  try {
    isSupported = !!getInst("fetch");
    var request = getInst("Request");
    if (isSupported && withKeepAlive && request) {
      isSupported = _hasProperty(request, "keepalive");
    }
  } catch (e) {
  }
  return isSupported;
}
function useXDomainRequest() {
  if (_useXDomainRequest === null) {
    _useXDomainRequest = typeof XDomainRequest !== strShimUndefined;
    if (_useXDomainRequest && isXhrSupported()) {
      _useXDomainRequest = _useXDomainRequest && !_hasProperty(getInst(strXMLHttpRequest), "withCredentials");
    }
  }
  return _useXDomainRequest;
}
function isXhrSupported() {
  var isSupported = false;
  try {
    var xmlHttpRequest = getInst(strXMLHttpRequest);
    isSupported = !!xmlHttpRequest;
  } catch (e) {
  }
  return isSupported;
}
function dispatchEvent(target, evnt) {
  if (target && target.dispatchEvent && evnt) {
    target.dispatchEvent(evnt);
    return true;
  }
  return false;
}
function createCustomDomEvent(eventName, details) {
  var event = null;
  var detail = { detail: details || null };
  if (isFunction(CustomEvent)) {
    event = new CustomEvent(eventName, detail);
  } else {
    var doc = getDocument();
    if (doc && doc.createEvent) {
      event = doc.createEvent("CustomEvent");
      event.initCustomEvent(eventName, true, true, detail);
    }
  }
  return event;
}
function sendCustomEvent(evtName, cfg, customDetails) {
  var global2 = getGlobal();
  if (global2 && global2.CustomEvent) {
    try {
      var details = { cfg: cfg || null, customDetails: customDetails || null };
      return dispatchEvent(global2, createCustomDomEvent(evtName, details));
    } catch (e) {
    }
  }
  return false;
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/RandomHelper.js
var UInt32Mask = 4294967296;
var MaxUInt32 = 4294967295;
var SEED1 = 123456789;
var SEED2 = 987654321;
var _mwcSeeded = false;
var _mwcW = SEED1;
var _mwcZ = SEED2;
function _mwcSeed(seedValue) {
  if (seedValue < 0) {
    seedValue >>>= 0;
  }
  _mwcW = SEED1 + seedValue & MaxUInt32;
  _mwcZ = SEED2 - seedValue & MaxUInt32;
  _mwcSeeded = true;
}
function _autoSeedMwc() {
  try {
    var now = utcNow() & 2147483647;
    _mwcSeed((Math.random() * UInt32Mask ^ now) + now);
  } catch (e) {
  }
}
function randomValue(maxValue) {
  if (maxValue > 0) {
    return Math.floor(random32() / MaxUInt32 * (maxValue + 1)) >>> 0;
  }
  return 0;
}
function random32(signed) {
  var value = 0;
  var c = getCrypto() || getMsCrypto();
  if (c && c.getRandomValues) {
    value = c.getRandomValues(new Uint32Array(1))[0] & MaxUInt32;
  }
  if (value === 0 && isIE()) {
    if (!_mwcSeeded) {
      _autoSeedMwc();
    }
    value = mwcRandom32() & MaxUInt32;
  }
  if (value === 0) {
    value = Math.floor(UInt32Mask * Math.random() | 0);
  }
  if (!signed) {
    value >>>= 0;
  }
  return value;
}
function mwcRandom32(signed) {
  _mwcZ = 36969 * (_mwcZ & 65535) + (_mwcZ >> 16) & MaxUInt32;
  _mwcW = 18e3 * (_mwcW & 65535) + (_mwcW >> 16) & MaxUInt32;
  var value = (_mwcZ << 16) + (_mwcW & 65535) >>> 0 & MaxUInt32 | 0;
  if (!signed) {
    value >>>= 0;
  }
  return value;
}
function newId(maxLength) {
  if (maxLength === void 0) {
    maxLength = 22;
  }
  var base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var number = random32() >>> 0;
  var chars = 0;
  var result = STR_EMPTY;
  while (result[
    _DYN_LENGTH
    /* @min:%2elength */
  ] < maxLength) {
    chars++;
    result += base64chars.charAt(number & 63);
    number >>>= 6;
    if (chars === 5) {
      number = (random32() << 2 & 4294967295 | number & 3) >>> 0;
      chars = 0;
    }
  }
  return result;
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/DataCacheHelper.js
var version = "3.2.1";
var instanceName = "." + newId(6);
var _dataUid = 0;
function _canAcceptData(target) {
  return target[
    _DYN_NODE_TYPE
    /* @min:%2enodeType */
  ] === 1 || target[
    _DYN_NODE_TYPE
    /* @min:%2enodeType */
  ] === 9 || !+target[
    _DYN_NODE_TYPE
    /* @min:%2enodeType */
  ];
}
function _getCache(data, target) {
  var theCache = target[data.id];
  if (!theCache) {
    theCache = {};
    try {
      if (_canAcceptData(target)) {
        objDefine(target, data.id, {
          e: false,
          v: theCache
        });
      }
    } catch (e) {
    }
  }
  return theCache;
}
function createUniqueNamespace(name, includeVersion) {
  if (includeVersion === void 0) {
    includeVersion = false;
  }
  return normalizeJsName(name + _dataUid++ + (includeVersion ? "." + version : STR_EMPTY) + instanceName);
}
function createElmNodeData(name) {
  var data = {
    id: createUniqueNamespace("_aiData-" + (name || STR_EMPTY) + "." + version),
    accept: function(target) {
      return _canAcceptData(target);
    },
    get: function(target, name2, defValue, addDefault) {
      var theCache = target[data.id];
      if (!theCache) {
        if (addDefault) {
          theCache = _getCache(data, target);
          theCache[normalizeJsName(name2)] = defValue;
        }
        return defValue;
      }
      return theCache[normalizeJsName(name2)];
    },
    kill: function(target, name2) {
      if (target && target[name2]) {
        try {
          delete target[name2];
        } catch (e) {
        }
      }
    }
  };
  return data;
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/Config/ConfigDefaults.js
function _isConfigDefaults(value) {
  return value && isObject(value) && (value.isVal || value.fb || objHasOwn(value, "v") || objHasOwn(value, "mrg") || objHasOwn(value, "ref") || value.set);
}
function _getDefault(dynamicHandler, theConfig, cfgDefaults) {
  var defValue;
  var isDefaultValid = cfgDefaults.dfVal || isDefined;
  if (theConfig && cfgDefaults.fb) {
    var fallbacks = cfgDefaults.fb;
    if (!isArray(fallbacks)) {
      fallbacks = [fallbacks];
    }
    for (var lp = 0; lp < fallbacks[
      _DYN_LENGTH
      /* @min:%2elength */
    ]; lp++) {
      var fallback = fallbacks[lp];
      var fbValue = theConfig[fallback];
      if (isDefaultValid(fbValue)) {
        defValue = fbValue;
      } else if (dynamicHandler) {
        fbValue = dynamicHandler.cfg[fallback];
        if (isDefaultValid(fbValue)) {
          defValue = fbValue;
        }
        dynamicHandler.set(dynamicHandler.cfg, asString(fallback), fbValue);
      }
      if (isDefaultValid(defValue)) {
        break;
      }
    }
  }
  if (!isDefaultValid(defValue) && isDefaultValid(cfgDefaults.v)) {
    defValue = cfgDefaults.v;
  }
  return defValue;
}
function _resolveDefaultValue(dynamicHandler, theConfig, cfgDefaults) {
  var theValue = cfgDefaults;
  if (cfgDefaults && _isConfigDefaults(cfgDefaults)) {
    theValue = _getDefault(dynamicHandler, theConfig, cfgDefaults);
  }
  if (theValue) {
    if (_isConfigDefaults(theValue)) {
      theValue = _resolveDefaultValue(dynamicHandler, theConfig, theValue);
    }
    var newValue_1;
    if (isArray(theValue)) {
      newValue_1 = [];
      newValue_1[
        _DYN_LENGTH
        /* @min:%2elength */
      ] = theValue[
        _DYN_LENGTH
        /* @min:%2elength */
      ];
    } else if (isPlainObject(theValue)) {
      newValue_1 = {};
    }
    if (newValue_1) {
      objForEachKey(theValue, function(key, value) {
        if (value && _isConfigDefaults(value)) {
          value = _resolveDefaultValue(dynamicHandler, theConfig, value);
        }
        newValue_1[key] = value;
      });
      theValue = newValue_1;
    }
  }
  return theValue;
}
function _applyDefaultValue(dynamicHandler, theConfig, name, defaultValue) {
  var isValid;
  var setFn;
  var defValue;
  var cfgDefaults = defaultValue;
  var mergeDf;
  var reference;
  var readOnly;
  var blkDynamicValue;
  if (_isConfigDefaults(cfgDefaults)) {
    isValid = cfgDefaults.isVal;
    setFn = cfgDefaults.set;
    readOnly = cfgDefaults[
      _DYN_RD_ONLY
      /* @min:%2erdOnly */
    ];
    blkDynamicValue = cfgDefaults[
      _DYN_BLK_VAL
      /* @min:%2eblkVal */
    ];
    mergeDf = cfgDefaults.mrg;
    reference = cfgDefaults.ref;
    if (!reference && isUndefined(reference)) {
      reference = !!mergeDf;
    }
    defValue = _getDefault(dynamicHandler, theConfig, cfgDefaults);
  } else {
    defValue = defaultValue;
  }
  if (blkDynamicValue) {
    dynamicHandler[
      _DYN_BLK_VAL
      /* @min:%2eblkVal */
    ](theConfig, name);
  }
  var theValue;
  var usingDefault = true;
  var cfgValue = theConfig[name];
  if (cfgValue || !isNullOrUndefined(cfgValue)) {
    theValue = cfgValue;
    usingDefault = false;
    if (isValid && theValue !== defValue && !isValid(theValue)) {
      theValue = defValue;
      usingDefault = true;
    }
    if (setFn) {
      theValue = setFn(theValue, defValue, theConfig);
      usingDefault = theValue === defValue;
    }
  }
  if (!usingDefault) {
    if (isPlainObject(theValue) || isArray(defValue)) {
      if (mergeDf && defValue && (isPlainObject(defValue) || isArray(defValue))) {
        objForEachKey(defValue, function(dfName, dfValue) {
          _applyDefaultValue(dynamicHandler, theValue, dfName, dfValue);
        });
      }
    }
  } else if (defValue) {
    theValue = _resolveDefaultValue(dynamicHandler, theConfig, defValue);
  } else {
    theValue = defValue;
  }
  dynamicHandler.set(theConfig, name, theValue);
  if (reference) {
    dynamicHandler.ref(theConfig, name);
  }
  if (readOnly) {
    dynamicHandler[
      _DYN_RD_ONLY
      /* @min:%2erdOnly */
    ](theConfig, name);
  }
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/Config/DynamicSupport.js
var CFG_HANDLER_LINK = symbolFor("[[ai_dynCfg_1]]");
var BLOCK_DYNAMIC = symbolFor("[[ai_blkDynCfg_1]]");
var FORCE_DYNAMIC = symbolFor("[[ai_frcDynCfg_1]]");
function _cfgDeepCopy(source) {
  if (source) {
    var target_1;
    if (isArray(source)) {
      target_1 = [];
      target_1[
        _DYN_LENGTH
        /* @min:%2elength */
      ] = source[
        _DYN_LENGTH
        /* @min:%2elength */
      ];
    } else if (isPlainObject(source)) {
      target_1 = {};
    }
    if (target_1) {
      objForEachKey(source, function(key, value) {
        target_1[key] = _cfgDeepCopy(value);
      });
      return target_1;
    }
  }
  return source;
}
function getDynamicConfigHandler(value) {
  if (value) {
    var handler = value[CFG_HANDLER_LINK] || value;
    if (handler.cfg && (handler.cfg === value || handler.cfg[CFG_HANDLER_LINK] === handler)) {
      return handler;
    }
  }
  return null;
}
function blockDynamicConversion(value) {
  if (value && (isPlainObject(value) || isArray(value))) {
    try {
      value[BLOCK_DYNAMIC] = true;
    } catch (e) {
    }
  }
  return value;
}
function _canMakeDynamic(getFunc, state, value) {
  var result = false;
  if (value && !getFunc[state.blkVal]) {
    result = value[FORCE_DYNAMIC];
    if (!result && !value[BLOCK_DYNAMIC]) {
      result = isPlainObject(value) || isArray(value);
    }
  }
  return result;
}
function throwInvalidAccess(message) {
  throwTypeError("InvalidAccess:" + message);
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/Config/DynamicProperty.js
var arrayMethodsToPatch = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice"
];
var _throwDynamicError = function(logger, name, desc, e) {
  logger && logger[
    _DYN_THROW_INTERNAL
    /* @min:%2ethrowInternal */
  ](3, 108, "".concat(desc, " [").concat(name, "] failed - ") + dumpObj(e));
};
function _patchArray(state, target, name) {
  if (isArray(target)) {
    arrForEach(arrayMethodsToPatch, function(method) {
      var orgMethod = target[method];
      target[method] = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var result = orgMethod[
          _DYN_APPLY
          /* @min:%2eapply */
        ](this, args);
        _makeDynamicObject(state, target, name, "Patching");
        return result;
      };
    });
  }
}
function _getOwnPropGetter(target, name) {
  var propDesc = objGetOwnPropertyDescriptor(target, name);
  return propDesc && propDesc.get;
}
function _createDynamicProperty(state, theConfig, name, value) {
  var detail = {
    n: name,
    h: [],
    trk: function(handler) {
      if (handler && handler.fn) {
        if (arrIndexOf(detail.h, handler) === -1) {
          detail.h[
            _DYN_PUSH
            /* @min:%2epush */
          ](handler);
        }
        state.trk(handler, detail);
      }
    },
    clr: function(handler) {
      var idx = arrIndexOf(detail.h, handler);
      if (idx !== -1) {
        detail.h[
          _DYN_SPLICE
          /* @min:%2esplice */
        ](idx, 1);
      }
    }
  };
  var checkDynamic = true;
  var isObjectOrArray = false;
  function _getProperty() {
    if (checkDynamic) {
      isObjectOrArray = isObjectOrArray || _canMakeDynamic(_getProperty, state, value);
      if (value && !value[CFG_HANDLER_LINK] && isObjectOrArray) {
        value = _makeDynamicObject(state, value, name, "Converting");
      }
      checkDynamic = false;
    }
    var activeHandler = state.act;
    if (activeHandler) {
      detail.trk(activeHandler);
    }
    return value;
  }
  _getProperty[state.prop] = {
    chng: function() {
      state.add(detail);
    }
  };
  function _setProperty(newValue) {
    if (value !== newValue) {
      if (!!_getProperty[state.ro] && !state.upd) {
        throwInvalidAccess("[" + name + "] is read-only:" + dumpObj(theConfig));
      }
      if (checkDynamic) {
        isObjectOrArray = isObjectOrArray || _canMakeDynamic(_getProperty, state, value);
        checkDynamic = false;
      }
      var isReferenced = isObjectOrArray && _getProperty[state.rf];
      if (isObjectOrArray) {
        if (isReferenced) {
          objForEachKey(value, function(key) {
            value[key] = newValue ? newValue[key] : UNDEFINED_VALUE;
          });
          try {
            objForEachKey(newValue, function(key, theValue) {
              _setDynamicProperty(state, value, key, theValue);
            });
            newValue = value;
          } catch (e) {
            _throwDynamicError((state.hdlr || {})[
              _DYN_LOGGER
              /* @min:%2elogger */
            ], name, "Assigning", e);
            isObjectOrArray = false;
          }
        } else if (value && value[CFG_HANDLER_LINK]) {
          objForEachKey(value, function(key) {
            var getter = _getOwnPropGetter(value, key);
            if (getter) {
              var valueState = getter[state.prop];
              valueState && valueState.chng();
            }
          });
        }
      }
      if (newValue !== value) {
        var newIsObjectOrArray = newValue && _canMakeDynamic(_getProperty, state, newValue);
        if (!isReferenced && newIsObjectOrArray) {
          newValue = _makeDynamicObject(state, newValue, name, "Converting");
        }
        value = newValue;
        isObjectOrArray = newIsObjectOrArray;
      }
      state.add(detail);
    }
  }
  objDefine(theConfig, detail.n, { g: _getProperty, s: _setProperty });
}
function _setDynamicProperty(state, target, name, value) {
  if (target) {
    var getter = _getOwnPropGetter(target, name);
    var isDynamic = getter && !!getter[state.prop];
    if (!isDynamic) {
      _createDynamicProperty(state, target, name, value);
    } else {
      target[name] = value;
    }
  }
  return target;
}
function _setDynamicPropertyState(state, target, name, flags) {
  if (target) {
    var getter = _getOwnPropGetter(target, name);
    var isDynamic = getter && !!getter[state.prop];
    var inPlace = flags && flags[
      0
      /* _eSetDynamicPropertyFlags.inPlace */
    ];
    var rdOnly = flags && flags[
      1
      /* _eSetDynamicPropertyFlags.readOnly */
    ];
    var blkProp = flags && flags[
      2
      /* _eSetDynamicPropertyFlags.blockDynamicProperty */
    ];
    if (!isDynamic) {
      if (blkProp) {
        try {
          blockDynamicConversion(target);
        } catch (e) {
          _throwDynamicError((state.hdlr || {})[
            _DYN_LOGGER
            /* @min:%2elogger */
          ], name, "Blocking", e);
        }
      }
      try {
        _setDynamicProperty(state, target, name, target[name]);
        getter = _getOwnPropGetter(target, name);
      } catch (e) {
        _throwDynamicError((state.hdlr || {})[
          _DYN_LOGGER
          /* @min:%2elogger */
        ], name, "State", e);
      }
    }
    if (inPlace) {
      getter[state.rf] = inPlace;
    }
    if (rdOnly) {
      getter[state.ro] = rdOnly;
    }
    if (blkProp) {
      getter[state.blkVal] = true;
    }
  }
  return target;
}
function _makeDynamicObject(state, target, name, desc) {
  try {
    objForEachKey(target, function(key, value) {
      _setDynamicProperty(state, target, key, value);
    });
    if (!target[CFG_HANDLER_LINK]) {
      objDefineProp(target, CFG_HANDLER_LINK, {
        get: function() {
          return state[
            _DYN_HDLR
            /* @min:%2ehdlr */
          ];
        }
      });
      _patchArray(state, target, name);
    }
  } catch (e) {
    _throwDynamicError((state.hdlr || {})[
      _DYN_LOGGER
      /* @min:%2elogger */
    ], name, desc, e);
  }
  return target;
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/Config/DynamicState.js
var symPrefix = "[[ai_";
var symPostfix = "]]";
function _createState(cfgHandler) {
  var _a12;
  var dynamicPropertySymbol = newSymbol(symPrefix + "get" + cfgHandler.uid + symPostfix);
  var dynamicPropertyReadOnly = newSymbol(symPrefix + "ro" + cfgHandler.uid + symPostfix);
  var dynamicPropertyReferenced = newSymbol(symPrefix + "rf" + cfgHandler.uid + symPostfix);
  var dynamicPropertyBlockValue = newSymbol(symPrefix + "blkVal" + cfgHandler.uid + symPostfix);
  var dynamicPropertyDetail = newSymbol(symPrefix + "dtl" + cfgHandler.uid + symPostfix);
  var _waitingHandlers = null;
  var _watcherTimer = null;
  var theState;
  function _useHandler(activeHandler, callback) {
    var prevWatcher = theState.act;
    try {
      theState.act = activeHandler;
      if (activeHandler && activeHandler[dynamicPropertyDetail]) {
        arrForEach(activeHandler[dynamicPropertyDetail], function(detail) {
          detail.clr(activeHandler);
        });
        activeHandler[dynamicPropertyDetail] = [];
      }
      callback({
        cfg: cfgHandler.cfg,
        set: cfgHandler.set.bind(cfgHandler),
        setDf: cfgHandler[
          _DYN_SET_DF
          /* @min:%2esetDf */
        ].bind(cfgHandler),
        ref: cfgHandler.ref.bind(cfgHandler),
        rdOnly: cfgHandler[
          _DYN_RD_ONLY
          /* @min:%2erdOnly */
        ].bind(cfgHandler)
      });
    } catch (e) {
      var logger = cfgHandler[
        _DYN_LOGGER
        /* @min:%2elogger */
      ];
      if (logger) {
        logger[
          _DYN_THROW_INTERNAL
          /* @min:%2ethrowInternal */
        ](1, 107, dumpObj(e));
      }
      throw e;
    } finally {
      theState.act = prevWatcher || null;
    }
  }
  function _notifyWatchers() {
    if (_waitingHandlers) {
      var notifyHandlers = _waitingHandlers;
      _waitingHandlers = null;
      _watcherTimer && _watcherTimer[
        _DYN_CANCEL
        /* @min:%2ecancel */
      ]();
      _watcherTimer = null;
      var watcherFailures_1 = [];
      arrForEach(notifyHandlers, function(handler) {
        if (handler) {
          if (handler[dynamicPropertyDetail]) {
            arrForEach(handler[dynamicPropertyDetail], function(detail) {
              detail.clr(handler);
            });
            handler[dynamicPropertyDetail] = null;
          }
          if (handler.fn) {
            try {
              _useHandler(handler, handler.fn);
            } catch (e) {
              watcherFailures_1[
                _DYN_PUSH
                /* @min:%2epush */
              ](e);
            }
          }
        }
      });
      if (_waitingHandlers) {
        try {
          _notifyWatchers();
        } catch (e) {
          watcherFailures_1[
            _DYN_PUSH
            /* @min:%2epush */
          ](e);
        }
      }
      if (watcherFailures_1[
        _DYN_LENGTH
        /* @min:%2elength */
      ] > 0) {
        throwAggregationError("Watcher error(s): ", watcherFailures_1);
      }
    }
  }
  function _addWatcher(detail) {
    if (detail && detail.h[
      _DYN_LENGTH
      /* @min:%2elength */
    ] > 0) {
      if (!_waitingHandlers) {
        _waitingHandlers = [];
      }
      if (!_watcherTimer) {
        _watcherTimer = scheduleTimeout(function() {
          _watcherTimer = null;
          _notifyWatchers();
        }, 0);
      }
      for (var idx = 0; idx < detail.h[
        _DYN_LENGTH
        /* @min:%2elength */
      ]; idx++) {
        var handler = detail.h[idx];
        if (handler && arrIndexOf(_waitingHandlers, handler) === -1) {
          _waitingHandlers[
            _DYN_PUSH
            /* @min:%2epush */
          ](handler);
        }
      }
    }
  }
  function _trackHandler(handler, detail) {
    if (handler) {
      var details = handler[dynamicPropertyDetail] = handler[dynamicPropertyDetail] || [];
      if (arrIndexOf(details, detail) === -1) {
        details[
          _DYN_PUSH
          /* @min:%2epush */
        ](detail);
      }
    }
  }
  theState = (_a12 = {
    prop: dynamicPropertySymbol,
    ro: dynamicPropertyReadOnly,
    rf: dynamicPropertyReferenced
  }, _a12[
    _DYN_BLK_VAL
    /* @min:blkVal */
  ] = dynamicPropertyBlockValue, _a12[
    _DYN_HDLR
    /* @min:hdlr */
  ] = cfgHandler, _a12.add = _addWatcher, _a12[
    _DYN_NOTIFY
    /* @min:notify */
  ] = _notifyWatchers, _a12.use = _useHandler, _a12.trk = _trackHandler, _a12);
  return theState;
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/Config/DynamicConfig.js
function _createAndUseHandler(state, configHandler) {
  var handler = {
    fn: configHandler,
    rm: function() {
      handler.fn = null;
      state = null;
      configHandler = null;
    }
  };
  objDefine(handler, "toJSON", { v: function() {
    return "WatcherHandler" + (handler.fn ? "" : "[X]");
  } });
  state.use(handler, configHandler);
  return handler;
}
function _createDynamicHandler(logger, target, inPlace) {
  var _a12;
  var dynamicHandler = getDynamicConfigHandler(target);
  if (dynamicHandler) {
    return dynamicHandler;
  }
  var uid = createUniqueNamespace("dyncfg", true);
  var newTarget = target && inPlace !== false ? target : _cfgDeepCopy(target);
  var theState;
  function _notifyWatchers() {
    theState[
      _DYN_NOTIFY
      /* @min:%2enotify */
    ]();
  }
  function _setValue(target2, name, value) {
    try {
      target2 = _setDynamicProperty(theState, target2, name, value);
    } catch (e) {
      _throwDynamicError(logger, name, "Setting value", e);
    }
    return target2[name];
  }
  function _watch(configHandler) {
    return _createAndUseHandler(theState, configHandler);
  }
  function _block(configHandler, allowUpdate) {
    theState.use(null, function(details) {
      var prevUpd = theState.upd;
      try {
        if (!isUndefined(allowUpdate)) {
          theState.upd = allowUpdate;
        }
        configHandler(details);
      } finally {
        theState.upd = prevUpd;
      }
    });
  }
  function _ref(target2, name) {
    var _a13;
    return _setDynamicPropertyState(theState, target2, name, (_a13 = {}, _a13[
      0
      /* _eSetDynamicPropertyFlags.inPlace */
    ] = true, _a13))[name];
  }
  function _rdOnly(target2, name) {
    var _a13;
    return _setDynamicPropertyState(theState, target2, name, (_a13 = {}, _a13[
      1
      /* _eSetDynamicPropertyFlags.readOnly */
    ] = true, _a13))[name];
  }
  function _blkPropValue(target2, name) {
    var _a13;
    return _setDynamicPropertyState(theState, target2, name, (_a13 = {}, _a13[
      2
      /* _eSetDynamicPropertyFlags.blockDynamicProperty */
    ] = true, _a13))[name];
  }
  function _applyDefaults(theConfig, defaultValues5) {
    if (defaultValues5) {
      objForEachKey(defaultValues5, function(name, value) {
        _applyDefaultValue(cfgHandler, theConfig, name, value);
      });
    }
    return theConfig;
  }
  var cfgHandler = (_a12 = {
    uid: null,
    cfg: newTarget
  }, _a12[
    _DYN_LOGGER
    /* @min:logger */
  ] = logger, _a12[
    _DYN_NOTIFY
    /* @min:notify */
  ] = _notifyWatchers, _a12.set = _setValue, _a12[
    _DYN_SET_DF
    /* @min:setDf */
  ] = _applyDefaults, _a12[
    _DYN_WATCH
    /* @min:watch */
  ] = _watch, _a12.ref = _ref, _a12[
    _DYN_RD_ONLY
    /* @min:rdOnly */
  ] = _rdOnly, _a12[
    _DYN_BLK_VAL
    /* @min:blkVal */
  ] = _blkPropValue, _a12._block = _block, _a12);
  objDefine(cfgHandler, "uid", {
    c: false,
    e: false,
    w: false,
    v: uid
  });
  theState = _createState(cfgHandler);
  _makeDynamicObject(theState, newTarget, "config", "Creating");
  return cfgHandler;
}
function _logInvalidAccess(logger, message) {
  if (logger) {
    logger[
      _DYN_WARN_TO_CONSOLE
      /* @min:%2ewarnToConsole */
    ](message);
    logger[
      _DYN_THROW_INTERNAL
      /* @min:%2ethrowInternal */
    ](2, 108, message);
  } else {
    throwInvalidAccess(message);
  }
}
function createDynamicConfig(config, defaultConfig2, logger, inPlace) {
  var dynamicHandler = _createDynamicHandler(logger, config || {}, inPlace);
  if (defaultConfig2) {
    dynamicHandler[
      _DYN_SET_DF
      /* @min:%2esetDf */
    ](dynamicHandler.cfg, defaultConfig2);
  }
  return dynamicHandler;
}
function onConfigChange(config, configHandler, logger) {
  var handler = config[CFG_HANDLER_LINK] || config;
  if (handler.cfg && (handler.cfg === config || handler.cfg[CFG_HANDLER_LINK] === handler)) {
    return handler[
      _DYN_WATCH
      /* @min:%2ewatch */
    ](configHandler);
  }
  _logInvalidAccess(logger, STR_NOT_DYNAMIC_ERROR + dumpObj(config));
  return createDynamicConfig(config, null, logger)[
    _DYN_WATCH
    /* @min:%2ewatch */
  ](configHandler);
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/AsyncUtils.js
function runTargetUnload(target, isAsync) {
  if (target && target[
    _DYN_UNLOAD
    /* @min:%2eunload */
  ]) {
    return target[
      _DYN_UNLOAD
      /* @min:%2eunload */
    ](isAsync);
  }
}
function doUnloadAll(targets, isAsync, done) {
  var result;
  if (!done) {
    result = createPromise(function(resolved) {
      done = resolved;
    });
  }
  if (targets && getLength(targets) > 0) {
    doAwaitResponse(runTargetUnload(targets[0], isAsync), function() {
      doUnloadAll(arrSlice(targets, 1), isAsync, done);
    });
  } else {
    done();
  }
  return result;
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/Constants.js
var ChannelControllerPriority = 500;
var DisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/Config/ConfigDefaultHelpers.js
function _stringToBoolOrDefault(theValue, defaultValue, theConfig) {
  if (!theValue && isNullOrUndefined(theValue)) {
    return defaultValue;
  }
  if (isBoolean(theValue)) {
    return theValue;
  }
  return asString(theValue)[
    _DYN_TO_LOWER_CASE
    /* @min:%2etoLowerCase */
  ]() === "true";
}
function cfgDfMerge(defaultValue) {
  return {
    mrg: true,
    v: defaultValue
  };
}
function cfgDfSet(setter, defaultValue) {
  return {
    set: setter,
    v: defaultValue
  };
}
function cfgDfValidate(validator, defaultValue, fallBackName) {
  return {
    fb: fallBackName,
    isVal: validator,
    v: defaultValue
  };
}
function cfgDfBoolean(defaultValue, fallBackName) {
  return {
    fb: fallBackName,
    set: _stringToBoolOrDefault,
    v: !!defaultValue
  };
}
function cfgDfString(defaultValue) {
  return {
    isVal: isString,
    v: asString(defaultValue || STR_EMPTY)
  };
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/DbgExtensionUtils.js
var listenerFuncs = [STR_EVENTS_SENT, STR_EVENTS_DISCARDED, STR_EVENTS_SEND_REQUEST, STR_PERF_EVENT];
var _aiNamespace = null;
var _debugListener;
function _listenerProxyFunc(name, config) {
  return function() {
    var args = arguments;
    var dbgExt = getDebugExt(config);
    if (dbgExt) {
      var listener = dbgExt.listener;
      if (listener && listener[name]) {
        listener[name][
          _DYN_APPLY
          /* @min:%2eapply */
        ](listener, args);
      }
    }
  };
}
function _getExtensionNamespace() {
  var target = getInst("Microsoft");
  if (target) {
    _aiNamespace = target["ApplicationInsights"];
  }
  return _aiNamespace;
}
function getDebugExt(config) {
  var ns = _aiNamespace;
  if (!ns && config.disableDbgExt !== true) {
    ns = _aiNamespace || _getExtensionNamespace();
  }
  return ns ? ns["ChromeDbgExt"] : null;
}
function getDebugListener(config) {
  if (!_debugListener) {
    _debugListener = {};
    for (var lp = 0; lp < listenerFuncs[
      _DYN_LENGTH
      /* @min:%2elength */
    ]; lp++) {
      _debugListener[listenerFuncs[lp]] = _listenerProxyFunc(listenerFuncs[lp], config);
    }
  }
  return _debugListener;
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/DiagnosticLogger.js
var _a2;
var STR_WARN_TO_CONSOLE = "warnToConsole";
var AiNonUserActionablePrefix = "AI (Internal): ";
var AiUserActionablePrefix = "AI: ";
var AIInternalMessagePrefix = "AITR_";
var defaultValues = {
  loggingLevelConsole: 0,
  loggingLevelTelemetry: 1,
  maxMessageLimit: 25,
  enableDebug: false
};
var _logFuncs = (_a2 = {}, _a2[
  0
  /* eLoggingSeverity.DISABLED */
] = null, _a2[
  1
  /* eLoggingSeverity.CRITICAL */
] = "errorToConsole", _a2[
  2
  /* eLoggingSeverity.WARNING */
] = STR_WARN_TO_CONSOLE, _a2[
  3
  /* eLoggingSeverity.DEBUG */
] = "debugToConsole", _a2);
function _sanitizeDiagnosticText(text) {
  if (text) {
    return '"' + text[
      _DYN_REPLACE
      /* @min:%2ereplace */
    ](/\"/g, STR_EMPTY) + '"';
  }
  return STR_EMPTY;
}
function _logToConsole(func, message) {
  var theConsole = getConsole();
  if (!!theConsole) {
    var logFunc = "log";
    if (theConsole[func]) {
      logFunc = func;
    }
    if (isFunction(theConsole[logFunc])) {
      theConsole[logFunc](message);
    }
  }
}
var _InternalLogMessage = (
  /** @class */
  function() {
    function _InternalLogMessage2(msgId, msg, isUserAct, properties) {
      if (isUserAct === void 0) {
        isUserAct = false;
      }
      var _self = this;
      _self[
        _DYN_MESSAGE_ID
        /* @min:%2emessageId */
      ] = msgId;
      _self[
        _DYN_MESSAGE
        /* @min:%2emessage */
      ] = (isUserAct ? AiUserActionablePrefix : AiNonUserActionablePrefix) + msgId;
      var strProps = STR_EMPTY;
      if (hasJSON()) {
        strProps = getJSON().stringify(properties);
      }
      var diagnosticText = (msg ? " message:" + _sanitizeDiagnosticText(msg) : STR_EMPTY) + (properties ? " props:" + _sanitizeDiagnosticText(strProps) : STR_EMPTY);
      _self[
        _DYN_MESSAGE
        /* @min:%2emessage */
      ] += diagnosticText;
    }
    _InternalLogMessage2.dataType = "MessageData";
    return _InternalLogMessage2;
  }()
);
function safeGetLogger(core, config) {
  return (core || {})[
    _DYN_LOGGER
    /* @min:%2elogger */
  ] || new DiagnosticLogger(config);
}
var DiagnosticLogger = (
  /** @class */
  function() {
    function DiagnosticLogger2(config) {
      this.identifier = "DiagnosticLogger";
      this.queue = [];
      var _messageCount = 0;
      var _messageLogged = {};
      var _loggingLevelConsole;
      var _loggingLevelTelemetry;
      var _maxInternalMessageLimit;
      var _enableDebug;
      var _unloadHandler;
      dynamicProto(DiagnosticLogger2, this, function(_self) {
        _unloadHandler = _setDefaultsFromConfig(config || {});
        _self.consoleLoggingLevel = function() {
          return _loggingLevelConsole;
        };
        _self[
          _DYN_THROW_INTERNAL
          /* @min:%2ethrowInternal */
        ] = function(severity, msgId, msg, properties, isUserAct) {
          if (isUserAct === void 0) {
            isUserAct = false;
          }
          var message = new _InternalLogMessage(msgId, msg, isUserAct, properties);
          if (_enableDebug) {
            throw dumpObj(message);
          } else {
            var logFunc = _logFuncs[severity] || STR_WARN_TO_CONSOLE;
            if (!isUndefined(message[
              _DYN_MESSAGE
              /* @min:%2emessage */
            ])) {
              if (isUserAct) {
                var messageKey = +message[
                  _DYN_MESSAGE_ID
                  /* @min:%2emessageId */
                ];
                if (!_messageLogged[messageKey] && _loggingLevelConsole >= severity) {
                  _self[logFunc](message[
                    _DYN_MESSAGE
                    /* @min:%2emessage */
                  ]);
                  _messageLogged[messageKey] = true;
                }
              } else {
                if (_loggingLevelConsole >= severity) {
                  _self[logFunc](message[
                    _DYN_MESSAGE
                    /* @min:%2emessage */
                  ]);
                }
              }
              _logInternalMessage2(severity, message);
            } else {
              _debugExtMsg("throw" + (severity === 1 ? "Critical" : "Warning"), message);
            }
          }
        };
        _self.debugToConsole = function(message) {
          _logToConsole("debug", message);
          _debugExtMsg("warning", message);
        };
        _self[
          _DYN_WARN_TO_CONSOLE
          /* @min:%2ewarnToConsole */
        ] = function(message) {
          _logToConsole("warn", message);
          _debugExtMsg("warning", message);
        };
        _self.errorToConsole = function(message) {
          _logToConsole("error", message);
          _debugExtMsg("error", message);
        };
        _self.resetInternalMessageCount = function() {
          _messageCount = 0;
          _messageLogged = {};
        };
        _self[
          _DYN_LOG_INTERNAL_MESSAGE
          /* @min:%2elogInternalMessage */
        ] = _logInternalMessage2;
        _self[
          _DYN_UNLOAD
          /* @min:%2eunload */
        ] = function(isAsync) {
          _unloadHandler && _unloadHandler.rm();
          _unloadHandler = null;
        };
        function _logInternalMessage2(severity, message) {
          if (_areInternalMessagesThrottled()) {
            return;
          }
          var logMessage = true;
          var messageKey = AIInternalMessagePrefix + message[
            _DYN_MESSAGE_ID
            /* @min:%2emessageId */
          ];
          if (_messageLogged[messageKey]) {
            logMessage = false;
          } else {
            _messageLogged[messageKey] = true;
          }
          if (logMessage) {
            if (severity <= _loggingLevelTelemetry) {
              _self.queue[
                _DYN_PUSH
                /* @min:%2epush */
              ](message);
              _messageCount++;
              _debugExtMsg(severity === 1 ? "error" : "warn", message);
            }
            if (_messageCount === _maxInternalMessageLimit) {
              var throttleLimitMessage = "Internal events throttle limit per PageView reached for this app.";
              var throttleMessage = new _InternalLogMessage(23, throttleLimitMessage, false);
              _self.queue[
                _DYN_PUSH
                /* @min:%2epush */
              ](throttleMessage);
              if (severity === 1) {
                _self.errorToConsole(throttleLimitMessage);
              } else {
                _self[
                  _DYN_WARN_TO_CONSOLE
                  /* @min:%2ewarnToConsole */
                ](throttleLimitMessage);
              }
            }
          }
        }
        function _setDefaultsFromConfig(config2) {
          return onConfigChange(createDynamicConfig(config2, defaultValues, _self).cfg, function(details) {
            var config3 = details.cfg;
            _loggingLevelConsole = config3[
              _DYN_LOGGING_LEVEL_CONSOL4
              /* @min:%2eloggingLevelConsole */
            ];
            _loggingLevelTelemetry = config3.loggingLevelTelemetry;
            _maxInternalMessageLimit = config3.maxMessageLimit;
            _enableDebug = config3.enableDebug;
          });
        }
        function _areInternalMessagesThrottled() {
          return _messageCount >= _maxInternalMessageLimit;
        }
        function _debugExtMsg(name, data) {
          var dbgExt = getDebugExt(config || {});
          if (dbgExt && dbgExt[
            _DYN_DIAG_LOG
            /* @min:%2ediagLog */
          ]) {
            dbgExt[
              _DYN_DIAG_LOG
              /* @min:%2ediagLog */
            ](name, data);
          }
        }
      });
    }
    DiagnosticLogger2.__ieDyn = 1;
    return DiagnosticLogger2;
  }()
);
function _getLogger(logger) {
  return logger || new DiagnosticLogger();
}
function _throwInternal(logger, severity, msgId, msg, properties, isUserAct) {
  if (isUserAct === void 0) {
    isUserAct = false;
  }
  _getLogger(logger)[
    _DYN_THROW_INTERNAL
    /* @min:%2ethrowInternal */
  ](severity, msgId, msg, properties, isUserAct);
}
function _warnToConsole(logger, message) {
  _getLogger(logger)[
    _DYN_WARN_TO_CONSOLE
    /* @min:%2ewarnToConsole */
  ](message);
}
function _logInternalMessage(logger, severity, message) {
  _getLogger(logger)[
    _DYN_LOG_INTERNAL_MESSAGE
    /* @min:%2elogInternalMessage */
  ](severity, message);
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/CookieMgr.js
var _a3;
var _b;
var strToGMTString = "toGMTString";
var strToUTCString = "toUTCString";
var strCookie = "cookie";
var strExpires = "expires";
var strIsCookieUseDisabled = "isCookieUseDisabled";
var strDisableCookiesUsage = "disableCookiesUsage";
var strConfigCookieMgr = "_ckMgr";
var _supportsCookies = null;
var _allowUaSameSite = null;
var _parsedCookieValue = null;
var _doc;
var _cookieCache = {};
var _globalCookieConfig = {};
var rootDefaultConfig = (_a3 = {
  cookieCfg: cfgDfMerge((_b = {}, _b[STR_DOMAIN] = { fb: "cookieDomain", dfVal: isNotNullOrUndefined }, _b.path = { fb: "cookiePath", dfVal: isNotNullOrUndefined }, _b.enabled = UNDEFINED_VALUE, _b.ignoreCookies = UNDEFINED_VALUE, _b.blockedCookies = UNDEFINED_VALUE, _b)),
  cookieDomain: UNDEFINED_VALUE,
  cookiePath: UNDEFINED_VALUE
}, _a3[strDisableCookiesUsage] = UNDEFINED_VALUE, _a3);
function _getDoc() {
  !_doc && (_doc = getLazy(function() {
    return getDocument();
  }));
}
function _gblCookieMgr(config, logger) {
  var inst = createCookieMgr[strConfigCookieMgr] || _globalCookieConfig[strConfigCookieMgr];
  if (!inst) {
    inst = createCookieMgr[strConfigCookieMgr] = createCookieMgr(config, logger);
    _globalCookieConfig[strConfigCookieMgr] = inst;
  }
  return inst;
}
function _isMgrEnabled(cookieMgr) {
  if (cookieMgr) {
    return cookieMgr.isEnabled();
  }
  return true;
}
function _isIgnoredCookie(cookieMgrCfg, name) {
  if (name && cookieMgrCfg && isArray(cookieMgrCfg.ignoreCookies)) {
    return arrIndexOf(cookieMgrCfg.ignoreCookies, name) !== -1;
  }
  return false;
}
function _isBlockedCookie(cookieMgrCfg, name) {
  if (name && cookieMgrCfg && isArray(cookieMgrCfg.blockedCookies)) {
    if (arrIndexOf(cookieMgrCfg.blockedCookies, name) !== -1) {
      return true;
    }
  }
  return _isIgnoredCookie(cookieMgrCfg, name);
}
function _isCfgEnabled(rootConfig, cookieMgrConfig) {
  var isCfgEnabled = cookieMgrConfig[
    _DYN_ENABLED
    /* @min:%2eenabled */
  ];
  if (isNullOrUndefined(isCfgEnabled)) {
    var cookieEnabled = void 0;
    if (!isUndefined(rootConfig[strIsCookieUseDisabled])) {
      cookieEnabled = !rootConfig[strIsCookieUseDisabled];
    }
    if (!isUndefined(rootConfig[strDisableCookiesUsage])) {
      cookieEnabled = !rootConfig[strDisableCookiesUsage];
    }
    isCfgEnabled = cookieEnabled;
  }
  return isCfgEnabled;
}
function safeGetCookieMgr(core, config) {
  var cookieMgr;
  if (core) {
    cookieMgr = core.getCookieMgr();
  } else if (config) {
    var cookieCfg = config.cookieCfg;
    if (cookieCfg && cookieCfg[strConfigCookieMgr]) {
      cookieMgr = cookieCfg[strConfigCookieMgr];
    } else {
      cookieMgr = createCookieMgr(config);
    }
  }
  if (!cookieMgr) {
    cookieMgr = _gblCookieMgr(config, (core || {})[
      _DYN_LOGGER
      /* @min:%2elogger */
    ]);
  }
  return cookieMgr;
}
function createCookieMgr(rootConfig, logger) {
  var _a12;
  var cookieMgrConfig;
  var _path;
  var _domain;
  var unloadHandler;
  var _enabled;
  var _getCookieFn;
  var _setCookieFn;
  var _delCookieFn;
  rootConfig = createDynamicConfig(rootConfig || _globalCookieConfig, null, logger).cfg;
  unloadHandler = onConfigChange(rootConfig, function(details) {
    details[
      _DYN_SET_DF
      /* @min:%2esetDf */
    ](details.cfg, rootDefaultConfig);
    cookieMgrConfig = details.ref(details.cfg, "cookieCfg");
    _path = cookieMgrConfig[
      STR_PATH
      /* @min:%2epath */
    ] || "/";
    _domain = cookieMgrConfig[
      STR_DOMAIN
      /* @min:%2edomain */
    ];
    _enabled = _isCfgEnabled(rootConfig, cookieMgrConfig) !== false;
    _getCookieFn = cookieMgrConfig.getCookie || _getCookieValue;
    _setCookieFn = cookieMgrConfig.setCookie || _setCookieValue;
    _delCookieFn = cookieMgrConfig.delCookie || _setCookieValue;
  }, logger);
  var cookieMgr = (_a12 = {
    isEnabled: function() {
      var enabled = _isCfgEnabled(rootConfig, cookieMgrConfig) !== false && _enabled && areCookiesSupported(logger);
      var gblManager = _globalCookieConfig[strConfigCookieMgr];
      if (enabled && gblManager && cookieMgr !== gblManager) {
        enabled = _isMgrEnabled(gblManager);
      }
      return enabled;
    },
    setEnabled: function(value) {
      _enabled = value !== false;
      cookieMgrConfig[
        _DYN_ENABLED
        /* @min:%2eenabled */
      ] = value;
    },
    set: function(name, value, maxAgeSec, domain, path) {
      var result = false;
      if (_isMgrEnabled(cookieMgr) && !_isBlockedCookie(cookieMgrConfig, name)) {
        var values = {};
        var theValue = strTrim(value || STR_EMPTY);
        var idx = strIndexOf(theValue, ";");
        if (idx !== -1) {
          theValue = strTrim(strLeft(value, idx));
          values = _extractParts(strSubstring(value, idx + 1));
        }
        setValue(values, STR_DOMAIN, domain || _domain, isTruthy, isUndefined);
        if (!isNullOrUndefined(maxAgeSec)) {
          var _isIE = isIE();
          if (isUndefined(values[strExpires])) {
            var nowMs = utcNow();
            var expireMs = nowMs + maxAgeSec * 1e3;
            if (expireMs > 0) {
              var expiry = /* @__PURE__ */ new Date();
              expiry.setTime(expireMs);
              setValue(values, strExpires, _formatDate(expiry, !_isIE ? strToUTCString : strToGMTString) || _formatDate(expiry, _isIE ? strToGMTString : strToUTCString) || STR_EMPTY, isTruthy);
            }
          }
          if (!_isIE) {
            setValue(values, "max-age", STR_EMPTY + maxAgeSec, null, isUndefined);
          }
        }
        var location_1 = getLocation();
        if (location_1 && location_1[
          _DYN_PROTOCOL
          /* @min:%2eprotocol */
        ] === "https:") {
          setValue(values, "secure", null, null, isUndefined);
          if (_allowUaSameSite === null) {
            _allowUaSameSite = !uaDisallowsSameSiteNone((getNavigator() || {})[
              _DYN_USER_AGENT
              /* @min:%2euserAgent */
            ]);
          }
          if (_allowUaSameSite) {
            setValue(values, "SameSite", "None", null, isUndefined);
          }
        }
        setValue(values, STR_PATH, path || _path, null, isUndefined);
        _setCookieFn(name, _formatCookieValue(theValue, values));
        result = true;
      }
      return result;
    },
    get: function(name) {
      var value = STR_EMPTY;
      if (_isMgrEnabled(cookieMgr) && !_isIgnoredCookie(cookieMgrConfig, name)) {
        value = _getCookieFn(name);
      }
      return value;
    },
    del: function(name, path) {
      var result = false;
      if (_isMgrEnabled(cookieMgr)) {
        result = cookieMgr.purge(name, path);
      }
      return result;
    },
    purge: function(name, path) {
      var _a13;
      var result = false;
      if (areCookiesSupported(logger)) {
        var values = (_a13 = {}, _a13[STR_PATH] = path ? path : "/", _a13[strExpires] = "Thu, 01 Jan 1970 00:00:01 GMT", _a13);
        if (!isIE()) {
          values["max-age"] = "0";
        }
        _delCookieFn(name, _formatCookieValue(STR_EMPTY, values));
        result = true;
      }
      return result;
    }
  }, _a12[
    _DYN_UNLOAD
    /* @min:unload */
  ] = function(isAsync) {
    unloadHandler && unloadHandler.rm();
    unloadHandler = null;
  }, _a12);
  cookieMgr[strConfigCookieMgr] = cookieMgr;
  return cookieMgr;
}
function areCookiesSupported(logger) {
  if (_supportsCookies === null) {
    _supportsCookies = false;
    !_doc && _getDoc();
    try {
      var doc = _doc.v || {};
      _supportsCookies = doc[strCookie] !== void 0;
    } catch (e) {
      _throwInternal(logger, 2, 68, "Cannot access document.cookie - " + getExceptionName(e), { exception: dumpObj(e) });
    }
  }
  return _supportsCookies;
}
function _extractParts(theValue) {
  var values = {};
  if (theValue && theValue[
    _DYN_LENGTH
    /* @min:%2elength */
  ]) {
    var parts = strTrim(theValue)[
      _DYN_SPLIT
      /* @min:%2esplit */
    ](";");
    arrForEach(parts, function(thePart) {
      thePart = strTrim(thePart || STR_EMPTY);
      if (thePart) {
        var idx = strIndexOf(thePart, "=");
        if (idx === -1) {
          values[thePart] = null;
        } else {
          values[strTrim(strLeft(thePart, idx))] = strTrim(strSubstring(thePart, idx + 1));
        }
      }
    });
  }
  return values;
}
function _formatDate(theDate, func) {
  if (isFunction(theDate[func])) {
    return theDate[func]();
  }
  return null;
}
function _formatCookieValue(value, values) {
  var cookieValue = value || STR_EMPTY;
  objForEachKey(values, function(name, theValue) {
    cookieValue += "; " + name + (!isNullOrUndefined(theValue) ? "=" + theValue : STR_EMPTY);
  });
  return cookieValue;
}
function _getCookieValue(name) {
  var cookieValue = STR_EMPTY;
  !_doc && _getDoc();
  if (_doc.v) {
    var theCookie = _doc.v[strCookie] || STR_EMPTY;
    if (_parsedCookieValue !== theCookie) {
      _cookieCache = _extractParts(theCookie);
      _parsedCookieValue = theCookie;
    }
    cookieValue = strTrim(_cookieCache[name] || STR_EMPTY);
  }
  return cookieValue;
}
function _setCookieValue(name, cookieValue) {
  !_doc && _getDoc();
  if (_doc.v) {
    _doc.v[strCookie] = name + "=" + cookieValue;
  }
}
function uaDisallowsSameSiteNone(userAgent) {
  if (!isString(userAgent)) {
    return false;
  }
  if (strContains2(userAgent, "CPU iPhone OS 12") || strContains2(userAgent, "iPad; CPU OS 12")) {
    return true;
  }
  if (strContains2(userAgent, "Macintosh; Intel Mac OS X 10_14") && strContains2(userAgent, "Version/") && strContains2(userAgent, "Safari")) {
    return true;
  }
  if (strContains2(userAgent, "Macintosh; Intel Mac OS X 10_14") && strEndsWith(userAgent, "AppleWebKit/605.1.15 (KHTML, like Gecko)")) {
    return true;
  }
  if (strContains2(userAgent, "Chrome/5") || strContains2(userAgent, "Chrome/6")) {
    return true;
  }
  if (strContains2(userAgent, "UnrealEngine") && !strContains2(userAgent, "Chrome")) {
    return true;
  }
  if (strContains2(userAgent, "UCBrowser/12") || strContains2(userAgent, "UCBrowser/11")) {
    return true;
  }
  return false;
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/NotificationManager.js
var defaultValues2 = {
  perfEvtsSendAll: false
};
function _runScheduledListeners(asyncNotifications) {
  asyncNotifications.h = null;
  var callbacks = asyncNotifications.cb;
  asyncNotifications.cb = [];
  arrForEach(callbacks, function(cb) {
    safe(cb.fn, [cb.arg]);
  });
}
function _runListeners(listeners, name, asyncNotifications, callback) {
  arrForEach(listeners, function(listener) {
    if (listener && listener[name]) {
      if (asyncNotifications) {
        asyncNotifications.cb[
          _DYN_PUSH
          /* @min:%2epush */
        ]({
          fn: callback,
          arg: listener
        });
        asyncNotifications.h = asyncNotifications.h || scheduleTimeout(_runScheduledListeners, 0, asyncNotifications);
      } else {
        safe(callback, [listener]);
      }
    }
  });
}
var NotificationManager = (
  /** @class */
  function() {
    function NotificationManager2(config) {
      this.listeners = [];
      var perfEvtsSendAll;
      var unloadHandler;
      var _listeners = [];
      var _asyncNotifications = {
        h: null,
        cb: []
      };
      var cfgHandler = createDynamicConfig(config, defaultValues2);
      unloadHandler = cfgHandler[
        _DYN_WATCH
        /* @min:%2ewatch */
      ](function(details) {
        perfEvtsSendAll = !!details.cfg.perfEvtsSendAll;
      });
      dynamicProto(NotificationManager2, this, function(_self) {
        objDefine(_self, "listeners", {
          g: function() {
            return _listeners;
          }
        });
        _self[
          _DYN_ADD_NOTIFICATION_LIS1
          /* @min:%2eaddNotificationListener */
        ] = function(listener) {
          _listeners[
            _DYN_PUSH
            /* @min:%2epush */
          ](listener);
        };
        _self[
          _DYN_REMOVE_NOTIFICATION_0
          /* @min:%2eremoveNotificationListener */
        ] = function(listener) {
          var index = arrIndexOf(_listeners, listener);
          while (index > -1) {
            _listeners[
              _DYN_SPLICE
              /* @min:%2esplice */
            ](index, 1);
            index = arrIndexOf(_listeners, listener);
          }
        };
        _self[
          STR_EVENTS_SENT
          /* @min:%2eeventsSent */
        ] = function(events) {
          _runListeners(_listeners, STR_EVENTS_SENT, _asyncNotifications, function(listener) {
            listener[
              STR_EVENTS_SENT
              /* @min:%2eeventsSent */
            ](events);
          });
        };
        _self[
          STR_EVENTS_DISCARDED
          /* @min:%2eeventsDiscarded */
        ] = function(events, reason) {
          _runListeners(_listeners, STR_EVENTS_DISCARDED, _asyncNotifications, function(listener) {
            listener[
              STR_EVENTS_DISCARDED
              /* @min:%2eeventsDiscarded */
            ](events, reason);
          });
        };
        _self[
          STR_EVENTS_SEND_REQUEST
          /* @min:%2eeventsSendRequest */
        ] = function(sendReason, isAsync) {
          _runListeners(_listeners, STR_EVENTS_SEND_REQUEST, isAsync ? _asyncNotifications : null, function(listener) {
            listener[
              STR_EVENTS_SEND_REQUEST
              /* @min:%2eeventsSendRequest */
            ](sendReason, isAsync);
          });
        };
        _self[
          STR_PERF_EVENT
          /* @min:%2eperfEvent */
        ] = function(perfEvent) {
          if (perfEvent) {
            if (perfEvtsSendAll || !perfEvent[
              _DYN_IS_CHILD_EVT
              /* @min:%2eisChildEvt */
            ]()) {
              _runListeners(_listeners, STR_PERF_EVENT, null, function(listener) {
                if (perfEvent[
                  _DYN_IS_ASYNC
                  /* @min:%2eisAsync */
                ]) {
                  scheduleTimeout(function() {
                    return listener[
                      STR_PERF_EVENT
                      /* @min:%2eperfEvent */
                    ](perfEvent);
                  }, 0);
                } else {
                  listener[
                    STR_PERF_EVENT
                    /* @min:%2eperfEvent */
                  ](perfEvent);
                }
              });
            }
          }
        };
        _self[
          STR_OFFLINE_STORE
          /* @min:%2eofflineEventsStored */
        ] = function(events) {
          if (events && events[
            _DYN_LENGTH
            /* @min:%2elength */
          ]) {
            _runListeners(_listeners, STR_OFFLINE_STORE, _asyncNotifications, function(listener) {
              listener[
                STR_OFFLINE_STORE
                /* @min:%2eofflineEventsStored */
              ](events);
            });
          }
        };
        _self[
          STR_OFFLINE_SENT
          /* @min:%2eofflineBatchSent */
        ] = function(batch) {
          if (batch && batch[
            _DYN_DATA
            /* @min:%2edata */
          ]) {
            _runListeners(_listeners, STR_OFFLINE_SENT, _asyncNotifications, function(listener) {
              listener[
                STR_OFFLINE_SENT
                /* @min:%2eofflineBatchSent */
              ](batch);
            });
          }
        };
        _self[
          STR_OFFLINE_DROP
          /* @min:%2eofflineBatchDrop */
        ] = function(cnt, reason) {
          if (cnt > 0) {
            var rn_1 = reason || 0;
            _runListeners(_listeners, STR_OFFLINE_DROP, _asyncNotifications, function(listener) {
              listener[
                STR_OFFLINE_DROP
                /* @min:%2eofflineBatchDrop */
              ](cnt, rn_1);
            });
          }
        };
        _self[
          _DYN_UNLOAD
          /* @min:%2eunload */
        ] = function(isAsync) {
          var _finishUnload = function() {
            unloadHandler && unloadHandler.rm();
            unloadHandler = null;
            _listeners = [];
            _asyncNotifications.h && _asyncNotifications.h[
              _DYN_CANCEL
              /* @min:%2ecancel */
            ]();
            _asyncNotifications.h = null;
            _asyncNotifications.cb = [];
          };
          var waiting;
          _runListeners(_listeners, "unload", null, function(listener) {
            var asyncUnload = listener[
              _DYN_UNLOAD
              /* @min:%2eunload */
            ](isAsync);
            if (asyncUnload) {
              if (!waiting) {
                waiting = [];
              }
              waiting[
                _DYN_PUSH
                /* @min:%2epush */
              ](asyncUnload);
            }
          });
          if (waiting) {
            return createPromise(function(resolve) {
              return doAwaitResponse(createAllPromise(waiting), function() {
                _finishUnload();
                resolve();
              });
            });
          } else {
            _finishUnload();
          }
        };
      });
    }
    NotificationManager2.__ieDyn = 1;
    return NotificationManager2;
  }()
);

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/PerfManager.js
var strExecutionContextKey = "ctx";
var strParentContextKey = "ParentContextKey";
var strChildrenContextKey = "ChildrenContextKey";
var _defaultPerfManager = null;
var PerfEvent = (
  /** @class */
  function() {
    function PerfEvent2(name, payloadDetails, isAsync) {
      var _self = this;
      _self.start = utcNow();
      _self[
        _DYN_NAME
        /* @min:%2ename */
      ] = name;
      _self[
        _DYN_IS_ASYNC
        /* @min:%2eisAsync */
      ] = isAsync;
      _self[
        _DYN_IS_CHILD_EVT
        /* @min:%2eisChildEvt */
      ] = function() {
        return false;
      };
      if (isFunction(payloadDetails)) {
        var theDetails_1;
        objDefine(_self, "payload", {
          g: function() {
            if (!theDetails_1 && isFunction(payloadDetails)) {
              theDetails_1 = payloadDetails();
              payloadDetails = null;
            }
            return theDetails_1;
          }
        });
      }
      _self[
        _DYN_GET_CTX
        /* @min:%2egetCtx */
      ] = function(key) {
        if (key) {
          if (key === PerfEvent2[strParentContextKey] || key === PerfEvent2[strChildrenContextKey]) {
            return _self[key];
          }
          return (_self[strExecutionContextKey] || {})[key];
        }
        return null;
      };
      _self[
        _DYN_SET_CTX
        /* @min:%2esetCtx */
      ] = function(key, value) {
        if (key) {
          if (key === PerfEvent2[strParentContextKey]) {
            if (!_self[key]) {
              _self[
                _DYN_IS_CHILD_EVT
                /* @min:%2eisChildEvt */
              ] = function() {
                return true;
              };
            }
            _self[key] = value;
          } else if (key === PerfEvent2[strChildrenContextKey]) {
            _self[key] = value;
          } else {
            var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
            ctx[key] = value;
          }
        }
      };
      _self[
        _DYN_COMPLETE
        /* @min:%2ecomplete */
      ] = function() {
        var childTime = 0;
        var childEvts = _self[
          _DYN_GET_CTX
          /* @min:%2egetCtx */
        ](PerfEvent2[strChildrenContextKey]);
        if (isArray(childEvts)) {
          for (var lp = 0; lp < childEvts[
            _DYN_LENGTH
            /* @min:%2elength */
          ]; lp++) {
            var childEvt = childEvts[lp];
            if (childEvt) {
              childTime += childEvt[
                _DYN_TIME
                /* @min:%2etime */
              ];
            }
          }
        }
        _self[
          _DYN_TIME
          /* @min:%2etime */
        ] = utcNow() - _self.start;
        _self.exTime = _self[
          _DYN_TIME
          /* @min:%2etime */
        ] - childTime;
        _self[
          _DYN_COMPLETE
          /* @min:%2ecomplete */
        ] = function() {
        };
      };
    }
    PerfEvent2.ParentContextKey = "parent";
    PerfEvent2.ChildrenContextKey = "childEvts";
    return PerfEvent2;
  }()
);
var PerfManager = (
  /** @class */
  function() {
    function PerfManager2(manager) {
      this.ctx = {};
      dynamicProto(PerfManager2, this, function(_self) {
        _self.create = function(src, payloadDetails, isAsync) {
          return new PerfEvent(src, payloadDetails, isAsync);
        };
        _self.fire = function(perfEvent) {
          if (perfEvent) {
            perfEvent[
              _DYN_COMPLETE
              /* @min:%2ecomplete */
            ]();
            if (manager && isFunction(manager[
              STR_PERF_EVENT
              /* @min:%2eperfEvent */
            ])) {
              manager[
                STR_PERF_EVENT
                /* @min:%2eperfEvent */
              ](perfEvent);
            }
          }
        };
        _self[
          _DYN_SET_CTX
          /* @min:%2esetCtx */
        ] = function(key, value) {
          if (key) {
            var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
            ctx[key] = value;
          }
        };
        _self[
          _DYN_GET_CTX
          /* @min:%2egetCtx */
        ] = function(key) {
          return (_self[strExecutionContextKey] || {})[key];
        };
      });
    }
    PerfManager2.__ieDyn = 1;
    return PerfManager2;
  }()
);
var doPerfActiveKey = "CoreUtils.doPerf";
function doPerf(mgrSource, getSource, func, details, isAsync) {
  if (mgrSource) {
    var perfMgr = mgrSource;
    if (perfMgr[STR_GET_PERF_MGR]) {
      perfMgr = perfMgr[STR_GET_PERF_MGR]();
    }
    if (perfMgr) {
      var perfEvt = void 0;
      var currentActive = perfMgr[
        _DYN_GET_CTX
        /* @min:%2egetCtx */
      ](doPerfActiveKey);
      try {
        perfEvt = perfMgr.create(getSource(), details, isAsync);
        if (perfEvt) {
          if (currentActive && perfEvt[
            _DYN_SET_CTX
            /* @min:%2esetCtx */
          ]) {
            perfEvt[
              _DYN_SET_CTX
              /* @min:%2esetCtx */
            ](PerfEvent[strParentContextKey], currentActive);
            if (currentActive[
              _DYN_GET_CTX
              /* @min:%2egetCtx */
            ] && currentActive[
              _DYN_SET_CTX
              /* @min:%2esetCtx */
            ]) {
              var children = currentActive[
                _DYN_GET_CTX
                /* @min:%2egetCtx */
              ](PerfEvent[strChildrenContextKey]);
              if (!children) {
                children = [];
                currentActive[
                  _DYN_SET_CTX
                  /* @min:%2esetCtx */
                ](PerfEvent[strChildrenContextKey], children);
              }
              children[
                _DYN_PUSH
                /* @min:%2epush */
              ](perfEvt);
            }
          }
          perfMgr[
            _DYN_SET_CTX
            /* @min:%2esetCtx */
          ](doPerfActiveKey, perfEvt);
          return func(perfEvt);
        }
      } catch (ex) {
        if (perfEvt && perfEvt[
          _DYN_SET_CTX
          /* @min:%2esetCtx */
        ]) {
          perfEvt[
            _DYN_SET_CTX
            /* @min:%2esetCtx */
          ]("exception", ex);
        }
      } finally {
        if (perfEvt) {
          perfMgr.fire(perfEvt);
        }
        perfMgr[
          _DYN_SET_CTX
          /* @min:%2esetCtx */
        ](doPerfActiveKey, currentActive);
      }
    }
  }
  return func();
}
function getGblPerfMgr() {
  return _defaultPerfManager;
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/CoreUtils.js
function generateW3CId() {
  var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  var oct = STR_EMPTY, tmp;
  for (var a = 0; a < 4; a++) {
    tmp = random32();
    oct += hexValues[tmp & 15] + hexValues[tmp >> 4 & 15] + hexValues[tmp >> 8 & 15] + hexValues[tmp >> 12 & 15] + hexValues[tmp >> 16 & 15] + hexValues[tmp >> 20 & 15] + hexValues[tmp >> 24 & 15] + hexValues[tmp >> 28 & 15];
  }
  var clockSequenceHi = hexValues[8 + (random32() & 3) | 0];
  return strSubstr(oct, 0, 8) + strSubstr(oct, 9, 4) + "4" + strSubstr(oct, 13, 3) + clockSequenceHi + strSubstr(oct, 16, 3) + strSubstr(oct, 19, 12);
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/W3cTraceParent.js
var DEFAULT_VERSION = "00";
var INVALID_VERSION = "ff";
var INVALID_TRACE_ID = "00000000000000000000000000000000";
var INVALID_SPAN_ID = "0000000000000000";
function _isValid(value, len, invalidValue) {
  if (value && value[
    _DYN_LENGTH
    /* @min:%2elength */
  ] === len && value !== invalidValue) {
    return !!value.match(/^[\da-f]*$/i);
  }
  return false;
}
function _formatValue(value, len, defValue) {
  if (_isValid(value, len)) {
    return value;
  }
  return defValue;
}
function _formatFlags(value) {
  if (isNaN(value) || value < 0 || value > 255) {
    value = 1;
  }
  var result = value.toString(16);
  while (result[
    _DYN_LENGTH
    /* @min:%2elength */
  ] < 2) {
    result = "0" + result;
  }
  return result;
}
function createTraceParent(traceId, spanId, flags, version2) {
  var _a12;
  return _a12 = {}, _a12[
    _DYN_VERSION
    /* @min:version */
  ] = _isValid(version2, 2, INVALID_VERSION) ? version2 : DEFAULT_VERSION, _a12[
    _DYN_TRACE_ID
    /* @min:traceId */
  ] = isValidTraceId(traceId) ? traceId : generateW3CId(), _a12[
    _DYN_SPAN_ID
    /* @min:spanId */
  ] = isValidSpanId(spanId) ? spanId : strLeft(generateW3CId(), 16), _a12.traceFlags = flags >= 0 && flags <= 255 ? flags : 1, _a12;
}
function isValidTraceId(value) {
  return _isValid(value, 32, INVALID_TRACE_ID);
}
function isValidSpanId(value) {
  return _isValid(value, 16, INVALID_SPAN_ID);
}
function formatTraceParent(value) {
  if (value) {
    var flags = _formatFlags(value[
      _DYN_TRACE_FLAGS
      /* @min:%2etraceFlags */
    ]);
    if (!_isValid(flags, 2)) {
      flags = "01";
    }
    var version2 = value[
      _DYN_VERSION
      /* @min:%2eversion */
    ] || DEFAULT_VERSION;
    if (version2 !== "00" && version2 !== "ff") {
      version2 = DEFAULT_VERSION;
    }
    return "".concat(version2.toLowerCase(), "-").concat(_formatValue(value.traceId, 32, INVALID_TRACE_ID).toLowerCase(), "-").concat(_formatValue(value.spanId, 16, INVALID_SPAN_ID).toLowerCase(), "-").concat(flags.toLowerCase());
  }
  return "";
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/TelemetryHelpers.js
var pluginStateData = createElmNodeData("plugin");
function _getPluginState(plugin) {
  return pluginStateData.get(plugin, "state", {}, true);
}
function initializePlugins(processContext, extensions) {
  var initPlugins = [];
  var lastPlugin = null;
  var proxy = processContext[
    _DYN_GET_NEXT
    /* @min:%2egetNext */
  ]();
  var pluginState;
  while (proxy) {
    var thePlugin = proxy[
      _DYN_GET_PLUGIN
      /* @min:%2egetPlugin */
    ]();
    if (thePlugin) {
      if (lastPlugin && lastPlugin[
        _DYN_SET_NEXT_PLUGIN
        /* @min:%2esetNextPlugin */
      ] && thePlugin[
        STR_PROCESS_TELEMETRY
        /* @min:%2eprocessTelemetry */
      ]) {
        lastPlugin[
          _DYN_SET_NEXT_PLUGIN
          /* @min:%2esetNextPlugin */
        ](thePlugin);
      }
      pluginState = _getPluginState(thePlugin);
      var isInitialized = !!pluginState[
        _DYN_IS_INITIALIZED
        /* @min:%2eisInitialized */
      ];
      if (thePlugin[
        _DYN_IS_INITIALIZED
        /* @min:%2eisInitialized */
      ]) {
        isInitialized = thePlugin[
          _DYN_IS_INITIALIZED
          /* @min:%2eisInitialized */
        ]();
      }
      if (!isInitialized) {
        initPlugins[
          _DYN_PUSH
          /* @min:%2epush */
        ](thePlugin);
      }
      lastPlugin = thePlugin;
      proxy = proxy[
        _DYN_GET_NEXT
        /* @min:%2egetNext */
      ]();
    }
  }
  arrForEach(initPlugins, function(thePlugin2) {
    var core = processContext[
      STR_CORE
      /* @min:%2ecore */
    ]();
    thePlugin2[
      _DYN_INITIALIZE
      /* @min:%2einitialize */
    ](processContext.getCfg(), core, extensions, processContext[
      _DYN_GET_NEXT
      /* @min:%2egetNext */
    ]());
    pluginState = _getPluginState(thePlugin2);
    if (!thePlugin2[STR_CORE] && !pluginState[STR_CORE]) {
      pluginState[STR_CORE] = core;
    }
    pluginState[
      _DYN_IS_INITIALIZED
      /* @min:%2eisInitialized */
    ] = true;
    delete pluginState[
      _DYN_TEARDOWN
      /* @min:%2eteardown */
    ];
  });
}
function sortPlugins(plugins) {
  return plugins.sort(function(extA, extB) {
    var result = 0;
    if (extB) {
      var bHasProcess = extB[STR_PROCESS_TELEMETRY];
      if (extA[STR_PROCESS_TELEMETRY]) {
        result = bHasProcess ? extA[STR_PRIORITY] - extB[STR_PRIORITY] : 1;
      } else if (bHasProcess) {
        result = -1;
      }
    } else {
      result = extA ? 1 : -1;
    }
    return result;
  });
}
function createDistributedTraceContext(parentCtx) {
  var trace = {};
  return {
    getName: function() {
      return trace[
        _DYN_NAME
        /* @min:%2ename */
      ];
    },
    setName: function(newValue) {
      parentCtx && parentCtx.setName(newValue);
      trace[
        _DYN_NAME
        /* @min:%2ename */
      ] = newValue;
    },
    getTraceId: function() {
      return trace[
        _DYN_TRACE_ID
        /* @min:%2etraceId */
      ];
    },
    setTraceId: function(newValue) {
      parentCtx && parentCtx.setTraceId(newValue);
      if (isValidTraceId(newValue)) {
        trace[
          _DYN_TRACE_ID
          /* @min:%2etraceId */
        ] = newValue;
      }
    },
    getSpanId: function() {
      return trace[
        _DYN_SPAN_ID
        /* @min:%2espanId */
      ];
    },
    setSpanId: function(newValue) {
      parentCtx && parentCtx.setSpanId(newValue);
      if (isValidSpanId(newValue)) {
        trace[
          _DYN_SPAN_ID
          /* @min:%2espanId */
        ] = newValue;
      }
    },
    getTraceFlags: function() {
      return trace[
        _DYN_TRACE_FLAGS
        /* @min:%2etraceFlags */
      ];
    },
    setTraceFlags: function(newTraceFlags) {
      parentCtx && parentCtx.setTraceFlags(newTraceFlags);
      trace[
        _DYN_TRACE_FLAGS
        /* @min:%2etraceFlags */
      ] = newTraceFlags;
    }
  };
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/ProcessTelemetryContext.js
var strTelemetryPluginChain = "TelemetryPluginChain";
var strHasRunFlags = "_hasRun";
var strGetTelCtx = "_getTelCtx";
var _chainId = 0;
function _getNextProxyStart(proxy, core, startAt) {
  while (proxy) {
    if (proxy[
      _DYN_GET_PLUGIN
      /* @min:%2egetPlugin */
    ]() === startAt) {
      return proxy;
    }
    proxy = proxy[
      _DYN_GET_NEXT
      /* @min:%2egetNext */
    ]();
  }
  return createTelemetryProxyChain([startAt], core.config || {}, core);
}
function _createInternalContext(telemetryChain, dynamicHandler, core, startAt) {
  var _nextProxy = null;
  var _onComplete = [];
  if (!dynamicHandler) {
    dynamicHandler = createDynamicConfig({}, null, core[
      _DYN_LOGGER
      /* @min:%2elogger */
    ]);
  }
  if (startAt !== null) {
    _nextProxy = startAt ? _getNextProxyStart(telemetryChain, core, startAt) : telemetryChain;
  }
  var context = {
    _next: _moveNext,
    ctx: {
      core: function() {
        return core;
      },
      diagLog: function() {
        return safeGetLogger(core, dynamicHandler.cfg);
      },
      getCfg: function() {
        return dynamicHandler.cfg;
      },
      getExtCfg: _resolveExtCfg,
      getConfig: _getConfig,
      hasNext: function() {
        return !!_nextProxy;
      },
      getNext: function() {
        return _nextProxy;
      },
      setNext: function(nextPlugin) {
        _nextProxy = nextPlugin;
      },
      iterate: _iterateChain,
      onComplete: _addOnComplete
    }
  };
  function _addOnComplete(onComplete, that) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }
    if (onComplete) {
      _onComplete[
        _DYN_PUSH
        /* @min:%2epush */
      ]({
        func: onComplete,
        self: !isUndefined(that) ? that : context.ctx,
        args
      });
    }
  }
  function _moveNext() {
    var nextProxy = _nextProxy;
    _nextProxy = nextProxy ? nextProxy[
      _DYN_GET_NEXT
      /* @min:%2egetNext */
    ]() : null;
    if (!nextProxy) {
      var onComplete = _onComplete;
      if (onComplete && onComplete[
        _DYN_LENGTH
        /* @min:%2elength */
      ] > 0) {
        arrForEach(onComplete, function(completeDetails) {
          try {
            completeDetails.func.call(completeDetails.self, completeDetails.args);
          } catch (e) {
            _throwInternal(core[
              _DYN_LOGGER
              /* @min:%2elogger */
            ], 2, 73, "Unexpected Exception during onComplete - " + dumpObj(e));
          }
        });
        _onComplete = [];
      }
    }
    return nextProxy;
  }
  function _getExtCfg(identifier, createIfMissing) {
    var idCfg = null;
    var cfg = dynamicHandler.cfg;
    if (cfg && identifier) {
      var extCfg = cfg[
        STR_EXTENSION_CONFIG
        /* @min:%2eextensionConfig */
      ];
      if (!extCfg && createIfMissing) {
        extCfg = {};
      }
      cfg[STR_EXTENSION_CONFIG] = extCfg;
      extCfg = dynamicHandler.ref(cfg, STR_EXTENSION_CONFIG);
      if (extCfg) {
        idCfg = extCfg[identifier];
        if (!idCfg && createIfMissing) {
          idCfg = {};
        }
        extCfg[identifier] = idCfg;
        idCfg = dynamicHandler.ref(extCfg, identifier);
      }
    }
    return idCfg;
  }
  function _resolveExtCfg(identifier, defaultValues5) {
    var newConfig = _getExtCfg(identifier, true);
    if (defaultValues5) {
      objForEachKey(defaultValues5, function(field, defaultValue) {
        if (isNullOrUndefined(newConfig[field])) {
          var cfgValue = dynamicHandler.cfg[field];
          if (cfgValue || !isNullOrUndefined(cfgValue)) {
            newConfig[field] = cfgValue;
          }
        }
        _applyDefaultValue(dynamicHandler, newConfig, field, defaultValue);
      });
    }
    return dynamicHandler[
      _DYN_SET_DF
      /* @min:%2esetDf */
    ](newConfig, defaultValues5);
  }
  function _getConfig(identifier, field, defaultValue) {
    if (defaultValue === void 0) {
      defaultValue = false;
    }
    var theValue;
    var extConfig = _getExtCfg(identifier, false);
    var rootConfig = dynamicHandler.cfg;
    if (extConfig && (extConfig[field] || !isNullOrUndefined(extConfig[field]))) {
      theValue = extConfig[field];
    } else if (rootConfig[field] || !isNullOrUndefined(rootConfig[field])) {
      theValue = rootConfig[field];
    }
    return theValue || !isNullOrUndefined(theValue) ? theValue : defaultValue;
  }
  function _iterateChain(cb) {
    var nextPlugin;
    while (!!(nextPlugin = context._next())) {
      var plugin = nextPlugin[
        _DYN_GET_PLUGIN
        /* @min:%2egetPlugin */
      ]();
      if (plugin) {
        cb(plugin);
      }
    }
  }
  return context;
}
function createProcessTelemetryContext(telemetryChain, cfg, core, startAt) {
  var config = createDynamicConfig(cfg);
  var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
  var context = internalContext.ctx;
  function _processNext(env) {
    var nextPlugin = internalContext._next();
    if (nextPlugin) {
      nextPlugin[
        STR_PROCESS_TELEMETRY
        /* @min:%2eprocessTelemetry */
      ](env, context);
    }
    return !nextPlugin;
  }
  function _createNew(plugins, startAt2) {
    if (plugins === void 0) {
      plugins = null;
    }
    if (isArray(plugins)) {
      plugins = createTelemetryProxyChain(plugins, config.cfg, core, startAt2);
    }
    return createProcessTelemetryContext(plugins || context[
      _DYN_GET_NEXT
      /* @min:%2egetNext */
    ](), config.cfg, core, startAt2);
  }
  context[
    _DYN_PROCESS_NEXT
    /* @min:%2eprocessNext */
  ] = _processNext;
  context[
    _DYN_CREATE_NEW
    /* @min:%2ecreateNew */
  ] = _createNew;
  return context;
}
function createProcessTelemetryUnloadContext(telemetryChain, core, startAt) {
  var config = createDynamicConfig(core.config);
  var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
  var context = internalContext.ctx;
  function _processNext(unloadState) {
    var nextPlugin = internalContext._next();
    nextPlugin && nextPlugin[
      _DYN_UNLOAD
      /* @min:%2eunload */
    ](context, unloadState);
    return !nextPlugin;
  }
  function _createNew(plugins, startAt2) {
    if (plugins === void 0) {
      plugins = null;
    }
    if (isArray(plugins)) {
      plugins = createTelemetryProxyChain(plugins, config.cfg, core, startAt2);
    }
    return createProcessTelemetryUnloadContext(plugins || context[
      _DYN_GET_NEXT
      /* @min:%2egetNext */
    ](), core, startAt2);
  }
  context[
    _DYN_PROCESS_NEXT
    /* @min:%2eprocessNext */
  ] = _processNext;
  context[
    _DYN_CREATE_NEW
    /* @min:%2ecreateNew */
  ] = _createNew;
  return context;
}
function createProcessTelemetryUpdateContext(telemetryChain, core, startAt) {
  var config = createDynamicConfig(core.config);
  var internalContext = _createInternalContext(telemetryChain, config, core, startAt);
  var context = internalContext.ctx;
  function _processNext(updateState) {
    return context.iterate(function(plugin) {
      if (isFunction(plugin[
        _DYN_UPDATE
        /* @min:%2eupdate */
      ])) {
        plugin[
          _DYN_UPDATE
          /* @min:%2eupdate */
        ](context, updateState);
      }
    });
  }
  function _createNew(plugins, startAt2) {
    if (plugins === void 0) {
      plugins = null;
    }
    if (isArray(plugins)) {
      plugins = createTelemetryProxyChain(plugins, config.cfg, core, startAt2);
    }
    return createProcessTelemetryUpdateContext(plugins || context[
      _DYN_GET_NEXT
      /* @min:%2egetNext */
    ](), core, startAt2);
  }
  context[
    _DYN_PROCESS_NEXT
    /* @min:%2eprocessNext */
  ] = _processNext;
  context[
    _DYN_CREATE_NEW
    /* @min:%2ecreateNew */
  ] = _createNew;
  return context;
}
function createTelemetryProxyChain(plugins, config, core, startAt) {
  var firstProxy = null;
  var add = startAt ? false : true;
  if (isArray(plugins) && plugins[
    _DYN_LENGTH
    /* @min:%2elength */
  ] > 0) {
    var lastProxy_1 = null;
    arrForEach(plugins, function(thePlugin) {
      if (!add && startAt === thePlugin) {
        add = true;
      }
      if (add && thePlugin && isFunction(thePlugin[
        STR_PROCESS_TELEMETRY
        /* @min:%2eprocessTelemetry */
      ])) {
        var newProxy = createTelemetryPluginProxy(thePlugin, config, core);
        if (!firstProxy) {
          firstProxy = newProxy;
        }
        if (lastProxy_1) {
          lastProxy_1._setNext(newProxy);
        }
        lastProxy_1 = newProxy;
      }
    });
  }
  if (startAt && !firstProxy) {
    return createTelemetryProxyChain([startAt], config, core);
  }
  return firstProxy;
}
function createTelemetryPluginProxy(plugin, config, core) {
  var nextProxy = null;
  var hasProcessTelemetry = isFunction(plugin[
    STR_PROCESS_TELEMETRY
    /* @min:%2eprocessTelemetry */
  ]);
  var hasSetNext = isFunction(plugin[
    _DYN_SET_NEXT_PLUGIN
    /* @min:%2esetNextPlugin */
  ]);
  var chainId;
  if (plugin) {
    chainId = plugin[
      _DYN_IDENTIFIER
      /* @min:%2eidentifier */
    ] + "-" + plugin[
      STR_PRIORITY
      /* @min:%2epriority */
    ] + "-" + _chainId++;
  } else {
    chainId = "Unknown-0-" + _chainId++;
  }
  var proxyChain = {
    getPlugin: function() {
      return plugin;
    },
    getNext: function() {
      return nextProxy;
    },
    processTelemetry: _processTelemetry,
    unload: _unloadPlugin,
    update: _updatePlugin,
    _id: chainId,
    _setNext: function(nextPlugin) {
      nextProxy = nextPlugin;
    }
  };
  function _getTelCtx() {
    var itemCtx;
    if (plugin && isFunction(plugin[strGetTelCtx])) {
      itemCtx = plugin[strGetTelCtx]();
    }
    if (!itemCtx) {
      itemCtx = createProcessTelemetryContext(proxyChain, config, core);
    }
    return itemCtx;
  }
  function _processChain(itemCtx, processPluginFn, name, details, isAsync) {
    var hasRun = false;
    var identifier = plugin ? plugin[
      _DYN_IDENTIFIER
      /* @min:%2eidentifier */
    ] : strTelemetryPluginChain;
    var hasRunContext = itemCtx[strHasRunFlags];
    if (!hasRunContext) {
      hasRunContext = itemCtx[strHasRunFlags] = {};
    }
    itemCtx.setNext(nextProxy);
    if (plugin) {
      doPerf(itemCtx[
        STR_CORE
        /* @min:%2ecore */
      ](), function() {
        return identifier + ":" + name;
      }, function() {
        hasRunContext[chainId] = true;
        try {
          var nextId = nextProxy ? nextProxy._id : STR_EMPTY;
          if (nextId) {
            hasRunContext[nextId] = false;
          }
          hasRun = processPluginFn(itemCtx);
        } catch (error) {
          var hasNextRun = nextProxy ? hasRunContext[nextProxy._id] : true;
          if (hasNextRun) {
            hasRun = true;
          }
          if (!nextProxy || !hasNextRun) {
            _throwInternal(itemCtx[
              _DYN_DIAG_LOG
              /* @min:%2ediagLog */
            ](), 1, 73, "Plugin [" + identifier + "] failed during " + name + " - " + dumpObj(error) + ", run flags: " + dumpObj(hasRunContext));
          }
        }
      }, details, isAsync);
    }
    return hasRun;
  }
  function _processTelemetry(env, itemCtx) {
    itemCtx = itemCtx || _getTelCtx();
    function _callProcessTelemetry(itemCtx2) {
      if (!plugin || !hasProcessTelemetry) {
        return false;
      }
      var pluginState = _getPluginState(plugin);
      if (pluginState[
        _DYN_TEARDOWN
        /* @min:%2eteardown */
      ] || pluginState[STR_DISABLED]) {
        return false;
      }
      if (hasSetNext) {
        plugin[
          _DYN_SET_NEXT_PLUGIN
          /* @min:%2esetNextPlugin */
        ](nextProxy);
      }
      plugin[
        STR_PROCESS_TELEMETRY
        /* @min:%2eprocessTelemetry */
      ](env, itemCtx2);
      return true;
    }
    if (!_processChain(itemCtx, _callProcessTelemetry, "processTelemetry", function() {
      return { item: env };
    }, !env.sync)) {
      itemCtx[
        _DYN_PROCESS_NEXT
        /* @min:%2eprocessNext */
      ](env);
    }
  }
  function _unloadPlugin(unloadCtx, unloadState) {
    function _callTeardown() {
      var hasRun = false;
      if (plugin) {
        var pluginState = _getPluginState(plugin);
        var pluginCore = plugin[STR_CORE] || pluginState[
          STR_CORE
          /* @min:%2ecore */
        ];
        if (plugin && (!pluginCore || pluginCore === unloadCtx.core()) && !pluginState[
          _DYN_TEARDOWN
          /* @min:%2eteardown */
        ]) {
          pluginState[
            STR_CORE
            /* @min:%2ecore */
          ] = null;
          pluginState[
            _DYN_TEARDOWN
            /* @min:%2eteardown */
          ] = true;
          pluginState[
            _DYN_IS_INITIALIZED
            /* @min:%2eisInitialized */
          ] = false;
          if (plugin[
            _DYN_TEARDOWN
            /* @min:%2eteardown */
          ] && plugin[
            _DYN_TEARDOWN
            /* @min:%2eteardown */
          ](unloadCtx, unloadState) === true) {
            hasRun = true;
          }
        }
      }
      return hasRun;
    }
    if (!_processChain(unloadCtx, _callTeardown, "unload", function() {
    }, unloadState[
      _DYN_IS_ASYNC
      /* @min:%2eisAsync */
    ])) {
      unloadCtx[
        _DYN_PROCESS_NEXT
        /* @min:%2eprocessNext */
      ](unloadState);
    }
  }
  function _updatePlugin(updateCtx, updateState) {
    function _callUpdate() {
      var hasRun = false;
      if (plugin) {
        var pluginState = _getPluginState(plugin);
        var pluginCore = plugin[STR_CORE] || pluginState[
          STR_CORE
          /* @min:%2ecore */
        ];
        if (plugin && (!pluginCore || pluginCore === updateCtx.core()) && !pluginState[
          _DYN_TEARDOWN
          /* @min:%2eteardown */
        ]) {
          if (plugin[
            _DYN_UPDATE
            /* @min:%2eupdate */
          ] && plugin[
            _DYN_UPDATE
            /* @min:%2eupdate */
          ](updateCtx, updateState) === true) {
            hasRun = true;
          }
        }
      }
      return hasRun;
    }
    if (!_processChain(updateCtx, _callUpdate, "update", function() {
    }, false)) {
      updateCtx[
        _DYN_PROCESS_NEXT
        /* @min:%2eprocessNext */
      ](updateState);
    }
  }
  return objFreeze(proxyChain);
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/UnloadHandlerContainer.js
function createUnloadHandlerContainer() {
  var handlers = [];
  function _addHandler2(handler) {
    if (handler) {
      handlers[
        _DYN_PUSH
        /* @min:%2epush */
      ](handler);
    }
  }
  function _runHandlers(unloadCtx, unloadState) {
    arrForEach(handlers, function(handler) {
      try {
        handler(unloadCtx, unloadState);
      } catch (e) {
        _throwInternal(unloadCtx[
          _DYN_DIAG_LOG
          /* @min:%2ediagLog */
        ](), 2, 73, "Unexpected error calling unload handler - " + dumpObj(e));
      }
    });
    handlers = [];
  }
  return {
    add: _addHandler2,
    run: _runHandlers
  };
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/UnloadHookContainer.js
var _maxHooks;
var _hookAddMonitor;
function createUnloadHookContainer() {
  var _hooks = [];
  function _doUnload(logger) {
    var oldHooks = _hooks;
    _hooks = [];
    arrForEach(oldHooks, function(fn) {
      try {
        (fn.rm || fn.remove).call(fn);
      } catch (e) {
        _throwInternal(logger, 2, 73, "Unloading:" + dumpObj(e));
      }
    });
    if (_maxHooks && oldHooks[
      _DYN_LENGTH
      /* @min:%2elength */
    ] > _maxHooks) {
      _hookAddMonitor ? _hookAddMonitor("doUnload", oldHooks) : _throwInternal(null, 1, 48, "Max unload hooks exceeded. An excessive number of unload hooks has been detected.");
    }
  }
  function _addHook(hooks) {
    if (hooks) {
      arrAppend(_hooks, hooks);
      if (_maxHooks && _hooks[
        _DYN_LENGTH
        /* @min:%2elength */
      ] > _maxHooks) {
        _hookAddMonitor ? _hookAddMonitor("Add", _hooks) : _throwInternal(null, 1, 48, "Max unload hooks exceeded. An excessive number of unload hooks has been detected.");
      }
    }
  }
  return {
    run: _doUnload,
    add: _addHook
  };
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/BaseTelemetryPlugin.js
var _a4;
var strGetPlugin = "getPlugin";
var defaultValues3 = (_a4 = {}, _a4[STR_EXTENSION_CONFIG] = { isVal: isNotNullOrUndefined, v: {} }, _a4);
var BaseTelemetryPlugin = (
  /** @class */
  function() {
    function BaseTelemetryPlugin2() {
      var _self = this;
      var _isinitialized;
      var _rootCtx;
      var _nextPlugin;
      var _unloadHandlerContainer;
      var _hookContainer;
      _initDefaults();
      dynamicProto(BaseTelemetryPlugin2, _self, function(_self2) {
        _self2[
          _DYN_INITIALIZE
          /* @min:%2einitialize */
        ] = function(config, core, extensions, pluginChain) {
          _setDefaults(config, core, pluginChain);
          _isinitialized = true;
        };
        _self2[
          _DYN_TEARDOWN
          /* @min:%2eteardown */
        ] = function(unloadCtx, unloadState) {
          var _a12;
          var core = _self2[
            STR_CORE
            /* @min:%2ecore */
          ];
          if (!core || unloadCtx && core !== unloadCtx[
            STR_CORE
            /* @min:%2ecore */
          ]()) {
            return;
          }
          var result;
          var unloadDone = false;
          var theUnloadCtx = unloadCtx || createProcessTelemetryUnloadContext(null, core, _nextPlugin && _nextPlugin[strGetPlugin] ? _nextPlugin[strGetPlugin]() : _nextPlugin);
          var theUnloadState = unloadState || (_a12 = {
            reason: 0
            /* TelemetryUnloadReason.ManualTeardown */
          }, _a12[
            _DYN_IS_ASYNC
            /* @min:isAsync */
          ] = false, _a12);
          function _unloadCallback() {
            if (!unloadDone) {
              unloadDone = true;
              _unloadHandlerContainer.run(theUnloadCtx, unloadState);
              _hookContainer.run(theUnloadCtx[
                _DYN_DIAG_LOG
                /* @min:%2ediagLog */
              ]());
              if (result === true) {
                theUnloadCtx[
                  _DYN_PROCESS_NEXT
                  /* @min:%2eprocessNext */
                ](theUnloadState);
              }
              _initDefaults();
            }
          }
          if (!_self2[
            _DYN__DO_TEARDOWN
            /* @min:%2e_doTeardown */
          ] || _self2[
            _DYN__DO_TEARDOWN
            /* @min:%2e_doTeardown */
          ](theUnloadCtx, theUnloadState, _unloadCallback) !== true) {
            _unloadCallback();
          } else {
            result = true;
          }
          return result;
        };
        _self2[
          _DYN_UPDATE
          /* @min:%2eupdate */
        ] = function(updateCtx, updateState) {
          var core = _self2[
            STR_CORE
            /* @min:%2ecore */
          ];
          if (!core || updateCtx && core !== updateCtx[
            STR_CORE
            /* @min:%2ecore */
          ]()) {
            return;
          }
          var result;
          var updateDone = false;
          var theUpdateCtx = updateCtx || createProcessTelemetryUpdateContext(null, core, _nextPlugin && _nextPlugin[strGetPlugin] ? _nextPlugin[strGetPlugin]() : _nextPlugin);
          var theUpdateState = updateState || {
            reason: 0
            /* TelemetryUpdateReason.Unknown */
          };
          function _updateCallback() {
            if (!updateDone) {
              updateDone = true;
              _setDefaults(theUpdateCtx.getCfg(), theUpdateCtx.core(), theUpdateCtx[
                _DYN_GET_NEXT
                /* @min:%2egetNext */
              ]());
            }
          }
          if (!_self2._doUpdate || _self2._doUpdate(theUpdateCtx, theUpdateState, _updateCallback) !== true) {
            _updateCallback();
          } else {
            result = true;
          }
          return result;
        };
        proxyFunctionAs(_self2, "_addUnloadCb", function() {
          return _unloadHandlerContainer;
        }, "add");
        proxyFunctionAs(_self2, "_addHook", function() {
          return _hookContainer;
        }, "add");
        objDefine(_self2, "_unloadHooks", { g: function() {
          return _hookContainer;
        } });
      });
      _self[
        _DYN_DIAG_LOG
        /* @min:%2ediagLog */
      ] = function(itemCtx) {
        return _getTelCtx(itemCtx)[
          _DYN_DIAG_LOG
          /* @min:%2ediagLog */
        ]();
      };
      _self[
        _DYN_IS_INITIALIZED
        /* @min:%2eisInitialized */
      ] = function() {
        return _isinitialized;
      };
      _self.setInitialized = function(isInitialized) {
        _isinitialized = isInitialized;
      };
      _self[
        _DYN_SET_NEXT_PLUGIN
        /* @min:%2esetNextPlugin */
      ] = function(next) {
        _nextPlugin = next;
      };
      _self[
        _DYN_PROCESS_NEXT
        /* @min:%2eprocessNext */
      ] = function(env, itemCtx) {
        if (itemCtx) {
          itemCtx[
            _DYN_PROCESS_NEXT
            /* @min:%2eprocessNext */
          ](env);
        } else if (_nextPlugin && isFunction(_nextPlugin[
          STR_PROCESS_TELEMETRY
          /* @min:%2eprocessTelemetry */
        ])) {
          _nextPlugin[
            STR_PROCESS_TELEMETRY
            /* @min:%2eprocessTelemetry */
          ](env, null);
        }
      };
      _self._getTelCtx = _getTelCtx;
      function _getTelCtx(currentCtx) {
        if (currentCtx === void 0) {
          currentCtx = null;
        }
        var itemCtx = currentCtx;
        if (!itemCtx) {
          var rootCtx = _rootCtx || createProcessTelemetryContext(null, {}, _self[
            STR_CORE
            /* @min:%2ecore */
          ]);
          if (_nextPlugin && _nextPlugin[strGetPlugin]) {
            itemCtx = rootCtx[
              _DYN_CREATE_NEW
              /* @min:%2ecreateNew */
            ](null, _nextPlugin[strGetPlugin]);
          } else {
            itemCtx = rootCtx[
              _DYN_CREATE_NEW
              /* @min:%2ecreateNew */
            ](null, _nextPlugin);
          }
        }
        return itemCtx;
      }
      function _setDefaults(config, core, pluginChain) {
        createDynamicConfig(config, defaultValues3, safeGetLogger(core));
        if (!pluginChain && core) {
          pluginChain = core[
            _DYN_GET_PROCESS_TEL_CONT2
            /* @min:%2egetProcessTelContext */
          ]()[
            _DYN_GET_NEXT
            /* @min:%2egetNext */
          ]();
        }
        var nextPlugin = _nextPlugin;
        if (_nextPlugin && _nextPlugin[strGetPlugin]) {
          nextPlugin = _nextPlugin[strGetPlugin]();
        }
        _self[
          STR_CORE
          /* @min:%2ecore */
        ] = core;
        _rootCtx = createProcessTelemetryContext(pluginChain, config, core, nextPlugin);
      }
      function _initDefaults() {
        _isinitialized = false;
        _self[
          STR_CORE
          /* @min:%2ecore */
        ] = null;
        _rootCtx = null;
        _nextPlugin = null;
        _hookContainer = createUnloadHookContainer();
        _unloadHandlerContainer = createUnloadHandlerContainer();
      }
    }
    BaseTelemetryPlugin2.__ieDyn = 1;
    return BaseTelemetryPlugin2;
  }()
);

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/TelemetryInitializerPlugin.js
function _addInitializer(_initializers, id, telemetryInitializer) {
  var theInitializer = {
    id,
    fn: telemetryInitializer
  };
  arrAppend(_initializers, theInitializer);
  var handler = {
    remove: function() {
      arrForEach(_initializers, function(initializer, idx) {
        if (initializer.id === theInitializer.id) {
          _initializers[
            _DYN_SPLICE
            /* @min:%2esplice */
          ](idx, 1);
          return -1;
        }
      });
    }
  };
  return handler;
}
function _runInitializers(_initializers, item, logger) {
  var doNotSendItem = false;
  var telemetryInitializersCount = _initializers[
    _DYN_LENGTH
    /* @min:%2elength */
  ];
  for (var i = 0; i < telemetryInitializersCount; ++i) {
    var telemetryInitializer = _initializers[i];
    if (telemetryInitializer) {
      try {
        if (telemetryInitializer.fn[
          _DYN_APPLY
          /* @min:%2eapply */
        ](null, [item]) === false) {
          doNotSendItem = true;
          break;
        }
      } catch (e) {
        _throwInternal(logger, 2, 64, "Telemetry initializer failed: " + getExceptionName(e), { exception: dumpObj(e) }, true);
      }
    }
  }
  return !doNotSendItem;
}
var TelemetryInitializerPlugin = (
  /** @class */
  function(_super) {
    __extendsFn(TelemetryInitializerPlugin2, _super);
    function TelemetryInitializerPlugin2() {
      var _this = _super.call(this) || this;
      _this.identifier = "TelemetryInitializerPlugin";
      _this.priority = 199;
      var _id;
      var _initializers;
      _initDefaults();
      dynamicProto(TelemetryInitializerPlugin2, _this, function(_self, _base) {
        _self.addTelemetryInitializer = function(telemetryInitializer) {
          return _addInitializer(_initializers, _id++, telemetryInitializer);
        };
        _self[
          STR_PROCESS_TELEMETRY
          /* @min:%2eprocessTelemetry */
        ] = function(item, itemCtx) {
          if (_runInitializers(_initializers, item, itemCtx ? itemCtx[
            _DYN_DIAG_LOG
            /* @min:%2ediagLog */
          ]() : _self[
            _DYN_DIAG_LOG
            /* @min:%2ediagLog */
          ]())) {
            _self[
              _DYN_PROCESS_NEXT
              /* @min:%2eprocessNext */
            ](item, itemCtx);
          }
        };
        _self[
          _DYN__DO_TEARDOWN
          /* @min:%2e_doTeardown */
        ] = function() {
          _initDefaults();
        };
      });
      function _initDefaults() {
        _id = 0;
        _initializers = [];
      }
      return _this;
    }
    TelemetryInitializerPlugin2.__ieDyn = 1;
    return TelemetryInitializerPlugin2;
  }(BaseTelemetryPlugin)
);

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/AppInsightsCore.js
var _a5;
var strValidationError = "Plugins must provide initialize method";
var strNotificationManager = "_notificationManager";
var strSdkUnloadingError = "SDK is still unloading...";
var strSdkNotInitialized = "SDK is not initialized";
var defaultConfig = objDeepFreeze((_a5 = {
  cookieCfg: {}
}, _a5[STR_EXTENSIONS] = { rdOnly: true, ref: true, v: [] }, _a5[STR_CHANNELS] = { rdOnly: true, ref: true, v: [] }, _a5[STR_EXTENSION_CONFIG] = { ref: true, v: {} }, _a5[STR_CREATE_PERF_MGR] = UNDEFINED_VALUE, _a5.loggingLevelConsole = 0, _a5.diagnosticLogInterval = UNDEFINED_VALUE, _a5));
function _createPerfManager(core, notificationMgr) {
  return new PerfManager(notificationMgr);
}
function _validateExtensions(logger, channelPriority, allExtensions) {
  var _a12;
  var coreExtensions = [];
  var channels = [];
  var extPriorities = {};
  arrForEach(allExtensions, function(ext) {
    if (isNullOrUndefined(ext) || isNullOrUndefined(ext[
      _DYN_INITIALIZE
      /* @min:%2einitialize */
    ])) {
      throwError(strValidationError);
    }
    var extPriority = ext[
      STR_PRIORITY
      /* @min:%2epriority */
    ];
    var identifier = ext[
      _DYN_IDENTIFIER
      /* @min:%2eidentifier */
    ];
    if (ext && extPriority) {
      if (!isNullOrUndefined(extPriorities[extPriority])) {
        _warnToConsole(logger, "Two extensions have same priority #" + extPriority + " - " + extPriorities[extPriority] + ", " + identifier);
      } else {
        extPriorities[extPriority] = identifier;
      }
    }
    if (!extPriority || extPriority < channelPriority) {
      coreExtensions[
        _DYN_PUSH
        /* @min:%2epush */
      ](ext);
    } else {
      channels[
        _DYN_PUSH
        /* @min:%2epush */
      ](ext);
    }
  });
  return _a12 = {}, _a12[
    STR_CORE
    /* @min:core */
  ] = coreExtensions, _a12[
    STR_CHANNELS
    /* @min:channels */
  ] = channels, _a12;
}
function _isPluginPresent(thePlugin, plugins) {
  var exists = false;
  arrForEach(plugins, function(plugin) {
    if (plugin === thePlugin) {
      exists = true;
      return -1;
    }
  });
  return exists;
}
function _deepMergeConfig(details, target, newValues, merge) {
  if (newValues) {
    objForEachKey(newValues, function(key, value) {
      if (merge) {
        if (isPlainObject(value) && isPlainObject(target[key])) {
          _deepMergeConfig(details, target[key], value, merge);
        }
      }
      if (merge && isPlainObject(value) && isPlainObject(target[key])) {
        _deepMergeConfig(details, target[key], value, merge);
      } else {
        details.set(target, key, value);
      }
    });
  }
}
function _findWatcher(listeners, newWatcher) {
  var theListener = null;
  var idx = -1;
  arrForEach(listeners, function(listener, lp) {
    if (listener.w === newWatcher) {
      theListener = listener;
      idx = lp;
      return -1;
    }
  });
  return { i: idx, l: theListener };
}
function _addDelayedCfgListener(listeners, newWatcher) {
  var theListener = _findWatcher(listeners, newWatcher).l;
  if (!theListener) {
    theListener = {
      w: newWatcher,
      rm: function() {
        var fnd = _findWatcher(listeners, newWatcher);
        if (fnd.i !== -1) {
          listeners[
            _DYN_SPLICE
            /* @min:%2esplice */
          ](fnd.i, 1);
        }
      }
    };
    listeners[
      _DYN_PUSH
      /* @min:%2epush */
    ](theListener);
  }
  return theListener;
}
function _registerDelayedCfgListener(config, listeners, logger) {
  arrForEach(listeners, function(listener) {
    var unloadHdl = onConfigChange(config, listener.w, logger);
    delete listener.w;
    listener.rm = function() {
      unloadHdl.rm();
    };
  });
}
function _initDebugListener(configHandler, unloadContainer, notificationManager, debugListener) {
  unloadContainer.add(configHandler[
    _DYN_WATCH
    /* @min:%2ewatch */
  ](function(details) {
    var disableDbgExt = details.cfg.disableDbgExt;
    if (disableDbgExt === true && debugListener) {
      notificationManager[
        _DYN_REMOVE_NOTIFICATION_0
        /* @min:%2eremoveNotificationListener */
      ](debugListener);
      debugListener = null;
    }
    if (notificationManager && !debugListener && disableDbgExt !== true) {
      debugListener = getDebugListener(details.cfg);
      notificationManager[
        _DYN_ADD_NOTIFICATION_LIS1
        /* @min:%2eaddNotificationListener */
      ](debugListener);
    }
  }));
  return debugListener;
}
function _createUnloadHook(unloadHook) {
  return objDefine({
    rm: function() {
      unloadHook.rm();
    }
  }, "toJSON", { v: function() {
    return "aicore::onCfgChange<" + JSON.stringify(unloadHook) + ">";
  } });
}
var AppInsightsCore = (
  /** @class */
  function() {
    function AppInsightsCore2() {
      var _configHandler;
      var _isInitialized;
      var _logger;
      var _eventQueue;
      var _notificationManager;
      var _perfManager;
      var _cfgPerfManager;
      var _cookieManager;
      var _pluginChain;
      var _configExtensions;
      var _channelConfig;
      var _channels;
      var _isUnloading;
      var _telemetryInitializerPlugin;
      var _internalLogsEventName;
      var _evtNamespace;
      var _unloadHandlers;
      var _hookContainer;
      var _debugListener2;
      var _traceCtx;
      var _instrumentationKey;
      var _cfgListeners;
      var _extensions;
      var _pluginVersionStringArr;
      var _pluginVersionString;
      var _internalLogPoller;
      var _internalLogPollerListening;
      var _forceStopInternalLogPoller;
      dynamicProto(AppInsightsCore2, this, function(_self) {
        _initDefaults();
        _self["_getDbgPlgTargets"] = function() {
          return [_extensions];
        };
        _self[
          _DYN_IS_INITIALIZED
          /* @min:%2eisInitialized */
        ] = function() {
          return _isInitialized;
        };
        _self[
          _DYN_INITIALIZE
          /* @min:%2einitialize */
        ] = function(config, extensions, logger, notificationManager) {
          if (_isUnloading) {
            throwError(strSdkUnloadingError);
          }
          if (_self[
            _DYN_IS_INITIALIZED
            /* @min:%2eisInitialized */
          ]()) {
            throwError("Core cannot be initialized more than once");
          }
          _configHandler = createDynamicConfig(config, defaultConfig, logger || _self[
            _DYN_LOGGER
            /* @min:%2elogger */
          ], false);
          config = _configHandler.cfg;
          _addUnloadHook(_configHandler[
            _DYN_WATCH
            /* @min:%2ewatch */
          ](function(details) {
            _instrumentationKey = details.cfg.instrumentationKey;
            var extCfg = details.ref(details.cfg, STR_EXTENSION_CONFIG);
            objForEachKey(extCfg, function(key) {
              details.ref(extCfg, key);
            });
            if (isNullOrUndefined(_instrumentationKey)) {
              throwError("Please provide instrumentation key");
            }
          }));
          _notificationManager = notificationManager;
          _debugListener2 = _initDebugListener(_configHandler, _hookContainer, _notificationManager && _self[
            _DYN_GET_NOTIFY_MGR
            /* @min:%2egetNotifyMgr */
          ](), _debugListener2);
          _initPerfManager();
          _self[
            _DYN_LOGGER
            /* @min:%2elogger */
          ] = logger;
          var cfgExtensions = config[
            STR_EXTENSIONS
            /* @min:%2eextensions */
          ];
          _configExtensions = [];
          _configExtensions[
            _DYN_PUSH
            /* @min:%2epush */
          ].apply(_configExtensions, __spreadArrayFn(__spreadArrayFn([], extensions, false), cfgExtensions, false));
          _channelConfig = config[
            STR_CHANNELS
            /* @min:%2echannels */
          ];
          _initPluginChain(null);
          if (!_channels || _channels[
            _DYN_LENGTH
            /* @min:%2elength */
          ] === 0) {
            throwError("No " + STR_CHANNELS + " available");
          }
          if (_channelConfig && _channelConfig[
            _DYN_LENGTH
            /* @min:%2elength */
          ] > 1) {
            var teeController = _self[
              _DYN_GET_PLUGIN
              /* @min:%2egetPlugin */
            ]("TeeChannelController");
            if (!teeController || !teeController.plugin) {
              _throwInternal(_logger, 1, 28, "TeeChannel required");
            }
          }
          _registerDelayedCfgListener(config, _cfgListeners, _logger);
          _cfgListeners = null;
          _isInitialized = true;
          _self.releaseQueue();
          _self[
            _DYN_POLL_INTERNAL_LOGS
            /* @min:%2epollInternalLogs */
          ]();
        };
        _self.getChannels = function() {
          var controls = [];
          if (_channels) {
            arrForEach(_channels, function(channel) {
              controls[
                _DYN_PUSH
                /* @min:%2epush */
              ](channel);
            });
          }
          return objFreeze(controls);
        };
        _self.track = function(telemetryItem) {
          doPerf(_self[
            STR_GET_PERF_MGR
            /* @min:%2egetPerfMgr */
          ](), function() {
            return "AppInsightsCore:track";
          }, function() {
            if (telemetryItem === null) {
              _notifyInvalidEvent(telemetryItem);
              throwError("Invalid telemetry item");
            }
            if (!telemetryItem[
              _DYN_NAME
              /* @min:%2ename */
            ] && isNullOrUndefined(telemetryItem[
              _DYN_NAME
              /* @min:%2ename */
            ])) {
              _notifyInvalidEvent(telemetryItem);
              throwError("telemetry name required");
            }
            telemetryItem.iKey = telemetryItem.iKey || _instrumentationKey;
            telemetryItem[
              _DYN_TIME
              /* @min:%2etime */
            ] = telemetryItem[
              _DYN_TIME
              /* @min:%2etime */
            ] || toISOString(/* @__PURE__ */ new Date());
            telemetryItem.ver = telemetryItem.ver || "4.0";
            if (!_isUnloading && _self[
              _DYN_IS_INITIALIZED
              /* @min:%2eisInitialized */
            ]()) {
              _createTelCtx()[
                _DYN_PROCESS_NEXT
                /* @min:%2eprocessNext */
              ](telemetryItem);
            } else {
              _eventQueue[
                _DYN_PUSH
                /* @min:%2epush */
              ](telemetryItem);
            }
          }, function() {
            return { item: telemetryItem };
          }, !telemetryItem.sync);
        };
        _self[
          _DYN_GET_PROCESS_TEL_CONT2
          /* @min:%2egetProcessTelContext */
        ] = _createTelCtx;
        _self[
          _DYN_GET_NOTIFY_MGR
          /* @min:%2egetNotifyMgr */
        ] = function() {
          if (!_notificationManager) {
            _notificationManager = new NotificationManager(_configHandler.cfg);
            _self[strNotificationManager] = _notificationManager;
          }
          return _notificationManager;
        };
        _self[
          _DYN_ADD_NOTIFICATION_LIS1
          /* @min:%2eaddNotificationListener */
        ] = function(listener) {
          _self.getNotifyMgr()[
            _DYN_ADD_NOTIFICATION_LIS1
            /* @min:%2eaddNotificationListener */
          ](listener);
        };
        _self[
          _DYN_REMOVE_NOTIFICATION_0
          /* @min:%2eremoveNotificationListener */
        ] = function(listener) {
          if (_notificationManager) {
            _notificationManager[
              _DYN_REMOVE_NOTIFICATION_0
              /* @min:%2eremoveNotificationListener */
            ](listener);
          }
        };
        _self.getCookieMgr = function() {
          if (!_cookieManager) {
            _cookieManager = createCookieMgr(_configHandler.cfg, _self[
              _DYN_LOGGER
              /* @min:%2elogger */
            ]);
          }
          return _cookieManager;
        };
        _self.setCookieMgr = function(cookieMgr) {
          if (_cookieManager !== cookieMgr) {
            runTargetUnload(_cookieManager, false);
            _cookieManager = cookieMgr;
          }
        };
        _self[
          STR_GET_PERF_MGR
          /* @min:%2egetPerfMgr */
        ] = function() {
          return _perfManager || _cfgPerfManager || getGblPerfMgr();
        };
        _self.setPerfMgr = function(perfMgr) {
          _perfManager = perfMgr;
        };
        _self.eventCnt = function() {
          return _eventQueue[
            _DYN_LENGTH
            /* @min:%2elength */
          ];
        };
        _self.releaseQueue = function() {
          if (_isInitialized && _eventQueue[
            _DYN_LENGTH
            /* @min:%2elength */
          ] > 0) {
            var eventQueue = _eventQueue;
            _eventQueue = [];
            arrForEach(eventQueue, function(event) {
              _createTelCtx()[
                _DYN_PROCESS_NEXT
                /* @min:%2eprocessNext */
              ](event);
            });
          }
        };
        _self[
          _DYN_POLL_INTERNAL_LOGS
          /* @min:%2epollInternalLogs */
        ] = function(eventName) {
          _internalLogsEventName = eventName || null;
          _forceStopInternalLogPoller = false;
          _internalLogPoller && _internalLogPoller[
            _DYN_CANCEL
            /* @min:%2ecancel */
          ]();
          return _startLogPoller(true);
        };
        function _startLogPoller(alwaysStart) {
          if ((!_internalLogPoller || !_internalLogPoller[
            _DYN_ENABLED
            /* @min:%2eenabled */
          ]) && !_forceStopInternalLogPoller) {
            var shouldStart = alwaysStart || _logger && _logger.queue[
              _DYN_LENGTH
              /* @min:%2elength */
            ] > 0;
            if (shouldStart) {
              if (!_internalLogPollerListening) {
                _internalLogPollerListening = true;
                _addUnloadHook(_configHandler[
                  _DYN_WATCH
                  /* @min:%2ewatch */
                ](function(details) {
                  var interval = details.cfg.diagnosticLogInterval;
                  if (!interval || !(interval > 0)) {
                    interval = 1e4;
                  }
                  var isRunning = false;
                  if (_internalLogPoller) {
                    isRunning = _internalLogPoller[
                      _DYN_ENABLED
                      /* @min:%2eenabled */
                    ];
                    _internalLogPoller[
                      _DYN_CANCEL
                      /* @min:%2ecancel */
                    ]();
                  }
                  _internalLogPoller = createTimeout(_flushInternalLogs, interval);
                  _internalLogPoller.unref();
                  _internalLogPoller[
                    _DYN_ENABLED
                    /* @min:%2eenabled */
                  ] = isRunning;
                }));
              }
              _internalLogPoller[
                _DYN_ENABLED
                /* @min:%2eenabled */
              ] = true;
            }
          }
          return _internalLogPoller;
        }
        _self[
          _DYN_STOP_POLLING_INTERNA3
          /* @min:%2estopPollingInternalLogs */
        ] = function() {
          _forceStopInternalLogPoller = true;
          _internalLogPoller && _internalLogPoller[
            _DYN_CANCEL
            /* @min:%2ecancel */
          ]();
          _flushInternalLogs();
        };
        proxyFunctions(_self, function() {
          return _telemetryInitializerPlugin;
        }, ["addTelemetryInitializer"]);
        _self[
          _DYN_UNLOAD
          /* @min:%2eunload */
        ] = function(isAsync, unloadComplete, cbTimeout) {
          var _a12;
          if (isAsync === void 0) {
            isAsync = true;
          }
          if (!_isInitialized) {
            throwError(strSdkNotInitialized);
          }
          if (_isUnloading) {
            throwError(strSdkUnloadingError);
          }
          var unloadState = (_a12 = {
            reason: 50
            /* TelemetryUnloadReason.SdkUnload */
          }, _a12[
            _DYN_IS_ASYNC
            /* @min:isAsync */
          ] = isAsync, _a12.flushComplete = false, _a12);
          var result;
          if (isAsync && !unloadComplete) {
            result = createPromise(function(resolve) {
              unloadComplete = resolve;
            });
          }
          var processUnloadCtx = createProcessTelemetryUnloadContext(_getPluginChain(), _self);
          processUnloadCtx[
            _DYN_ON_COMPLETE
            /* @min:%2eonComplete */
          ](function() {
            _hookContainer.run(_self[
              _DYN_LOGGER
              /* @min:%2elogger */
            ]);
            doUnloadAll([_cookieManager, _notificationManager, _logger], isAsync, function() {
              _initDefaults();
              unloadComplete && unloadComplete(unloadState);
            });
          }, _self);
          function _doUnload(flushComplete) {
            unloadState.flushComplete = flushComplete;
            _isUnloading = true;
            _unloadHandlers.run(processUnloadCtx, unloadState);
            _self[
              _DYN_STOP_POLLING_INTERNA3
              /* @min:%2estopPollingInternalLogs */
            ]();
            processUnloadCtx[
              _DYN_PROCESS_NEXT
              /* @min:%2eprocessNext */
            ](unloadState);
          }
          _flushInternalLogs();
          if (!_flushChannels(isAsync, _doUnload, 6, cbTimeout)) {
            _doUnload(false);
          }
          return result;
        };
        _self[
          _DYN_GET_PLUGIN
          /* @min:%2egetPlugin */
        ] = _getPlugin;
        _self.addPlugin = function(plugin, replaceExisting, isAsync, addCb) {
          if (!plugin) {
            addCb && addCb(false);
            _logOrThrowError(strValidationError);
            return;
          }
          var existingPlugin = _getPlugin(plugin[
            _DYN_IDENTIFIER
            /* @min:%2eidentifier */
          ]);
          if (existingPlugin && !replaceExisting) {
            addCb && addCb(false);
            _logOrThrowError("Plugin [" + plugin[
              _DYN_IDENTIFIER
              /* @min:%2eidentifier */
            ] + "] is already loaded!");
            return;
          }
          var updateState = {
            reason: 16
            /* TelemetryUpdateReason.PluginAdded */
          };
          function _addPlugin(removed) {
            _configExtensions[
              _DYN_PUSH
              /* @min:%2epush */
            ](plugin);
            updateState.added = [plugin];
            _initPluginChain(updateState);
            addCb && addCb(true);
          }
          if (existingPlugin) {
            var removedPlugins_1 = [existingPlugin.plugin];
            var unloadState = {
              reason: 2,
              isAsync: !!isAsync
            };
            _removePlugins(removedPlugins_1, unloadState, function(removed) {
              if (!removed) {
                addCb && addCb(false);
              } else {
                updateState.removed = removedPlugins_1;
                updateState.reason |= 32;
                _addPlugin(true);
              }
            });
          } else {
            _addPlugin(false);
          }
        };
        _self.updateCfg = function(newConfig, mergeExisting) {
          if (mergeExisting === void 0) {
            mergeExisting = true;
          }
          var updateState;
          if (_self[
            _DYN_IS_INITIALIZED
            /* @min:%2eisInitialized */
          ]()) {
            updateState = {
              reason: 1,
              cfg: _configHandler.cfg,
              oldCfg: deepExtend({}, _configHandler.cfg),
              newConfig: deepExtend({}, newConfig),
              merge: mergeExisting
            };
            newConfig = updateState.newConfig;
            var cfg = _configHandler.cfg;
            newConfig[
              STR_EXTENSIONS
              /* @min:%2eextensions */
            ] = cfg[
              STR_EXTENSIONS
              /* @min:%2eextensions */
            ];
            newConfig[
              STR_CHANNELS
              /* @min:%2echannels */
            ] = cfg[
              STR_CHANNELS
              /* @min:%2echannels */
            ];
          }
          _configHandler._block(function(details) {
            var theConfig = details.cfg;
            _deepMergeConfig(details, theConfig, newConfig, mergeExisting);
            if (!mergeExisting) {
              objForEachKey(theConfig, function(key) {
                if (!objHasOwn(newConfig, key)) {
                  details.set(theConfig, key, UNDEFINED_VALUE);
                }
              });
            }
            details[
              _DYN_SET_DF
              /* @min:%2esetDf */
            ](theConfig, defaultConfig);
          }, true);
          _configHandler[
            _DYN_NOTIFY
            /* @min:%2enotify */
          ]();
          if (updateState) {
            _doUpdate(updateState);
          }
        };
        _self.evtNamespace = function() {
          return _evtNamespace;
        };
        _self.flush = _flushChannels;
        _self.getTraceCtx = function(createNew) {
          if (!_traceCtx) {
            _traceCtx = createDistributedTraceContext();
          }
          return _traceCtx;
        };
        _self.setTraceCtx = function(traceCtx) {
          _traceCtx = traceCtx || null;
        };
        _self.addUnloadHook = _addUnloadHook;
        proxyFunctionAs(_self, "addUnloadCb", function() {
          return _unloadHandlers;
        }, "add");
        _self.onCfgChange = function(handler) {
          var unloadHook;
          if (!_isInitialized) {
            unloadHook = _addDelayedCfgListener(_cfgListeners, handler);
          } else {
            unloadHook = onConfigChange(_configHandler.cfg, handler, _self[
              _DYN_LOGGER
              /* @min:%2elogger */
            ]);
          }
          return _createUnloadHook(unloadHook);
        };
        _self.getWParam = function() {
          return hasDocument() || !!_configHandler.cfg.enableWParam ? 0 : -1;
        };
        function _setPluginVersions() {
          var thePlugins = {};
          _pluginVersionStringArr = [];
          var _addPluginVersions = function(plugins) {
            if (plugins) {
              arrForEach(plugins, function(plugin) {
                if (plugin[
                  _DYN_IDENTIFIER
                  /* @min:%2eidentifier */
                ] && plugin[
                  _DYN_VERSION
                  /* @min:%2eversion */
                ] && !thePlugins[plugin.identifier]) {
                  var ver = plugin[
                    _DYN_IDENTIFIER
                    /* @min:%2eidentifier */
                  ] + "=" + plugin[
                    _DYN_VERSION
                    /* @min:%2eversion */
                  ];
                  _pluginVersionStringArr[
                    _DYN_PUSH
                    /* @min:%2epush */
                  ](ver);
                  thePlugins[plugin.identifier] = plugin;
                }
              });
            }
          };
          _addPluginVersions(_channels);
          if (_channelConfig) {
            arrForEach(_channelConfig, function(channels) {
              _addPluginVersions(channels);
            });
          }
          _addPluginVersions(_configExtensions);
        }
        function _initDefaults() {
          _isInitialized = false;
          _configHandler = createDynamicConfig({}, defaultConfig, _self[
            _DYN_LOGGER
            /* @min:%2elogger */
          ]);
          _configHandler.cfg[
            _DYN_LOGGING_LEVEL_CONSOL4
            /* @min:%2eloggingLevelConsole */
          ] = 1;
          objDefine(_self, "config", {
            g: function() {
              return _configHandler.cfg;
            },
            s: function(newValue) {
              _self.updateCfg(newValue, false);
            }
          });
          objDefine(_self, "pluginVersionStringArr", {
            g: function() {
              if (!_pluginVersionStringArr) {
                _setPluginVersions();
              }
              return _pluginVersionStringArr;
            }
          });
          objDefine(_self, "pluginVersionString", {
            g: function() {
              if (!_pluginVersionString) {
                if (!_pluginVersionStringArr) {
                  _setPluginVersions();
                }
                _pluginVersionString = _pluginVersionStringArr.join(";");
              }
              return _pluginVersionString || STR_EMPTY;
            }
          });
          objDefine(_self, "logger", {
            g: function() {
              if (!_logger) {
                _logger = new DiagnosticLogger(_configHandler.cfg);
                _configHandler[
                  _DYN_LOGGER
                  /* @min:%2elogger */
                ] = _logger;
              }
              return _logger;
            },
            s: function(newLogger) {
              _configHandler[
                _DYN_LOGGER
                /* @min:%2elogger */
              ] = newLogger;
              if (_logger !== newLogger) {
                runTargetUnload(_logger, false);
                _logger = newLogger;
              }
            }
          });
          _self[
            _DYN_LOGGER
            /* @min:%2elogger */
          ] = new DiagnosticLogger(_configHandler.cfg);
          _extensions = [];
          var cfgExtensions = _self.config[
            STR_EXTENSIONS
            /* @min:%2eextensions */
          ] || [];
          cfgExtensions.splice(0, cfgExtensions[
            _DYN_LENGTH
            /* @min:%2elength */
          ]);
          arrAppend(cfgExtensions, _extensions);
          _telemetryInitializerPlugin = new TelemetryInitializerPlugin();
          _eventQueue = [];
          runTargetUnload(_notificationManager, false);
          _notificationManager = null;
          _perfManager = null;
          _cfgPerfManager = null;
          runTargetUnload(_cookieManager, false);
          _cookieManager = null;
          _pluginChain = null;
          _configExtensions = [];
          _channelConfig = null;
          _channels = null;
          _isUnloading = false;
          _internalLogsEventName = null;
          _evtNamespace = createUniqueNamespace("AIBaseCore", true);
          _unloadHandlers = createUnloadHandlerContainer();
          _traceCtx = null;
          _instrumentationKey = null;
          _hookContainer = createUnloadHookContainer();
          _cfgListeners = [];
          _pluginVersionString = null;
          _pluginVersionStringArr = null;
          _forceStopInternalLogPoller = false;
          _internalLogPoller = null;
          _internalLogPollerListening = false;
        }
        function _createTelCtx() {
          var theCtx = createProcessTelemetryContext(_getPluginChain(), _configHandler.cfg, _self);
          theCtx[
            _DYN_ON_COMPLETE
            /* @min:%2eonComplete */
          ](_startLogPoller);
          return theCtx;
        }
        function _initPluginChain(updateState) {
          var theExtensions = _validateExtensions(_self[
            _DYN_LOGGER
            /* @min:%2elogger */
          ], ChannelControllerPriority, _configExtensions);
          _pluginChain = null;
          _pluginVersionString = null;
          _pluginVersionStringArr = null;
          _channels = (_channelConfig || [])[0] || [];
          _channels = sortPlugins(arrAppend(_channels, theExtensions[
            STR_CHANNELS
            /* @min:%2echannels */
          ]));
          var allExtensions = arrAppend(sortPlugins(theExtensions[
            STR_CORE
            /* @min:%2ecore */
          ]), _channels);
          _extensions = objFreeze(allExtensions);
          var cfgExtensions = _self.config[
            STR_EXTENSIONS
            /* @min:%2eextensions */
          ] || [];
          cfgExtensions.splice(0, cfgExtensions[
            _DYN_LENGTH
            /* @min:%2elength */
          ]);
          arrAppend(cfgExtensions, _extensions);
          var rootCtx = _createTelCtx();
          if (_channels && _channels[
            _DYN_LENGTH
            /* @min:%2elength */
          ] > 0) {
            initializePlugins(rootCtx[
              _DYN_CREATE_NEW
              /* @min:%2ecreateNew */
            ](_channels), allExtensions);
          }
          initializePlugins(rootCtx, allExtensions);
          if (updateState) {
            _doUpdate(updateState);
          }
        }
        function _getPlugin(pluginIdentifier) {
          var theExt = null;
          var thePlugin = null;
          var channelHosts = [];
          arrForEach(_extensions, function(ext) {
            if (ext[
              _DYN_IDENTIFIER
              /* @min:%2eidentifier */
            ] === pluginIdentifier && ext !== _telemetryInitializerPlugin) {
              thePlugin = ext;
              return -1;
            }
            if (ext.getChannel) {
              channelHosts[
                _DYN_PUSH
                /* @min:%2epush */
              ](ext);
            }
          });
          if (!thePlugin && channelHosts[
            _DYN_LENGTH
            /* @min:%2elength */
          ] > 0) {
            arrForEach(channelHosts, function(host) {
              thePlugin = host.getChannel(pluginIdentifier);
              if (!thePlugin) {
                return -1;
              }
            });
          }
          if (thePlugin) {
            theExt = {
              plugin: thePlugin,
              setEnabled: function(enabled) {
                _getPluginState(thePlugin)[STR_DISABLED] = !enabled;
              },
              isEnabled: function() {
                var pluginState = _getPluginState(thePlugin);
                return !pluginState[
                  _DYN_TEARDOWN
                  /* @min:%2eteardown */
                ] && !pluginState[STR_DISABLED];
              },
              remove: function(isAsync, removeCb) {
                var _a12;
                if (isAsync === void 0) {
                  isAsync = true;
                }
                var pluginsToRemove = [thePlugin];
                var unloadState = (_a12 = {
                  reason: 1
                  /* TelemetryUnloadReason.PluginUnload */
                }, _a12[
                  _DYN_IS_ASYNC
                  /* @min:isAsync */
                ] = isAsync, _a12);
                _removePlugins(pluginsToRemove, unloadState, function(removed) {
                  if (removed) {
                    _initPluginChain({
                      reason: 32,
                      removed: pluginsToRemove
                    });
                  }
                  removeCb && removeCb(removed);
                });
              }
            };
          }
          return theExt;
        }
        function _getPluginChain() {
          if (!_pluginChain) {
            var extensions = (_extensions || []).slice();
            if (arrIndexOf(extensions, _telemetryInitializerPlugin) === -1) {
              extensions[
                _DYN_PUSH
                /* @min:%2epush */
              ](_telemetryInitializerPlugin);
            }
            _pluginChain = createTelemetryProxyChain(sortPlugins(extensions), _configHandler.cfg, _self);
          }
          return _pluginChain;
        }
        function _removePlugins(thePlugins, unloadState, removeComplete) {
          if (thePlugins && thePlugins[
            _DYN_LENGTH
            /* @min:%2elength */
          ] > 0) {
            var unloadChain = createTelemetryProxyChain(thePlugins, _configHandler.cfg, _self);
            var unloadCtx = createProcessTelemetryUnloadContext(unloadChain, _self);
            unloadCtx[
              _DYN_ON_COMPLETE
              /* @min:%2eonComplete */
            ](function() {
              var removed = false;
              var newConfigExtensions = [];
              arrForEach(_configExtensions, function(plugin, idx) {
                if (!_isPluginPresent(plugin, thePlugins)) {
                  newConfigExtensions[
                    _DYN_PUSH
                    /* @min:%2epush */
                  ](plugin);
                } else {
                  removed = true;
                }
              });
              _configExtensions = newConfigExtensions;
              _pluginVersionString = null;
              _pluginVersionStringArr = null;
              var newChannelConfig = [];
              if (_channelConfig) {
                arrForEach(_channelConfig, function(queue, idx) {
                  var newQueue = [];
                  arrForEach(queue, function(channel) {
                    if (!_isPluginPresent(channel, thePlugins)) {
                      newQueue[
                        _DYN_PUSH
                        /* @min:%2epush */
                      ](channel);
                    } else {
                      removed = true;
                    }
                  });
                  newChannelConfig[
                    _DYN_PUSH
                    /* @min:%2epush */
                  ](newQueue);
                });
                _channelConfig = newChannelConfig;
              }
              removeComplete && removeComplete(removed);
              _startLogPoller();
            });
            unloadCtx[
              _DYN_PROCESS_NEXT
              /* @min:%2eprocessNext */
            ](unloadState);
          } else {
            removeComplete(false);
          }
        }
        function _flushInternalLogs() {
          if (_logger && _logger.queue) {
            var queue = _logger.queue.slice(0);
            _logger.queue[
              _DYN_LENGTH
              /* @min:%2elength */
            ] = 0;
            arrForEach(queue, function(logMessage) {
              var _a12;
              var item = (_a12 = {}, _a12[
                _DYN_NAME
                /* @min:name */
              ] = _internalLogsEventName ? _internalLogsEventName : "InternalMessageId: " + logMessage[
                _DYN_MESSAGE_ID
                /* @min:%2emessageId */
              ], _a12.iKey = _instrumentationKey, _a12[
                _DYN_TIME
                /* @min:time */
              ] = toISOString(/* @__PURE__ */ new Date()), _a12.baseType = _InternalLogMessage.dataType, _a12.baseData = { message: logMessage[
                _DYN_MESSAGE
                /* @min:%2emessage */
              ] }, _a12);
              _self.track(item);
            });
          }
        }
        function _flushChannels(isAsync, callBack, sendReason, cbTimeout) {
          var waiting = 1;
          var doneIterating = false;
          var cbTimer = null;
          cbTimeout = cbTimeout || 5e3;
          function doCallback() {
            waiting--;
            if (doneIterating && waiting === 0) {
              cbTimer && cbTimer[
                _DYN_CANCEL
                /* @min:%2ecancel */
              ]();
              cbTimer = null;
              callBack && callBack(doneIterating);
              callBack = null;
            }
          }
          if (_channels && _channels[
            _DYN_LENGTH
            /* @min:%2elength */
          ] > 0) {
            var flushCtx = _createTelCtx()[
              _DYN_CREATE_NEW
              /* @min:%2ecreateNew */
            ](_channels);
            flushCtx.iterate(function(plugin) {
              if (plugin.flush) {
                waiting++;
                var handled_1 = false;
                if (!plugin.flush(isAsync, function() {
                  handled_1 = true;
                  doCallback();
                }, sendReason)) {
                  if (!handled_1) {
                    if (isAsync && cbTimer == null) {
                      cbTimer = scheduleTimeout(function() {
                        cbTimer = null;
                        doCallback();
                      }, cbTimeout);
                    } else {
                      doCallback();
                    }
                  }
                }
              }
            });
          }
          doneIterating = true;
          doCallback();
          return true;
        }
        function _initPerfManager() {
          var prevCfgPerfMgr;
          _addUnloadHook(_configHandler[
            _DYN_WATCH
            /* @min:%2ewatch */
          ](function(details) {
            var enablePerfMgr = details.cfg.enablePerfMgr;
            if (enablePerfMgr) {
              var createPerfMgr = details.cfg[
                STR_CREATE_PERF_MGR
                /* @min:%2ecreatePerfMgr */
              ];
              if (prevCfgPerfMgr !== createPerfMgr) {
                if (!createPerfMgr) {
                  createPerfMgr = _createPerfManager;
                }
                getSetValue(details.cfg, STR_CREATE_PERF_MGR, createPerfMgr);
                prevCfgPerfMgr = createPerfMgr;
                _cfgPerfManager = null;
              }
              if (!_perfManager && !_cfgPerfManager && isFunction(createPerfMgr)) {
                _cfgPerfManager = createPerfMgr(_self, _self[
                  _DYN_GET_NOTIFY_MGR
                  /* @min:%2egetNotifyMgr */
                ]());
              }
            } else {
              _cfgPerfManager = null;
              prevCfgPerfMgr = null;
            }
          }));
        }
        function _doUpdate(updateState) {
          var updateCtx = createProcessTelemetryUpdateContext(_getPluginChain(), _self);
          updateCtx[
            _DYN_ON_COMPLETE
            /* @min:%2eonComplete */
          ](_startLogPoller);
          if (!_self._updateHook || _self._updateHook(updateCtx, updateState) !== true) {
            updateCtx[
              _DYN_PROCESS_NEXT
              /* @min:%2eprocessNext */
            ](updateState);
          }
        }
        function _logOrThrowError(message) {
          var logger = _self[
            _DYN_LOGGER
            /* @min:%2elogger */
          ];
          if (logger) {
            _throwInternal(logger, 2, 73, message);
            _startLogPoller();
          } else {
            throwError(message);
          }
        }
        function _notifyInvalidEvent(telemetryItem) {
          var manager = _self[
            _DYN_GET_NOTIFY_MGR
            /* @min:%2egetNotifyMgr */
          ]();
          if (manager) {
            manager[
              STR_EVENTS_DISCARDED
              /* @min:%2eeventsDiscarded */
            ](
              [telemetryItem],
              2
              /* eEventsDiscardedReason.InvalidEvent */
            );
          }
        }
        function _addUnloadHook(hooks) {
          _hookContainer.add(hooks);
        }
      });
    }
    AppInsightsCore2.__ieDyn = 1;
    return AppInsightsCore2;
  }()
);

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/ResponseHelpers.js
function parseResponse(response, diagLog) {
  try {
    if (response && response !== "") {
      var result = getJSON().parse(response);
      if (result && result[
        _DYN_ITEMS_RECEIVED
        /* @min:%2eitemsReceived */
      ] && result[
        _DYN_ITEMS_RECEIVED
        /* @min:%2eitemsReceived */
      ] >= result.itemsAccepted && result.itemsReceived - result.itemsAccepted === result.errors[
        _DYN_LENGTH
        /* @min:%2elength */
      ]) {
        return result;
      }
    }
  } catch (e) {
    _throwInternal(diagLog, 1, 43, "Cannot parse the response. " + (e[
      _DYN_NAME
      /* @min:%2ename */
    ] || dumpObj(e)), {
      response
    });
  }
  return null;
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/SenderPostManager.js
var STR_EMPTY2 = "";
var STR_NO_RESPONSE_BODY = "NoResponseBody";
var _noResponseQs = "&" + STR_NO_RESPONSE_BODY + "=true";
var STR_POST_METHOD = "POST";
var SenderPostManager = (
  /** @class */
  function() {
    function SenderPostManager2() {
      var _syncFetchPayload = 0;
      var _enableSendPromise;
      var _isInitialized;
      var _diagLog;
      var _isOneDs;
      var _onCompleteFuncs;
      var _disableCredentials;
      var _fallbackInst;
      var _disableXhr;
      var _disableBeacon;
      var _disableBeaconSync;
      var _disableFetchKeepAlive;
      var _addNoResponse;
      var _timeoutWrapper;
      dynamicProto(SenderPostManager2, this, function(_self, _base) {
        var _sendCredentials = true;
        _initDefaults();
        _self[
          _DYN_INITIALIZE
          /* @min:%2einitialize */
        ] = function(config, diagLog) {
          _diagLog = diagLog;
          if (_isInitialized) {
            _throwInternal(_diagLog, 1, 28, "Sender is already initialized");
          }
          _self.SetConfig(config);
          _isInitialized = true;
        };
        _self["_getDbgPlgTargets"] = function() {
          return [_isInitialized, _isOneDs, _disableCredentials, _enableSendPromise];
        };
        _self.SetConfig = function(config) {
          try {
            _onCompleteFuncs = config.senderOnCompleteCallBack || {};
            _disableCredentials = !!config.disableCredentials;
            _isOneDs = !!config.isOneDs;
            _enableSendPromise = !!config.enableSendPromise;
            _disableXhr = !!config.disableXhr;
            _disableBeacon = !!config.disableBeacon;
            _disableBeaconSync = !!config.disableBeaconSync;
            _timeoutWrapper = config.timeWrapper;
            _addNoResponse = !!config.addNoResponse;
            _disableFetchKeepAlive = !!config.disableFetchKeepAlive;
            _fallbackInst = { sendPOST: _xhrSender };
            if (!_isOneDs) {
              _sendCredentials = false;
            }
            if (_disableCredentials) {
              var location_1 = getLocation();
              if (location_1 && location_1.protocol && location_1.protocol[
                _DYN_TO_LOWER_CASE
                /* @min:%2etoLowerCase */
              ]() === "file:") {
                _sendCredentials = false;
              }
            }
            return true;
          } catch (e) {
          }
          return false;
        };
        _self.getSyncFetchPayload = function() {
          return _syncFetchPayload;
        };
        _self.getSenderInst = function(transports, sync) {
          if (transports && transports[
            _DYN_LENGTH
            /* @min:%2elength */
          ]) {
            return _getSenderInterface(transports, sync);
          }
          return null;
        };
        _self.getFallbackInst = function() {
          return _fallbackInst;
        };
        _self[
          _DYN__DO_TEARDOWN
          /* @min:%2e_doTeardown */
        ] = function(unloadCtx, unloadState) {
          _initDefaults();
        };
        function _onSuccess(res, onComplete) {
          _doOnComplete(onComplete, 200, {}, res);
        }
        function _onError(message, onComplete) {
          _throwInternal(_diagLog, 2, 26, "Failed to send telemetry.", { message });
          _doOnComplete(onComplete, 400, {});
        }
        function _onNoPayloadUrl(onComplete) {
          _onError("No endpoint url is provided for the batch", onComplete);
        }
        function _getSenderInterface(transports, syncSupport) {
          var _a12;
          var transportType = 0;
          var sendPostFunc = null;
          var lp = 0;
          while (sendPostFunc == null && lp < transports[
            _DYN_LENGTH
            /* @min:%2elength */
          ]) {
            transportType = transports[lp];
            if (!_disableXhr && transportType === 1) {
              if (useXDomainRequest()) {
                sendPostFunc = _xdrSender;
              } else if (isXhrSupported()) {
                sendPostFunc = _xhrSender;
              }
            } else if (transportType === 2 && isFetchSupported(syncSupport) && (!syncSupport || !_disableFetchKeepAlive)) {
              sendPostFunc = _doFetchSender;
            } else if (transportType === 3 && isBeaconsSupported() && (syncSupport ? !_disableBeaconSync : !_disableBeacon)) {
              sendPostFunc = _beaconSender;
            }
            lp++;
          }
          if (sendPostFunc) {
            return _a12 = {
              _transport: transportType,
              _isSync: syncSupport
            }, _a12[
              _DYN_SEND_POST
              /* @min:sendPOST */
            ] = sendPostFunc, _a12;
          }
          return null;
        }
        function _doOnComplete(oncomplete, status, headers, response) {
          try {
            oncomplete && oncomplete(status, headers, response);
          } catch (e) {
          }
        }
        function _doBeaconSend(payload, oncomplete) {
          var nav = getNavigator();
          var url = payload[
            _DYN_URL_STRING
            /* @min:%2eurlString */
          ];
          if (!url) {
            _onNoPayloadUrl(oncomplete);
            return true;
          }
          url = payload[
            _DYN_URL_STRING
            /* @min:%2eurlString */
          ] + (_addNoResponse ? _noResponseQs : STR_EMPTY2);
          var data = payload[
            _DYN_DATA
            /* @min:%2edata */
          ];
          var plainTextBatch = _isOneDs ? data : new Blob([data], { type: "text/plain;charset=UTF-8" });
          var queued = nav.sendBeacon(url, plainTextBatch);
          return queued;
        }
        function _beaconSender(payload, oncomplete, sync) {
          var data = payload[
            _DYN_DATA
            /* @min:%2edata */
          ];
          try {
            if (data) {
              if (!_doBeaconSend(payload, oncomplete)) {
                var onRetry = _onCompleteFuncs && _onCompleteFuncs.beaconOnRetry;
                if (onRetry && isFunction(onRetry)) {
                  onRetry(payload, oncomplete, _doBeaconSend);
                } else {
                  _fallbackInst && _fallbackInst[
                    _DYN_SEND_POST
                    /* @min:%2esendPOST */
                  ](payload, oncomplete, true);
                  _throwInternal(_diagLog, 2, 40, ". Failed to send telemetry with Beacon API, retried with normal sender.");
                }
              } else {
                _onSuccess(STR_EMPTY2, oncomplete);
              }
            }
          } catch (e) {
            _isOneDs && _warnToConsole(_diagLog, "Failed to send telemetry using sendBeacon API. Ex:" + dumpObj(e));
            _doOnComplete(oncomplete, _isOneDs ? 0 : 400, {}, STR_EMPTY2);
          }
          return;
        }
        function _xhrSender(payload, oncomplete, sync) {
          var thePromise;
          var resolveFunc;
          var rejectFunc;
          var headers = payload[
            _DYN_HEADERS
            /* @min:%2eheaders */
          ] || {};
          if (!sync && _enableSendPromise) {
            thePromise = createPromise(function(resolve, reject) {
              resolveFunc = resolve;
              rejectFunc = reject;
            });
          }
          if (_isOneDs && sync && payload.disableXhrSync) {
            sync = false;
          }
          var endPointUrl = payload[
            _DYN_URL_STRING
            /* @min:%2eurlString */
          ];
          if (!endPointUrl) {
            _onNoPayloadUrl(oncomplete);
            resolveFunc && resolveFunc(false);
            return;
          }
          var xhr = openXhr(STR_POST_METHOD, endPointUrl, _sendCredentials, true, sync, payload[
            _DYN_TIMEOUT
            /* @min:%2etimeout */
          ]);
          if (!_isOneDs) {
            xhr[
              _DYN_SET_REQUEST_HEADER
              /* @min:%2esetRequestHeader */
            ]("Content-type", "application/json");
          }
          arrForEach(objKeys(headers), function(headerName) {
            xhr[
              _DYN_SET_REQUEST_HEADER
              /* @min:%2esetRequestHeader */
            ](headerName, headers[headerName]);
          });
          xhr.onreadystatechange = function() {
            if (!_isOneDs) {
              _doOnReadyFunc(xhr);
              if (xhr.readyState === 4) {
                resolveFunc && resolveFunc(true);
              }
            }
          };
          xhr.onload = function() {
            if (_isOneDs) {
              _doOnReadyFunc(xhr);
            }
          };
          function _doOnReadyFunc(xhr2) {
            var onReadyFunc = _onCompleteFuncs && _onCompleteFuncs.xhrOnComplete;
            var onReadyFuncExist = onReadyFunc && isFunction(onReadyFunc);
            if (onReadyFuncExist) {
              onReadyFunc(xhr2, oncomplete, payload);
            } else {
              var response = getResponseText(xhr2);
              _doOnComplete(oncomplete, xhr2[
                _DYN_STATUS
                /* @min:%2estatus */
              ], _getAllResponseHeaders(xhr2, _isOneDs), response);
            }
          }
          xhr.onerror = function(event) {
            _doOnComplete(oncomplete, _isOneDs ? xhr[
              _DYN_STATUS
              /* @min:%2estatus */
            ] : 400, _getAllResponseHeaders(xhr, _isOneDs), _isOneDs ? STR_EMPTY2 : formatErrorMessageXhr(xhr));
            rejectFunc && rejectFunc(event);
          };
          xhr.ontimeout = function() {
            _doOnComplete(oncomplete, _isOneDs ? xhr[
              _DYN_STATUS
              /* @min:%2estatus */
            ] : 500, _getAllResponseHeaders(xhr, _isOneDs), _isOneDs ? STR_EMPTY2 : formatErrorMessageXhr(xhr));
            resolveFunc && resolveFunc(false);
          };
          xhr.send(payload[
            _DYN_DATA
            /* @min:%2edata */
          ]);
          return thePromise;
        }
        function _doFetchSender(payload, oncomplete, sync) {
          var _a12;
          var endPointUrl = payload[
            _DYN_URL_STRING
            /* @min:%2eurlString */
          ];
          var batch = payload[
            _DYN_DATA
            /* @min:%2edata */
          ];
          var plainTextBatch = _isOneDs ? batch : new Blob([batch], { type: "application/json" });
          var thePromise;
          var resolveFunc;
          var rejectFunc;
          var requestHeaders = new Headers();
          var batchLength = batch[
            _DYN_LENGTH
            /* @min:%2elength */
          ];
          var ignoreResponse = false;
          var responseHandled = false;
          var headers = payload[
            _DYN_HEADERS
            /* @min:%2eheaders */
          ] || {};
          var init = (_a12 = {
            method: STR_POST_METHOD,
            body: plainTextBatch
          }, _a12[DisabledPropertyName] = true, _a12);
          if (payload.headers && objKeys(payload.headers)[
            _DYN_LENGTH
            /* @min:%2elength */
          ] > 0) {
            arrForEach(objKeys(headers), function(headerName) {
              requestHeaders.append(headerName, headers[headerName]);
            });
            init[
              _DYN_HEADERS
              /* @min:%2eheaders */
            ] = requestHeaders;
          }
          if (_sendCredentials && _isOneDs) {
            init.credentials = "include";
          }
          if (sync) {
            init.keepalive = true;
            _syncFetchPayload += batchLength;
            if (_isOneDs) {
              if (payload["_sendReason"] === 2) {
                ignoreResponse = true;
                if (_addNoResponse) {
                  endPointUrl += _noResponseQs;
                }
              }
            } else {
              ignoreResponse = true;
            }
          }
          var request = new Request(endPointUrl, init);
          try {
            request[DisabledPropertyName] = true;
          } catch (e) {
          }
          if (!sync && _enableSendPromise) {
            thePromise = createPromise(function(resolve, reject) {
              resolveFunc = resolve;
              rejectFunc = reject;
            });
          }
          if (!endPointUrl) {
            _onNoPayloadUrl(oncomplete);
            resolveFunc && resolveFunc(false);
            return;
          }
          function _handleError(res) {
            _doOnComplete(oncomplete, _isOneDs ? 0 : 400, {}, _isOneDs ? STR_EMPTY2 : res);
          }
          function _onFetchComplete(response, payload2, value) {
            var status = response[
              _DYN_STATUS
              /* @min:%2estatus */
            ];
            var onCompleteFunc = _onCompleteFuncs.fetchOnComplete;
            if (onCompleteFunc && isFunction(onCompleteFunc)) {
              onCompleteFunc(response, oncomplete, value || STR_EMPTY2, payload2);
            } else {
              _doOnComplete(oncomplete, status, {}, value || STR_EMPTY2);
            }
          }
          try {
            doAwaitResponse(fetch(_isOneDs ? endPointUrl : request, _isOneDs ? init : null), function(result) {
              if (sync) {
                _syncFetchPayload -= batchLength;
                batchLength = 0;
              }
              if (!responseHandled) {
                responseHandled = true;
                if (!result.rejected) {
                  var response_1 = result.value;
                  try {
                    if (!_isOneDs && !response_1.ok) {
                      _handleError(response_1.statusText);
                      resolveFunc && resolveFunc(false);
                    } else {
                      if (_isOneDs && !response_1.body) {
                        _onFetchComplete(response_1, null, STR_EMPTY2);
                        resolveFunc && resolveFunc(true);
                      } else {
                        doAwaitResponse(response_1.text(), function(resp) {
                          _onFetchComplete(response_1, payload, resp.value);
                          resolveFunc && resolveFunc(true);
                        });
                      }
                    }
                  } catch (e) {
                    _handleError(dumpObj(e));
                    rejectFunc && rejectFunc(e);
                  }
                } else {
                  _handleError(result.reason && result.reason[
                    _DYN_MESSAGE
                    /* @min:%2emessage */
                  ]);
                  rejectFunc && rejectFunc(result.reason);
                }
              }
            });
          } catch (e) {
            if (!responseHandled) {
              _handleError(dumpObj(e));
              rejectFunc && rejectFunc(e);
            }
          }
          if (ignoreResponse && !responseHandled) {
            responseHandled = true;
            _doOnComplete(oncomplete, 200, {});
            resolveFunc && resolveFunc(true);
          }
          if (_isOneDs && !responseHandled && payload[
            _DYN_TIMEOUT
            /* @min:%2etimeout */
          ] > 0) {
            _timeoutWrapper && _timeoutWrapper.set(function() {
              if (!responseHandled) {
                responseHandled = true;
                _doOnComplete(oncomplete, 500, {});
                resolveFunc && resolveFunc(true);
              }
            }, payload[
              _DYN_TIMEOUT
              /* @min:%2etimeout */
            ]);
          }
          return thePromise;
        }
        function _xdrSender(payload, oncomplete, sync) {
          var _window = getWindow();
          var xdr = new XDomainRequest();
          var data = payload[
            _DYN_DATA
            /* @min:%2edata */
          ];
          xdr.onload = function() {
            var response = getResponseText(xdr);
            var onloadFunc = _onCompleteFuncs && _onCompleteFuncs.xdrOnComplete;
            if (onloadFunc && isFunction(onloadFunc)) {
              onloadFunc(xdr, oncomplete, payload);
            } else {
              _doOnComplete(oncomplete, 200, {}, response);
            }
          };
          xdr.onerror = function() {
            _doOnComplete(oncomplete, 400, {}, _isOneDs ? STR_EMPTY2 : formatErrorMessageXdr(xdr));
          };
          xdr.ontimeout = function() {
            _doOnComplete(oncomplete, 500, {});
          };
          xdr.onprogress = function() {
          };
          var hostingProtocol = _window && _window.location && _window.location[
            _DYN_PROTOCOL
            /* @min:%2eprotocol */
          ] || "";
          var endpoint = payload[
            _DYN_URL_STRING
            /* @min:%2eurlString */
          ];
          if (!endpoint) {
            _onNoPayloadUrl(oncomplete);
            return;
          }
          if (!_isOneDs && endpoint.lastIndexOf(hostingProtocol, 0) !== 0) {
            var msg = "Cannot send XDomain request. The endpoint URL protocol doesn't match the hosting page protocol.";
            _throwInternal(_diagLog, 2, 40, ". " + msg);
            _onError(msg, oncomplete);
            return;
          }
          var endpointUrl = _isOneDs ? endpoint : endpoint[
            _DYN_REPLACE
            /* @min:%2ereplace */
          ](/^(https?:)/, "");
          xdr.open(STR_POST_METHOD, endpointUrl);
          if (payload[
            _DYN_TIMEOUT
            /* @min:%2etimeout */
          ]) {
            xdr[
              _DYN_TIMEOUT
              /* @min:%2etimeout */
            ] = payload[
              _DYN_TIMEOUT
              /* @min:%2etimeout */
            ];
          }
          xdr.send(data);
          if (_isOneDs && sync) {
            _timeoutWrapper && _timeoutWrapper.set(function() {
              xdr.send(data);
            }, 0);
          } else {
            xdr.send(data);
          }
        }
        function _initDefaults() {
          _syncFetchPayload = 0;
          _isInitialized = false;
          _enableSendPromise = false;
          _diagLog = null;
          _isOneDs = null;
          _onCompleteFuncs = null;
          _disableCredentials = null;
          _fallbackInst = null;
          _disableXhr = false;
          _disableBeacon = false;
          _disableBeaconSync = false;
          _disableFetchKeepAlive = false;
          _addNoResponse = false;
          _timeoutWrapper = null;
        }
      });
    }
    SenderPostManager2.__ieDyn = 1;
    return SenderPostManager2;
  }()
);

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/EventHelpers.js
var strOnPrefix = "on";
var strAttachEvent = "attachEvent";
var strAddEventHelper = "addEventListener";
var strDetachEvent = "detachEvent";
var strRemoveEventListener = "removeEventListener";
var strEvents = "events";
var strVisibilityChangeEvt = "visibilitychange";
var strPageHide = "pagehide";
var strUnload = "unload";
var strBeforeUnload = "beforeunload";
var strPageHideNamespace = createUniqueNamespace("aiEvtPageHide");
var strPageShowNamespace = createUniqueNamespace("aiEvtPageShow");
var rRemoveEmptyNs = /\.[\.]+/g;
var rRemoveTrailingEmptyNs = /[\.]+$/;
var _guid = 1;
var elmNodeData = createElmNodeData("events");
var eventNamespace = /^([^.]*)(?:\.(.+)|)/;
function _normalizeNamespace(name) {
  if (name && name[
    _DYN_REPLACE
    /* @min:%2ereplace */
  ]) {
    return name[
      _DYN_REPLACE
      /* @min:%2ereplace */
    ](/^[\s\.]+|(?=[\s\.])[\.\s]+$/g, STR_EMPTY);
  }
  return name;
}
function _getEvtNamespace(eventName, evtNamespace) {
  var _a12;
  if (evtNamespace) {
    var theNamespace_1 = STR_EMPTY;
    if (isArray(evtNamespace)) {
      theNamespace_1 = STR_EMPTY;
      arrForEach(evtNamespace, function(name) {
        name = _normalizeNamespace(name);
        if (name) {
          if (name[0] !== ".") {
            name = "." + name;
          }
          theNamespace_1 += name;
        }
      });
    } else {
      theNamespace_1 = _normalizeNamespace(evtNamespace);
    }
    if (theNamespace_1) {
      if (theNamespace_1[0] !== ".") {
        theNamespace_1 = "." + theNamespace_1;
      }
      eventName = (eventName || STR_EMPTY) + theNamespace_1;
    }
  }
  var parsedEvent = eventNamespace.exec(eventName || STR_EMPTY) || [];
  return _a12 = {}, _a12[
    _DYN_TYPE
    /* @min:type */
  ] = parsedEvent[1], _a12.ns = (parsedEvent[2] || STR_EMPTY).replace(rRemoveEmptyNs, ".").replace(rRemoveTrailingEmptyNs, STR_EMPTY)[
    _DYN_SPLIT
    /* @min:%2esplit */
  ](".").sort().join("."), _a12;
}
function _getRegisteredEvents(target, evtName, addDefault) {
  if (addDefault === void 0) {
    addDefault = true;
  }
  var aiEvts = elmNodeData.get(target, strEvents, {}, addDefault);
  var registeredEvents = aiEvts[evtName];
  if (!registeredEvents) {
    registeredEvents = aiEvts[evtName] = [];
  }
  return registeredEvents;
}
function _doDetach(obj, evtName, handlerRef, useCapture) {
  if (obj && evtName && evtName[
    _DYN_TYPE
    /* @min:%2etype */
  ]) {
    if (obj[strRemoveEventListener]) {
      obj[strRemoveEventListener](evtName[
        _DYN_TYPE
        /* @min:%2etype */
      ], handlerRef, useCapture);
    } else if (obj[strDetachEvent]) {
      obj[strDetachEvent](strOnPrefix + evtName[
        _DYN_TYPE
        /* @min:%2etype */
      ], handlerRef);
    }
  }
}
function _doAttach(obj, evtName, handlerRef, useCapture) {
  var result = false;
  if (obj && evtName && evtName[
    _DYN_TYPE
    /* @min:%2etype */
  ] && handlerRef) {
    if (obj[strAddEventHelper]) {
      obj[strAddEventHelper](evtName[
        _DYN_TYPE
        /* @min:%2etype */
      ], handlerRef, useCapture);
      result = true;
    } else if (obj[strAttachEvent]) {
      obj[strAttachEvent](strOnPrefix + evtName[
        _DYN_TYPE
        /* @min:%2etype */
      ], handlerRef);
      result = true;
    }
  }
  return result;
}
function _doUnregister(target, events, evtName, unRegFn) {
  var idx = events[
    _DYN_LENGTH
    /* @min:%2elength */
  ];
  while (idx--) {
    var theEvent = events[idx];
    if (theEvent) {
      if (!evtName.ns || evtName.ns === theEvent.evtName.ns) {
        if (!unRegFn || unRegFn(theEvent)) {
          _doDetach(target, theEvent.evtName, theEvent[
            _DYN_HANDLER
            /* @min:%2ehandler */
          ], theEvent.capture);
          events[
            _DYN_SPLICE
            /* @min:%2esplice */
          ](idx, 1);
        }
      }
    }
  }
}
function _unregisterEvents(target, evtName, unRegFn) {
  if (evtName[
    _DYN_TYPE
    /* @min:%2etype */
  ]) {
    _doUnregister(target, _getRegisteredEvents(target, evtName[
      _DYN_TYPE
      /* @min:%2etype */
    ]), evtName, unRegFn);
  } else {
    var eventCache = elmNodeData.get(target, strEvents, {});
    objForEachKey(eventCache, function(evtType, events) {
      _doUnregister(target, events, evtName, unRegFn);
    });
    if (objKeys(eventCache)[
      _DYN_LENGTH
      /* @min:%2elength */
    ] === 0) {
      elmNodeData.kill(target, strEvents);
    }
  }
}
function mergeEvtNamespace(theNamespace, namespaces) {
  var newNamespaces;
  if (namespaces) {
    if (isArray(namespaces)) {
      newNamespaces = [theNamespace].concat(namespaces);
    } else {
      newNamespaces = [theNamespace, namespaces];
    }
    newNamespaces = _getEvtNamespace("xx", newNamespaces).ns[
      _DYN_SPLIT
      /* @min:%2esplit */
    ](".");
  } else {
    newNamespaces = theNamespace;
  }
  return newNamespaces;
}
function eventOn(target, eventName, handlerRef, evtNamespace, useCapture) {
  var _a12;
  if (useCapture === void 0) {
    useCapture = false;
  }
  var result = false;
  if (target) {
    try {
      var evtName = _getEvtNamespace(eventName, evtNamespace);
      result = _doAttach(target, evtName, handlerRef, useCapture);
      if (result && elmNodeData.accept(target)) {
        var registeredEvent = (_a12 = {
          guid: _guid++,
          evtName
        }, _a12[
          _DYN_HANDLER
          /* @min:handler */
        ] = handlerRef, _a12.capture = useCapture, _a12);
        _getRegisteredEvents(target, evtName.type)[
          _DYN_PUSH
          /* @min:%2epush */
        ](registeredEvent);
      }
    } catch (e) {
    }
  }
  return result;
}
function eventOff(target, eventName, handlerRef, evtNamespace, useCapture) {
  if (useCapture === void 0) {
    useCapture = false;
  }
  if (target) {
    try {
      var evtName_1 = _getEvtNamespace(eventName, evtNamespace);
      var found_1 = false;
      _unregisterEvents(target, evtName_1, function(regEvent) {
        if (evtName_1.ns && !handlerRef || regEvent[
          _DYN_HANDLER
          /* @min:%2ehandler */
        ] === handlerRef) {
          found_1 = true;
          return true;
        }
        return false;
      });
      if (!found_1) {
        _doDetach(target, evtName_1, handlerRef, useCapture);
      }
    } catch (e) {
    }
  }
}
function addEventHandler(eventName, callback, evtNamespace) {
  var result = false;
  var w = getWindow();
  if (w) {
    result = eventOn(w, eventName, callback, evtNamespace);
    result = eventOn(w["body"], eventName, callback, evtNamespace) || result;
  }
  var doc = getDocument();
  if (doc) {
    result = eventOn(doc, eventName, callback, evtNamespace) || result;
  }
  return result;
}
function removeEventHandler(eventName, callback, evtNamespace) {
  var w = getWindow();
  if (w) {
    eventOff(w, eventName, callback, evtNamespace);
    eventOff(w["body"], eventName, callback, evtNamespace);
  }
  var doc = getDocument();
  if (doc) {
    eventOff(doc, eventName, callback, evtNamespace);
  }
}
function _addEventListeners(events, listener, excludeEvents, evtNamespace) {
  var added = false;
  if (listener && events && events[
    _DYN_LENGTH
    /* @min:%2elength */
  ] > 0) {
    arrForEach(events, function(name) {
      if (name) {
        if (!excludeEvents || arrIndexOf(excludeEvents, name) === -1) {
          added = addEventHandler(name, listener, evtNamespace) || added;
        }
      }
    });
  }
  return added;
}
function addEventListeners(events, listener, excludeEvents, evtNamespace) {
  var added = false;
  if (listener && events && isArray(events)) {
    added = _addEventListeners(events, listener, excludeEvents, evtNamespace);
    if (!added && excludeEvents && excludeEvents[
      _DYN_LENGTH
      /* @min:%2elength */
    ] > 0) {
      added = _addEventListeners(events, listener, null, evtNamespace);
    }
  }
  return added;
}
function removeEventListeners(events, listener, evtNamespace) {
  if (events && isArray(events)) {
    arrForEach(events, function(name) {
      if (name) {
        removeEventHandler(name, listener, evtNamespace);
      }
    });
  }
}
function addPageUnloadEventListener(listener, excludeEvents, evtNamespace) {
  return addEventListeners([strBeforeUnload, strUnload, strPageHide], listener, excludeEvents, evtNamespace);
}
function removePageUnloadEventListener(listener, evtNamespace) {
  removeEventListeners([strBeforeUnload, strUnload, strPageHide], listener, evtNamespace);
}
function addPageHideEventListener(listener, excludeEvents, evtNamespace) {
  function _handlePageVisibility(evt) {
    var doc = getDocument();
    if (listener && doc && doc.visibilityState === "hidden") {
      listener(evt);
    }
  }
  var newNamespaces = mergeEvtNamespace(strPageHideNamespace, evtNamespace);
  var pageUnloadAdded = _addEventListeners([strPageHide], listener, excludeEvents, newNamespaces);
  if (!excludeEvents || arrIndexOf(excludeEvents, strVisibilityChangeEvt) === -1) {
    pageUnloadAdded = _addEventListeners([strVisibilityChangeEvt], _handlePageVisibility, excludeEvents, newNamespaces) || pageUnloadAdded;
  }
  if (!pageUnloadAdded && excludeEvents) {
    pageUnloadAdded = addPageHideEventListener(listener, null, evtNamespace);
  }
  return pageUnloadAdded;
}
function removePageHideEventListener(listener, evtNamespace) {
  var newNamespaces = mergeEvtNamespace(strPageHideNamespace, evtNamespace);
  removeEventListeners([strPageHide], listener, newNamespaces);
  removeEventListeners([strVisibilityChangeEvt], null, newNamespaces);
}

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK.Enums/LoggingEnums.js
var LoggingSeverity = createEnumStyle({
  DISABLED: 0,
  CRITICAL: 1,
  WARNING: 2,
  DEBUG: 3
  /* eLoggingSeverity.DEBUG */
});

// node_modules/@microsoft/applicationinsights-core-js/dist-es5/JavaScriptSDK/InstrumentHooks.js
var aiInstrumentHooks = "_aiHooks";
var cbNames = [
  "req",
  "rsp",
  "hkErr",
  "fnErr"
];
function _arrLoop(arr, fn) {
  if (arr) {
    for (var lp = 0; lp < arr[
      _DYN_LENGTH
      /* @min:%2elength */
    ]; lp++) {
      if (fn(arr[lp], lp)) {
        break;
      }
    }
  }
}
function _doCallbacks(hooks, callDetails, cbArgs, hookCtx, type) {
  if (type >= 0 && type <= 2) {
    _arrLoop(hooks, function(hook, idx) {
      var cbks = hook.cbks;
      var cb = cbks[cbNames[type]];
      if (cb) {
        callDetails.ctx = function() {
          var ctx = hookCtx[idx] = hookCtx[idx] || {};
          return ctx;
        };
        try {
          cb[
            _DYN_APPLY
            /* @min:%2eapply */
          ](callDetails.inst, cbArgs);
        } catch (err) {
          var orgEx = callDetails.err;
          try {
            var hookErrorCb = cbks[cbNames[
              2
              /* CallbackType.HookError */
            ]];
            if (hookErrorCb) {
              callDetails.err = err;
              hookErrorCb[
                _DYN_APPLY
                /* @min:%2eapply */
              ](callDetails.inst, cbArgs);
            }
          } catch (e) {
          } finally {
            callDetails.err = orgEx;
          }
        }
      }
    });
  }
}
function _createFunctionHook(aiHook) {
  return function() {
    var _a12;
    var funcThis = this;
    var orgArgs = arguments;
    var hooks = aiHook.h;
    var funcArgs = (_a12 = {}, _a12[
      _DYN_NAME
      /* @min:name */
    ] = aiHook.n, _a12.inst = funcThis, _a12.ctx = null, _a12.set = _replaceArg, _a12);
    var hookCtx = [];
    var cbArgs = _createArgs([funcArgs], orgArgs);
    funcArgs.evt = getInst("event");
    function _createArgs(target, theArgs) {
      _arrLoop(theArgs, function(arg) {
        target[
          _DYN_PUSH
          /* @min:%2epush */
        ](arg);
      });
      return target;
    }
    function _replaceArg(idx, value) {
      orgArgs = _createArgs([], orgArgs);
      orgArgs[idx] = value;
      cbArgs = _createArgs([funcArgs], orgArgs);
    }
    _doCallbacks(
      hooks,
      funcArgs,
      cbArgs,
      hookCtx,
      0
      /* CallbackType.Request */
    );
    var theFunc = aiHook.f;
    if (theFunc) {
      try {
        funcArgs.rslt = theFunc[
          _DYN_APPLY
          /* @min:%2eapply */
        ](funcThis, orgArgs);
      } catch (err) {
        funcArgs.err = err;
        _doCallbacks(
          hooks,
          funcArgs,
          cbArgs,
          hookCtx,
          3
          /* CallbackType.FunctionError */
        );
        throw err;
      }
    }
    _doCallbacks(
      hooks,
      funcArgs,
      cbArgs,
      hookCtx,
      1
      /* CallbackType.Response */
    );
    return funcArgs.rslt;
  };
}
function _getOwner(target, name, checkPrototype, checkParentProto) {
  var owner = null;
  if (target) {
    if (objHasOwnProperty(target, name)) {
      owner = target;
    } else if (checkPrototype) {
      owner = _getOwner(_getObjProto2(target), name, checkParentProto, false);
    }
  }
  return owner;
}
function InstrumentProto(target, funcName, callbacks) {
  if (target) {
    return InstrumentFunc(target[strShimPrototype], funcName, callbacks, false);
  }
  return null;
}
function _createInstrumentHook(owner, funcName, fn, callbacks) {
  var aiHook = fn && fn[aiInstrumentHooks];
  if (!aiHook) {
    aiHook = {
      i: 0,
      n: funcName,
      f: fn,
      h: []
    };
    var newFunc = _createFunctionHook(aiHook);
    newFunc[aiInstrumentHooks] = aiHook;
    owner[funcName] = newFunc;
  }
  var theHook = {
    // tslint:disable:object-literal-shorthand
    id: aiHook.i,
    cbks: callbacks,
    rm: function() {
      var id = this.id;
      _arrLoop(aiHook.h, function(hook, idx) {
        if (hook.id === id) {
          aiHook.h[
            _DYN_SPLICE
            /* @min:%2esplice */
          ](idx, 1);
          return 1;
        }
      });
    }
    // tslint:enable:object-literal-shorthand
  };
  aiHook.i++;
  aiHook.h[
    _DYN_PUSH
    /* @min:%2epush */
  ](theHook);
  return theHook;
}
function InstrumentFunc(target, funcName, callbacks, checkPrototype, checkParentProto) {
  if (checkPrototype === void 0) {
    checkPrototype = true;
  }
  if (target && funcName && callbacks) {
    var owner = _getOwner(target, funcName, checkPrototype, checkParentProto);
    if (owner) {
      var fn = owner[funcName];
      if (typeof fn === strShimFunction) {
        return _createInstrumentHook(owner, funcName, fn, callbacks);
      }
    }
  }
  return null;
}
function InstrumentEvent(target, evtName, callbacks, checkPrototype, checkParentProto) {
  if (target && evtName && callbacks) {
    var owner = _getOwner(target, evtName, checkPrototype, checkParentProto) || target;
    if (owner) {
      return _createInstrumentHook(owner, evtName, owner[evtName], callbacks);
    }
  }
  return null;
}

// node_modules/@microsoft/applicationinsights-common/dist-es5/Constants.js
var DisabledPropertyName2 = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
var SampleRate = "sampleRate";
var ProcessLegacy = "ProcessLegacy";
var HttpMethod = "http.method";
var DEFAULT_BREEZE_ENDPOINT = "https://dc.services.visualstudio.com";
var DEFAULT_BREEZE_PATH = "/v2/track";
var strNotSpecified = "not_specified";
var strIkey = "iKey";

// node_modules/@microsoft/applicationinsights-common/dist-es5/RequestResponseHeaders.js
var RequestHeaders = createValueMap({
  requestContextHeader: [0, "Request-Context"],
  requestContextTargetKey: [1, "appId"],
  requestContextAppIdFormat: [2, "appId=cid-v1:"],
  requestIdHeader: [3, "Request-Id"],
  traceParentHeader: [4, "traceparent"],
  traceStateHeader: [5, "tracestate"],
  sdkContextHeader: [6, "Sdk-Context"],
  sdkContextHeaderAppIdRequest: [7, "appId"],
  requestContextHeaderLowerCase: [8, "request-context"]
});

// node_modules/@microsoft/applicationinsights-common/dist-es5/__DynamicConstants.js
var _DYN_SPLIT2 = "split";
var _DYN_LENGTH2 = "length";
var _DYN_TO_LOWER_CASE2 = "toLowerCase";
var _DYN_INGESTIONENDPOINT = "ingestionendpoint";
var _DYN_TO_STRING = "toString";
var _DYN_PUSH2 = "push";
var _DYN_REMOVE_ITEM = "removeItem";
var _DYN_NAME2 = "name";
var _DYN_MESSAGE2 = "message";
var _DYN_COUNT = "count";
var _DYN_PRE_TRIGGER_DATE = "preTriggerDate";
var _DYN_DISABLED = "disabled";
var _DYN_INTERVAL = "interval";
var _DYN_DAYS_OF_MONTH = "daysOfMonth";
var _DYN_DATE = "date";
var _DYN_GET_UTCDATE = "getUTCDate";
var _DYN_STRINGIFY = "stringify";
var _DYN_PATHNAME = "pathname";
var _DYN_CORRELATION_HEADER_E0 = "correlationHeaderExcludePatterns";
var _DYN_EXTENSION_CONFIG = "extensionConfig";
var _DYN_EXCEPTIONS = "exceptions";
var _DYN_PARSED_STACK = "parsedStack";
var _DYN_PROPERTIES = "properties";
var _DYN_MEASUREMENTS = "measurements";
var _DYN_SIZE_IN_BYTES = "sizeInBytes";
var _DYN_TYPE_NAME = "typeName";
var _DYN_SEVERITY_LEVEL = "severityLevel";
var _DYN_PROBLEM_GROUP = "problemGroup";
var _DYN_IS_MANUAL = "isManual";
var _DYN__CREATE_FROM_INTERFA1 = "CreateFromInterface";
var _DYN_ASSEMBLY = "assembly";
var _DYN_FILE_NAME = "fileName";
var _DYN_HAS_FULL_STACK = "hasFullStack";
var _DYN_LEVEL = "level";
var _DYN_METHOD = "method";
var _DYN_LINE = "line";
var _DYN_DURATION = "duration";
var _DYN_RECEIVED_RESPONSE = "receivedResponse";

// node_modules/@microsoft/applicationinsights-common/dist-es5/Telemetry/Common/DataSanitizer.js
function dataSanitizeKeyAndAddUniqueness(logger, key, map) {
  var origLength = key[
    _DYN_LENGTH2
    /* @min:%2elength */
  ];
  var field = dataSanitizeKey(logger, key);
  if (field[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] !== origLength) {
    var i = 0;
    var uniqueField = field;
    while (map[uniqueField] !== void 0) {
      i++;
      uniqueField = strSubstring(field, 0, 150 - 3) + dsPadNumber(i);
    }
    field = uniqueField;
  }
  return field;
}
function dataSanitizeKey(logger, name) {
  var nameTrunc;
  if (name) {
    name = strTrim(asString(name));
    if (name[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > 150) {
      nameTrunc = strSubstring(
        name,
        0,
        150
        /* DataSanitizerValues.MAX_NAME_LENGTH */
      );
      _throwInternal(logger, 2, 57, "name is too long.  It has been truncated to 150 characters.", { name }, true);
    }
  }
  return nameTrunc || name;
}
function dataSanitizeString(logger, value, maxLength) {
  if (maxLength === void 0) {
    maxLength = 1024;
  }
  var valueTrunc;
  if (value) {
    maxLength = maxLength ? maxLength : 1024;
    value = strTrim(asString(value));
    if (value[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > maxLength) {
      valueTrunc = strSubstring(value, 0, maxLength);
      _throwInternal(logger, 2, 61, "string value is too long. It has been truncated to " + maxLength + " characters.", { value }, true);
    }
  }
  return valueTrunc || value;
}
function dataSanitizeUrl(logger, url) {
  return dataSanitizeInput(
    logger,
    url,
    2048,
    66
    /* _eInternalMessageId.UrlTooLong */
  );
}
function dataSanitizeMessage(logger, message) {
  var messageTrunc;
  if (message) {
    if (message[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > 32768) {
      messageTrunc = strSubstring(
        message,
        0,
        32768
        /* DataSanitizerValues.MAX_MESSAGE_LENGTH */
      );
      _throwInternal(logger, 2, 56, "message is too long, it has been truncated to 32768 characters.", { message }, true);
    }
  }
  return messageTrunc || message;
}
function dataSanitizeException(logger, exception) {
  var exceptionTrunc;
  if (exception) {
    var value = "" + exception;
    if (value[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > 32768) {
      exceptionTrunc = strSubstring(
        value,
        0,
        32768
        /* DataSanitizerValues.MAX_EXCEPTION_LENGTH */
      );
      _throwInternal(logger, 2, 52, "exception is too long, it has been truncated to 32768 characters.", { exception }, true);
    }
  }
  return exceptionTrunc || exception;
}
function dataSanitizeProperties(logger, properties) {
  if (properties) {
    var tempProps_1 = {};
    objForEachKey(properties, function(prop, value) {
      if (isObject(value) && hasJSON()) {
        try {
          value = getJSON()[
            _DYN_STRINGIFY
            /* @min:%2estringify */
          ](value);
        } catch (e) {
          _throwInternal(logger, 2, 49, "custom property is not valid", { exception: e }, true);
        }
      }
      value = dataSanitizeString(
        logger,
        value,
        8192
        /* DataSanitizerValues.MAX_PROPERTY_LENGTH */
      );
      prop = dataSanitizeKeyAndAddUniqueness(logger, prop, tempProps_1);
      tempProps_1[prop] = value;
    });
    properties = tempProps_1;
  }
  return properties;
}
function dataSanitizeMeasurements(logger, measurements) {
  if (measurements) {
    var tempMeasurements_1 = {};
    objForEachKey(measurements, function(measure, value) {
      measure = dataSanitizeKeyAndAddUniqueness(logger, measure, tempMeasurements_1);
      tempMeasurements_1[measure] = value;
    });
    measurements = tempMeasurements_1;
  }
  return measurements;
}
function dataSanitizeId(logger, id) {
  return id ? dataSanitizeInput(
    logger,
    id,
    128,
    69
    /* _eInternalMessageId.IdTooLong */
  )[
    _DYN_TO_STRING
    /* @min:%2etoString */
  ]() : id;
}
function dataSanitizeInput(logger, input, maxLength, _msgId) {
  var inputTrunc;
  if (input) {
    input = strTrim(asString(input));
    if (input[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > maxLength) {
      inputTrunc = strSubstring(input, 0, maxLength);
      _throwInternal(logger, 2, _msgId, "input is too long, it has been truncated to " + maxLength + " characters.", { data: input }, true);
    }
  }
  return inputTrunc || input;
}
function dsPadNumber(num) {
  var s = "00" + num;
  return strSubstr(s, s[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] - 3);
}

// node_modules/@microsoft/applicationinsights-common/dist-es5/UrlHelperFuncs.js
var _document = getDocument() || {};
var _htmlAnchorIdx = 0;
var _htmlAnchorElement = [null, null, null, null, null];
function urlParseUrl(url) {
  var anchorIdx = _htmlAnchorIdx;
  var anchorCache = _htmlAnchorElement;
  var tempAnchor = anchorCache[anchorIdx];
  if (!_document.createElement) {
    tempAnchor = { host: urlParseHost(url, true) };
  } else if (!anchorCache[anchorIdx]) {
    tempAnchor = anchorCache[anchorIdx] = _document.createElement("a");
  }
  tempAnchor.href = url;
  anchorIdx++;
  if (anchorIdx >= anchorCache[
    _DYN_LENGTH2
    /* @min:%2elength */
  ]) {
    anchorIdx = 0;
  }
  _htmlAnchorIdx = anchorIdx;
  return tempAnchor;
}
function urlGetAbsoluteUrl(url) {
  var result;
  var a = urlParseUrl(url);
  if (a) {
    result = a.href;
  }
  return result;
}
function urlGetCompleteUrl(method, absoluteUrl) {
  if (method) {
    return method.toUpperCase() + " " + absoluteUrl;
  }
  return absoluteUrl;
}
function urlParseHost(url, inclPort) {
  var fullHost = urlParseFullHost(url, inclPort) || "";
  if (fullHost) {
    var match = fullHost.match(/(www\d{0,5}\.)?([^\/:]{1,256})(:\d{1,20})?/i);
    if (match != null && match[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > 3 && isString(match[2]) && match[2][
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > 0) {
      return match[2] + (match[3] || "");
    }
  }
  return fullHost;
}
function urlParseFullHost(url, inclPort) {
  var result = null;
  if (url) {
    var match = url.match(/(\w{1,150}):\/\/([^\/:]{1,256})(:\d{1,20})?/i);
    if (match != null && match[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > 2 && isString(match[2]) && match[2][
      _DYN_LENGTH2
      /* @min:%2elength */
    ] > 0) {
      result = match[2] || "";
      if (inclPort && match[
        _DYN_LENGTH2
        /* @min:%2elength */
      ] > 2) {
        var protocol = (match[1] || "")[
          _DYN_TO_LOWER_CASE2
          /* @min:%2etoLowerCase */
        ]();
        var port = match[3] || "";
        if (protocol === "http" && port === ":80") {
          port = "";
        } else if (protocol === "https" && port === ":443") {
          port = "";
        }
        result += port;
      }
    }
  }
  return result;
}

// node_modules/@microsoft/applicationinsights-common/dist-es5/Util.js
var _internalEndpoints = [
  DEFAULT_BREEZE_ENDPOINT + DEFAULT_BREEZE_PATH,
  "https://breeze.aimon.applicationinsights.io" + DEFAULT_BREEZE_PATH,
  "https://dc-int.services.visualstudio.com" + DEFAULT_BREEZE_PATH
];
var _correlationIdPrefix = "cid-v1:";
function isInternalApplicationInsightsEndpoint(endpointUrl) {
  return arrIndexOf(_internalEndpoints, endpointUrl[
    _DYN_TO_LOWER_CASE2
    /* @min:%2etoLowerCase */
  ]()) !== -1;
}
function correlationIdCanIncludeCorrelationHeader(config, requestUrl, currentHost) {
  if (!requestUrl || config && config.disableCorrelationHeaders) {
    return false;
  }
  if (config && config[
    _DYN_CORRELATION_HEADER_E0
    /* @min:%2ecorrelationHeaderExcludePatterns */
  ]) {
    for (var i = 0; i < config.correlationHeaderExcludePatterns[
      _DYN_LENGTH2
      /* @min:%2elength */
    ]; i++) {
      if (config[
        _DYN_CORRELATION_HEADER_E0
        /* @min:%2ecorrelationHeaderExcludePatterns */
      ][i].test(requestUrl)) {
        return false;
      }
    }
  }
  var requestHost = urlParseUrl(requestUrl).host[
    _DYN_TO_LOWER_CASE2
    /* @min:%2etoLowerCase */
  ]();
  if (requestHost && (strIndexOf(requestHost, ":443") !== -1 || strIndexOf(requestHost, ":80") !== -1)) {
    requestHost = (urlParseFullHost(requestUrl, true) || "")[
      _DYN_TO_LOWER_CASE2
      /* @min:%2etoLowerCase */
    ]();
  }
  if ((!config || !config.enableCorsCorrelation) && (requestHost && requestHost !== currentHost)) {
    return false;
  }
  var includedDomains = config && config.correlationHeaderDomains;
  if (includedDomains) {
    var matchExists_1;
    arrForEach(includedDomains, function(domain) {
      var regex2 = new RegExp(domain.toLowerCase().replace(/\\/g, "\\\\").replace(/\./g, "\\.").replace(/\*/g, ".*"));
      matchExists_1 = matchExists_1 || regex2.test(requestHost);
    });
    if (!matchExists_1) {
      return false;
    }
  }
  var excludedDomains = config && config.correlationHeaderExcludedDomains;
  if (!excludedDomains || excludedDomains[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] === 0) {
    return true;
  }
  for (var i = 0; i < excludedDomains[
    _DYN_LENGTH2
    /* @min:%2elength */
  ]; i++) {
    var regex = new RegExp(excludedDomains[i].toLowerCase().replace(/\\/g, "\\\\").replace(/\./g, "\\.").replace(/\*/g, ".*"));
    if (regex.test(requestHost)) {
      return false;
    }
  }
  return requestHost && requestHost[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] > 0;
}
function correlationIdGetCorrelationContext(responseHeader) {
  if (responseHeader) {
    var correlationId = correlationIdGetCorrelationContextValue(responseHeader, RequestHeaders[
      1
      /* eRequestHeaders.requestContextTargetKey */
    ]);
    if (correlationId && correlationId !== _correlationIdPrefix) {
      return correlationId;
    }
  }
}
function correlationIdGetCorrelationContextValue(responseHeader, key) {
  if (responseHeader) {
    var keyValues = responseHeader[
      _DYN_SPLIT2
      /* @min:%2esplit */
    ](",");
    for (var i = 0; i < keyValues[
      _DYN_LENGTH2
      /* @min:%2elength */
    ]; ++i) {
      var keyValue = keyValues[i][
        _DYN_SPLIT2
        /* @min:%2esplit */
      ]("=");
      if (keyValue[
        _DYN_LENGTH2
        /* @min:%2elength */
      ] === 2 && keyValue[0] === key) {
        return keyValue[1];
      }
    }
  }
}
function AjaxHelperParseDependencyPath(logger, absoluteUrl, method, commandName) {
  var target, name = commandName, data = commandName;
  if (absoluteUrl && absoluteUrl[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] > 0) {
    var parsedUrl = urlParseUrl(absoluteUrl);
    target = parsedUrl.host;
    if (!name) {
      if (parsedUrl[
        _DYN_PATHNAME
        /* @min:%2epathname */
      ] != null) {
        var pathName = parsedUrl.pathname[
          _DYN_LENGTH2
          /* @min:%2elength */
        ] === 0 ? "/" : parsedUrl[
          _DYN_PATHNAME
          /* @min:%2epathname */
        ];
        if (pathName.charAt(0) !== "/") {
          pathName = "/" + pathName;
        }
        data = parsedUrl[
          _DYN_PATHNAME
          /* @min:%2epathname */
        ];
        name = dataSanitizeString(logger, method ? method + " " + pathName : pathName);
      } else {
        name = dataSanitizeString(logger, absoluteUrl);
      }
    }
  } else {
    target = commandName;
    name = commandName;
  }
  return {
    target,
    name,
    data
  };
}
function dateTimeUtilsNow() {
  var perf = getPerformance();
  if (perf && perf.now && perf.timing) {
    var now = perf.now() + perf.timing.navigationStart;
    if (now > 0) {
      return now;
    }
  }
  return utcNow();
}
function dateTimeUtilsDuration(start, end) {
  var result = null;
  if (start !== 0 && end !== 0 && !isNullOrUndefined(start) && !isNullOrUndefined(end)) {
    result = end - start;
  }
  return result;
}
function createDistributedTraceContextFromTrace(telemetryTrace, parentCtx) {
  var trace = telemetryTrace || {};
  return {
    getName: function() {
      return trace[
        _DYN_NAME2
        /* @min:%2ename */
      ];
    },
    setName: function(newValue) {
      parentCtx && parentCtx.setName(newValue);
      trace[
        _DYN_NAME2
        /* @min:%2ename */
      ] = newValue;
    },
    getTraceId: function() {
      return trace.traceID;
    },
    setTraceId: function(newValue) {
      parentCtx && parentCtx.setTraceId(newValue);
      if (isValidTraceId(newValue)) {
        trace.traceID = newValue;
      }
    },
    getSpanId: function() {
      return trace.parentID;
    },
    setSpanId: function(newValue) {
      parentCtx && parentCtx.setSpanId(newValue);
      if (isValidSpanId(newValue)) {
        trace.parentID = newValue;
      }
    },
    getTraceFlags: function() {
      return trace.traceFlags;
    },
    setTraceFlags: function(newTraceFlags) {
      parentCtx && parentCtx.setTraceFlags(newTraceFlags);
      trace.traceFlags = newTraceFlags;
    }
  };
}

// node_modules/@microsoft/applicationinsights-common/dist-es5/Enums.js
var StorageType = createEnumStyle({
  LocalStorage: 0,
  SessionStorage: 1
  /* eStorageType.SessionStorage */
});
var DistributedTracingModes = createEnumStyle({
  AI: 0,
  AI_AND_W3C: 1,
  W3C: 2
  /* eDistributedTracingModes.W3C */
});
var EventPersistence = createEnumStyle({
  /**
   * Normal persistence.
   */
  Normal: 1,
  /**
   * Critical persistence.
   */
  Critical: 2
  /* EventPersistenceValue.Critical */
});

// node_modules/@microsoft/applicationinsights-common/dist-es5/StorageHelperFuncs.js
var _canUseLocalStorage = void 0;
var _canUseSessionStorage = void 0;
var _storagePrefix = "";
function _getLocalStorageObject() {
  if (utlCanUseLocalStorage()) {
    return _getVerifiedStorageObject(StorageType.LocalStorage);
  }
  return null;
}
function _getVerifiedStorageObject(storageType) {
  try {
    if (isNullOrUndefined(getGlobal())) {
      return null;
    }
    var uid = (/* @__PURE__ */ new Date())[
      _DYN_TO_STRING
      /* @min:%2etoString */
    ]();
    var storage = getInst(storageType === StorageType.LocalStorage ? "localStorage" : "sessionStorage");
    var name_1 = _storagePrefix + uid;
    storage.setItem(name_1, uid);
    var fail = storage.getItem(name_1) !== uid;
    storage[
      _DYN_REMOVE_ITEM
      /* @min:%2eremoveItem */
    ](name_1);
    if (!fail) {
      return storage;
    }
  } catch (exception) {
  }
  return null;
}
function _getSessionStorageObject() {
  if (utlCanUseSessionStorage()) {
    return _getVerifiedStorageObject(StorageType.SessionStorage);
  }
  return null;
}
function utlDisableStorage() {
  _canUseLocalStorage = false;
  _canUseSessionStorage = false;
}
function utlSetStoragePrefix(storagePrefix) {
  _storagePrefix = storagePrefix || "";
}
function utlEnableStorage() {
  _canUseLocalStorage = utlCanUseLocalStorage(true);
  _canUseSessionStorage = utlCanUseSessionStorage(true);
}
function utlCanUseLocalStorage(reset) {
  if (reset || _canUseLocalStorage === void 0) {
    _canUseLocalStorage = !!_getVerifiedStorageObject(StorageType.LocalStorage);
  }
  return _canUseLocalStorage;
}
function utlGetLocalStorage(logger, name) {
  var storage = _getLocalStorageObject();
  if (storage !== null) {
    try {
      return storage.getItem(name);
    } catch (e) {
      _canUseLocalStorage = false;
      _throwInternal(logger, 2, 1, "Browser failed read of local storage. " + getExceptionName(e), { exception: dumpObj(e) });
    }
  }
  return null;
}
function utlSetLocalStorage(logger, name, data) {
  var storage = _getLocalStorageObject();
  if (storage !== null) {
    try {
      storage.setItem(name, data);
      return true;
    } catch (e) {
      _canUseLocalStorage = false;
      _throwInternal(logger, 2, 3, "Browser failed write to local storage. " + getExceptionName(e), { exception: dumpObj(e) });
    }
  }
  return false;
}
function utlRemoveStorage(logger, name) {
  var storage = _getLocalStorageObject();
  if (storage !== null) {
    try {
      storage[
        _DYN_REMOVE_ITEM
        /* @min:%2eremoveItem */
      ](name);
      return true;
    } catch (e) {
      _canUseLocalStorage = false;
      _throwInternal(logger, 2, 5, "Browser failed removal of local storage item. " + getExceptionName(e), { exception: dumpObj(e) });
    }
  }
  return false;
}
function utlCanUseSessionStorage(reset) {
  if (reset || _canUseSessionStorage === void 0) {
    _canUseSessionStorage = !!_getVerifiedStorageObject(StorageType.SessionStorage);
  }
  return _canUseSessionStorage;
}
function utlGetSessionStorage(logger, name) {
  var storage = _getSessionStorageObject();
  if (storage !== null) {
    try {
      return storage.getItem(name);
    } catch (e) {
      _canUseSessionStorage = false;
      _throwInternal(logger, 2, 2, "Browser failed read of session storage. " + getExceptionName(e), { exception: dumpObj(e) });
    }
  }
  return null;
}
function utlSetSessionStorage(logger, name, data) {
  var storage = _getSessionStorageObject();
  if (storage !== null) {
    try {
      storage.setItem(name, data);
      return true;
    } catch (e) {
      _canUseSessionStorage = false;
      _throwInternal(logger, 2, 4, "Browser failed write to session storage. " + getExceptionName(e), { exception: dumpObj(e) });
    }
  }
  return false;
}
function utlRemoveSessionStorage(logger, name) {
  var storage = _getSessionStorageObject();
  if (storage !== null) {
    try {
      storage[
        _DYN_REMOVE_ITEM
        /* @min:%2eremoveItem */
      ](name);
      return true;
    } catch (e) {
      _canUseSessionStorage = false;
      _throwInternal(logger, 2, 6, "Browser failed removal of session storage item. " + getExceptionName(e), { exception: dumpObj(e) });
    }
  }
  return false;
}

// node_modules/@microsoft/applicationinsights-common/dist-es5/ThrottleMgr.js
var THROTTLE_STORAGE_PREFIX = "appInsightsThrottle";
var ThrottleMgr = (
  /** @class */
  /* @__PURE__ */ function() {
    function ThrottleMgr2(core, namePrefix) {
      var _self = this;
      var _canUseLocalStorage2;
      var _logger;
      var _config;
      var _localStorageObj;
      var _isTriggered;
      var _namePrefix;
      var _queue;
      var _isReady = false;
      var _isSpecificDaysGiven = false;
      _initConfig();
      _self["_getDbgPlgTargets"] = function() {
        return [_queue];
      };
      _self.getConfig = function() {
        return _config;
      };
      _self.canThrottle = function(msgId) {
        var localObj = _getLocalStorageObjByKey(msgId);
        var cfg = _getCfgByKey(msgId);
        return _canThrottle(cfg, _canUseLocalStorage2, localObj);
      };
      _self.isTriggered = function(msgId) {
        return _isTrigger(msgId);
      };
      _self.isReady = function() {
        return _isReady;
      };
      _self.flush = function(msgId) {
        try {
          var queue = _getQueueByKey(msgId);
          if (queue && queue[
            _DYN_LENGTH2
            /* @min:%2elength */
          ] > 0) {
            var items = queue.slice(0);
            _queue[msgId] = [];
            arrForEach(items, function(item) {
              _flushMessage(item.msgID, item[
                _DYN_MESSAGE2
                /* @min:%2emessage */
              ], item.severity, false);
            });
            return true;
          }
        } catch (err) {
        }
        return false;
      };
      _self.flushAll = function() {
        try {
          if (_queue) {
            var result_1 = true;
            objForEachKey(_queue, function(key) {
              var isFlushed = _self.flush(parseInt(key));
              result_1 = result_1 && isFlushed;
            });
            return result_1;
          }
        } catch (err) {
        }
        return false;
      };
      _self.onReadyState = function(isReady, flushAll) {
        if (flushAll === void 0) {
          flushAll = true;
        }
        _isReady = isNullOrUndefined(isReady) ? true : isReady;
        if (_isReady && flushAll) {
          return _self.flushAll();
        }
        return null;
      };
      _self.sendMessage = function(msgID, message, severity) {
        return _flushMessage(msgID, message, severity, true);
      };
      function _flushMessage(msgID, message, severity, saveUnsentMsg) {
        if (_isReady) {
          var isSampledIn = _canSampledIn(msgID);
          if (!isSampledIn) {
            return;
          }
          var cfg = _getCfgByKey(msgID);
          var localStorageObj = _getLocalStorageObjByKey(msgID);
          var canThrottle = _canThrottle(cfg, _canUseLocalStorage2, localStorageObj);
          var throttled = false;
          var number = 0;
          var isTriggered = _isTrigger(msgID);
          try {
            if (canThrottle && !isTriggered) {
              number = Math.min(cfg.limit.maxSendNumber, localStorageObj[
                _DYN_COUNT
                /* @min:%2ecount */
              ] + 1);
              localStorageObj[
                _DYN_COUNT
                /* @min:%2ecount */
              ] = 0;
              throttled = true;
              _isTriggered[msgID] = true;
              localStorageObj[
                _DYN_PRE_TRIGGER_DATE
                /* @min:%2epreTriggerDate */
              ] = /* @__PURE__ */ new Date();
            } else {
              _isTriggered[msgID] = canThrottle;
              localStorageObj[
                _DYN_COUNT
                /* @min:%2ecount */
              ] += 1;
            }
            var localStorageName = _getLocalStorageName(msgID);
            _resetLocalStorage(_logger, localStorageName, localStorageObj);
            for (var i = 0; i < number; i++) {
              _sendMessage(msgID, _logger, message, severity);
            }
          } catch (e) {
          }
          return {
            isThrottled: throttled,
            throttleNum: number
          };
        } else {
          if (!!saveUnsentMsg) {
            var queue = _getQueueByKey(msgID);
            queue[
              _DYN_PUSH2
              /* @min:%2epush */
            ]({
              msgID,
              message,
              severity
            });
          }
        }
        return null;
      }
      function _initConfig() {
        _logger = safeGetLogger(core);
        _isTriggered = {};
        _localStorageObj = {};
        _queue = {};
        _config = {};
        _setCfgByKey(
          109
          /* _eInternalMessageId.DefaultThrottleMsgKey */
        );
        _namePrefix = isNotNullOrUndefined(namePrefix) ? namePrefix : "";
        core.addUnloadHook(onConfigChange(core.config, function(details) {
          var coreConfig = details.cfg;
          _canUseLocalStorage2 = utlCanUseLocalStorage();
          var configMgr = coreConfig.throttleMgrCfg || {};
          objForEachKey(configMgr, function(key, cfg) {
            _setCfgByKey(parseInt(key), cfg);
          });
        }));
      }
      function _getCfgByKey(msgID) {
        return _config[msgID] || _config[
          109
          /* _eInternalMessageId.DefaultThrottleMsgKey */
        ];
      }
      function _setCfgByKey(msgID, config) {
        var _a12, _b4;
        try {
          var cfg = config || {};
          var curCfg = {};
          curCfg[
            _DYN_DISABLED
            /* @min:%2edisabled */
          ] = !!cfg[
            _DYN_DISABLED
            /* @min:%2edisabled */
          ];
          var configInterval = cfg[
            _DYN_INTERVAL
            /* @min:%2einterval */
          ] || {};
          _isSpecificDaysGiven = (configInterval === null || configInterval === void 0 ? void 0 : configInterval.daysOfMonth) && (configInterval === null || configInterval === void 0 ? void 0 : configInterval.daysOfMonth[
            _DYN_LENGTH2
            /* @min:%2elength */
          ]) > 0;
          curCfg[
            _DYN_INTERVAL
            /* @min:%2einterval */
          ] = _getIntervalConfig(configInterval);
          var limit = {
            samplingRate: ((_a12 = cfg.limit) === null || _a12 === void 0 ? void 0 : _a12.samplingRate) || 100,
            // dafault: every time sent only 1 event
            maxSendNumber: ((_b4 = cfg.limit) === null || _b4 === void 0 ? void 0 : _b4.maxSendNumber) || 1
          };
          curCfg.limit = limit;
          _config[msgID] = curCfg;
        } catch (e) {
        }
      }
      function _getIntervalConfig(interval) {
        interval = interval || {};
        var monthInterval = interval === null || interval === void 0 ? void 0 : interval.monthInterval;
        var dayInterval = interval === null || interval === void 0 ? void 0 : interval.dayInterval;
        if (isNullOrUndefined(monthInterval) && isNullOrUndefined(dayInterval)) {
          interval.monthInterval = 3;
          if (!_isSpecificDaysGiven) {
            interval[
              _DYN_DAYS_OF_MONTH
              /* @min:%2edaysOfMonth */
            ] = [28];
            _isSpecificDaysGiven = true;
          }
        }
        interval = {
          // dafault: sent every three months
          monthInterval: interval === null || interval === void 0 ? void 0 : interval.monthInterval,
          dayInterval: interval === null || interval === void 0 ? void 0 : interval.dayInterval,
          daysOfMonth: interval === null || interval === void 0 ? void 0 : interval.daysOfMonth
        };
        return interval;
      }
      function _canThrottle(config, canUseLocalStorage, localStorageObj) {
        if (config && !config[
          _DYN_DISABLED
          /* @min:%2edisabled */
        ] && canUseLocalStorage && isNotNullOrUndefined(localStorageObj)) {
          var curDate = _getThrottleDate();
          var date = localStorageObj[
            _DYN_DATE
            /* @min:%2edate */
          ];
          var interval = config[
            _DYN_INTERVAL
            /* @min:%2einterval */
          ];
          var monthCheck = 1;
          if (interval === null || interval === void 0 ? void 0 : interval.monthInterval) {
            var monthExpand = (curDate.getUTCFullYear() - date.getUTCFullYear()) * 12 + curDate.getUTCMonth() - date.getUTCMonth();
            monthCheck = _checkInterval(interval.monthInterval, 0, monthExpand);
          }
          var dayCheck = 1;
          if (_isSpecificDaysGiven) {
            dayCheck = arrIndexOf(interval[
              _DYN_DAYS_OF_MONTH
              /* @min:%2edaysOfMonth */
            ], curDate[
              _DYN_GET_UTCDATE
              /* @min:%2egetUTCDate */
            ]());
          } else if (interval === null || interval === void 0 ? void 0 : interval.dayInterval) {
            var daySpan = Math.floor((curDate.getTime() - date.getTime()) / 864e5);
            dayCheck = _checkInterval(interval.dayInterval, 0, daySpan);
          }
          return monthCheck >= 0 && dayCheck >= 0;
        }
        return false;
      }
      function _getLocalStorageName(msgKey, prefix) {
        var fix = isNotNullOrUndefined(prefix) ? prefix : "";
        if (msgKey) {
          return THROTTLE_STORAGE_PREFIX + fix + "-" + msgKey;
        }
        return null;
      }
      function _isTriggeredOnCurDate(preTriggerDate) {
        try {
          if (preTriggerDate) {
            var curDate = /* @__PURE__ */ new Date();
            return preTriggerDate.getUTCFullYear() === curDate.getUTCFullYear() && preTriggerDate.getUTCMonth() === curDate.getUTCMonth() && preTriggerDate[
              _DYN_GET_UTCDATE
              /* @min:%2egetUTCDate */
            ]() === curDate[
              _DYN_GET_UTCDATE
              /* @min:%2egetUTCDate */
            ]();
          }
        } catch (e) {
        }
        return false;
      }
      function _getLocalStorageObj(value, logger, storageName) {
        try {
          var storageObj = {
            date: _getThrottleDate(),
            count: 0
          };
          if (value) {
            var obj = JSON.parse(value);
            var curObj = {
              date: _getThrottleDate(obj[
                _DYN_DATE
                /* @min:%2edate */
              ]) || storageObj[
                _DYN_DATE
                /* @min:%2edate */
              ],
              count: obj[
                _DYN_COUNT
                /* @min:%2ecount */
              ] || storageObj[
                _DYN_COUNT
                /* @min:%2ecount */
              ],
              preTriggerDate: obj.preTriggerDate ? _getThrottleDate(obj[
                _DYN_PRE_TRIGGER_DATE
                /* @min:%2epreTriggerDate */
              ]) : void 0
            };
            return curObj;
          } else {
            _resetLocalStorage(logger, storageName, storageObj);
            return storageObj;
          }
        } catch (e) {
        }
        return null;
      }
      function _getThrottleDate(dateStr) {
        try {
          if (dateStr) {
            var date = new Date(dateStr);
            if (!isNaN(date.getDate())) {
              return date;
            }
          } else {
            return /* @__PURE__ */ new Date();
          }
        } catch (e) {
        }
        return null;
      }
      function _resetLocalStorage(logger, storageName, obj) {
        try {
          return utlSetLocalStorage(logger, storageName, strTrim(JSON[
            _DYN_STRINGIFY
            /* @min:%2estringify */
          ](obj)));
        } catch (e) {
        }
        return false;
      }
      function _checkInterval(interval, start, current) {
        if (interval <= 0) {
          return 1;
        }
        return current >= start && (current - start) % interval == 0 ? Math.floor((current - start) / interval) + 1 : -1;
      }
      function _sendMessage(msgID, logger, message, severity) {
        _throwInternal(logger, severity || 1, msgID, message);
      }
      function _canSampledIn(msgID) {
        try {
          var cfg = _getCfgByKey(msgID);
          return randomValue(1e6) <= cfg.limit.samplingRate;
        } catch (e) {
        }
        return false;
      }
      function _getLocalStorageObjByKey(key) {
        try {
          var curObj = _localStorageObj[key];
          if (!curObj) {
            var localStorageName = _getLocalStorageName(key, _namePrefix);
            curObj = _getLocalStorageObj(utlGetLocalStorage(_logger, localStorageName), _logger, localStorageName);
            _localStorageObj[key] = curObj;
          }
          return _localStorageObj[key];
        } catch (e) {
        }
        return null;
      }
      function _isTrigger(key) {
        var isTrigger = _isTriggered[key];
        if (isNullOrUndefined(isTrigger)) {
          isTrigger = false;
          var localStorageObj = _getLocalStorageObjByKey(key);
          if (localStorageObj) {
            isTrigger = _isTriggeredOnCurDate(localStorageObj[
              _DYN_PRE_TRIGGER_DATE
              /* @min:%2epreTriggerDate */
            ]);
          }
          _isTriggered[key] = isTrigger;
        }
        return _isTriggered[key];
      }
      function _getQueueByKey(key) {
        _queue = _queue || {};
        if (isNullOrUndefined(_queue[key])) {
          _queue[key] = [];
        }
        return _queue[key];
      }
    }
    return ThrottleMgr2;
  }()
);

// node_modules/@microsoft/applicationinsights-common/dist-es5/ConnectionStringParser.js
var _FIELDS_SEPARATOR = ";";
var _FIELD_KEY_VALUE_SEPARATOR = "=";
function parseConnectionString(connectionString) {
  if (!connectionString) {
    return {};
  }
  var kvPairs = connectionString[
    _DYN_SPLIT2
    /* @min:%2esplit */
  ](_FIELDS_SEPARATOR);
  var result = arrReduce(kvPairs, function(fields, kv) {
    var kvParts = kv[
      _DYN_SPLIT2
      /* @min:%2esplit */
    ](_FIELD_KEY_VALUE_SEPARATOR);
    if (kvParts[
      _DYN_LENGTH2
      /* @min:%2elength */
    ] === 2) {
      var key = kvParts[0][
        _DYN_TO_LOWER_CASE2
        /* @min:%2etoLowerCase */
      ]();
      var value = kvParts[1];
      fields[key] = value;
    }
    return fields;
  }, {});
  if (objKeys(result)[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] > 0) {
    if (result.endpointsuffix) {
      var locationPrefix = result.location ? result.location + "." : "";
      result[
        _DYN_INGESTIONENDPOINT
        /* @min:%2eingestionendpoint */
      ] = result[
        _DYN_INGESTIONENDPOINT
        /* @min:%2eingestionendpoint */
      ] || "https://" + locationPrefix + "dc." + result.endpointsuffix;
    }
    result[
      _DYN_INGESTIONENDPOINT
      /* @min:%2eingestionendpoint */
    ] = result[
      _DYN_INGESTIONENDPOINT
      /* @min:%2eingestionendpoint */
    ] || DEFAULT_BREEZE_ENDPOINT;
    if (strEndsWith(result[
      _DYN_INGESTIONENDPOINT
      /* @min:%2eingestionendpoint */
    ], "/")) {
      result[
        _DYN_INGESTIONENDPOINT
        /* @min:%2eingestionendpoint */
      ] = result[
        _DYN_INGESTIONENDPOINT
        /* @min:%2eingestionendpoint */
      ].slice(0, -1);
    }
  }
  return result;
}

// node_modules/@microsoft/applicationinsights-common/dist-es5/Telemetry/Common/Envelope.js
var Envelope = (
  /** @class */
  /* @__PURE__ */ function() {
    function Envelope2(logger, data, name) {
      var _this = this;
      var _self = this;
      _self.ver = 1;
      _self.sampleRate = 100;
      _self.tags = {};
      _self[
        _DYN_NAME2
        /* @min:%2ename */
      ] = dataSanitizeString(logger, name) || strNotSpecified;
      _self.data = data;
      _self.time = toISOString(/* @__PURE__ */ new Date());
      _self.aiDataContract = {
        time: 1,
        iKey: 1,
        name: 1,
        sampleRate: function() {
          return _this.sampleRate === 100 ? 4 : 1;
        },
        tags: 1,
        data: 1
        /* FieldType.Required */
      };
    }
    return Envelope2;
  }()
);

// node_modules/@microsoft/applicationinsights-common/dist-es5/Telemetry/Event.js
var Event2 = (
  /** @class */
  function() {
    function Event3(logger, name, properties, measurements) {
      this.aiDataContract = {
        ver: 1,
        name: 1,
        properties: 0,
        measurements: 0
        /* FieldType.Default */
      };
      var _self = this;
      _self.ver = 2;
      _self[
        _DYN_NAME2
        /* @min:%2ename */
      ] = dataSanitizeString(logger, name) || strNotSpecified;
      _self[
        _DYN_PROPERTIES
        /* @min:%2eproperties */
      ] = dataSanitizeProperties(logger, properties);
      _self[
        _DYN_MEASUREMENTS
        /* @min:%2emeasurements */
      ] = dataSanitizeMeasurements(logger, measurements);
    }
    Event3.envelopeType = "Microsoft.ApplicationInsights.{0}.Event";
    Event3.dataType = "EventData";
    return Event3;
  }()
);

// node_modules/@microsoft/applicationinsights-common/dist-es5/Telemetry/Exception.js
var NoMethod = "<no_method>";
var strError = "error";
var strStack = "stack";
var strStackDetails = "stackDetails";
var strErrorSrc = "errorSrc";
var strMessage = "message";
var strDescription = "description";
function _stringify(value, convertToString) {
  var result = value;
  if (result && !isString(result)) {
    if (JSON && JSON[
      _DYN_STRINGIFY
      /* @min:%2estringify */
    ]) {
      result = JSON[
        _DYN_STRINGIFY
        /* @min:%2estringify */
      ](value);
      if (convertToString && (!result || result === "{}")) {
        if (isFunction(value[
          _DYN_TO_STRING
          /* @min:%2etoString */
        ])) {
          result = value[
            _DYN_TO_STRING
            /* @min:%2etoString */
          ]();
        } else {
          result = "" + value;
        }
      }
    } else {
      result = "" + value + " - (Missing JSON.stringify)";
    }
  }
  return result || "";
}
function _formatMessage(theEvent, errorType) {
  var evtMessage = theEvent;
  if (theEvent) {
    if (evtMessage && !isString(evtMessage)) {
      evtMessage = theEvent[strMessage] || theEvent[strDescription] || evtMessage;
    }
    if (evtMessage && !isString(evtMessage)) {
      evtMessage = _stringify(evtMessage, true);
    }
    if (theEvent["filename"]) {
      evtMessage = evtMessage + " @" + (theEvent["filename"] || "") + ":" + (theEvent["lineno"] || "?") + ":" + (theEvent["colno"] || "?");
    }
  }
  if (errorType && errorType !== "String" && errorType !== "Object" && errorType !== "Error" && strIndexOf(evtMessage || "", errorType) === -1) {
    evtMessage = errorType + ": " + evtMessage;
  }
  return evtMessage || "";
}
function _isExceptionDetailsInternal(value) {
  try {
    if (isObject(value)) {
      return "hasFullStack" in value && "typeName" in value;
    }
  } catch (e) {
  }
  return false;
}
function _isExceptionInternal(value) {
  try {
    if (isObject(value)) {
      return "ver" in value && "exceptions" in value && "properties" in value;
    }
  } catch (e) {
  }
  return false;
}
function _isStackDetails(details) {
  return details && details.src && isString(details.src) && details.obj && isArray(details.obj);
}
function _convertStackObj(errorStack) {
  var src = errorStack || "";
  if (!isString(src)) {
    if (isString(src[strStack])) {
      src = src[strStack];
    } else {
      src = "" + src;
    }
  }
  var items = src[
    _DYN_SPLIT2
    /* @min:%2esplit */
  ]("\n");
  return {
    src,
    obj: items
  };
}
function _getOperaStack(errorMessage) {
  var stack = [];
  var lines = errorMessage[
    _DYN_SPLIT2
    /* @min:%2esplit */
  ]("\n");
  for (var lp = 0; lp < lines[
    _DYN_LENGTH2
    /* @min:%2elength */
  ]; lp++) {
    var entry = lines[lp];
    if (lines[lp + 1]) {
      entry += "@" + lines[lp + 1];
      lp++;
    }
    stack[
      _DYN_PUSH2
      /* @min:%2epush */
    ](entry);
  }
  return {
    src: errorMessage,
    obj: stack
  };
}
function _getStackFromErrorObj(errorObj) {
  var details = null;
  if (errorObj) {
    try {
      if (errorObj[strStack]) {
        details = _convertStackObj(errorObj[strStack]);
      } else if (errorObj[strError] && errorObj[strError][strStack]) {
        details = _convertStackObj(errorObj[strError][strStack]);
      } else if (errorObj["exception"] && errorObj.exception[strStack]) {
        details = _convertStackObj(errorObj.exception[strStack]);
      } else if (_isStackDetails(errorObj)) {
        details = errorObj;
      } else if (_isStackDetails(errorObj[strStackDetails])) {
        details = errorObj[strStackDetails];
      } else if (getWindow() && getWindow()["opera"] && errorObj[strMessage]) {
        details = _getOperaStack(errorObj[
          _DYN_MESSAGE2
          /* @min:%2emessage */
        ]);
      } else if (errorObj["reason"] && errorObj.reason[strStack]) {
        details = _convertStackObj(errorObj.reason[strStack]);
      } else if (isString(errorObj)) {
        details = _convertStackObj(errorObj);
      } else {
        var evtMessage = errorObj[strMessage] || errorObj[strDescription] || "";
        if (isString(errorObj[strErrorSrc])) {
          if (evtMessage) {
            evtMessage += "\n";
          }
          evtMessage += " from " + errorObj[strErrorSrc];
        }
        if (evtMessage) {
          details = _convertStackObj(evtMessage);
        }
      }
    } catch (e) {
      details = _convertStackObj(e);
    }
  }
  return details || {
    src: "",
    obj: null
  };
}
function _formatStackTrace(stackDetails) {
  var stack = "";
  if (stackDetails) {
    if (stackDetails.obj) {
      arrForEach(stackDetails.obj, function(entry) {
        stack += entry + "\n";
      });
    } else {
      stack = stackDetails.src || "";
    }
  }
  return stack;
}
function _parseStack(stack) {
  var parsedStack;
  var frames = stack.obj;
  if (frames && frames[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] > 0) {
    parsedStack = [];
    var level_1 = 0;
    var totalSizeInBytes_1 = 0;
    arrForEach(frames, function(frame) {
      var theFrame = frame[
        _DYN_TO_STRING
        /* @min:%2etoString */
      ]();
      if (_StackFrame.regex.test(theFrame)) {
        var parsedFrame = new _StackFrame(theFrame, level_1++);
        totalSizeInBytes_1 += parsedFrame[
          _DYN_SIZE_IN_BYTES
          /* @min:%2esizeInBytes */
        ];
        parsedStack[
          _DYN_PUSH2
          /* @min:%2epush */
        ](parsedFrame);
      }
    });
    var exceptionParsedStackThreshold = 32 * 1024;
    if (totalSizeInBytes_1 > exceptionParsedStackThreshold) {
      var left = 0;
      var right = parsedStack[
        _DYN_LENGTH2
        /* @min:%2elength */
      ] - 1;
      var size = 0;
      var acceptedLeft = left;
      var acceptedRight = right;
      while (left < right) {
        var lSize = parsedStack[left][
          _DYN_SIZE_IN_BYTES
          /* @min:%2esizeInBytes */
        ];
        var rSize = parsedStack[right][
          _DYN_SIZE_IN_BYTES
          /* @min:%2esizeInBytes */
        ];
        size += lSize + rSize;
        if (size > exceptionParsedStackThreshold) {
          var howMany = acceptedRight - acceptedLeft + 1;
          parsedStack.splice(acceptedLeft, howMany);
          break;
        }
        acceptedLeft = left;
        acceptedRight = right;
        left++;
        right--;
      }
    }
  }
  return parsedStack;
}
function _getErrorType(errorType) {
  var typeName = "";
  if (errorType) {
    typeName = errorType.typeName || errorType[
      _DYN_NAME2
      /* @min:%2ename */
    ] || "";
    if (!typeName) {
      try {
        var funcNameRegex = /function (.{1,200})\(/;
        var results = funcNameRegex.exec(errorType.constructor[
          _DYN_TO_STRING
          /* @min:%2etoString */
        ]());
        typeName = results && results[
          _DYN_LENGTH2
          /* @min:%2elength */
        ] > 1 ? results[1] : "";
      } catch (e) {
      }
    }
  }
  return typeName;
}
function _formatErrorCode(errorObj) {
  if (errorObj) {
    try {
      if (!isString(errorObj)) {
        var errorType = _getErrorType(errorObj);
        var result = _stringify(errorObj, false);
        if (!result || result === "{}") {
          if (errorObj[strError]) {
            errorObj = errorObj[strError];
            errorType = _getErrorType(errorObj);
          }
          result = _stringify(errorObj, true);
        }
        if (strIndexOf(result, errorType) !== 0 && errorType !== "String") {
          return errorType + ":" + result;
        }
        return result;
      }
    } catch (e) {
    }
  }
  return "" + (errorObj || "");
}
var Exception = (
  /** @class */
  function() {
    function Exception2(logger, exception, properties, measurements, severityLevel, id) {
      this.aiDataContract = {
        ver: 1,
        exceptions: 1,
        severityLevel: 0,
        properties: 0,
        measurements: 0
        /* FieldType.Default */
      };
      var _self = this;
      _self.ver = 2;
      if (!_isExceptionInternal(exception)) {
        if (!properties) {
          properties = {};
        }
        if (id) {
          properties.id = id;
        }
        _self[
          _DYN_EXCEPTIONS
          /* @min:%2eexceptions */
        ] = [new _ExceptionDetails(logger, exception, properties)];
        _self[
          _DYN_PROPERTIES
          /* @min:%2eproperties */
        ] = dataSanitizeProperties(logger, properties);
        _self[
          _DYN_MEASUREMENTS
          /* @min:%2emeasurements */
        ] = dataSanitizeMeasurements(logger, measurements);
        if (severityLevel) {
          _self[
            _DYN_SEVERITY_LEVEL
            /* @min:%2eseverityLevel */
          ] = severityLevel;
        }
        if (id) {
          _self.id = id;
        }
      } else {
        _self[
          _DYN_EXCEPTIONS
          /* @min:%2eexceptions */
        ] = exception[
          _DYN_EXCEPTIONS
          /* @min:%2eexceptions */
        ] || [];
        _self[
          _DYN_PROPERTIES
          /* @min:%2eproperties */
        ] = exception[
          _DYN_PROPERTIES
          /* @min:%2eproperties */
        ];
        _self[
          _DYN_MEASUREMENTS
          /* @min:%2emeasurements */
        ] = exception[
          _DYN_MEASUREMENTS
          /* @min:%2emeasurements */
        ];
        if (exception[
          _DYN_SEVERITY_LEVEL
          /* @min:%2eseverityLevel */
        ]) {
          _self[
            _DYN_SEVERITY_LEVEL
            /* @min:%2eseverityLevel */
          ] = exception[
            _DYN_SEVERITY_LEVEL
            /* @min:%2eseverityLevel */
          ];
        }
        if (exception.id) {
          _self.id = exception.id;
          exception[
            _DYN_PROPERTIES
            /* @min:%2eproperties */
          ].id = exception.id;
        }
        if (exception[
          _DYN_PROBLEM_GROUP
          /* @min:%2eproblemGroup */
        ]) {
          _self[
            _DYN_PROBLEM_GROUP
            /* @min:%2eproblemGroup */
          ] = exception[
            _DYN_PROBLEM_GROUP
            /* @min:%2eproblemGroup */
          ];
        }
        if (!isNullOrUndefined(exception[
          _DYN_IS_MANUAL
          /* @min:%2eisManual */
        ])) {
          _self[
            _DYN_IS_MANUAL
            /* @min:%2eisManual */
          ] = exception[
            _DYN_IS_MANUAL
            /* @min:%2eisManual */
          ];
        }
      }
    }
    Exception2.CreateAutoException = function(message, url, lineNumber, columnNumber, error, evt, stack, errorSrc) {
      var _a12;
      var errorType = _getErrorType(error || evt || message);
      return _a12 = {}, _a12[
        _DYN_MESSAGE2
        /* @min:message */
      ] = _formatMessage(message, errorType), _a12.url = url, _a12.lineNumber = lineNumber, _a12.columnNumber = columnNumber, _a12.error = _formatErrorCode(error || evt || message), _a12.evt = _formatErrorCode(evt || message), _a12[
        _DYN_TYPE_NAME
        /* @min:typeName */
      ] = errorType, _a12.stackDetails = _getStackFromErrorObj(stack || error || evt), _a12.errorSrc = errorSrc, _a12;
    };
    Exception2.CreateFromInterface = function(logger, exception, properties, measurements) {
      var exceptions = exception[
        _DYN_EXCEPTIONS
        /* @min:%2eexceptions */
      ] && arrMap(exception[
        _DYN_EXCEPTIONS
        /* @min:%2eexceptions */
      ], function(ex) {
        return _ExceptionDetails[
          _DYN__CREATE_FROM_INTERFA1
          /* @min:%2eCreateFromInterface */
        ](logger, ex);
      });
      var exceptionData = new Exception2(logger, __assignFn(__assignFn({}, exception), { exceptions }), properties, measurements);
      return exceptionData;
    };
    Exception2.prototype.toInterface = function() {
      var _a12;
      var _b4 = this, exceptions = _b4.exceptions, properties = _b4.properties, measurements = _b4.measurements, severityLevel = _b4.severityLevel, problemGroup = _b4.problemGroup, id = _b4.id, isManual = _b4.isManual;
      var exceptionDetailsInterface = exceptions instanceof Array && arrMap(exceptions, function(exception) {
        return exception.toInterface();
      }) || void 0;
      return _a12 = {
        ver: "4.0"
      }, _a12[
        _DYN_EXCEPTIONS
        /* @min:exceptions */
      ] = exceptionDetailsInterface, _a12.severityLevel = severityLevel, _a12.properties = properties, _a12.measurements = measurements, _a12.problemGroup = problemGroup, _a12.id = id, _a12.isManual = isManual, _a12;
    };
    Exception2.CreateSimpleException = function(message, typeName, assembly, fileName, details, line) {
      var _a12;
      return {
        exceptions: [
          (_a12 = {}, _a12[
            _DYN_HAS_FULL_STACK
            /* @min:hasFullStack */
          ] = true, _a12.message = message, _a12.stack = details, _a12.typeName = typeName, _a12)
        ]
      };
    };
    Exception2.envelopeType = "Microsoft.ApplicationInsights.{0}.Exception";
    Exception2.dataType = "ExceptionData";
    Exception2.formatError = _formatErrorCode;
    return Exception2;
  }()
);
var _ExceptionDetails = (
  /** @class */
  function() {
    function _ExceptionDetails2(logger, exception, properties) {
      this.aiDataContract = {
        id: 0,
        outerId: 0,
        typeName: 1,
        message: 1,
        hasFullStack: 0,
        stack: 0,
        parsedStack: 2
        /* FieldType.Array */
      };
      var _self = this;
      if (!_isExceptionDetailsInternal(exception)) {
        var error = exception;
        var evt = error && error.evt;
        if (!isError(error)) {
          error = error[strError] || evt || error;
        }
        _self[
          _DYN_TYPE_NAME
          /* @min:%2etypeName */
        ] = dataSanitizeString(logger, _getErrorType(error)) || strNotSpecified;
        _self[
          _DYN_MESSAGE2
          /* @min:%2emessage */
        ] = dataSanitizeMessage(logger, _formatMessage(exception || error, _self[
          _DYN_TYPE_NAME
          /* @min:%2etypeName */
        ])) || strNotSpecified;
        var stack = exception[strStackDetails] || _getStackFromErrorObj(exception);
        _self[
          _DYN_PARSED_STACK
          /* @min:%2eparsedStack */
        ] = _parseStack(stack);
        if (isArray(_self[
          _DYN_PARSED_STACK
          /* @min:%2eparsedStack */
        ])) {
          arrMap(_self[
            _DYN_PARSED_STACK
            /* @min:%2eparsedStack */
          ], function(frame) {
            frame[
              _DYN_ASSEMBLY
              /* @min:%2eassembly */
            ] = dataSanitizeString(logger, frame[
              _DYN_ASSEMBLY
              /* @min:%2eassembly */
            ]);
            frame[
              _DYN_FILE_NAME
              /* @min:%2efileName */
            ] = dataSanitizeString(logger, frame[
              _DYN_FILE_NAME
              /* @min:%2efileName */
            ]);
          });
        }
        _self[strStack] = dataSanitizeException(logger, _formatStackTrace(stack));
        _self.hasFullStack = isArray(_self.parsedStack) && _self.parsedStack[
          _DYN_LENGTH2
          /* @min:%2elength */
        ] > 0;
        if (properties) {
          properties[
            _DYN_TYPE_NAME
            /* @min:%2etypeName */
          ] = properties[
            _DYN_TYPE_NAME
            /* @min:%2etypeName */
          ] || _self[
            _DYN_TYPE_NAME
            /* @min:%2etypeName */
          ];
        }
      } else {
        _self[
          _DYN_TYPE_NAME
          /* @min:%2etypeName */
        ] = exception[
          _DYN_TYPE_NAME
          /* @min:%2etypeName */
        ];
        _self[
          _DYN_MESSAGE2
          /* @min:%2emessage */
        ] = exception[
          _DYN_MESSAGE2
          /* @min:%2emessage */
        ];
        _self[strStack] = exception[strStack];
        _self[
          _DYN_PARSED_STACK
          /* @min:%2eparsedStack */
        ] = exception[
          _DYN_PARSED_STACK
          /* @min:%2eparsedStack */
        ] || [];
        _self[
          _DYN_HAS_FULL_STACK
          /* @min:%2ehasFullStack */
        ] = exception[
          _DYN_HAS_FULL_STACK
          /* @min:%2ehasFullStack */
        ];
      }
    }
    _ExceptionDetails2.prototype.toInterface = function() {
      var _a12;
      var _self = this;
      var parsedStack = _self[
        _DYN_PARSED_STACK
        /* @min:%2eparsedStack */
      ] instanceof Array && arrMap(_self[
        _DYN_PARSED_STACK
        /* @min:%2eparsedStack */
      ], function(frame) {
        return frame.toInterface();
      });
      var exceptionDetailsInterface = (_a12 = {
        id: _self.id,
        outerId: _self.outerId,
        typeName: _self[
          _DYN_TYPE_NAME
          /* @min:%2etypeName */
        ],
        message: _self[
          _DYN_MESSAGE2
          /* @min:%2emessage */
        ],
        hasFullStack: _self[
          _DYN_HAS_FULL_STACK
          /* @min:%2ehasFullStack */
        ],
        stack: _self[strStack]
      }, _a12[
        _DYN_PARSED_STACK
        /* @min:parsedStack */
      ] = parsedStack || void 0, _a12);
      return exceptionDetailsInterface;
    };
    _ExceptionDetails2.CreateFromInterface = function(logger, exception) {
      var parsedStack = exception[
        _DYN_PARSED_STACK
        /* @min:%2eparsedStack */
      ] instanceof Array && arrMap(exception[
        _DYN_PARSED_STACK
        /* @min:%2eparsedStack */
      ], function(frame) {
        return _StackFrame[
          _DYN__CREATE_FROM_INTERFA1
          /* @min:%2eCreateFromInterface */
        ](frame);
      }) || exception[
        _DYN_PARSED_STACK
        /* @min:%2eparsedStack */
      ];
      var exceptionDetails = new _ExceptionDetails2(logger, __assignFn(__assignFn({}, exception), { parsedStack }));
      return exceptionDetails;
    };
    return _ExceptionDetails2;
  }()
);
var _StackFrame = (
  /** @class */
  function() {
    function _StackFrame2(sourceFrame, level) {
      this.aiDataContract = {
        level: 1,
        method: 1,
        assembly: 0,
        fileName: 0,
        line: 0
        /* FieldType.Default */
      };
      var _self = this;
      _self[
        _DYN_SIZE_IN_BYTES
        /* @min:%2esizeInBytes */
      ] = 0;
      if (typeof sourceFrame === "string") {
        var frame = sourceFrame;
        _self[
          _DYN_LEVEL
          /* @min:%2elevel */
        ] = level;
        _self[
          _DYN_METHOD
          /* @min:%2emethod */
        ] = NoMethod;
        _self[
          _DYN_ASSEMBLY
          /* @min:%2eassembly */
        ] = strTrim(frame);
        _self[
          _DYN_FILE_NAME
          /* @min:%2efileName */
        ] = "";
        _self[
          _DYN_LINE
          /* @min:%2eline */
        ] = 0;
        var matches = frame.match(_StackFrame2.regex);
        if (matches && matches[
          _DYN_LENGTH2
          /* @min:%2elength */
        ] >= 5) {
          _self[
            _DYN_METHOD
            /* @min:%2emethod */
          ] = strTrim(matches[2]) || _self[
            _DYN_METHOD
            /* @min:%2emethod */
          ];
          _self[
            _DYN_FILE_NAME
            /* @min:%2efileName */
          ] = strTrim(matches[4]);
          _self[
            _DYN_LINE
            /* @min:%2eline */
          ] = parseInt(matches[5]) || 0;
        }
      } else {
        _self[
          _DYN_LEVEL
          /* @min:%2elevel */
        ] = sourceFrame[
          _DYN_LEVEL
          /* @min:%2elevel */
        ];
        _self[
          _DYN_METHOD
          /* @min:%2emethod */
        ] = sourceFrame[
          _DYN_METHOD
          /* @min:%2emethod */
        ];
        _self[
          _DYN_ASSEMBLY
          /* @min:%2eassembly */
        ] = sourceFrame[
          _DYN_ASSEMBLY
          /* @min:%2eassembly */
        ];
        _self[
          _DYN_FILE_NAME
          /* @min:%2efileName */
        ] = sourceFrame[
          _DYN_FILE_NAME
          /* @min:%2efileName */
        ];
        _self[
          _DYN_LINE
          /* @min:%2eline */
        ] = sourceFrame[
          _DYN_LINE
          /* @min:%2eline */
        ];
        _self[
          _DYN_SIZE_IN_BYTES
          /* @min:%2esizeInBytes */
        ] = 0;
      }
      _self.sizeInBytes += _self.method[
        _DYN_LENGTH2
        /* @min:%2elength */
      ];
      _self.sizeInBytes += _self.fileName[
        _DYN_LENGTH2
        /* @min:%2elength */
      ];
      _self.sizeInBytes += _self.assembly[
        _DYN_LENGTH2
        /* @min:%2elength */
      ];
      _self[
        _DYN_SIZE_IN_BYTES
        /* @min:%2esizeInBytes */
      ] += _StackFrame2.baseSize;
      _self.sizeInBytes += _self.level.toString()[
        _DYN_LENGTH2
        /* @min:%2elength */
      ];
      _self.sizeInBytes += _self.line.toString()[
        _DYN_LENGTH2
        /* @min:%2elength */
      ];
    }
    _StackFrame2.CreateFromInterface = function(frame) {
      return new _StackFrame2(
        frame,
        null
        /* level is available in frame interface */
      );
    };
    _StackFrame2.prototype.toInterface = function() {
      var _self = this;
      return {
        level: _self[
          _DYN_LEVEL
          /* @min:%2elevel */
        ],
        method: _self[
          _DYN_METHOD
          /* @min:%2emethod */
        ],
        assembly: _self[
          _DYN_ASSEMBLY
          /* @min:%2eassembly */
        ],
        fileName: _self[
          _DYN_FILE_NAME
          /* @min:%2efileName */
        ],
        line: _self[
          _DYN_LINE
          /* @min:%2eline */
        ]
      };
    };
    _StackFrame2.regex = /^([\s]+at)?[\s]{0,50}([^\@\()]+?)[\s]{0,50}(\@|\()([^\(\n]+):([0-9]+):([0-9]+)(\)?)$/;
    _StackFrame2.baseSize = 58;
    return _StackFrame2;
  }()
);

// node_modules/@microsoft/applicationinsights-common/dist-es5/Telemetry/Common/DataPoint.js
var DataPoint = (
  /** @class */
  /* @__PURE__ */ function() {
    function DataPoint2() {
      this.aiDataContract = {
        name: 1,
        kind: 0,
        value: 1,
        count: 0,
        min: 0,
        max: 0,
        stdDev: 0
        /* FieldType.Default */
      };
      this.kind = 0;
    }
    return DataPoint2;
  }()
);

// node_modules/@microsoft/applicationinsights-common/dist-es5/Telemetry/Metric.js
var Metric = (
  /** @class */
  function() {
    function Metric2(logger, name, value, count, min, max, stdDev, properties, measurements) {
      this.aiDataContract = {
        ver: 1,
        metrics: 1,
        properties: 0
        /* FieldType.Default */
      };
      var _self = this;
      _self.ver = 2;
      var dataPoint = new DataPoint();
      dataPoint[
        _DYN_COUNT
        /* @min:%2ecount */
      ] = count > 0 ? count : void 0;
      dataPoint.max = isNaN(max) || max === null ? void 0 : max;
      dataPoint.min = isNaN(min) || min === null ? void 0 : min;
      dataPoint[
        _DYN_NAME2
        /* @min:%2ename */
      ] = dataSanitizeString(logger, name) || strNotSpecified;
      dataPoint.value = value;
      dataPoint.stdDev = isNaN(stdDev) || stdDev === null ? void 0 : stdDev;
      _self.metrics = [dataPoint];
      _self[
        _DYN_PROPERTIES
        /* @min:%2eproperties */
      ] = dataSanitizeProperties(logger, properties);
      _self[
        _DYN_MEASUREMENTS
        /* @min:%2emeasurements */
      ] = dataSanitizeMeasurements(logger, measurements);
    }
    Metric2.envelopeType = "Microsoft.ApplicationInsights.{0}.Metric";
    Metric2.dataType = "MetricData";
    return Metric2;
  }()
);

// node_modules/@microsoft/applicationinsights-common/dist-es5/HelperFuncs.js
var strEmpty = "";
function msToTimeSpan(totalms) {
  if (isNaN(totalms) || totalms < 0) {
    totalms = 0;
  }
  totalms = Math.round(totalms);
  var ms = strEmpty + totalms % 1e3;
  var sec = strEmpty + Math.floor(totalms / 1e3) % 60;
  var min = strEmpty + Math.floor(totalms / (1e3 * 60)) % 60;
  var hour = strEmpty + Math.floor(totalms / (1e3 * 60 * 60)) % 24;
  var days = Math.floor(totalms / (1e3 * 60 * 60 * 24));
  ms = ms[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] === 1 ? "00" + ms : ms[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] === 2 ? "0" + ms : ms;
  sec = sec[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] < 2 ? "0" + sec : sec;
  min = min[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] < 2 ? "0" + min : min;
  hour = hour[
    _DYN_LENGTH2
    /* @min:%2elength */
  ] < 2 ? "0" + hour : hour;
  return (days > 0 ? days + "." : strEmpty) + hour + ":" + min + ":" + sec + "." + ms;
}
function isCrossOriginError(message, url, lineNumber, columnNumber, error) {
  return !error && isString(message) && (message === "Script error." || message === "Script error");
}

// node_modules/@microsoft/applicationinsights-common/dist-es5/Telemetry/PageView.js
var PageView = (
  /** @class */
  function() {
    function PageView2(logger, name, url, durationMs, properties, measurements, id) {
      this.aiDataContract = {
        ver: 1,
        name: 0,
        url: 0,
        duration: 0,
        properties: 0,
        measurements: 0,
        id: 0
        /* FieldType.Default */
      };
      var _self = this;
      _self.ver = 2;
      _self.id = dataSanitizeId(logger, id);
      _self.url = dataSanitizeUrl(logger, url);
      _self[
        _DYN_NAME2
        /* @min:%2ename */
      ] = dataSanitizeString(logger, name) || strNotSpecified;
      if (!isNaN(durationMs)) {
        _self[
          _DYN_DURATION
          /* @min:%2eduration */
        ] = msToTimeSpan(durationMs);
      }
      _self[
        _DYN_PROPERTIES
        /* @min:%2eproperties */
      ] = dataSanitizeProperties(logger, properties);
      _self[
        _DYN_MEASUREMENTS
        /* @min:%2emeasurements */
      ] = dataSanitizeMeasurements(logger, measurements);
    }
    PageView2.envelopeType = "Microsoft.ApplicationInsights.{0}.Pageview";
    PageView2.dataType = "PageviewData";
    return PageView2;
  }()
);

// node_modules/@microsoft/applicationinsights-common/dist-es5/Telemetry/RemoteDependencyData.js
var RemoteDependencyData = (
  /** @class */
  function() {
    function RemoteDependencyData2(logger, id, absoluteUrl, commandName, value, success, resultCode, method, requestAPI, correlationContext, properties, measurements) {
      if (requestAPI === void 0) {
        requestAPI = "Ajax";
      }
      this.aiDataContract = {
        id: 1,
        ver: 1,
        name: 0,
        resultCode: 0,
        duration: 0,
        success: 0,
        data: 0,
        target: 0,
        type: 0,
        properties: 0,
        measurements: 0,
        kind: 0,
        value: 0,
        count: 0,
        min: 0,
        max: 0,
        stdDev: 0,
        dependencyKind: 0,
        dependencySource: 0,
        commandName: 0,
        dependencyTypeName: 0
        /* FieldType.Default */
      };
      var _self = this;
      _self.ver = 2;
      _self.id = id;
      _self[
        _DYN_DURATION
        /* @min:%2eduration */
      ] = msToTimeSpan(value);
      _self.success = success;
      _self.resultCode = resultCode + "";
      _self.type = dataSanitizeString(logger, requestAPI);
      var dependencyFields = AjaxHelperParseDependencyPath(logger, absoluteUrl, method, commandName);
      _self.data = dataSanitizeUrl(logger, commandName) || dependencyFields.data;
      _self.target = dataSanitizeString(logger, dependencyFields.target);
      if (correlationContext) {
        _self.target = "".concat(_self.target, " | ").concat(correlationContext);
      }
      _self[
        _DYN_NAME2
        /* @min:%2ename */
      ] = dataSanitizeString(logger, dependencyFields[
        _DYN_NAME2
        /* @min:%2ename */
      ]);
      _self[
        _DYN_PROPERTIES
        /* @min:%2eproperties */
      ] = dataSanitizeProperties(logger, properties);
      _self[
        _DYN_MEASUREMENTS
        /* @min:%2emeasurements */
      ] = dataSanitizeMeasurements(logger, measurements);
    }
    RemoteDependencyData2.envelopeType = "Microsoft.ApplicationInsights.{0}.RemoteDependency";
    RemoteDependencyData2.dataType = "RemoteDependencyData";
    return RemoteDependencyData2;
  }()
);

// node_modules/@microsoft/applicationinsights-common/dist-es5/Telemetry/Trace.js
var Trace = (
  /** @class */
  function() {
    function Trace2(logger, message, severityLevel, properties, measurements) {
      this.aiDataContract = {
        ver: 1,
        message: 1,
        severityLevel: 0,
        properties: 0
        /* FieldType.Default */
      };
      var _self = this;
      _self.ver = 2;
      message = message || strNotSpecified;
      _self[
        _DYN_MESSAGE2
        /* @min:%2emessage */
      ] = dataSanitizeMessage(logger, message);
      _self[
        _DYN_PROPERTIES
        /* @min:%2eproperties */
      ] = dataSanitizeProperties(logger, properties);
      _self[
        _DYN_MEASUREMENTS
        /* @min:%2emeasurements */
      ] = dataSanitizeMeasurements(logger, measurements);
      if (severityLevel) {
        _self[
          _DYN_SEVERITY_LEVEL
          /* @min:%2eseverityLevel */
        ] = severityLevel;
      }
    }
    Trace2.envelopeType = "Microsoft.ApplicationInsights.{0}.Message";
    Trace2.dataType = "MessageData";
    return Trace2;
  }()
);

// node_modules/@microsoft/applicationinsights-common/dist-es5/Telemetry/PageViewPerformance.js
var PageViewPerformance = (
  /** @class */
  function() {
    function PageViewPerformance2(logger, name, url, unused, properties, measurements, cs4BaseData) {
      this.aiDataContract = {
        ver: 1,
        name: 0,
        url: 0,
        duration: 0,
        perfTotal: 0,
        networkConnect: 0,
        sentRequest: 0,
        receivedResponse: 0,
        domProcessing: 0,
        properties: 0,
        measurements: 0
        /* FieldType.Default */
      };
      var _self = this;
      _self.ver = 2;
      _self.url = dataSanitizeUrl(logger, url);
      _self[
        _DYN_NAME2
        /* @min:%2ename */
      ] = dataSanitizeString(logger, name) || strNotSpecified;
      _self[
        _DYN_PROPERTIES
        /* @min:%2eproperties */
      ] = dataSanitizeProperties(logger, properties);
      _self[
        _DYN_MEASUREMENTS
        /* @min:%2emeasurements */
      ] = dataSanitizeMeasurements(logger, measurements);
      if (cs4BaseData) {
        _self.domProcessing = cs4BaseData.domProcessing;
        _self[
          _DYN_DURATION
          /* @min:%2eduration */
        ] = cs4BaseData[
          _DYN_DURATION
          /* @min:%2eduration */
        ];
        _self.networkConnect = cs4BaseData.networkConnect;
        _self.perfTotal = cs4BaseData.perfTotal;
        _self[
          _DYN_RECEIVED_RESPONSE
          /* @min:%2ereceivedResponse */
        ] = cs4BaseData[
          _DYN_RECEIVED_RESPONSE
          /* @min:%2ereceivedResponse */
        ];
        _self.sentRequest = cs4BaseData.sentRequest;
      }
    }
    PageViewPerformance2.envelopeType = "Microsoft.ApplicationInsights.{0}.PageviewPerformance";
    PageViewPerformance2.dataType = "PageviewPerformanceData";
    return PageViewPerformance2;
  }()
);

// node_modules/@microsoft/applicationinsights-common/dist-es5/Telemetry/Common/Data.js
var Data = (
  /** @class */
  /* @__PURE__ */ function() {
    function Data2(baseType, data) {
      this.aiDataContract = {
        baseType: 1,
        baseData: 1
        /* FieldType.Required */
      };
      this.baseType = baseType;
      this.baseData = data;
    }
    return Data2;
  }()
);

// node_modules/@microsoft/applicationinsights-common/dist-es5/Interfaces/Contracts/SeverityLevel.js
var SeverityLevel = createEnumStyle({
  Verbose: 0,
  Information: 1,
  Warning: 2,
  Error: 3,
  Critical: 4
  /* eSeverityLevel.Critical */
});

// node_modules/@microsoft/applicationinsights-common/dist-es5/Interfaces/IConfig.js
var ConfigurationManager = (
  /** @class */
  function() {
    function ConfigurationManager2() {
    }
    ConfigurationManager2.getConfig = function(config, field, identifier, defaultValue) {
      if (defaultValue === void 0) {
        defaultValue = false;
      }
      var configValue;
      if (identifier && config[
        _DYN_EXTENSION_CONFIG
        /* @min:%2eextensionConfig */
      ] && config[
        _DYN_EXTENSION_CONFIG
        /* @min:%2eextensionConfig */
      ][identifier] && !isNullOrUndefined(config[
        _DYN_EXTENSION_CONFIG
        /* @min:%2eextensionConfig */
      ][identifier][field])) {
        configValue = config[
          _DYN_EXTENSION_CONFIG
          /* @min:%2eextensionConfig */
        ][identifier][field];
      } else {
        configValue = config[field];
      }
      return !isNullOrUndefined(configValue) ? configValue : defaultValue;
    };
    return ConfigurationManager2;
  }()
);

// node_modules/@microsoft/applicationinsights-common/dist-es5/Interfaces/Contracts/ContextTagKeys.js
function _aiNameFunc(baseName) {
  var aiName = "ai." + baseName + ".";
  return function(name) {
    return aiName + name;
  };
}
var _aiApplication = _aiNameFunc("application");
var _aiDevice = _aiNameFunc("device");
var _aiLocation = _aiNameFunc("location");
var _aiOperation = _aiNameFunc("operation");
var _aiSession = _aiNameFunc("session");
var _aiUser = _aiNameFunc("user");
var _aiCloud = _aiNameFunc("cloud");
var _aiInternal = _aiNameFunc("internal");
var ContextTagKeys = (
  /** @class */
  function(_super) {
    __extendsFn(ContextTagKeys2, _super);
    function ContextTagKeys2() {
      return _super.call(this) || this;
    }
    return ContextTagKeys2;
  }(createClassFromInterface({
    applicationVersion: _aiApplication("ver"),
    applicationBuild: _aiApplication("build"),
    applicationTypeId: _aiApplication("typeId"),
    applicationId: _aiApplication("applicationId"),
    applicationLayer: _aiApplication("layer"),
    deviceId: _aiDevice("id"),
    deviceIp: _aiDevice("ip"),
    deviceLanguage: _aiDevice("language"),
    deviceLocale: _aiDevice("locale"),
    deviceModel: _aiDevice("model"),
    deviceFriendlyName: _aiDevice("friendlyName"),
    deviceNetwork: _aiDevice("network"),
    deviceNetworkName: _aiDevice("networkName"),
    deviceOEMName: _aiDevice("oemName"),
    deviceOS: _aiDevice("os"),
    deviceOSVersion: _aiDevice("osVersion"),
    deviceRoleInstance: _aiDevice("roleInstance"),
    deviceRoleName: _aiDevice("roleName"),
    deviceScreenResolution: _aiDevice("screenResolution"),
    deviceType: _aiDevice("type"),
    deviceMachineName: _aiDevice("machineName"),
    deviceVMName: _aiDevice("vmName"),
    deviceBrowser: _aiDevice("browser"),
    deviceBrowserVersion: _aiDevice("browserVersion"),
    locationIp: _aiLocation("ip"),
    locationCountry: _aiLocation("country"),
    locationProvince: _aiLocation("province"),
    locationCity: _aiLocation("city"),
    operationId: _aiOperation("id"),
    operationName: _aiOperation("name"),
    operationParentId: _aiOperation("parentId"),
    operationRootId: _aiOperation("rootId"),
    operationSyntheticSource: _aiOperation("syntheticSource"),
    operationCorrelationVector: _aiOperation("correlationVector"),
    sessionId: _aiSession("id"),
    sessionIsFirst: _aiSession("isFirst"),
    sessionIsNew: _aiSession("isNew"),
    userAccountAcquisitionDate: _aiUser("accountAcquisitionDate"),
    userAccountId: _aiUser("accountId"),
    userAgent: _aiUser("userAgent"),
    userId: _aiUser("id"),
    userStoreRegion: _aiUser("storeRegion"),
    userAuthUserId: _aiUser("authUserId"),
    userAnonymousUserAcquisitionDate: _aiUser("anonUserAcquisitionDate"),
    userAuthenticatedUserAcquisitionDate: _aiUser("authUserAcquisitionDate"),
    cloudName: _aiCloud("name"),
    cloudRole: _aiCloud("role"),
    cloudRoleVer: _aiCloud("roleVer"),
    cloudRoleInstance: _aiCloud("roleInstance"),
    cloudEnvironment: _aiCloud("environment"),
    cloudLocation: _aiCloud("location"),
    cloudDeploymentUnit: _aiCloud("deploymentUnit"),
    internalNodeName: _aiInternal("nodeName"),
    internalSdkVersion: _aiInternal("sdkVersion"),
    internalAgentVersion: _aiInternal("agentVersion"),
    internalSnippet: _aiInternal("snippet"),
    internalSdkSrc: _aiInternal("sdkSrc")
  }))
);

// node_modules/@microsoft/applicationinsights-common/dist-es5/TelemetryItemCreator.js
function createTelemetryItem(item, baseType, envelopeName, logger, customProperties, systemProperties) {
  var _a12;
  envelopeName = dataSanitizeString(logger, envelopeName) || strNotSpecified;
  if (isNullOrUndefined(item) || isNullOrUndefined(baseType) || isNullOrUndefined(envelopeName)) {
    throwError("Input doesn't contain all required fields");
  }
  var iKey = "";
  if (item[strIkey]) {
    iKey = item[strIkey];
    delete item[strIkey];
  }
  var telemetryItem = (_a12 = {}, _a12[
    _DYN_NAME2
    /* @min:name */
  ] = envelopeName, _a12.time = toISOString(/* @__PURE__ */ new Date()), _a12.iKey = iKey, _a12.ext = systemProperties ? systemProperties : {}, _a12.tags = [], _a12.data = {}, _a12.baseType = baseType, _a12.baseData = item, _a12);
  if (!isNullOrUndefined(customProperties)) {
    objForEachKey(customProperties, function(prop, value) {
      telemetryItem.data[prop] = value;
    });
  }
  return telemetryItem;
}
var TelemetryItemCreator = (
  /** @class */
  function() {
    function TelemetryItemCreator2() {
    }
    TelemetryItemCreator2.create = createTelemetryItem;
    return TelemetryItemCreator2;
  }()
);

// node_modules/@microsoft/applicationinsights-common/dist-es5/Interfaces/PartAExtensions.js
var Extensions = {
  UserExt: "user",
  DeviceExt: "device",
  TraceExt: "trace",
  WebExt: "web",
  AppExt: "app",
  OSExt: "os",
  SessionExt: "ses",
  SDKExt: "sdk"
};
var CtxTagKeys = new ContextTagKeys();

// node_modules/@microsoft/applicationinsights-common/dist-es5/DomHelperFuncs.js
function createDomEvent(eventName) {
  var event = null;
  if (isFunction(Event)) {
    event = new Event(eventName);
  } else {
    var doc = getDocument();
    if (doc && doc.createEvent) {
      event = doc.createEvent("Event");
      event.initEvent(eventName, true, true);
    }
  }
  return event;
}

// node_modules/@microsoft/applicationinsights-common/dist-es5/Offline.js
function _disableEvents(target, evtNamespace) {
  eventOff(target, null, null, evtNamespace);
}
function createOfflineListener(parentEvtNamespace) {
  var _document2 = getDocument();
  var _navigator = getNavigator();
  var _isListening = false;
  var listenerList = [];
  var rState = 1;
  if (_navigator && !isNullOrUndefined(_navigator.onLine) && !_navigator.onLine) {
    rState = 2;
  }
  var uState = 0;
  var _currentState = calCurrentState();
  var _evtNamespace = mergeEvtNamespace(createUniqueNamespace("OfflineListener"), parentEvtNamespace);
  try {
    if (_enableEvents(getWindow())) {
      _isListening = true;
    }
    if (_document2) {
      var target = _document2.body || _document2;
      if (target.ononline) {
        if (_enableEvents(target)) {
          _isListening = true;
        }
      }
    }
  } catch (e) {
    _isListening = false;
  }
  function _enableEvents(target2) {
    var enabled = false;
    if (target2) {
      enabled = eventOn(target2, "online", _setOnline, _evtNamespace);
      if (enabled) {
        eventOn(target2, "offline", _setOffline, _evtNamespace);
      }
    }
    return enabled;
  }
  function _isOnline() {
    return _currentState;
  }
  function calCurrentState() {
    if (uState === 2 || rState === 2) {
      return false;
    }
    return true;
  }
  function listnerNoticeCheck() {
    var newState = calCurrentState();
    if (_currentState !== newState) {
      _currentState = newState;
      arrForEach(listenerList, function(callback) {
        var offlineState = {
          isOnline: _currentState,
          rState,
          uState
        };
        try {
          callback(offlineState);
        } catch (e) {
        }
      });
    }
  }
  function setOnlineState(newState) {
    uState = newState;
    listnerNoticeCheck();
  }
  function _setOnline() {
    rState = 1;
    listnerNoticeCheck();
  }
  function _setOffline() {
    rState = 2;
    listnerNoticeCheck();
  }
  function _unload() {
    var win = getWindow();
    if (win && _isListening) {
      _disableEvents(win, _evtNamespace);
      if (_document2) {
        var target2 = _document2.body || _document2;
        if (!isUndefined(target2.ononline)) {
          _disableEvents(target2, _evtNamespace);
        }
      }
      _isListening = false;
    }
  }
  function addListener(callback) {
    listenerList[
      _DYN_PUSH2
      /* @min:%2epush */
    ](callback);
    return {
      rm: function() {
        var index = listenerList.indexOf(callback);
        if (index > -1) {
          return listenerList.splice(index, 1);
        } else {
          return;
        }
      }
    };
  }
  return {
    isOnline: _isOnline,
    isListening: function() {
      return _isListening;
    },
    unload: _unload,
    addListener,
    setOnlineState
  };
}

// node_modules/@microsoft/applicationinsights-common/dist-es5/applicationinsights-common.js
var PropertiesPluginIdentifier = "AppInsightsPropertiesPlugin";
var BreezeChannelIdentifier = "AppInsightsChannelPlugin";
var AnalyticsPluginIdentifier = "ApplicationInsightsAnalytics";

// node_modules/@microsoft/applicationinsights-analytics-js/dist-es5/__DynamicConstants.js
var _DYN_TO_STRING2 = "toString";
var _DYN_IS_STORAGE_USE_DISAB0 = "isStorageUseDisabled";
var _DYN__ADD_HOOK = "_addHook";
var _DYN_CORE = "core";
var _DYN_DATA_TYPE = "dataType";
var _DYN_ENVELOPE_TYPE = "envelopeType";
var _DYN_DIAG_LOG2 = "diagLog";
var _DYN_TRACK = "track";
var _DYN_TRACK_PAGE_VIEW = "trackPageView";
var _DYN_TRACK_PREVIOUS_PAGE_1 = "trackPreviousPageVisit";
var _DYN_SEND_PAGE_VIEW_INTER2 = "sendPageViewInternal";
var _DYN_START_TIME = "startTime";
var _DYN_PROPERTIES2 = "properties";
var _DYN_DURATION2 = "duration";
var _DYN_SEND_PAGE_VIEW_PERFO3 = "sendPageViewPerformanceInternal";
var _DYN_POPULATE_PAGE_VIEW_P4 = "populatePageViewPerformanceEvent";
var _DYN_HREF = "href";
var _DYN_SEND_EXCEPTION_INTER5 = "sendExceptionInternal";
var _DYN_EXCEPTION = "exception";
var _DYN_ERROR = "error";
var _DYN__ONERROR = "_onerror";
var _DYN_ERROR_SRC = "errorSrc";
var _DYN_LINE_NUMBER = "lineNumber";
var _DYN_COLUMN_NUMBER = "columnNumber";
var _DYN_MESSAGE3 = "message";
var _DYN__CREATE_AUTO_EXCEPTI6 = "CreateAutoException";
var _DYN_ADD_TELEMETRY_INITIA7 = "addTelemetryInitializer";
var _DYN_OVERRIDE_PAGE_VIEW_D8 = "overridePageViewDuration";
var _DYN_AUTO_TRACK_PAGE_VISI9 = "autoTrackPageVisitTime";
var _DYN_IS_BROWSER_LINK_TRAC10 = "isBrowserLinkTrackingEnabled";
var _DYN_LENGTH3 = "length";
var _DYN_ENABLE_AUTO_ROUTE_TR11 = "enableAutoRouteTracking";
var _DYN_ENABLE_UNHANDLED_PRO12 = "enableUnhandledPromiseRejectionTracking";
var _DYN_AUTO_UNHANDLED_PROMI13 = "autoUnhandledPromiseInstrumented";
var _DYN_GET_ENTRIES_BY_TYPE = "getEntriesByType";
var _DYN_IS_PERFORMANCE_TIMIN14 = "isPerformanceTimingSupported";
var _DYN_GET_PERFORMANCE_TIMI15 = "getPerformanceTiming";
var _DYN_NAVIGATION_START = "navigationStart";
var _DYN_SHOULD_COLLECT_DURAT16 = "shouldCollectDuration";
var _DYN_IS_PERFORMANCE_TIMIN17 = "isPerformanceTimingDataReady";
var _DYN_RESPONSE_START = "responseStart";
var _DYN_REQUEST_START = "requestStart";
var _DYN_LOAD_EVENT_END = "loadEventEnd";
var _DYN_RESPONSE_END = "responseEnd";
var _DYN_CONNECT_END = "connectEnd";
var _DYN_PAGE_VISIT_START_TIM18 = "pageVisitStartTime";

// node_modules/@microsoft/applicationinsights-analytics-js/dist-es5/JavaScriptSDK/Telemetry/PageViewManager.js
var PageViewManager = (
  /** @class */
  function() {
    function PageViewManager2(appInsights, overridePageViewDuration, core, pageViewPerformanceManager) {
      dynamicProto(PageViewManager2, this, function(_self) {
        var queueTimer = null;
        var itemQueue = [];
        var pageViewPerformanceSent = false;
        var firstPageViewSent = false;
        var _logger;
        if (core) {
          _logger = core.logger;
        }
        function _flushChannels(isAsync) {
          if (core) {
            core.flush(isAsync, function() {
            });
          }
        }
        function _startTimer() {
          if (!queueTimer) {
            queueTimer = scheduleTimeout(function() {
              queueTimer = null;
              var allItems = itemQueue.slice(0);
              var doFlush = false;
              itemQueue = [];
              arrForEach(allItems, function(item) {
                if (!item()) {
                  itemQueue.push(item);
                } else {
                  doFlush = true;
                }
              });
              if (itemQueue[
                _DYN_LENGTH3
                /* @min:%2elength */
              ] > 0) {
                _startTimer();
              }
              if (doFlush) {
                _flushChannels(true);
              }
            }, 100);
          }
        }
        function _addQueue(cb) {
          itemQueue.push(cb);
          _startTimer();
        }
        _self[
          _DYN_TRACK_PAGE_VIEW
          /* @min:%2etrackPageView */
        ] = function(pageView, customProperties) {
          var name = pageView.name;
          if (isNullOrUndefined(name) || typeof name !== "string") {
            var doc = getDocument();
            name = pageView.name = doc && doc.title || "";
          }
          var uri = pageView.uri;
          if (isNullOrUndefined(uri) || typeof uri !== "string") {
            var location_1 = getLocation();
            uri = pageView.uri = location_1 && location_1[
              _DYN_HREF
              /* @min:%2ehref */
            ] || "";
          }
          if (!firstPageViewSent) {
            var perf = getPerformance();
            var navigationEntries = perf && perf[
              _DYN_GET_ENTRIES_BY_TYPE
              /* @min:%2egetEntriesByType */
            ] && perf[
              _DYN_GET_ENTRIES_BY_TYPE
              /* @min:%2egetEntriesByType */
            ]("navigation");
            if (navigationEntries && navigationEntries[0] && !isUndefined(perf.timeOrigin)) {
              var loadEventStart = navigationEntries[0].loadEventStart;
              pageView[
                _DYN_START_TIME
                /* @min:%2estartTime */
              ] = new Date(perf.timeOrigin + loadEventStart);
            } else {
              var duration_1 = (customProperties || pageView[
                _DYN_PROPERTIES2
                /* @min:%2eproperties */
              ] || {})[
                _DYN_DURATION2
                /* @min:%2eduration */
              ] || 0;
              pageView[
                _DYN_START_TIME
                /* @min:%2estartTime */
              ] = new Date((/* @__PURE__ */ new Date()).getTime() - duration_1);
            }
            firstPageViewSent = true;
          }
          if (!pageViewPerformanceManager[
            _DYN_IS_PERFORMANCE_TIMIN14
            /* @min:%2eisPerformanceTimingSupported */
          ]()) {
            appInsights[
              _DYN_SEND_PAGE_VIEW_INTER2
              /* @min:%2esendPageViewInternal */
            ](pageView, customProperties);
            _flushChannels(true);
            if (!isWebWorker()) {
              _throwInternal(_logger, 2, 25, "trackPageView: navigation timing API used for calculation of page duration is not supported in this browser. This page view will be collected without duration and timing info.");
            }
            return;
          }
          var pageViewSent = false;
          var customDuration;
          var start = pageViewPerformanceManager[
            _DYN_GET_PERFORMANCE_TIMI15
            /* @min:%2egetPerformanceTiming */
          ]()[
            _DYN_NAVIGATION_START
            /* @min:%2enavigationStart */
          ];
          if (start > 0) {
            customDuration = dateTimeUtilsDuration(start, +/* @__PURE__ */ new Date());
            if (!pageViewPerformanceManager[
              _DYN_SHOULD_COLLECT_DURAT16
              /* @min:%2eshouldCollectDuration */
            ](customDuration)) {
              customDuration = void 0;
            }
          }
          var duration;
          if (!isNullOrUndefined(customProperties) && !isNullOrUndefined(customProperties[
            _DYN_DURATION2
            /* @min:%2eduration */
          ])) {
            duration = customProperties[
              _DYN_DURATION2
              /* @min:%2eduration */
            ];
          }
          if (overridePageViewDuration || !isNaN(duration)) {
            if (isNaN(duration)) {
              if (!customProperties) {
                customProperties = {};
              }
              customProperties[
                _DYN_DURATION2
                /* @min:%2eduration */
              ] = customDuration;
            }
            appInsights[
              _DYN_SEND_PAGE_VIEW_INTER2
              /* @min:%2esendPageViewInternal */
            ](pageView, customProperties);
            _flushChannels(true);
            pageViewSent = true;
          }
          var maxDurationLimit = 6e4;
          if (!customProperties) {
            customProperties = {};
          }
          _addQueue(function() {
            var processed = false;
            try {
              if (pageViewPerformanceManager[
                _DYN_IS_PERFORMANCE_TIMIN17
                /* @min:%2eisPerformanceTimingDataReady */
              ]()) {
                processed = true;
                var pageViewPerformance = {
                  name,
                  uri
                };
                pageViewPerformanceManager[
                  _DYN_POPULATE_PAGE_VIEW_P4
                  /* @min:%2epopulatePageViewPerformanceEvent */
                ](pageViewPerformance);
                if (!pageViewPerformance.isValid && !pageViewSent) {
                  customProperties[
                    _DYN_DURATION2
                    /* @min:%2eduration */
                  ] = customDuration;
                  appInsights[
                    _DYN_SEND_PAGE_VIEW_INTER2
                    /* @min:%2esendPageViewInternal */
                  ](pageView, customProperties);
                } else {
                  if (!pageViewSent) {
                    customProperties[
                      _DYN_DURATION2
                      /* @min:%2eduration */
                    ] = pageViewPerformance.durationMs;
                    appInsights[
                      _DYN_SEND_PAGE_VIEW_INTER2
                      /* @min:%2esendPageViewInternal */
                    ](pageView, customProperties);
                  }
                  if (!pageViewPerformanceSent) {
                    appInsights[
                      _DYN_SEND_PAGE_VIEW_PERFO3
                      /* @min:%2esendPageViewPerformanceInternal */
                    ](pageViewPerformance, customProperties);
                    pageViewPerformanceSent = true;
                  }
                }
              } else if (start > 0 && dateTimeUtilsDuration(start, +/* @__PURE__ */ new Date()) > maxDurationLimit) {
                processed = true;
                if (!pageViewSent) {
                  customProperties[
                    _DYN_DURATION2
                    /* @min:%2eduration */
                  ] = maxDurationLimit;
                  appInsights[
                    _DYN_SEND_PAGE_VIEW_INTER2
                    /* @min:%2esendPageViewInternal */
                  ](pageView, customProperties);
                }
              }
            } catch (e) {
              _throwInternal(_logger, 1, 38, "trackPageView failed on page load calculation: " + getExceptionName(e), { exception: dumpObj(e) });
            }
            return processed;
          });
        };
        _self.teardown = function(unloadCtx, unloadState) {
          if (queueTimer) {
            queueTimer.cancel();
            queueTimer = null;
            var allItems = itemQueue.slice(0);
            var doFlush_1 = false;
            itemQueue = [];
            arrForEach(allItems, function(item) {
              if (item()) {
                doFlush_1 = true;
              }
            });
          }
        };
      });
    }
    PageViewManager2.__ieDyn = 1;
    return PageViewManager2;
  }()
);

// node_modules/@microsoft/applicationinsights-analytics-js/dist-es5/JavaScriptSDK/Telemetry/PageViewPerformanceManager.js
var MAX_DURATION_ALLOWED = 36e5;
var botAgentNames = ["googlebot", "adsbot-google", "apis-google", "mediapartners-google"];
function _isPerformanceTimingSupported() {
  var perf = getPerformance();
  return perf && !!perf.timing;
}
function _isPerformanceNavigationTimingSupported() {
  var perf = getPerformance();
  return perf && perf.getEntriesByType && perf.getEntriesByType("navigation")[
    _DYN_LENGTH3
    /* @min:%2elength */
  ] > 0;
}
function _isPerformanceTimingDataReady() {
  var perf = getPerformance();
  var timing = perf ? perf.timing : 0;
  return timing && timing.domainLookupStart > 0 && timing[
    _DYN_NAVIGATION_START
    /* @min:%2enavigationStart */
  ] > 0 && timing[
    _DYN_RESPONSE_START
    /* @min:%2eresponseStart */
  ] > 0 && timing[
    _DYN_REQUEST_START
    /* @min:%2erequestStart */
  ] > 0 && timing[
    _DYN_LOAD_EVENT_END
    /* @min:%2eloadEventEnd */
  ] > 0 && timing[
    _DYN_RESPONSE_END
    /* @min:%2eresponseEnd */
  ] > 0 && timing[
    _DYN_CONNECT_END
    /* @min:%2econnectEnd */
  ] > 0 && timing.domLoading > 0;
}
function _getPerformanceTiming() {
  if (_isPerformanceTimingSupported()) {
    return getPerformance().timing;
  }
  return null;
}
function _getPerformanceNavigationTiming() {
  if (_isPerformanceNavigationTimingSupported()) {
    return getPerformance()[
      _DYN_GET_ENTRIES_BY_TYPE
      /* @min:%2egetEntriesByType */
    ]("navigation")[0];
  }
  return null;
}
function _shouldCollectDuration() {
  var durations = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    durations[_i] = arguments[_i];
  }
  var _navigator = getNavigator() || {};
  var userAgent = _navigator.userAgent;
  var isGoogleBot = false;
  if (userAgent) {
    for (var i = 0; i < botAgentNames[
      _DYN_LENGTH3
      /* @min:%2elength */
    ]; i++) {
      isGoogleBot = isGoogleBot || strIndexOf(userAgent.toLowerCase(), botAgentNames[i]) !== -1;
    }
  }
  if (isGoogleBot) {
    return false;
  } else {
    for (var i = 0; i < durations[
      _DYN_LENGTH3
      /* @min:%2elength */
    ]; i++) {
      if (durations[i] < 0 || durations[i] >= MAX_DURATION_ALLOWED) {
        return false;
      }
    }
  }
  return true;
}
var PageViewPerformanceManager = (
  /** @class */
  function() {
    function PageViewPerformanceManager2(core) {
      var _logger = safeGetLogger(core);
      dynamicProto(PageViewPerformanceManager2, this, function(_self) {
        _self[
          _DYN_POPULATE_PAGE_VIEW_P4
          /* @min:%2epopulatePageViewPerformanceEvent */
        ] = function(pageViewPerformance) {
          pageViewPerformance.isValid = false;
          var navigationTiming = _getPerformanceNavigationTiming();
          var timing = _getPerformanceTiming();
          var total = 0;
          var network = 0;
          var request = 0;
          var response = 0;
          var dom = 0;
          if (navigationTiming || timing) {
            if (navigationTiming) {
              total = navigationTiming[
                _DYN_DURATION2
                /* @min:%2eduration */
              ];
              network = navigationTiming[
                _DYN_START_TIME
                /* @min:%2estartTime */
              ] === 0 ? navigationTiming[
                _DYN_CONNECT_END
                /* @min:%2econnectEnd */
              ] : dateTimeUtilsDuration(navigationTiming[
                _DYN_START_TIME
                /* @min:%2estartTime */
              ], navigationTiming[
                _DYN_CONNECT_END
                /* @min:%2econnectEnd */
              ]);
              request = dateTimeUtilsDuration(navigationTiming.requestStart, navigationTiming[
                _DYN_RESPONSE_START
                /* @min:%2eresponseStart */
              ]);
              response = dateTimeUtilsDuration(navigationTiming[
                _DYN_RESPONSE_START
                /* @min:%2eresponseStart */
              ], navigationTiming[
                _DYN_RESPONSE_END
                /* @min:%2eresponseEnd */
              ]);
              dom = dateTimeUtilsDuration(navigationTiming.responseEnd, navigationTiming[
                _DYN_LOAD_EVENT_END
                /* @min:%2eloadEventEnd */
              ]);
            } else {
              total = dateTimeUtilsDuration(timing[
                _DYN_NAVIGATION_START
                /* @min:%2enavigationStart */
              ], timing[
                _DYN_LOAD_EVENT_END
                /* @min:%2eloadEventEnd */
              ]);
              network = dateTimeUtilsDuration(timing[
                _DYN_NAVIGATION_START
                /* @min:%2enavigationStart */
              ], timing[
                _DYN_CONNECT_END
                /* @min:%2econnectEnd */
              ]);
              request = dateTimeUtilsDuration(timing.requestStart, timing[
                _DYN_RESPONSE_START
                /* @min:%2eresponseStart */
              ]);
              response = dateTimeUtilsDuration(timing[
                _DYN_RESPONSE_START
                /* @min:%2eresponseStart */
              ], timing[
                _DYN_RESPONSE_END
                /* @min:%2eresponseEnd */
              ]);
              dom = dateTimeUtilsDuration(timing.responseEnd, timing[
                _DYN_LOAD_EVENT_END
                /* @min:%2eloadEventEnd */
              ]);
            }
            if (total === 0) {
              _throwInternal(_logger, 2, 10, "error calculating page view performance.", { total, network, request, response, dom });
            } else if (!_self[
              _DYN_SHOULD_COLLECT_DURAT16
              /* @min:%2eshouldCollectDuration */
            ](total, network, request, response, dom)) {
              _throwInternal(_logger, 2, 45, "Invalid page load duration value. Browser perf data won't be sent.", { total, network, request, response, dom });
            } else if (total < Math.floor(network) + Math.floor(request) + Math.floor(response) + Math.floor(dom)) {
              _throwInternal(_logger, 2, 8, "client performance math error.", { total, network, request, response, dom });
            } else {
              pageViewPerformance.durationMs = total;
              pageViewPerformance.perfTotal = pageViewPerformance[
                _DYN_DURATION2
                /* @min:%2eduration */
              ] = msToTimeSpan(total);
              pageViewPerformance.networkConnect = msToTimeSpan(network);
              pageViewPerformance.sentRequest = msToTimeSpan(request);
              pageViewPerformance.receivedResponse = msToTimeSpan(response);
              pageViewPerformance.domProcessing = msToTimeSpan(dom);
              pageViewPerformance.isValid = true;
            }
          }
        };
        _self[
          _DYN_GET_PERFORMANCE_TIMI15
          /* @min:%2egetPerformanceTiming */
        ] = _getPerformanceTiming;
        _self[
          _DYN_IS_PERFORMANCE_TIMIN14
          /* @min:%2eisPerformanceTimingSupported */
        ] = _isPerformanceTimingSupported;
        _self[
          _DYN_IS_PERFORMANCE_TIMIN17
          /* @min:%2eisPerformanceTimingDataReady */
        ] = _isPerformanceTimingDataReady;
        _self[
          _DYN_SHOULD_COLLECT_DURAT16
          /* @min:%2eshouldCollectDuration */
        ] = _shouldCollectDuration;
      });
    }
    PageViewPerformanceManager2.__ieDyn = 1;
    return PageViewPerformanceManager2;
  }()
);

// node_modules/@microsoft/applicationinsights-analytics-js/dist-es5/JavaScriptSDK/Telemetry/PageVisitTimeManager.js
var PageVisitTimeManager = (
  /** @class */
  function() {
    function PageVisitTimeManager2(logger, pageVisitTimeTrackingHandler) {
      var prevPageVisitDataKeyName = "prevPageVisitData";
      dynamicProto(PageVisitTimeManager2, this, function(_self) {
        _self[
          _DYN_TRACK_PREVIOUS_PAGE_1
          /* @min:%2etrackPreviousPageVisit */
        ] = function(currentPageName, currentPageUrl) {
          try {
            var prevPageVisitTimeData = restartPageVisitTimer(currentPageName, currentPageUrl);
            if (prevPageVisitTimeData) {
              pageVisitTimeTrackingHandler(prevPageVisitTimeData.pageName, prevPageVisitTimeData.pageUrl, prevPageVisitTimeData.pageVisitTime);
            }
          } catch (e) {
            _warnToConsole(logger, "Auto track page visit time failed, metric will not be collected: " + dumpObj(e));
          }
        };
        function restartPageVisitTimer(pageName, pageUrl) {
          var prevPageVisitData = null;
          try {
            prevPageVisitData = stopPageVisitTimer();
            if (utlCanUseSessionStorage()) {
              if (utlGetSessionStorage(logger, prevPageVisitDataKeyName) != null) {
                throwError("Cannot call startPageVisit consecutively without first calling stopPageVisit");
              }
              var currPageVisitDataStr = getJSON().stringify(new PageVisitData(pageName, pageUrl));
              utlSetSessionStorage(logger, prevPageVisitDataKeyName, currPageVisitDataStr);
            }
          } catch (e) {
            _warnToConsole(logger, "Call to restart failed: " + dumpObj(e));
            prevPageVisitData = null;
          }
          return prevPageVisitData;
        }
        function stopPageVisitTimer() {
          var prevPageVisitData = null;
          try {
            if (utlCanUseSessionStorage()) {
              var pageVisitEndTime = utcNow();
              var pageVisitDataJsonStr = utlGetSessionStorage(logger, prevPageVisitDataKeyName);
              if (pageVisitDataJsonStr && hasJSON()) {
                prevPageVisitData = getJSON().parse(pageVisitDataJsonStr);
                prevPageVisitData.pageVisitTime = pageVisitEndTime - prevPageVisitData[
                  _DYN_PAGE_VISIT_START_TIM18
                  /* @min:%2epageVisitStartTime */
                ];
                utlRemoveSessionStorage(logger, prevPageVisitDataKeyName);
              }
            }
          } catch (e) {
            _warnToConsole(logger, "Stop page visit timer failed: " + dumpObj(e));
            prevPageVisitData = null;
          }
          return prevPageVisitData;
        }
        objDefine(_self, "_logger", { g: function() {
          return logger;
        } });
        objDefine(_self, "pageVisitTimeTrackingHandler", { g: function() {
          return pageVisitTimeTrackingHandler;
        } });
      });
    }
    PageVisitTimeManager2.__ieDyn = 1;
    return PageVisitTimeManager2;
  }()
);
var PageVisitData = (
  /** @class */
  /* @__PURE__ */ function() {
    function PageVisitData2(pageName, pageUrl) {
      this[
        _DYN_PAGE_VISIT_START_TIM18
        /* @min:%2epageVisitStartTime */
      ] = utcNow();
      this.pageName = pageName;
      this.pageUrl = pageUrl;
    }
    return PageVisitData2;
  }()
);

// node_modules/@microsoft/applicationinsights-analytics-js/dist-es5/JavaScriptSDK/Timing.js
var Timing = (
  /** @class */
  /* @__PURE__ */ function() {
    function Timing2(logger, name) {
      var _self = this;
      var _events = {};
      _self.start = function(name2) {
        if (typeof _events[name2] !== "undefined") {
          _throwInternal(logger, 2, 62, "start was called more than once for this event without calling stop.", { name: name2, key: name2 }, true);
        }
        _events[name2] = +/* @__PURE__ */ new Date();
      };
      _self.stop = function(name2, url, properties, measurements) {
        var start = _events[name2];
        if (isNaN(start)) {
          _throwInternal(logger, 2, 63, "stop was called without a corresponding start.", { name: name2, key: name2 }, true);
        } else {
          var end = +/* @__PURE__ */ new Date();
          var duration = dateTimeUtilsDuration(start, end);
          _self.action(name2, url, duration, properties, measurements);
        }
        delete _events[name2];
        _events[name2] = void 0;
      };
    }
    return Timing2;
  }()
);

// node_modules/@microsoft/applicationinsights-analytics-js/dist-es5/JavaScriptSDK/AnalyticsPlugin.js
var _a6;
var strEvent = "event";
function _dispatchEvent(target, evnt) {
  if (target && target.dispatchEvent && evnt) {
    target.dispatchEvent(evnt);
  }
}
function _getReason(error) {
  if (error && error.reason) {
    var reason = error.reason;
    if (!isString(reason) && isFunction(reason[
      _DYN_TO_STRING2
      /* @min:%2etoString */
    ])) {
      return reason[
        _DYN_TO_STRING2
        /* @min:%2etoString */
      ]();
    }
    return dumpObj(reason);
  }
  return error || "";
}
var MinMilliSeconds = 6e4;
var defaultValues4 = objDeepFreeze((_a6 = {
  sessionRenewalMs: cfgDfSet(_chkConfigMilliseconds, 30 * 60 * 1e3),
  sessionExpirationMs: cfgDfSet(_chkConfigMilliseconds, 24 * 60 * 60 * 1e3),
  disableExceptionTracking: cfgDfBoolean()
}, _a6[
  _DYN_AUTO_TRACK_PAGE_VISI9
  /* @min:autoTrackPageVisitTime */
] = cfgDfBoolean(), _a6[
  _DYN_OVERRIDE_PAGE_VIEW_D8
  /* @min:overridePageViewDuration */
] = cfgDfBoolean(), _a6[
  _DYN_ENABLE_UNHANDLED_PRO12
  /* @min:enableUnhandledPromiseRejectionTracking */
] = cfgDfBoolean(), _a6[
  _DYN_AUTO_UNHANDLED_PROMI13
  /* @min:autoUnhandledPromiseInstrumented */
] = false, _a6.samplingPercentage = cfgDfValidate(_chkSampling, 100), _a6[
  _DYN_IS_STORAGE_USE_DISAB0
  /* @min:isStorageUseDisabled */
] = cfgDfBoolean(), _a6[
  _DYN_IS_BROWSER_LINK_TRAC10
  /* @min:isBrowserLinkTrackingEnabled */
] = cfgDfBoolean(), _a6[
  _DYN_ENABLE_AUTO_ROUTE_TR11
  /* @min:enableAutoRouteTracking */
] = cfgDfBoolean(), _a6.namePrefix = cfgDfString(), _a6.enableDebug = cfgDfBoolean(), _a6.disableFlushOnBeforeUnload = cfgDfBoolean(), _a6.disableFlushOnUnload = cfgDfBoolean(false, "disableFlushOnBeforeUnload"), _a6));
function _chkConfigMilliseconds(value, defValue) {
  value = value || defValue;
  if (value < MinMilliSeconds) {
    value = MinMilliSeconds;
  }
  return +value;
}
function _chkSampling(value) {
  return !isNaN(value) && value > 0 && value <= 100;
}
function _updateStorageUsage(extConfig) {
  if (!isUndefined(extConfig[
    _DYN_IS_STORAGE_USE_DISAB0
    /* @min:%2eisStorageUseDisabled */
  ])) {
    if (extConfig[
      _DYN_IS_STORAGE_USE_DISAB0
      /* @min:%2eisStorageUseDisabled */
    ]) {
      utlDisableStorage();
    } else {
      utlEnableStorage();
    }
  }
}
var AnalyticsPlugin = (
  /** @class */
  function(_super) {
    __extendsFn(AnalyticsPlugin2, _super);
    function AnalyticsPlugin2() {
      var _this = _super.call(this) || this;
      _this.identifier = AnalyticsPluginIdentifier;
      _this.priority = 180;
      _this.autoRoutePVDelay = 500;
      var _eventTracking;
      var _pageTracking;
      var _pageViewManager;
      var _pageViewPerformanceManager;
      var _pageVisitTimeManager;
      var _preInitTelemetryInitializers;
      var _isBrowserLinkTrackingEnabled;
      var _browserLinkInitializerAdded;
      var _enableAutoRouteTracking;
      var _historyListenerAdded;
      var _disableExceptionTracking;
      var _autoExceptionInstrumented;
      var _enableUnhandledPromiseRejectionTracking;
      var _autoUnhandledPromiseInstrumented;
      var _extConfig;
      var _autoTrackPageVisitTime;
      var _trackAjaxAttempts = 0;
      var _prevUri;
      var _currUri;
      var _evtNamespace;
      dynamicProto(AnalyticsPlugin2, _this, function(_self, _base) {
        var _addHook = _base[
          _DYN__ADD_HOOK
          /* @min:%2e_addHook */
        ];
        _initDefaults();
        _self.getCookieMgr = function() {
          return safeGetCookieMgr(_self[
            _DYN_CORE
            /* @min:%2ecore */
          ]);
        };
        _self.processTelemetry = function(env, itemCtx) {
          _self.processNext(env, itemCtx);
        };
        _self.trackEvent = function(event, customProperties) {
          try {
            var telemetryItem = createTelemetryItem(event, Event2[
              _DYN_DATA_TYPE
              /* @min:%2edataType */
            ], Event2[
              _DYN_ENVELOPE_TYPE
              /* @min:%2eenvelopeType */
            ], _self[
              _DYN_DIAG_LOG2
              /* @min:%2ediagLog */
            ](), customProperties);
            _self[
              _DYN_CORE
              /* @min:%2ecore */
            ][
              _DYN_TRACK
              /* @min:%2etrack */
            ](telemetryItem);
          } catch (e) {
            _throwInternal2(2, 39, "trackTrace failed, trace will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
          }
        };
        _self.startTrackEvent = function(name) {
          try {
            _eventTracking.start(name);
          } catch (e) {
            _throwInternal2(1, 29, "startTrackEvent failed, event will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
          }
        };
        _self.stopTrackEvent = function(name, properties, measurements) {
          try {
            _eventTracking.stop(name, void 0, properties, measurements);
          } catch (e) {
            _throwInternal2(1, 30, "stopTrackEvent failed, event will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
          }
        };
        _self.trackTrace = function(trace, customProperties) {
          try {
            var telemetryItem = createTelemetryItem(trace, Trace[
              _DYN_DATA_TYPE
              /* @min:%2edataType */
            ], Trace[
              _DYN_ENVELOPE_TYPE
              /* @min:%2eenvelopeType */
            ], _self[
              _DYN_DIAG_LOG2
              /* @min:%2ediagLog */
            ](), customProperties);
            _self[
              _DYN_CORE
              /* @min:%2ecore */
            ][
              _DYN_TRACK
              /* @min:%2etrack */
            ](telemetryItem);
          } catch (e) {
            _throwInternal2(2, 39, "trackTrace failed, trace will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
          }
        };
        _self.trackMetric = function(metric, customProperties) {
          try {
            var telemetryItem = createTelemetryItem(metric, Metric[
              _DYN_DATA_TYPE
              /* @min:%2edataType */
            ], Metric[
              _DYN_ENVELOPE_TYPE
              /* @min:%2eenvelopeType */
            ], _self[
              _DYN_DIAG_LOG2
              /* @min:%2ediagLog */
            ](), customProperties);
            _self[
              _DYN_CORE
              /* @min:%2ecore */
            ][
              _DYN_TRACK
              /* @min:%2etrack */
            ](telemetryItem);
          } catch (e) {
            _throwInternal2(1, 36, "trackMetric failed, metric will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
          }
        };
        _self[
          _DYN_TRACK_PAGE_VIEW
          /* @min:%2etrackPageView */
        ] = function(pageView, customProperties) {
          try {
            var inPv = pageView || {};
            _pageViewManager[
              _DYN_TRACK_PAGE_VIEW
              /* @min:%2etrackPageView */
            ](inPv, __assignFn(__assignFn(__assignFn({}, inPv.properties), inPv.measurements), customProperties));
            if (_autoTrackPageVisitTime) {
              _pageVisitTimeManager[
                _DYN_TRACK_PREVIOUS_PAGE_1
                /* @min:%2etrackPreviousPageVisit */
              ](inPv.name, inPv.uri);
            }
          } catch (e) {
            _throwInternal2(1, 37, "trackPageView failed, page view will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
          }
        };
        _self[
          _DYN_SEND_PAGE_VIEW_INTER2
          /* @min:%2esendPageViewInternal */
        ] = function(pageView, properties, systemProperties) {
          var doc = getDocument();
          if (doc) {
            pageView.refUri = pageView.refUri === void 0 ? doc.referrer : pageView.refUri;
          }
          if (isNullOrUndefined(pageView[
            _DYN_START_TIME
            /* @min:%2estartTime */
          ])) {
            var duration = (properties || pageView[
              _DYN_PROPERTIES2
              /* @min:%2eproperties */
            ] || {})[
              _DYN_DURATION2
              /* @min:%2eduration */
            ] || 0;
            pageView[
              _DYN_START_TIME
              /* @min:%2estartTime */
            ] = new Date((/* @__PURE__ */ new Date()).getTime() - duration);
          }
          var telemetryItem = createTelemetryItem(pageView, PageView[
            _DYN_DATA_TYPE
            /* @min:%2edataType */
          ], PageView[
            _DYN_ENVELOPE_TYPE
            /* @min:%2eenvelopeType */
          ], _self[
            _DYN_DIAG_LOG2
            /* @min:%2ediagLog */
          ](), properties, systemProperties);
          _self[
            _DYN_CORE
            /* @min:%2ecore */
          ][
            _DYN_TRACK
            /* @min:%2etrack */
          ](telemetryItem);
          _trackAjaxAttempts = 0;
        };
        _self[
          _DYN_SEND_PAGE_VIEW_PERFO3
          /* @min:%2esendPageViewPerformanceInternal */
        ] = function(pageViewPerformance, properties, systemProperties) {
          var telemetryItem = createTelemetryItem(pageViewPerformance, PageViewPerformance[
            _DYN_DATA_TYPE
            /* @min:%2edataType */
          ], PageViewPerformance[
            _DYN_ENVELOPE_TYPE
            /* @min:%2eenvelopeType */
          ], _self[
            _DYN_DIAG_LOG2
            /* @min:%2ediagLog */
          ](), properties, systemProperties);
          _self[
            _DYN_CORE
            /* @min:%2ecore */
          ][
            _DYN_TRACK
            /* @min:%2etrack */
          ](telemetryItem);
        };
        _self.trackPageViewPerformance = function(pageViewPerformance, customProperties) {
          var inPvp = pageViewPerformance || {};
          try {
            _pageViewPerformanceManager[
              _DYN_POPULATE_PAGE_VIEW_P4
              /* @min:%2epopulatePageViewPerformanceEvent */
            ](inPvp);
            _self[
              _DYN_SEND_PAGE_VIEW_PERFO3
              /* @min:%2esendPageViewPerformanceInternal */
            ](inPvp, customProperties);
          } catch (e) {
            _throwInternal2(1, 37, "trackPageViewPerformance failed, page view will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
          }
        };
        _self.startTrackPage = function(name) {
          try {
            if (typeof name !== "string") {
              var doc = getDocument();
              name = doc && doc.title || "";
            }
            _pageTracking.start(name);
          } catch (e) {
            _throwInternal2(1, 31, "startTrackPage failed, page view may not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
          }
        };
        _self.stopTrackPage = function(name, url, properties, measurement) {
          try {
            if (typeof name !== "string") {
              var doc = getDocument();
              name = doc && doc.title || "";
            }
            if (typeof url !== "string") {
              var loc = getLocation();
              url = loc && loc[
                _DYN_HREF
                /* @min:%2ehref */
              ] || "";
            }
            _pageTracking.stop(name, url, properties, measurement);
            if (_autoTrackPageVisitTime) {
              _pageVisitTimeManager[
                _DYN_TRACK_PREVIOUS_PAGE_1
                /* @min:%2etrackPreviousPageVisit */
              ](name, url);
            }
          } catch (e) {
            _throwInternal2(1, 32, "stopTrackPage failed, page view will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
          }
        };
        _self[
          _DYN_SEND_EXCEPTION_INTER5
          /* @min:%2esendExceptionInternal */
        ] = function(exception, customProperties, systemProperties) {
          var theError = exception && (exception[
            _DYN_EXCEPTION
            /* @min:%2eexception */
          ] || exception[
            _DYN_ERROR
            /* @min:%2eerror */
          ]) || // - Handle someone calling trackException based of v1 API where the exception was the Error
          isError(exception) && exception || // - Handles no error being defined and instead of creating a new Error() instance attempt to map so any stacktrace
          //   is preserved and does not list ApplicationInsights code as the source
          { name: exception && typeof exception, message: exception || strNotSpecified };
          exception = exception || {};
          var exceptionPartB = new Exception(_self[
            _DYN_DIAG_LOG2
            /* @min:%2ediagLog */
          ](), theError, exception[
            _DYN_PROPERTIES2
            /* @min:%2eproperties */
          ] || customProperties, exception.measurements, exception.severityLevel, exception.id).toInterface();
          var telemetryItem = createTelemetryItem(exceptionPartB, Exception[
            _DYN_DATA_TYPE
            /* @min:%2edataType */
          ], Exception[
            _DYN_ENVELOPE_TYPE
            /* @min:%2eenvelopeType */
          ], _self[
            _DYN_DIAG_LOG2
            /* @min:%2ediagLog */
          ](), customProperties, systemProperties);
          _self[
            _DYN_CORE
            /* @min:%2ecore */
          ][
            _DYN_TRACK
            /* @min:%2etrack */
          ](telemetryItem);
        };
        _self.trackException = function(exception, customProperties) {
          if (exception && !exception[
            _DYN_EXCEPTION
            /* @min:%2eexception */
          ] && exception[
            _DYN_ERROR
            /* @min:%2eerror */
          ]) {
            exception[
              _DYN_EXCEPTION
              /* @min:%2eexception */
            ] = exception[
              _DYN_ERROR
              /* @min:%2eerror */
            ];
          }
          try {
            _self[
              _DYN_SEND_EXCEPTION_INTER5
              /* @min:%2esendExceptionInternal */
            ](exception, customProperties);
          } catch (e) {
            _throwInternal2(1, 35, "trackException failed, exception will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
          }
        };
        _self[
          _DYN__ONERROR
          /* @min:%2e_onerror */
        ] = function(exception) {
          var error = exception && exception[
            _DYN_ERROR
            /* @min:%2eerror */
          ];
          var evt = exception && exception.evt;
          try {
            if (!evt) {
              var _window = getWindow();
              if (_window) {
                evt = _window[strEvent];
              }
            }
            var url = exception && exception.url || (getDocument() || {}).URL;
            var errorSrc = exception[
              _DYN_ERROR_SRC
              /* @min:%2eerrorSrc */
            ] || "window.onerror@" + url + ":" + (exception[
              _DYN_LINE_NUMBER
              /* @min:%2elineNumber */
            ] || 0) + ":" + (exception[
              _DYN_COLUMN_NUMBER
              /* @min:%2ecolumnNumber */
            ] || 0);
            var properties = {
              errorSrc,
              url,
              lineNumber: exception[
                _DYN_LINE_NUMBER
                /* @min:%2elineNumber */
              ] || 0,
              columnNumber: exception[
                _DYN_COLUMN_NUMBER
                /* @min:%2ecolumnNumber */
              ] || 0,
              message: exception[
                _DYN_MESSAGE3
                /* @min:%2emessage */
              ]
            };
            if (isCrossOriginError(exception.message, exception.url, exception.lineNumber, exception.columnNumber, exception[
              _DYN_ERROR
              /* @min:%2eerror */
            ])) {
              _sendCORSException(Exception[
                _DYN__CREATE_AUTO_EXCEPTI6
                /* @min:%2eCreateAutoException */
              ]("Script error: The browser's same-origin policy prevents us from getting the details of this exception. Consider using the 'crossorigin' attribute.", url, exception[
                _DYN_LINE_NUMBER
                /* @min:%2elineNumber */
              ] || 0, exception[
                _DYN_COLUMN_NUMBER
                /* @min:%2ecolumnNumber */
              ] || 0, error, evt, null, errorSrc), properties);
            } else {
              if (!exception[
                _DYN_ERROR_SRC
                /* @min:%2eerrorSrc */
              ]) {
                exception[
                  _DYN_ERROR_SRC
                  /* @min:%2eerrorSrc */
                ] = errorSrc;
              }
              _self.trackException({
                exception,
                severityLevel: 3
                /* eSeverityLevel.Error */
              }, properties);
            }
          } catch (e) {
            var errorString = error ? error.name + ", " + error[
              _DYN_MESSAGE3
              /* @min:%2emessage */
            ] : "null";
            _throwInternal2(1, 11, "_onError threw exception while logging error, error will not be collected: " + getExceptionName(e), { exception: dumpObj(e), errorString });
          }
        };
        _self[
          _DYN_ADD_TELEMETRY_INITIA7
          /* @min:%2eaddTelemetryInitializer */
        ] = function(telemetryInitializer) {
          if (_self[
            _DYN_CORE
            /* @min:%2ecore */
          ]) {
            return _self[
              _DYN_CORE
              /* @min:%2ecore */
            ][
              _DYN_ADD_TELEMETRY_INITIA7
              /* @min:%2eaddTelemetryInitializer */
            ](telemetryInitializer);
          }
          if (!_preInitTelemetryInitializers) {
            _preInitTelemetryInitializers = [];
          }
          _preInitTelemetryInitializers.push(telemetryInitializer);
        };
        _self.initialize = function(config, core, extensions, pluginChain) {
          if (_self.isInitialized()) {
            return;
          }
          if (isNullOrUndefined(core)) {
            throwError("Error initializing");
          }
          _base.initialize(config, core, extensions, pluginChain);
          try {
            _evtNamespace = mergeEvtNamespace(createUniqueNamespace(_self.identifier), core.evtNamespace && core.evtNamespace());
            if (_preInitTelemetryInitializers) {
              arrForEach(_preInitTelemetryInitializers, function(initializer) {
                core[
                  _DYN_ADD_TELEMETRY_INITIA7
                  /* @min:%2eaddTelemetryInitializer */
                ](initializer);
              });
              _preInitTelemetryInitializers = null;
            }
            _populateDefaults(config);
            _pageViewPerformanceManager = new PageViewPerformanceManager(_self[
              _DYN_CORE
              /* @min:%2ecore */
            ]);
            _pageViewManager = new PageViewManager(_self, _extConfig.overridePageViewDuration, _self[
              _DYN_CORE
              /* @min:%2ecore */
            ], _pageViewPerformanceManager);
            _pageVisitTimeManager = new PageVisitTimeManager(_self[
              _DYN_DIAG_LOG2
              /* @min:%2ediagLog */
            ](), function(pageName, pageUrl, pageVisitTime) {
              return trackPageVisitTime(pageName, pageUrl, pageVisitTime);
            });
            _eventTracking = new Timing(_self[
              _DYN_DIAG_LOG2
              /* @min:%2ediagLog */
            ](), "trackEvent");
            _eventTracking.action = function(name, url, duration, properties, measurements) {
              if (!properties) {
                properties = {};
              }
              if (!measurements) {
                measurements = {};
              }
              properties.duration = duration[
                _DYN_TO_STRING2
                /* @min:%2etoString */
              ]();
              _self.trackEvent({ name, properties, measurements });
            };
            _pageTracking = new Timing(_self[
              _DYN_DIAG_LOG2
              /* @min:%2ediagLog */
            ](), "trackPageView");
            _pageTracking.action = function(name, url, duration, properties, measurements) {
              if (isNullOrUndefined(properties)) {
                properties = {};
              }
              properties.duration = duration[
                _DYN_TO_STRING2
                /* @min:%2etoString */
              ]();
              var pageViewItem = {
                name,
                uri: url,
                properties,
                measurements
              };
              _self[
                _DYN_SEND_PAGE_VIEW_INTER2
                /* @min:%2esendPageViewInternal */
              ](pageViewItem, properties);
            };
            if (hasWindow()) {
              _updateExceptionTracking();
              _updateLocationChange();
            }
          } catch (e) {
            _self.setInitialized(false);
            throw e;
          }
        };
        _self._doTeardown = function(unloadCtx, unloadState) {
          _pageViewManager && _pageViewManager.teardown(unloadCtx, unloadState);
          eventOff(window, null, null, _evtNamespace);
          _initDefaults();
        };
        function _populateDefaults(config) {
          var identifier = _self.identifier;
          var core = _self[
            _DYN_CORE
            /* @min:%2ecore */
          ];
          _self[
            _DYN__ADD_HOOK
            /* @min:%2e_addHook */
          ](onConfigChange(config, function() {
            var ctx = createProcessTelemetryContext(null, config, core);
            _extConfig = ctx.getExtCfg(identifier, defaultValues4);
            _autoTrackPageVisitTime = _extConfig[
              _DYN_AUTO_TRACK_PAGE_VISI9
              /* @min:%2eautoTrackPageVisitTime */
            ];
            if (config.storagePrefix) {
              utlSetStoragePrefix(config.storagePrefix);
            }
            _updateStorageUsage(_extConfig);
            _isBrowserLinkTrackingEnabled = _extConfig[
              _DYN_IS_BROWSER_LINK_TRAC10
              /* @min:%2eisBrowserLinkTrackingEnabled */
            ];
            _addDefaultTelemetryInitializers();
          }));
        }
        function trackPageVisitTime(pageName, pageUrl, pageVisitTime) {
          var properties = { PageName: pageName, PageUrl: pageUrl };
          _self.trackMetric({
            name: "PageVisitTime",
            average: pageVisitTime,
            max: pageVisitTime,
            min: pageVisitTime,
            sampleCount: 1
          }, properties);
        }
        function _addDefaultTelemetryInitializers() {
          if (!_browserLinkInitializerAdded && _isBrowserLinkTrackingEnabled) {
            var browserLinkPaths_1 = ["/browserLinkSignalR/", "/__browserLink/"];
            var dropBrowserLinkRequests = function(envelope) {
              if (_isBrowserLinkTrackingEnabled && envelope.baseType === RemoteDependencyData[
                _DYN_DATA_TYPE
                /* @min:%2edataType */
              ]) {
                var remoteData = envelope.baseData;
                if (remoteData) {
                  for (var i = 0; i < browserLinkPaths_1[
                    _DYN_LENGTH3
                    /* @min:%2elength */
                  ]; i++) {
                    if (remoteData.target && strIndexOf(remoteData.target, browserLinkPaths_1[i]) >= 0) {
                      return false;
                    }
                  }
                }
              }
              return true;
            };
            _self[
              _DYN__ADD_HOOK
              /* @min:%2e_addHook */
            ](_self[
              _DYN_ADD_TELEMETRY_INITIA7
              /* @min:%2eaddTelemetryInitializer */
            ](dropBrowserLinkRequests));
            _browserLinkInitializerAdded = true;
          }
        }
        function _sendCORSException(exception, properties) {
          var telemetryItem = createTelemetryItem(exception, Exception[
            _DYN_DATA_TYPE
            /* @min:%2edataType */
          ], Exception[
            _DYN_ENVELOPE_TYPE
            /* @min:%2eenvelopeType */
          ], _self[
            _DYN_DIAG_LOG2
            /* @min:%2ediagLog */
          ](), properties);
          _self[
            _DYN_CORE
            /* @min:%2ecore */
          ][
            _DYN_TRACK
            /* @min:%2etrack */
          ](telemetryItem);
        }
        function _updateExceptionTracking() {
          var _window = getWindow();
          var locn = getLocation(true);
          _self[
            _DYN__ADD_HOOK
            /* @min:%2e_addHook */
          ](onConfigChange(_extConfig, function() {
            _disableExceptionTracking = _extConfig.disableExceptionTracking;
            if (!_disableExceptionTracking && !_autoExceptionInstrumented && !_extConfig.autoExceptionInstrumented) {
              _addHook(InstrumentEvent(_window, "onerror", {
                ns: _evtNamespace,
                rsp: function(callDetails, message, url, lineNumber, columnNumber, error) {
                  if (!_disableExceptionTracking && callDetails.rslt !== true) {
                    _self[
                      _DYN__ONERROR
                      /* @min:%2e_onerror */
                    ](Exception[
                      _DYN__CREATE_AUTO_EXCEPTI6
                      /* @min:%2eCreateAutoException */
                    ](message, url, lineNumber, columnNumber, error, callDetails.evt));
                  }
                }
              }, false));
              _autoExceptionInstrumented = true;
            }
          }));
          _addUnhandledPromiseRejectionTracking(_window, locn);
        }
        function _updateLocationChange() {
          var win = getWindow();
          var locn = getLocation(true);
          _self[
            _DYN__ADD_HOOK
            /* @min:%2e_addHook */
          ](onConfigChange(_extConfig, function() {
            _enableAutoRouteTracking = _extConfig[
              _DYN_ENABLE_AUTO_ROUTE_TR11
              /* @min:%2eenableAutoRouteTracking */
            ] === true;
            if (win && _enableAutoRouteTracking && !_historyListenerAdded && hasHistory()) {
              var _history = getHistory();
              if (isFunction(_history.pushState) && isFunction(_history.replaceState) && typeof Event !== strShimUndefined) {
                _addHistoryListener(win, _history, locn);
              }
            }
          }));
        }
        function _getDistributedTraceCtx() {
          var distributedTraceCtx = null;
          if (_self[
            _DYN_CORE
            /* @min:%2ecore */
          ] && _self[
            _DYN_CORE
            /* @min:%2ecore */
          ].getTraceCtx) {
            distributedTraceCtx = _self[
              _DYN_CORE
              /* @min:%2ecore */
            ].getTraceCtx(false);
          }
          if (!distributedTraceCtx) {
            var properties = _self[
              _DYN_CORE
              /* @min:%2ecore */
            ].getPlugin(PropertiesPluginIdentifier);
            if (properties) {
              var context = properties.plugin.context;
              if (context) {
                distributedTraceCtx = createDistributedTraceContextFromTrace(context.telemetryTrace);
              }
            }
          }
          return distributedTraceCtx;
        }
        function _addHistoryListener(win, history, locn) {
          if (_historyListenerAdded) {
            return;
          }
          var namePrefix = _extConfig.namePrefix || "";
          function _popstateHandler() {
            if (_enableAutoRouteTracking) {
              _dispatchEvent(win, createDomEvent(namePrefix + "locationchange"));
            }
          }
          function _locationChangeHandler() {
            if (_currUri) {
              _prevUri = _currUri;
              _currUri = locn && locn[
                _DYN_HREF
                /* @min:%2ehref */
              ] || "";
            } else {
              _currUri = locn && locn[
                _DYN_HREF
                /* @min:%2ehref */
              ] || "";
            }
            if (_enableAutoRouteTracking) {
              var distributedTraceCtx = _getDistributedTraceCtx();
              if (distributedTraceCtx) {
                distributedTraceCtx.setTraceId(generateW3CId());
                var traceLocationName = "_unknown_";
                if (locn && locn.pathname) {
                  traceLocationName = locn.pathname + (locn.hash || "");
                }
                distributedTraceCtx.setName(dataSanitizeString(_self[
                  _DYN_DIAG_LOG2
                  /* @min:%2ediagLog */
                ](), traceLocationName));
              }
              scheduleTimeout((function(uri) {
                _self[
                  _DYN_TRACK_PAGE_VIEW
                  /* @min:%2etrackPageView */
                ]({ refUri: uri, properties: { duration: 0 } });
              }).bind(_self, _prevUri), _self.autoRoutePVDelay);
            }
          }
          _addHook(InstrumentEvent(history, "pushState", {
            ns: _evtNamespace,
            rsp: function() {
              if (_enableAutoRouteTracking) {
                _dispatchEvent(win, createDomEvent(namePrefix + "pushState"));
                _dispatchEvent(win, createDomEvent(namePrefix + "locationchange"));
              }
            }
          }, true));
          _addHook(InstrumentEvent(history, "replaceState", {
            ns: _evtNamespace,
            rsp: function() {
              if (_enableAutoRouteTracking) {
                _dispatchEvent(win, createDomEvent(namePrefix + "replaceState"));
                _dispatchEvent(win, createDomEvent(namePrefix + "locationchange"));
              }
            }
          }, true));
          eventOn(win, namePrefix + "popstate", _popstateHandler, _evtNamespace);
          eventOn(win, namePrefix + "locationchange", _locationChangeHandler, _evtNamespace);
          _historyListenerAdded = true;
        }
        function _addUnhandledPromiseRejectionTracking(_window, _location) {
          _self[
            _DYN__ADD_HOOK
            /* @min:%2e_addHook */
          ](onConfigChange(_extConfig, function() {
            _enableUnhandledPromiseRejectionTracking = _extConfig[
              _DYN_ENABLE_UNHANDLED_PRO12
              /* @min:%2eenableUnhandledPromiseRejectionTracking */
            ] === true;
            _autoExceptionInstrumented = _autoExceptionInstrumented || _extConfig[
              _DYN_AUTO_UNHANDLED_PROMI13
              /* @min:%2eautoUnhandledPromiseInstrumented */
            ];
            if (_enableUnhandledPromiseRejectionTracking && !_autoUnhandledPromiseInstrumented) {
              _addHook(InstrumentEvent(_window, "onunhandledrejection", {
                ns: _evtNamespace,
                rsp: function(callDetails, error) {
                  if (_enableUnhandledPromiseRejectionTracking && callDetails.rslt !== true) {
                    _self[
                      _DYN__ONERROR
                      /* @min:%2e_onerror */
                    ](Exception[
                      _DYN__CREATE_AUTO_EXCEPTI6
                      /* @min:%2eCreateAutoException */
                    ](_getReason(error), _location ? _location[
                      _DYN_HREF
                      /* @min:%2ehref */
                    ] : "", 0, 0, error, callDetails.evt));
                  }
                }
              }, false));
              _extConfig[
                _DYN_AUTO_UNHANDLED_PROMI13
                /* @min:%2eautoUnhandledPromiseInstrumented */
              ] = _autoUnhandledPromiseInstrumented = true;
            }
          }));
        }
        function _throwInternal2(severity, msgId, msg, properties, isUserAct) {
          _self[
            _DYN_DIAG_LOG2
            /* @min:%2ediagLog */
          ]().throwInternal(severity, msgId, msg, properties, isUserAct);
        }
        function _initDefaults() {
          _eventTracking = null;
          _pageTracking = null;
          _pageViewManager = null;
          _pageViewPerformanceManager = null;
          _pageVisitTimeManager = null;
          _preInitTelemetryInitializers = null;
          _isBrowserLinkTrackingEnabled = false;
          _browserLinkInitializerAdded = false;
          _enableAutoRouteTracking = false;
          _historyListenerAdded = false;
          _disableExceptionTracking = false;
          _autoExceptionInstrumented = false;
          _enableUnhandledPromiseRejectionTracking = false;
          _autoUnhandledPromiseInstrumented = false;
          _autoTrackPageVisitTime = false;
          _trackAjaxAttempts = 0;
          var location2 = getLocation(true);
          _prevUri = location2 && location2[
            _DYN_HREF
            /* @min:%2ehref */
          ] || "";
          _currUri = null;
          _evtNamespace = null;
          _extConfig = null;
          objDefine(_self, "config", {
            g: function() {
              return _extConfig;
            }
          });
        }
        objDefine(_self, "_pageViewManager", { g: function() {
          return _pageViewManager;
        } });
        objDefine(_self, "_pageViewPerformanceManager", { g: function() {
          return _pageViewPerformanceManager;
        } });
        objDefine(_self, "_pageVisitTimeManager", { g: function() {
          return _pageVisitTimeManager;
        } });
        objDefine(_self, "_evtNamespace", { g: function() {
          return "." + _evtNamespace;
        } });
      });
      return _this;
    }
    AnalyticsPlugin2.Version = "3.2.1";
    return AnalyticsPlugin2;
  }(BaseTelemetryPlugin)
);

// node_modules/@microsoft/applicationinsights-cfgsync-js/dist-es5/__DynamicConstants.js
var _DYN_FEATURE_OPT_IN = "featureOptIn";
var _DYN_ON_CFG_CHANGE_RECEIV0 = "onCfgChangeReceive";
var _DYN_NON_OVERRIDE_CONFIGS = "nonOverrideConfigs";
var _DYN_SCHEDULE_FETCH_TIMEO1 = "scheduleFetchTimeout";

// node_modules/@microsoft/applicationinsights-cfgsync-js/dist-es5/CfgSyncHelperFuncs.js
function replaceByNonOverrideCfg(cfg, nonOverrideConfigs, curLevel, maxLevel) {
  try {
    var exceedMaxLevel = curLevel > maxLevel;
    if (exceedMaxLevel) {
      cfg = null;
    }
    var curCfg_1 = curLevel == 0 ? objExtend({}, cfg) : cfg;
    if (curCfg_1 && nonOverrideConfigs && !exceedMaxLevel) {
      objForEachKey(curCfg_1, function(key) {
        var nonOverrideVal = nonOverrideConfigs[key];
        if (!!nonOverrideVal) {
          if (isObject(curCfg_1[key]) && isObject(nonOverrideVal)) {
            curCfg_1[key] = replaceByNonOverrideCfg(curCfg_1[key], nonOverrideVal, ++curLevel, maxLevel);
          } else {
            delete curCfg_1[key];
          }
        }
      });
    }
    return curCfg_1;
  } catch (e) {
  }
  return cfg;
}
var F = "featureOptIn.";
var M = ".mode";
var ON = ".onCfg";
var OFF = ".offCfg";
function resolveCdnFeatureCfg(field, cdnCfg, userOptInDetails) {
  var _a12;
  if (!cdnCfg || !cdnCfg.enabled) {
    return null;
  }
  var cdnFt = (cdnCfg[
    _DYN_FEATURE_OPT_IN
    /* @min:%2efeatureOptIn */
  ] || {})[field] || {
    mode: 1
    /* CdnFeatureMode.none */
  };
  var cdnM = cdnFt.mode;
  var cdnOnV = cdnFt.onCfg;
  var cdnOffV = cdnFt.offCfg;
  var userFt = (userOptInDetails || {})[field] || {
    mode: 2
    /* FeatureOptInMode.disable */
  };
  var userM = userFt.mode;
  var userOnV = userFt.onCfg;
  var userOffV = userFt.offCfg;
  var blockCdn = !!userFt.blockCdnCfg;
  var mFld = F + field + M;
  var onFld = F + field + ON;
  var offFld = F + field + OFF;
  var mode = userM;
  var onV = userOnV;
  var offV = userOffV;
  if (!blockCdn) {
    if (cdnM === 4 || cdnM === 5) {
      mode = cdnM == 4 ? 3 : 2;
      onV = cdnOnV || userOnV;
      offV = cdnOffV || userOffV;
    } else if (cdnM === 2 || userM === 2) {
      mode = 2;
      onV = userOnV || cdnOnV;
      offV = userOffV || cdnOffV;
    } else if (cdnM === 3) {
      mode = 3;
      onV = userOnV || cdnOnV;
      offV = userOffV || cdnOffV;
    } else if (cdnM === 1 && userM === 1) {
      mode = 1;
    }
  }
  return _a12 = {}, _a12[mFld] = mode, _a12[onFld] = onV, _a12[offFld] = offV, _a12;
}
function applyCdnfeatureCfg(cdnCfg, core) {
  try {
    if (!cdnCfg || !cdnCfg.enabled) {
      return null;
    }
    if (!cdnCfg[
      _DYN_FEATURE_OPT_IN
      /* @min:%2efeatureOptIn */
    ]) {
      return cdnCfg.config;
    }
    var optInMap = cdnCfg[
      _DYN_FEATURE_OPT_IN
      /* @min:%2efeatureOptIn */
    ];
    var cdnConfig_1 = cdnCfg.config || {};
    objForEachKey(optInMap, function(key) {
      var featureVal = resolveCdnFeatureCfg(key, cdnCfg, core.config[
        _DYN_FEATURE_OPT_IN
        /* @min:%2efeatureOptIn */
      ]);
      if (!isNullOrUndefined(featureVal)) {
        objForEachKey(featureVal, function(config, val) {
          setValueByKey(cdnConfig_1, config, val);
        });
        _overrideCdnCfgByFeature(key, featureVal, cdnConfig_1);
      }
    });
    return cdnConfig_1;
  } catch (e) {
  }
  return null;
}
function _overrideCdnCfgByFeature(field, ftVal, config) {
  var mode = ftVal[F + field + M];
  var val = ftVal[F + field + ON];
  var dVal = ftVal[F + field + OFF];
  var target = null;
  if (mode === 3) {
    target = val;
  }
  if (mode === 2) {
    target = dVal;
  }
  if (target) {
    objForEachKey(target, function(key, cfg) {
      setValueByKey(config, key, cfg);
    });
  }
}

// node_modules/@microsoft/applicationinsights-cfgsync-js/dist-es5/CfgSyncPlugin.js
var _a7;
var EVENT_NAME = "ai_cfgsync";
var STR_GET_METHOD = "GET";
var FETCH_TIMEOUT = 18e5;
var udfVal = void 0;
var defaultNonOverrideCfg = { instrumentationKey: true, connectionString: true, endpointUrl: true };
var _defaultConfig = objDeepFreeze((_a7 = {
  syncMode: 1,
  blkCdnCfg: udfVal,
  customEvtName: udfVal,
  cfgUrl: udfVal,
  overrideSyncFn: udfVal,
  overrideFetchFn: udfVal
}, _a7[
  _DYN_ON_CFG_CHANGE_RECEIV0
  /* @min:onCfgChangeReceive */
] = udfVal, _a7[
  _DYN_SCHEDULE_FETCH_TIMEO1
  /* @min:scheduleFetchTimeout */
] = FETCH_TIMEOUT, _a7[
  _DYN_NON_OVERRIDE_CONFIGS
  /* @min:nonOverrideConfigs */
] = defaultNonOverrideCfg, _a7));
var CfgSyncPlugin = (
  /** @class */
  function(_super) {
    __extendsFn(CfgSyncPlugin2, _super);
    function CfgSyncPlugin2() {
      var _this = _super.call(this) || this;
      _this.priority = 198;
      _this.identifier = "AppInsightsCfgSyncPlugin";
      var _extensionConfig;
      var _mainConfig;
      var _evtName;
      var _evtNamespace;
      var _cfgUrl;
      var _timeoutHandle;
      var _receiveChanges;
      var _broadcastChanges;
      var _blkCdnCfg;
      var _fetchTimeout;
      var _retryCnt;
      var _onCfgChangeReceive;
      var _nonOverrideConfigs;
      var _fetchFn;
      var _overrideFetchFn;
      var _overrideSyncFn;
      var _paused = false;
      dynamicProto(CfgSyncPlugin2, _this, function(_self, _base) {
        _initDefaults();
        _self.initialize = function(config, core, extensions, pluginChain) {
          _base.initialize(config, core, extensions, pluginChain);
          _evtNamespace = mergeEvtNamespace(createUniqueNamespace(_self.identifier), core.evtNamespace && core.evtNamespace());
          _populateDefaults(config);
        };
        _self.getCfg = function() {
          return _mainConfig;
        };
        _self.pause = function() {
          _paused = true;
          _clearScheduledTimer();
        };
        _self.resume = function() {
          _paused = false;
          _setupTimer();
        };
        _self.setCfg = function(config) {
          return _setCfg(config);
        };
        _self.sync = function(customDetails) {
          return _sendCfgsyncEvents(customDetails);
        };
        _self.updateEventListenerName = function(eventName) {
          return _updateEventListenerName(eventName);
        };
        _self._doTeardown = function(unloadCtx, unloadState) {
          _eventOff();
          _clearScheduledTimer();
          _initDefaults();
        };
        _self["_getDbgPlgTargets"] = function() {
          return [_broadcastChanges, _receiveChanges, _evtName, _blkCdnCfg, _nonOverrideConfigs];
        };
        function _initDefaults() {
          _mainConfig = null;
          _evtName = null;
          _evtNamespace = null;
          _cfgUrl = null;
          _receiveChanges = null;
          _broadcastChanges = null;
          _nonOverrideConfigs = null;
          _timeoutHandle = null;
          _fetchTimeout = null;
          _retryCnt = null;
          _blkCdnCfg = null;
          _overrideFetchFn = null;
          _overrideSyncFn = null;
          _onCfgChangeReceive = null;
        }
        function _populateDefaults(config) {
          var identifier = _self.identifier;
          var core = _self.core;
          _self._addHook(onConfigChange(config, function() {
            var ctx = createProcessTelemetryContext(null, config, core);
            _extensionConfig = ctx.getExtCfg(identifier, _defaultConfig);
            var preBlkCdn = _blkCdnCfg;
            _blkCdnCfg = !!_extensionConfig.blkCdnCfg;
            if (!isNullOrUndefined(preBlkCdn) && preBlkCdn !== _blkCdnCfg) {
              if (!_blkCdnCfg && _cfgUrl) {
                _fetchFn && _fetchFn(_cfgUrl, _onFetchComplete, _broadcastChanges);
              } else {
                _clearScheduledTimer();
              }
            }
            if (isNullOrUndefined(_receiveChanges)) {
              _receiveChanges = _extensionConfig.syncMode === 2;
            }
            if (isNullOrUndefined(_broadcastChanges)) {
              _broadcastChanges = _extensionConfig.syncMode === 1;
            }
            var newEvtName = _extensionConfig.customEvtName || EVENT_NAME;
            if (_evtName !== newEvtName) {
              if (_receiveChanges) {
                _updateEventListenerName(newEvtName);
              } else {
                _eventOff();
                _evtName = newEvtName;
              }
            }
            if (isNullOrUndefined(_cfgUrl)) {
              _cfgUrl = _extensionConfig.cfgUrl;
            }
            if (!_cfgUrl) {
              _mainConfig = config;
              if (_broadcastChanges) {
                _sendCfgsyncEvents();
              }
            }
          }));
          _overrideSyncFn = _extensionConfig.overrideSyncFn;
          _overrideFetchFn = _extensionConfig.overrideFetchFn;
          _onCfgChangeReceive = _extensionConfig[
            _DYN_ON_CFG_CHANGE_RECEIV0
            /* @min:%2eonCfgChangeReceive */
          ];
          _nonOverrideConfigs = _extensionConfig[
            _DYN_NON_OVERRIDE_CONFIGS
            /* @min:%2enonOverrideConfigs */
          ];
          _fetchTimeout = _extensionConfig[
            _DYN_SCHEDULE_FETCH_TIMEO1
            /* @min:%2escheduleFetchTimeout */
          ];
          _fetchFn = _getFetchFnInterface();
          _retryCnt = 0;
          if (_cfgUrl && !_blkCdnCfg) {
            _fetchFn && _fetchFn(_cfgUrl, _onFetchComplete, _broadcastChanges);
          }
        }
        function _setCfg(config, isAutoSync) {
          if (config) {
            _mainConfig = config;
            if (!!isAutoSync && !_paused) {
              return _sendCfgsyncEvents();
            }
            if (_receiveChanges && !_paused) {
              _self.core.updateCfg(config);
              return true;
            }
          }
          return false;
        }
        function _eventOff() {
          try {
            var global_1 = getGlobal();
            if (global_1) {
              eventOff(global_1, null, null, _evtNamespace);
            }
          } catch (e) {
          }
        }
        function _sendCfgsyncEvents(customDetails) {
          try {
            if (!!_overrideSyncFn && isFunction(_overrideSyncFn)) {
              return _overrideSyncFn(_mainConfig, customDetails);
            }
            return sendCustomEvent(_evtName, _mainConfig, customDetails);
          } catch (e) {
          }
          return false;
        }
        function _updateEventListenerName(name) {
          try {
            _eventOff();
            if (name) {
              _evtName = name;
              _addEventListener();
            }
            return true;
          } catch (e) {
          }
          return false;
        }
        function _getFetchFnInterface() {
          var _fetchFn2 = _overrideFetchFn;
          if (isNullOrUndefined(_fetchFn2)) {
            if (isFetchSupported()) {
              _fetchFn2 = _fetchSender;
            } else if (isXhrSupported()) {
              _fetchFn2 = _xhrSender;
            }
          }
          return _fetchFn2;
        }
        function _fetchSender(url, oncomplete, isAutoSync) {
          var global2 = getGlobal();
          var fetchFn = global2 && global2.fetch || null;
          if (url && fetchFn && isFunction(fetchFn)) {
            try {
              var init = {
                method: STR_GET_METHOD
              };
              var request = new Request(url, init);
              doAwaitResponse(fetch(request), function(result) {
                var response = result.value;
                if (!result.rejected) {
                  if (response.ok) {
                    doAwaitResponse(response.text(), function(res) {
                      _doOnComplete(oncomplete, response.status, res.value, isAutoSync);
                    });
                  } else {
                    _doOnComplete(oncomplete, response.status, null, isAutoSync);
                  }
                } else {
                  _doOnComplete(oncomplete, 400);
                }
              });
            } catch (e) {
            }
          }
        }
        function _xhrSender(url, oncomplete, isAutoSync) {
          try {
            var xhr_1 = new XMLHttpRequest();
            xhr_1.open(STR_GET_METHOD, url);
            xhr_1.onreadystatechange = function() {
              if (xhr_1.readyState === XMLHttpRequest.DONE) {
                _doOnComplete(oncomplete, xhr_1.status, xhr_1.responseText, isAutoSync);
              }
            };
            xhr_1.onerror = function() {
              _doOnComplete(oncomplete, 400);
            };
            xhr_1.ontimeout = function() {
              _doOnComplete(oncomplete, 400);
            };
            xhr_1.send();
          } catch (e) {
          }
        }
        function _onFetchComplete(status, response, isAutoSync) {
          try {
            if (status >= 200 && status < 400 && response) {
              _retryCnt = 0;
              var JSON_1 = getJSON();
              if (JSON_1) {
                var cdnCfg = JSON_1.parse(response);
                var cfg = applyCdnfeatureCfg(cdnCfg, _self.core);
                var newCfg = cfg && isPlainObject(cfg) && _replaceTartgetByKeys(cfg);
                newCfg && _setCfg(newCfg, isAutoSync);
              }
            } else {
              _retryCnt++;
            }
            if (_retryCnt < 3) {
              _setupTimer();
            }
          } catch (e) {
          }
        }
        function _doOnComplete(oncomplete, status, response, isAutoSync) {
          try {
            oncomplete(status, response, isAutoSync);
          } catch (e) {
          }
        }
        function _addEventListener() {
          if (_receiveChanges) {
            var global_2 = getGlobal();
            if (global_2) {
              try {
                eventOn(global_2, _evtName, function(event) {
                  var cfgEvent = event && event.detail;
                  if (_onCfgChangeReceive && cfgEvent) {
                    _onCfgChangeReceive(cfgEvent);
                  } else {
                    var cfg = cfgEvent && cfgEvent.cfg;
                    var newCfg = cfg && isPlainObject(cfg) && _replaceTartgetByKeys(cfg);
                    newCfg && _setCfg(newCfg);
                  }
                }, _evtNamespace, true);
              } catch (e) {
              }
            }
          }
        }
        function _replaceTartgetByKeys(cfg, level) {
          var _cfg = null;
          try {
            if (cfg) {
              _cfg = replaceByNonOverrideCfg(cfg, _nonOverrideConfigs, 0, 5);
            }
          } catch (e) {
          }
          return _cfg;
        }
        function _setupTimer() {
          if (!_timeoutHandle && _fetchTimeout) {
            _timeoutHandle = scheduleTimeout(function() {
              _timeoutHandle = null;
              _fetchFn(_cfgUrl, _onFetchComplete, _broadcastChanges);
            }, _fetchTimeout);
            _timeoutHandle.unref();
          }
        }
        function _clearScheduledTimer() {
          _timeoutHandle && _timeoutHandle.cancel();
          _timeoutHandle = null;
          _retryCnt = 0;
        }
        _self.processTelemetry = function(env, itemCtx) {
          _self.processNext(env, itemCtx);
        };
      });
      return _this;
    }
    CfgSyncPlugin2.__ieDyn = 1;
    return CfgSyncPlugin2;
  }(BaseTelemetryPlugin)
);

// node_modules/@microsoft/applicationinsights-channel-js/dist-es5/InternalConstants.js
var STR_DURATION = "duration";

// node_modules/@microsoft/applicationinsights-channel-js/dist-es5/__DynamicConstants.js
var _DYN_TAGS = "tags";
var _DYN_DEVICE_TYPE = "deviceType";
var _DYN_DATA2 = "data";
var _DYN_NAME3 = "name";
var _DYN_TRACE_ID2 = "traceID";
var _DYN_LENGTH4 = "length";
var _DYN_STRINGIFY2 = "stringify";
var _DYN_MEASUREMENTS2 = "measurements";
var _DYN_DATA_TYPE2 = "dataType";
var _DYN_ENVELOPE_TYPE2 = "envelopeType";
var _DYN_TO_STRING3 = "toString";
var _DYN__GET = "_get";
var _DYN_ENQUEUE = "enqueue";
var _DYN_COUNT2 = "count";
var _DYN_EVENTS_LIMIT_IN_MEM = "eventsLimitInMem";
var _DYN_PUSH3 = "push";
var _DYN_ITEM = "item";
var _DYN_EMIT_LINE_DELIMITED_0 = "emitLineDelimitedJson";
var _DYN_CLEAR = "clear";
var _DYN_CREATE_NEW2 = "createNew";
var _DYN_MARK_AS_SENT = "markAsSent";
var _DYN_CLEAR_SENT = "clearSent";
var _DYN_BUFFER_OVERRIDE = "bufferOverride";
var _DYN__BUFFER__KEY = "BUFFER_KEY";
var _DYN__SENT__BUFFER__KEY = "SENT_BUFFER_KEY";
var _DYN_CONCAT = "concat";
var _DYN__MAX__BUFFER__SIZE = "MAX_BUFFER_SIZE";
var _DYN_TRIGGER_SEND = "triggerSend";
var _DYN_DIAG_LOG3 = "diagLog";
var _DYN_INITIALIZE2 = "initialize";
var _DYN__SENDER = "_sender";
var _DYN_CUSTOM_HEADERS = "customHeaders";
var _DYN_MAX_BATCH_SIZE_IN_BY1 = "maxBatchSizeInBytes";
var _DYN_ONUNLOAD_DISABLE_BEA2 = "onunloadDisableBeacon";
var _DYN_IS_BEACON_API_DISABL3 = "isBeaconApiDisabled";
var _DYN_ALWAYS_USE_XHR_OVERR4 = "alwaysUseXhrOverride";
var _DYN_DISABLE_XHR = "disableXhr";
var _DYN_ENABLE_SESSION_STORA5 = "enableSessionStorageBuffer";
var _DYN__BUFFER = "_buffer";
var _DYN_ONUNLOAD_DISABLE_FET6 = "onunloadDisableFetch";
var _DYN_DISABLE_SEND_BEACON_7 = "disableSendBeaconSplit";
var _DYN_INSTRUMENTATION_KEY = "instrumentationKey";
var _DYN_ENABLE_SEND_PROMISE = "enableSendPromise";
var _DYN_GET_SENDER_INST = "getSenderInst";
var _DYN_UNLOAD_TRANSPORTS = "unloadTransports";
var _DYN_CONVERT_UNDEFINED = "convertUndefined";
var _DYN_MAX_BATCH_INTERVAL = "maxBatchInterval";
var _DYN_SERIALIZE = "serialize";
var _DYN__ON_ERROR = "_onError";
var _DYN__ON_PARTIAL_SUCCESS = "_onPartialSuccess";
var _DYN__ON_SUCCESS = "_onSuccess";
var _DYN_ITEMS_RECEIVED2 = "itemsReceived";
var _DYN_ITEMS_ACCEPTED = "itemsAccepted";
var _DYN_ORI_PAYLOAD = "oriPayload";
var _DYN_BASE_TYPE = "baseType";
var _DYN_SAMPLE_RATE = "sampleRate";
var _DYN_EVENTS_SEND_REQUEST = "eventsSendRequest";
var _DYN_GET_SAMPLING_SCORE = "getSamplingScore";
var _DYN_GET_HASH_CODE_SCORE = "getHashCodeScore";

// node_modules/@microsoft/applicationinsights-channel-js/dist-es5/EnvelopeCreator.js
var strBaseType = "baseType";
var strBaseData = "baseData";
var strProperties = "properties";
var strTrue = "true";
function _setValueIf(target, field, value) {
  return setValue(target, field, value, isTruthy);
}
function _extractPartAExtensions(logger, item, env) {
  var envTags = env[
    _DYN_TAGS
    /* @min:%2etags */
  ] = env[
    _DYN_TAGS
    /* @min:%2etags */
  ] || {};
  var itmExt = item.ext = item.ext || {};
  var itmTags = item[
    _DYN_TAGS
    /* @min:%2etags */
  ] = item[
    _DYN_TAGS
    /* @min:%2etags */
  ] || [];
  var extUser = itmExt.user;
  if (extUser) {
    _setValueIf(envTags, CtxTagKeys.userAuthUserId, extUser.authId);
    _setValueIf(envTags, CtxTagKeys.userId, extUser.id || extUser.localId);
  }
  var extApp = itmExt.app;
  if (extApp) {
    _setValueIf(envTags, CtxTagKeys.sessionId, extApp.sesId);
  }
  var extDevice = itmExt.device;
  if (extDevice) {
    _setValueIf(envTags, CtxTagKeys.deviceId, extDevice.id || extDevice.localId);
    _setValueIf(envTags, CtxTagKeys[
      _DYN_DEVICE_TYPE
      /* @min:%2edeviceType */
    ], extDevice.deviceClass);
    _setValueIf(envTags, CtxTagKeys.deviceIp, extDevice.ip);
    _setValueIf(envTags, CtxTagKeys.deviceModel, extDevice.model);
    _setValueIf(envTags, CtxTagKeys[
      _DYN_DEVICE_TYPE
      /* @min:%2edeviceType */
    ], extDevice[
      _DYN_DEVICE_TYPE
      /* @min:%2edeviceType */
    ]);
  }
  var web = item.ext.web;
  if (web) {
    _setValueIf(envTags, CtxTagKeys.deviceLanguage, web.browserLang);
    _setValueIf(envTags, CtxTagKeys.deviceBrowserVersion, web.browserVer);
    _setValueIf(envTags, CtxTagKeys.deviceBrowser, web.browser);
    var envData = env[
      _DYN_DATA2
      /* @min:%2edata */
    ] = env[
      _DYN_DATA2
      /* @min:%2edata */
    ] || {};
    var envBaseData = envData[strBaseData] = envData[strBaseData] || {};
    var envProps = envBaseData[strProperties] = envBaseData[strProperties] || {};
    _setValueIf(envProps, "domain", web.domain);
    _setValueIf(envProps, "isManual", web.isManual ? strTrue : null);
    _setValueIf(envProps, "screenRes", web.screenRes);
    _setValueIf(envProps, "userConsent", web.userConsent ? strTrue : null);
  }
  var extOs = itmExt.os;
  if (extOs) {
    _setValueIf(envTags, CtxTagKeys.deviceOS, extOs[
      _DYN_NAME3
      /* @min:%2ename */
    ]);
    _setValueIf(envTags, CtxTagKeys.deviceOSVersion, extOs.osVer);
  }
  var extTrace = itmExt.trace;
  if (extTrace) {
    _setValueIf(envTags, CtxTagKeys.operationParentId, extTrace.parentID);
    _setValueIf(envTags, CtxTagKeys.operationName, dataSanitizeString(logger, extTrace[
      _DYN_NAME3
      /* @min:%2ename */
    ]));
    _setValueIf(envTags, CtxTagKeys.operationId, extTrace[
      _DYN_TRACE_ID2
      /* @min:%2etraceID */
    ]);
  }
  var tgs = {};
  for (var i = itmTags[
    _DYN_LENGTH4
    /* @min:%2elength */
  ] - 1; i >= 0; i--) {
    var tg = itmTags[i];
    objForEachKey(tg, function(key, value) {
      tgs[key] = value;
    });
    itmTags.splice(i, 1);
  }
  objForEachKey(itmTags, function(tg2, value) {
    tgs[tg2] = value;
  });
  var theTags = __assignFn(__assignFn({}, envTags), tgs);
  if (!theTags[CtxTagKeys.internalSdkVersion]) {
    theTags[CtxTagKeys.internalSdkVersion] = dataSanitizeString(logger, "javascript:".concat(EnvelopeCreator.Version), 64);
  }
  env[
    _DYN_TAGS
    /* @min:%2etags */
  ] = optimizeObject(theTags);
}
function _extractPropsAndMeasurements(data, properties, measurements) {
  if (!isNullOrUndefined(data)) {
    objForEachKey(data, function(key, value) {
      if (isNumber(value)) {
        measurements[key] = value;
      } else if (isString(value)) {
        properties[key] = value;
      } else if (hasJSON()) {
        properties[key] = getJSON()[
          _DYN_STRINGIFY2
          /* @min:%2estringify */
        ](value);
      }
    });
  }
}
function _convertPropsUndefinedToCustomDefinedValue(properties, customUndefinedValue) {
  if (!isNullOrUndefined(properties)) {
    objForEachKey(properties, function(key, value) {
      properties[key] = value || customUndefinedValue;
    });
  }
}
function _createEnvelope(logger, envelopeType, telemetryItem, data) {
  var envelope = new Envelope(logger, data, envelopeType);
  _setValueIf(envelope, "sampleRate", telemetryItem[SampleRate]);
  if ((telemetryItem[strBaseData] || {}).startTime) {
    envelope.time = toISOString(telemetryItem[strBaseData].startTime);
  }
  envelope.iKey = telemetryItem.iKey;
  var iKeyNoDashes = telemetryItem.iKey.replace(/-/g, "");
  envelope[
    _DYN_NAME3
    /* @min:%2ename */
  ] = envelope[
    _DYN_NAME3
    /* @min:%2ename */
  ].replace("{0}", iKeyNoDashes);
  _extractPartAExtensions(logger, telemetryItem, envelope);
  telemetryItem[
    _DYN_TAGS
    /* @min:%2etags */
  ] = telemetryItem[
    _DYN_TAGS
    /* @min:%2etags */
  ] || [];
  return optimizeObject(envelope);
}
function EnvelopeCreatorInit(logger, telemetryItem) {
  if (isNullOrUndefined(telemetryItem[strBaseData])) {
    _throwInternal(logger, 1, 46, "telemetryItem.baseData cannot be null.");
  }
}
var EnvelopeCreator = {
  Version: "3.2.1"
};
function DependencyEnvelopeCreator(logger, telemetryItem, customUndefinedValue) {
  EnvelopeCreatorInit(logger, telemetryItem);
  var customMeasurements = telemetryItem[strBaseData][
    _DYN_MEASUREMENTS2
    /* @min:%2emeasurements */
  ] || {};
  var customProperties = telemetryItem[strBaseData][strProperties] || {};
  _extractPropsAndMeasurements(telemetryItem[
    _DYN_DATA2
    /* @min:%2edata */
  ], customProperties, customMeasurements);
  if (!isNullOrUndefined(customUndefinedValue)) {
    _convertPropsUndefinedToCustomDefinedValue(customProperties, customUndefinedValue);
  }
  var bd = telemetryItem[strBaseData];
  if (isNullOrUndefined(bd)) {
    _warnToConsole(logger, "Invalid input for dependency data");
    return null;
  }
  var method = bd[strProperties] && bd[strProperties][HttpMethod] ? bd[strProperties][HttpMethod] : "GET";
  var remoteDepData = new RemoteDependencyData(logger, bd.id, bd.target, bd[
    _DYN_NAME3
    /* @min:%2ename */
  ], bd[
    STR_DURATION
    /* @min:%2eduration */
  ], bd.success, bd.responseCode, method, bd.type, bd.correlationContext, customProperties, customMeasurements);
  var data = new Data(RemoteDependencyData[
    _DYN_DATA_TYPE2
    /* @min:%2edataType */
  ], remoteDepData);
  return _createEnvelope(logger, RemoteDependencyData[
    _DYN_ENVELOPE_TYPE2
    /* @min:%2eenvelopeType */
  ], telemetryItem, data);
}
function EventEnvelopeCreator(logger, telemetryItem, customUndefinedValue) {
  EnvelopeCreatorInit(logger, telemetryItem);
  var customProperties = {};
  var customMeasurements = {};
  if (telemetryItem[strBaseType] !== Event2[
    _DYN_DATA_TYPE2
    /* @min:%2edataType */
  ]) {
    customProperties["baseTypeSource"] = telemetryItem[strBaseType];
  }
  if (telemetryItem[strBaseType] === Event2[
    _DYN_DATA_TYPE2
    /* @min:%2edataType */
  ]) {
    customProperties = telemetryItem[strBaseData][strProperties] || {};
    customMeasurements = telemetryItem[strBaseData][
      _DYN_MEASUREMENTS2
      /* @min:%2emeasurements */
    ] || {};
  } else {
    if (telemetryItem[strBaseData]) {
      _extractPropsAndMeasurements(telemetryItem[strBaseData], customProperties, customMeasurements);
    }
  }
  _extractPropsAndMeasurements(telemetryItem[
    _DYN_DATA2
    /* @min:%2edata */
  ], customProperties, customMeasurements);
  if (!isNullOrUndefined(customUndefinedValue)) {
    _convertPropsUndefinedToCustomDefinedValue(customProperties, customUndefinedValue);
  }
  var eventName = telemetryItem[strBaseData][
    _DYN_NAME3
    /* @min:%2ename */
  ];
  var eventData = new Event2(logger, eventName, customProperties, customMeasurements);
  var data = new Data(Event2[
    _DYN_DATA_TYPE2
    /* @min:%2edataType */
  ], eventData);
  return _createEnvelope(logger, Event2[
    _DYN_ENVELOPE_TYPE2
    /* @min:%2eenvelopeType */
  ], telemetryItem, data);
}
function ExceptionEnvelopeCreator(logger, telemetryItem, customUndefinedValue) {
  EnvelopeCreatorInit(logger, telemetryItem);
  var customMeasurements = telemetryItem[strBaseData][
    _DYN_MEASUREMENTS2
    /* @min:%2emeasurements */
  ] || {};
  var customProperties = telemetryItem[strBaseData][strProperties] || {};
  _extractPropsAndMeasurements(telemetryItem[
    _DYN_DATA2
    /* @min:%2edata */
  ], customProperties, customMeasurements);
  if (!isNullOrUndefined(customUndefinedValue)) {
    _convertPropsUndefinedToCustomDefinedValue(customProperties, customUndefinedValue);
  }
  var bd = telemetryItem[strBaseData];
  var exData = Exception.CreateFromInterface(logger, bd, customProperties, customMeasurements);
  var data = new Data(Exception[
    _DYN_DATA_TYPE2
    /* @min:%2edataType */
  ], exData);
  return _createEnvelope(logger, Exception[
    _DYN_ENVELOPE_TYPE2
    /* @min:%2eenvelopeType */
  ], telemetryItem, data);
}
function MetricEnvelopeCreator(logger, telemetryItem, customUndefinedValue) {
  EnvelopeCreatorInit(logger, telemetryItem);
  var baseData = telemetryItem[strBaseData];
  var props = baseData[strProperties] || {};
  var measurements = baseData[
    _DYN_MEASUREMENTS2
    /* @min:%2emeasurements */
  ] || {};
  _extractPropsAndMeasurements(telemetryItem[
    _DYN_DATA2
    /* @min:%2edata */
  ], props, measurements);
  if (!isNullOrUndefined(customUndefinedValue)) {
    _convertPropsUndefinedToCustomDefinedValue(props, customUndefinedValue);
  }
  var baseMetricData = new Metric(logger, baseData[
    _DYN_NAME3
    /* @min:%2ename */
  ], baseData.average, baseData.sampleCount, baseData.min, baseData.max, baseData.stdDev, props, measurements);
  var data = new Data(Metric[
    _DYN_DATA_TYPE2
    /* @min:%2edataType */
  ], baseMetricData);
  return _createEnvelope(logger, Metric[
    _DYN_ENVELOPE_TYPE2
    /* @min:%2eenvelopeType */
  ], telemetryItem, data);
}
function PageViewEnvelopeCreator(logger, telemetryItem, customUndefinedValue) {
  EnvelopeCreatorInit(logger, telemetryItem);
  var duration;
  var baseData = telemetryItem[strBaseData];
  if (!isNullOrUndefined(baseData) && !isNullOrUndefined(baseData[strProperties]) && !isNullOrUndefined(baseData[strProperties][STR_DURATION])) {
    duration = baseData[strProperties][STR_DURATION];
    delete baseData[strProperties][STR_DURATION];
  } else if (!isNullOrUndefined(telemetryItem[
    _DYN_DATA2
    /* @min:%2edata */
  ]) && !isNullOrUndefined(telemetryItem[
    _DYN_DATA2
    /* @min:%2edata */
  ][STR_DURATION])) {
    duration = telemetryItem[
      _DYN_DATA2
      /* @min:%2edata */
    ][STR_DURATION];
    delete telemetryItem[
      _DYN_DATA2
      /* @min:%2edata */
    ][STR_DURATION];
  }
  var bd = telemetryItem[strBaseData];
  var currentContextId;
  if (((telemetryItem.ext || {}).trace || {})[
    _DYN_TRACE_ID2
    /* @min:%2etraceID */
  ]) {
    currentContextId = telemetryItem.ext.trace[
      _DYN_TRACE_ID2
      /* @min:%2etraceID */
    ];
  }
  var id = bd.id || currentContextId;
  var name = bd[
    _DYN_NAME3
    /* @min:%2ename */
  ];
  var url = bd.uri;
  var properties = bd[strProperties] || {};
  var measurements = bd[
    _DYN_MEASUREMENTS2
    /* @min:%2emeasurements */
  ] || {};
  if (!isNullOrUndefined(bd.refUri)) {
    properties["refUri"] = bd.refUri;
  }
  if (!isNullOrUndefined(bd.pageType)) {
    properties["pageType"] = bd.pageType;
  }
  if (!isNullOrUndefined(bd.isLoggedIn)) {
    properties["isLoggedIn"] = bd.isLoggedIn[
      _DYN_TO_STRING3
      /* @min:%2etoString */
    ]();
  }
  if (!isNullOrUndefined(bd[strProperties])) {
    var pageTags = bd[strProperties];
    objForEachKey(pageTags, function(key, value) {
      properties[key] = value;
    });
  }
  _extractPropsAndMeasurements(telemetryItem[
    _DYN_DATA2
    /* @min:%2edata */
  ], properties, measurements);
  if (!isNullOrUndefined(customUndefinedValue)) {
    _convertPropsUndefinedToCustomDefinedValue(properties, customUndefinedValue);
  }
  var pageViewData = new PageView(logger, name, url, duration, properties, measurements, id);
  var data = new Data(PageView[
    _DYN_DATA_TYPE2
    /* @min:%2edataType */
  ], pageViewData);
  return _createEnvelope(logger, PageView[
    _DYN_ENVELOPE_TYPE2
    /* @min:%2eenvelopeType */
  ], telemetryItem, data);
}
function PageViewPerformanceEnvelopeCreator(logger, telemetryItem, customUndefinedValue) {
  EnvelopeCreatorInit(logger, telemetryItem);
  var bd = telemetryItem[strBaseData];
  var name = bd[
    _DYN_NAME3
    /* @min:%2ename */
  ];
  var url = bd.uri || bd.url;
  var properties = bd[strProperties] || {};
  var measurements = bd[
    _DYN_MEASUREMENTS2
    /* @min:%2emeasurements */
  ] || {};
  _extractPropsAndMeasurements(telemetryItem[
    _DYN_DATA2
    /* @min:%2edata */
  ], properties, measurements);
  if (!isNullOrUndefined(customUndefinedValue)) {
    _convertPropsUndefinedToCustomDefinedValue(properties, customUndefinedValue);
  }
  var baseData = new PageViewPerformance(logger, name, url, void 0, properties, measurements, bd);
  var data = new Data(PageViewPerformance[
    _DYN_DATA_TYPE2
    /* @min:%2edataType */
  ], baseData);
  return _createEnvelope(logger, PageViewPerformance[
    _DYN_ENVELOPE_TYPE2
    /* @min:%2eenvelopeType */
  ], telemetryItem, data);
}
function TraceEnvelopeCreator(logger, telemetryItem, customUndefinedValue) {
  EnvelopeCreatorInit(logger, telemetryItem);
  var message = telemetryItem[strBaseData].message;
  var severityLevel = telemetryItem[strBaseData].severityLevel;
  var props = telemetryItem[strBaseData][strProperties] || {};
  var measurements = telemetryItem[strBaseData][
    _DYN_MEASUREMENTS2
    /* @min:%2emeasurements */
  ] || {};
  _extractPropsAndMeasurements(telemetryItem[
    _DYN_DATA2
    /* @min:%2edata */
  ], props, measurements);
  if (!isNullOrUndefined(customUndefinedValue)) {
    _convertPropsUndefinedToCustomDefinedValue(props, customUndefinedValue);
  }
  var baseData = new Trace(logger, message, severityLevel, props, measurements);
  var data = new Data(Trace[
    _DYN_DATA_TYPE2
    /* @min:%2edataType */
  ], baseData);
  return _createEnvelope(logger, Trace[
    _DYN_ENVELOPE_TYPE2
    /* @min:%2eenvelopeType */
  ], telemetryItem, data);
}

// node_modules/@microsoft/applicationinsights-channel-js/dist-es5/SendBuffer.js
var BaseSendBuffer = (
  /** @class */
  function() {
    function BaseSendBuffer2(logger, config) {
      var _buffer = [];
      var _bufferFullMessageSent = false;
      var _maxRetryCnt = config.maxRetryCnt;
      this[
        _DYN__GET
        /* @min:%2e_get */
      ] = function() {
        return _buffer;
      };
      this._set = function(buffer) {
        _buffer = buffer;
        return _buffer;
      };
      dynamicProto(BaseSendBuffer2, this, function(_self) {
        _self[
          _DYN_ENQUEUE
          /* @min:%2eenqueue */
        ] = function(payload) {
          if (_self[
            _DYN_COUNT2
            /* @min:%2ecount */
          ]() >= config[
            _DYN_EVENTS_LIMIT_IN_MEM
            /* @min:%2eeventsLimitInMem */
          ]) {
            if (!_bufferFullMessageSent) {
              _throwInternal(logger, 2, 105, "Maximum in-memory buffer size reached: " + _self[
                _DYN_COUNT2
                /* @min:%2ecount */
              ](), true);
              _bufferFullMessageSent = true;
            }
            return;
          }
          payload.cnt = payload.cnt || 0;
          if (!isNullOrUndefined(_maxRetryCnt)) {
            if (payload.cnt > _maxRetryCnt) {
              return;
            }
          }
          _buffer[
            _DYN_PUSH3
            /* @min:%2epush */
          ](payload);
          return;
        };
        _self[
          _DYN_COUNT2
          /* @min:%2ecount */
        ] = function() {
          return _buffer[
            _DYN_LENGTH4
            /* @min:%2elength */
          ];
        };
        _self.size = function() {
          var size = _buffer[
            _DYN_LENGTH4
            /* @min:%2elength */
          ];
          for (var lp = 0; lp < _buffer[
            _DYN_LENGTH4
            /* @min:%2elength */
          ]; lp++) {
            size += _buffer[lp].item[
              _DYN_LENGTH4
              /* @min:%2elength */
            ];
          }
          if (!config[
            _DYN_EMIT_LINE_DELIMITED_0
            /* @min:%2eemitLineDelimitedJson */
          ]) {
            size += 2;
          }
          return size;
        };
        _self[
          _DYN_CLEAR
          /* @min:%2eclear */
        ] = function() {
          _buffer = [];
          _bufferFullMessageSent = false;
        };
        _self.getItems = function() {
          return _buffer.slice(0);
        };
        _self.batchPayloads = function(payloads) {
          if (payloads && payloads[
            _DYN_LENGTH4
            /* @min:%2elength */
          ] > 0) {
            var payloadStr_1 = [];
            arrForEach(payloads, function(payload) {
              payloadStr_1[
                _DYN_PUSH3
                /* @min:%2epush */
              ](payload[
                _DYN_ITEM
                /* @min:%2eitem */
              ]);
            });
            var batch = config[
              _DYN_EMIT_LINE_DELIMITED_0
              /* @min:%2eemitLineDelimitedJson */
            ] ? payloadStr_1.join("\n") : "[" + payloadStr_1.join(",") + "]";
            return batch;
          }
          return null;
        };
        _self[
          _DYN_CREATE_NEW2
          /* @min:%2ecreateNew */
        ] = function(newLogger, newConfig, canUseSessionStorage) {
          var items = _buffer.slice(0);
          newLogger = newLogger || logger;
          newConfig = newConfig || {};
          var newBuffer = !!canUseSessionStorage ? new SessionStorageSendBuffer(newLogger, newConfig) : new ArraySendBuffer(newLogger, newConfig);
          arrForEach(items, function(payload) {
            newBuffer[
              _DYN_ENQUEUE
              /* @min:%2eenqueue */
            ](payload);
          });
          return newBuffer;
        };
      });
    }
    BaseSendBuffer2.__ieDyn = 1;
    return BaseSendBuffer2;
  }()
);
var ArraySendBuffer = (
  /** @class */
  function(_super) {
    __extendsFn(ArraySendBuffer2, _super);
    function ArraySendBuffer2(logger, config) {
      var _this = _super.call(this, logger, config) || this;
      dynamicProto(ArraySendBuffer2, _this, function(_self, _base) {
        _self[
          _DYN_MARK_AS_SENT
          /* @min:%2emarkAsSent */
        ] = function(payload) {
          _base[
            _DYN_CLEAR
            /* @min:%2eclear */
          ]();
        };
        _self[
          _DYN_CLEAR_SENT
          /* @min:%2eclearSent */
        ] = function(payload) {
        };
      });
      return _this;
    }
    ArraySendBuffer2.__ieDyn = 1;
    return ArraySendBuffer2;
  }(BaseSendBuffer)
);
var PREVIOUS_KEYS = ["AI_buffer", "AI_sentBuffer"];
var SessionStorageSendBuffer = (
  /** @class */
  function(_super) {
    __extendsFn(SessionStorageSendBuffer2, _super);
    function SessionStorageSendBuffer2(logger, config) {
      var _this = _super.call(this, logger, config) || this;
      var _bufferFullMessageSent = false;
      var _namePrefix = config === null || config === void 0 ? void 0 : config.namePrefix;
      var _b4 = config[
        _DYN_BUFFER_OVERRIDE
        /* @min:%2ebufferOverride */
      ] || { getItem: utlGetSessionStorage, setItem: utlSetSessionStorage }, getItem = _b4.getItem, setItem = _b4.setItem;
      var _maxRetryCnt = config.maxRetryCnt;
      dynamicProto(SessionStorageSendBuffer2, _this, function(_self, _base) {
        var bufferItems = _getBuffer(SessionStorageSendBuffer2[
          _DYN__BUFFER__KEY
          /* @min:%2eBUFFER_KEY */
        ]);
        var itemsInSentBuffer = _getBuffer(SessionStorageSendBuffer2[
          _DYN__SENT__BUFFER__KEY
          /* @min:%2eSENT_BUFFER_KEY */
        ]);
        var previousItems = _getPreviousEvents();
        var notDeliveredItems = itemsInSentBuffer[
          _DYN_CONCAT
          /* @min:%2econcat */
        ](previousItems);
        var buffer = _self._set(bufferItems[
          _DYN_CONCAT
          /* @min:%2econcat */
        ](notDeliveredItems));
        if (buffer[
          _DYN_LENGTH4
          /* @min:%2elength */
        ] > SessionStorageSendBuffer2[
          _DYN__MAX__BUFFER__SIZE
          /* @min:%2eMAX_BUFFER_SIZE */
        ]) {
          buffer[
            _DYN_LENGTH4
            /* @min:%2elength */
          ] = SessionStorageSendBuffer2[
            _DYN__MAX__BUFFER__SIZE
            /* @min:%2eMAX_BUFFER_SIZE */
          ];
        }
        _setBuffer(SessionStorageSendBuffer2[
          _DYN__SENT__BUFFER__KEY
          /* @min:%2eSENT_BUFFER_KEY */
        ], []);
        _setBuffer(SessionStorageSendBuffer2[
          _DYN__BUFFER__KEY
          /* @min:%2eBUFFER_KEY */
        ], buffer);
        _self[
          _DYN_ENQUEUE
          /* @min:%2eenqueue */
        ] = function(payload) {
          if (_self[
            _DYN_COUNT2
            /* @min:%2ecount */
          ]() >= SessionStorageSendBuffer2[
            _DYN__MAX__BUFFER__SIZE
            /* @min:%2eMAX_BUFFER_SIZE */
          ]) {
            if (!_bufferFullMessageSent) {
              _throwInternal(logger, 2, 67, "Maximum buffer size reached: " + _self[
                _DYN_COUNT2
                /* @min:%2ecount */
              ](), true);
              _bufferFullMessageSent = true;
            }
            return;
          }
          payload.cnt = payload.cnt || 0;
          if (!isNullOrUndefined(_maxRetryCnt)) {
            if (payload.cnt > _maxRetryCnt) {
              return;
            }
          }
          _base[
            _DYN_ENQUEUE
            /* @min:%2eenqueue */
          ](payload);
          _setBuffer(SessionStorageSendBuffer2.BUFFER_KEY, _self[
            _DYN__GET
            /* @min:%2e_get */
          ]());
        };
        _self[
          _DYN_CLEAR
          /* @min:%2eclear */
        ] = function() {
          _base[
            _DYN_CLEAR
            /* @min:%2eclear */
          ]();
          _setBuffer(SessionStorageSendBuffer2.BUFFER_KEY, _self[
            _DYN__GET
            /* @min:%2e_get */
          ]());
          _setBuffer(SessionStorageSendBuffer2[
            _DYN__SENT__BUFFER__KEY
            /* @min:%2eSENT_BUFFER_KEY */
          ], []);
          _bufferFullMessageSent = false;
        };
        _self[
          _DYN_MARK_AS_SENT
          /* @min:%2emarkAsSent */
        ] = function(payload) {
          _setBuffer(SessionStorageSendBuffer2[
            _DYN__BUFFER__KEY
            /* @min:%2eBUFFER_KEY */
          ], _self._set(_removePayloadsFromBuffer(payload, _self[
            _DYN__GET
            /* @min:%2e_get */
          ]())));
          var sentElements = _getBuffer(SessionStorageSendBuffer2[
            _DYN__SENT__BUFFER__KEY
            /* @min:%2eSENT_BUFFER_KEY */
          ]);
          if (sentElements instanceof Array && payload instanceof Array) {
            sentElements = sentElements[
              _DYN_CONCAT
              /* @min:%2econcat */
            ](payload);
            if (sentElements[
              _DYN_LENGTH4
              /* @min:%2elength */
            ] > SessionStorageSendBuffer2[
              _DYN__MAX__BUFFER__SIZE
              /* @min:%2eMAX_BUFFER_SIZE */
            ]) {
              _throwInternal(logger, 1, 67, "Sent buffer reached its maximum size: " + sentElements[
                _DYN_LENGTH4
                /* @min:%2elength */
              ], true);
              sentElements[
                _DYN_LENGTH4
                /* @min:%2elength */
              ] = SessionStorageSendBuffer2[
                _DYN__MAX__BUFFER__SIZE
                /* @min:%2eMAX_BUFFER_SIZE */
              ];
            }
            _setBuffer(SessionStorageSendBuffer2[
              _DYN__SENT__BUFFER__KEY
              /* @min:%2eSENT_BUFFER_KEY */
            ], sentElements);
          }
        };
        _self[
          _DYN_CLEAR_SENT
          /* @min:%2eclearSent */
        ] = function(payload) {
          var sentElements = _getBuffer(SessionStorageSendBuffer2[
            _DYN__SENT__BUFFER__KEY
            /* @min:%2eSENT_BUFFER_KEY */
          ]);
          sentElements = _removePayloadsFromBuffer(payload, sentElements);
          _setBuffer(SessionStorageSendBuffer2[
            _DYN__SENT__BUFFER__KEY
            /* @min:%2eSENT_BUFFER_KEY */
          ], sentElements);
        };
        _self[
          _DYN_CREATE_NEW2
          /* @min:%2ecreateNew */
        ] = function(newLogger, newConfig, canUseSessionStorage) {
          canUseSessionStorage = !!canUseSessionStorage;
          var unsentItems = _self[
            _DYN__GET
            /* @min:%2e_get */
          ]().slice(0);
          var sentItems = _getBuffer(SessionStorageSendBuffer2[
            _DYN__SENT__BUFFER__KEY
            /* @min:%2eSENT_BUFFER_KEY */
          ]).slice(0);
          newLogger = newLogger || logger;
          newConfig = newConfig || {};
          _self[
            _DYN_CLEAR
            /* @min:%2eclear */
          ]();
          var newBuffer = canUseSessionStorage ? new SessionStorageSendBuffer2(newLogger, newConfig) : new ArraySendBuffer(newLogger, newConfig);
          arrForEach(unsentItems, function(payload) {
            newBuffer[
              _DYN_ENQUEUE
              /* @min:%2eenqueue */
            ](payload);
          });
          if (canUseSessionStorage) {
            newBuffer[
              _DYN_MARK_AS_SENT
              /* @min:%2emarkAsSent */
            ](sentItems);
          }
          return newBuffer;
        };
        function _removePayloadsFromBuffer(payloads, buffer2) {
          var remaining = [];
          var payloadStr = [];
          arrForEach(payloads, function(payload) {
            payloadStr[
              _DYN_PUSH3
              /* @min:%2epush */
            ](payload[
              _DYN_ITEM
              /* @min:%2eitem */
            ]);
          });
          arrForEach(buffer2, function(value) {
            if (!isFunction(value) && arrIndexOf(payloadStr, value[
              _DYN_ITEM
              /* @min:%2eitem */
            ]) === -1) {
              remaining[
                _DYN_PUSH3
                /* @min:%2epush */
              ](value);
            }
          });
          return remaining;
        }
        function _getBuffer(key) {
          var prefixedKey = key;
          prefixedKey = _namePrefix ? _namePrefix + "_" + prefixedKey : prefixedKey;
          return _getBufferBase(prefixedKey);
        }
        function _getBufferBase(key) {
          try {
            var bufferJson = getItem(logger, key);
            if (bufferJson) {
              var buffer_1 = getJSON().parse(bufferJson);
              if (isString(buffer_1)) {
                buffer_1 = getJSON().parse(buffer_1);
              }
              if (buffer_1 && isArray(buffer_1)) {
                return buffer_1;
              }
            }
          } catch (e) {
            _throwInternal(logger, 1, 42, " storage key: " + key + ", " + getExceptionName(e), { exception: dumpObj(e) });
          }
          return [];
        }
        function _setBuffer(key, buffer2) {
          var prefixedKey = key;
          try {
            prefixedKey = _namePrefix ? _namePrefix + "_" + prefixedKey : prefixedKey;
            var bufferJson = JSON[
              _DYN_STRINGIFY2
              /* @min:%2estringify */
            ](buffer2);
            setItem(logger, prefixedKey, bufferJson);
          } catch (e) {
            setItem(logger, prefixedKey, JSON[
              _DYN_STRINGIFY2
              /* @min:%2estringify */
            ]([]));
            _throwInternal(logger, 2, 41, " storage key: " + prefixedKey + ", " + getExceptionName(e) + ". Buffer cleared", { exception: dumpObj(e) });
          }
        }
        function _getPreviousEvents() {
          var items = [];
          try {
            arrForEach(PREVIOUS_KEYS, function(key) {
              var events = _getItemsFromPreviousKey(key);
              items = items[
                _DYN_CONCAT
                /* @min:%2econcat */
              ](events);
              if (_namePrefix) {
                var prefixedKey = _namePrefix + "_" + key;
                var prefixEvents = _getItemsFromPreviousKey(prefixedKey);
                items = items[
                  _DYN_CONCAT
                  /* @min:%2econcat */
                ](prefixEvents);
              }
            });
            return items;
          } catch (e) {
            _throwInternal(logger, 2, 41, "Transfer events from previous buffers: " + getExceptionName(e) + ". previous Buffer items can not be removed", { exception: dumpObj(e) });
          }
          return [];
        }
        function _getItemsFromPreviousKey(key) {
          try {
            var items = _getBufferBase(key);
            var transFormedItems_1 = [];
            arrForEach(items, function(item) {
              var internalItem = {
                item,
                cnt: 0
                // previous events will be default to 0 count
              };
              transFormedItems_1[
                _DYN_PUSH3
                /* @min:%2epush */
              ](internalItem);
            });
            utlRemoveSessionStorage(logger, key);
            return transFormedItems_1;
          } catch (e) {
          }
          return [];
        }
      });
      return _this;
    }
    var _a12;
    _a12 = SessionStorageSendBuffer2;
    SessionStorageSendBuffer2.VERSION = "_1";
    SessionStorageSendBuffer2.BUFFER_KEY = "AI_buffer" + _a12.VERSION;
    SessionStorageSendBuffer2.SENT_BUFFER_KEY = "AI_sentBuffer" + _a12.VERSION;
    SessionStorageSendBuffer2.MAX_BUFFER_SIZE = 2e3;
    return SessionStorageSendBuffer2;
  }(BaseSendBuffer)
);

// node_modules/@microsoft/applicationinsights-channel-js/dist-es5/Serializer.js
var Serializer = (
  /** @class */
  function() {
    function Serializer2(logger) {
      dynamicProto(Serializer2, this, function(_self) {
        _self[
          _DYN_SERIALIZE
          /* @min:%2eserialize */
        ] = function(input) {
          var output = _serializeObject(input, "root");
          try {
            return getJSON()[
              _DYN_STRINGIFY2
              /* @min:%2estringify */
            ](output);
          } catch (e) {
            _throwInternal(logger, 1, 48, e && isFunction(e[
              _DYN_TO_STRING3
              /* @min:%2etoString */
            ]) ? e[
              _DYN_TO_STRING3
              /* @min:%2etoString */
            ]() : "Error serializing object", null, true);
          }
        };
        function _serializeObject(source, name) {
          var circularReferenceCheck = "__aiCircularRefCheck";
          var output = {};
          if (!source) {
            _throwInternal(logger, 1, 48, "cannot serialize object because it is null or undefined", { name }, true);
            return output;
          }
          if (source[circularReferenceCheck]) {
            _throwInternal(logger, 2, 50, "Circular reference detected while serializing object", { name }, true);
            return output;
          }
          if (!source.aiDataContract) {
            if (name === "measurements") {
              output = _serializeStringMap(source, "number", name);
            } else if (name === "properties") {
              output = _serializeStringMap(source, "string", name);
            } else if (name === "tags") {
              output = _serializeStringMap(source, "string", name);
            } else if (isArray(source)) {
              output = _serializeArray(source, name);
            } else {
              _throwInternal(logger, 2, 49, "Attempting to serialize an object which does not implement ISerializable", { name }, true);
              try {
                getJSON()[
                  _DYN_STRINGIFY2
                  /* @min:%2estringify */
                ](source);
                output = source;
              } catch (e) {
                _throwInternal(logger, 1, 48, e && isFunction(e[
                  _DYN_TO_STRING3
                  /* @min:%2etoString */
                ]) ? e[
                  _DYN_TO_STRING3
                  /* @min:%2etoString */
                ]() : "Error serializing object", null, true);
              }
            }
            return output;
          }
          source[circularReferenceCheck] = true;
          objForEachKey(source.aiDataContract, function(field, contract) {
            var isRequired = isFunction(contract) ? contract() & 1 : contract & 1;
            var isHidden = isFunction(contract) ? contract() & 4 : contract & 4;
            var isArray2 = contract & 2;
            var isPresent = source[field] !== void 0;
            var isObj = isObject(source[field]) && source[field] !== null;
            if (isRequired && !isPresent && !isArray2) {
              _throwInternal(logger, 1, 24, "Missing required field specification. The field is required but not present on source", { field, name });
            } else if (!isHidden) {
              var value = void 0;
              if (isObj) {
                if (isArray2) {
                  value = _serializeArray(source[field], field);
                } else {
                  value = _serializeObject(source[field], field);
                }
              } else {
                value = source[field];
              }
              if (value !== void 0) {
                output[field] = value;
              }
            }
          });
          delete source[circularReferenceCheck];
          return output;
        }
        function _serializeArray(sources, name) {
          var output;
          if (!!sources) {
            if (!isArray(sources)) {
              _throwInternal(logger, 1, 54, "This field was specified as an array in the contract but the item is not an array.\r\n", { name }, true);
            } else {
              output = [];
              for (var i = 0; i < sources[
                _DYN_LENGTH4
                /* @min:%2elength */
              ]; i++) {
                var source = sources[i];
                var item = _serializeObject(source, name + "[" + i + "]");
                output[
                  _DYN_PUSH3
                  /* @min:%2epush */
                ](item);
              }
            }
          }
          return output;
        }
        function _serializeStringMap(map, expectedType, name) {
          var output;
          if (map) {
            output = {};
            objForEachKey(map, function(field, value) {
              if (expectedType === "string") {
                if (value === void 0) {
                  output[field] = "undefined";
                } else if (value === null) {
                  output[field] = "null";
                } else if (!value[
                  _DYN_TO_STRING3
                  /* @min:%2etoString */
                ]) {
                  output[field] = "invalid field: toString() is not defined.";
                } else {
                  output[field] = value[
                    _DYN_TO_STRING3
                    /* @min:%2etoString */
                  ]();
                }
              } else if (expectedType === "number") {
                if (value === void 0) {
                  output[field] = "undefined";
                } else if (value === null) {
                  output[field] = "null";
                } else {
                  var num = parseFloat(value);
                  output[field] = num;
                }
              } else {
                output[field] = "invalid field: " + name + " is of unknown type.";
                _throwInternal(logger, 1, output[field], null, true);
              }
            });
          }
          return output;
        }
      });
    }
    Serializer2.__ieDyn = 1;
    return Serializer2;
  }()
);

// node_modules/@microsoft/applicationinsights-channel-js/dist-es5/TelemetryProcessors/SamplingScoreGenerators/HashCodeScoreGenerator.js
var MIN_INPUT_LENGTH = 8;
var HashCodeScoreGenerator = (
  /** @class */
  function() {
    function HashCodeScoreGenerator2() {
    }
    HashCodeScoreGenerator2.prototype.getHashCodeScore = function(key) {
      var score = this.getHashCode(key) / HashCodeScoreGenerator2.INT_MAX_VALUE;
      return score * 100;
    };
    HashCodeScoreGenerator2.prototype.getHashCode = function(input) {
      if (input === "") {
        return 0;
      }
      while (input[
        _DYN_LENGTH4
        /* @min:%2elength */
      ] < MIN_INPUT_LENGTH) {
        input = input[
          _DYN_CONCAT
          /* @min:%2econcat */
        ](input);
      }
      var hash = 5381;
      for (var i = 0; i < input[
        _DYN_LENGTH4
        /* @min:%2elength */
      ]; ++i) {
        hash = (hash << 5) + hash + input.charCodeAt(i);
        hash = hash & hash;
      }
      return Math.abs(hash);
    };
    HashCodeScoreGenerator2.INT_MAX_VALUE = 2147483647;
    return HashCodeScoreGenerator2;
  }()
);

// node_modules/@microsoft/applicationinsights-channel-js/dist-es5/TelemetryProcessors/SamplingScoreGenerators/SamplingScoreGenerator.js
var SamplingScoreGenerator = (
  /** @class */
  /* @__PURE__ */ function() {
    function SamplingScoreGenerator2() {
      var _self = this;
      var hashCodeGenerator = new HashCodeScoreGenerator();
      var keys = new ContextTagKeys();
      _self[
        _DYN_GET_SAMPLING_SCORE
        /* @min:%2egetSamplingScore */
      ] = function(item) {
        var score = 0;
        if (item[
          _DYN_TAGS
          /* @min:%2etags */
        ] && item[
          _DYN_TAGS
          /* @min:%2etags */
        ][keys.userId]) {
          score = hashCodeGenerator.getHashCodeScore(item[
            _DYN_TAGS
            /* @min:%2etags */
          ][keys.userId]);
        } else if (item.ext && item.ext.user && item.ext.user.id) {
          score = hashCodeGenerator[
            _DYN_GET_HASH_CODE_SCORE
            /* @min:%2egetHashCodeScore */
          ](item.ext.user.id);
        } else if (item[
          _DYN_TAGS
          /* @min:%2etags */
        ] && item[
          _DYN_TAGS
          /* @min:%2etags */
        ][keys.operationId]) {
          score = hashCodeGenerator.getHashCodeScore(item[
            _DYN_TAGS
            /* @min:%2etags */
          ][keys.operationId]);
        } else if (item.ext && item.ext.telemetryTrace && item.ext.telemetryTrace[
          _DYN_TRACE_ID2
          /* @min:%2etraceID */
        ]) {
          score = hashCodeGenerator.getHashCodeScore(item.ext.telemetryTrace[
            _DYN_TRACE_ID2
            /* @min:%2etraceID */
          ]);
        } else {
          score = Math.random() * 100;
        }
        return score;
      };
    }
    return SamplingScoreGenerator2;
  }()
);

// node_modules/@microsoft/applicationinsights-channel-js/dist-es5/TelemetryProcessors/Sample.js
var Sample = (
  /** @class */
  function() {
    function Sample2(sampleRate, logger) {
      this.INT_MAX_VALUE = 2147483647;
      var _logger = logger || safeGetLogger(null);
      if (sampleRate > 100 || sampleRate < 0) {
        _logger.throwInternal(2, 58, "Sampling rate is out of range (0..100). Sampling will be disabled, you may be sending too much data which may affect your AI service level.", { samplingRate: sampleRate }, true);
        sampleRate = 100;
      }
      this[
        _DYN_SAMPLE_RATE
        /* @min:%2esampleRate */
      ] = sampleRate;
      this.samplingScoreGenerator = new SamplingScoreGenerator();
    }
    Sample2.prototype.isSampledIn = function(envelope) {
      var samplingPercentage = this[
        _DYN_SAMPLE_RATE
        /* @min:%2esampleRate */
      ];
      var isSampledIn = false;
      if (samplingPercentage === null || samplingPercentage === void 0 || samplingPercentage >= 100) {
        return true;
      } else if (envelope.baseType === Metric[
        _DYN_DATA_TYPE2
        /* @min:%2edataType */
      ]) {
        return true;
      }
      isSampledIn = this.samplingScoreGenerator[
        _DYN_GET_SAMPLING_SCORE
        /* @min:%2egetSamplingScore */
      ](envelope) < samplingPercentage;
      return isSampledIn;
    };
    return Sample2;
  }()
);

// node_modules/@microsoft/applicationinsights-channel-js/dist-es5/Sender.js
var _a8;
var _b2;
var UNDEFINED_VALUE2 = void 0;
var EMPTY_STR = "";
var FetchSyncRequestSizeLimitBytes = 65e3;
function _getResponseText(xhr) {
  try {
    return xhr.responseText;
  } catch (e) {
  }
  return null;
}
function isOverrideFn(httpXHROverride) {
  return httpXHROverride && httpXHROverride.sendPOST;
}
var defaultAppInsightsChannelConfig = objDeepFreeze((_a8 = {
  // Use the default value (handles empty string in the configuration)
  endpointUrl: cfgDfValidate(isTruthy, DEFAULT_BREEZE_ENDPOINT + DEFAULT_BREEZE_PATH)
}, _a8[
  _DYN_EMIT_LINE_DELIMITED_0
  /* @min:emitLineDelimitedJson */
] = cfgDfBoolean(), _a8[
  _DYN_MAX_BATCH_INTERVAL
  /* @min:maxBatchInterval */
] = 15e3, _a8[
  _DYN_MAX_BATCH_SIZE_IN_BY1
  /* @min:maxBatchSizeInBytes */
] = 102400, _a8.disableTelemetry = cfgDfBoolean(), _a8[
  _DYN_ENABLE_SESSION_STORA5
  /* @min:enableSessionStorageBuffer */
] = cfgDfBoolean(true), _a8.isRetryDisabled = cfgDfBoolean(), _a8[
  _DYN_IS_BEACON_API_DISABL3
  /* @min:isBeaconApiDisabled */
] = cfgDfBoolean(true), _a8[
  _DYN_DISABLE_SEND_BEACON_7
  /* @min:disableSendBeaconSplit */
] = cfgDfBoolean(true), _a8[
  _DYN_DISABLE_XHR
  /* @min:disableXhr */
] = cfgDfBoolean(), _a8[
  _DYN_ONUNLOAD_DISABLE_FET6
  /* @min:onunloadDisableFetch */
] = cfgDfBoolean(), _a8[
  _DYN_ONUNLOAD_DISABLE_BEA2
  /* @min:onunloadDisableBeacon */
] = cfgDfBoolean(), _a8[
  _DYN_INSTRUMENTATION_KEY
  /* @min:instrumentationKey */
] = UNDEFINED_VALUE2, _a8.namePrefix = UNDEFINED_VALUE2, _a8.samplingPercentage = cfgDfValidate(_chkSampling2, 100), _a8[
  _DYN_CUSTOM_HEADERS
  /* @min:customHeaders */
] = UNDEFINED_VALUE2, _a8[
  _DYN_CONVERT_UNDEFINED
  /* @min:convertUndefined */
] = UNDEFINED_VALUE2, _a8[
  _DYN_EVENTS_LIMIT_IN_MEM
  /* @min:eventsLimitInMem */
] = 1e4, _a8[
  _DYN_BUFFER_OVERRIDE
  /* @min:bufferOverride */
] = false, _a8.httpXHROverride = { isVal: isOverrideFn, v: UNDEFINED_VALUE2 }, _a8[
  _DYN_ALWAYS_USE_XHR_OVERR4
  /* @min:alwaysUseXhrOverride */
] = cfgDfBoolean(), _a8.transports = UNDEFINED_VALUE2, _a8.retryCodes = UNDEFINED_VALUE2, _a8.maxRetryCnt = { isVal: isNumber, v: 10 }, _a8));
function _chkSampling2(value) {
  return !isNaN(value) && value > 0 && value <= 100;
}
var EnvelopeTypeCreator = (_b2 = {}, _b2[Event2.dataType] = EventEnvelopeCreator, _b2[Trace.dataType] = TraceEnvelopeCreator, _b2[PageView.dataType] = PageViewEnvelopeCreator, _b2[PageViewPerformance.dataType] = PageViewPerformanceEnvelopeCreator, _b2[Exception.dataType] = ExceptionEnvelopeCreator, _b2[Metric.dataType] = MetricEnvelopeCreator, _b2[RemoteDependencyData.dataType] = DependencyEnvelopeCreator, _b2);
var Sender = (
  /** @class */
  function(_super) {
    __extendsFn(Sender2, _super);
    function Sender2() {
      var _this = _super.call(this) || this;
      _this.priority = 1001;
      _this.identifier = BreezeChannelIdentifier;
      var _consecutiveErrors;
      var _retryAt;
      var _lastSend;
      var _paused;
      var _timeoutHandle;
      var _serializer;
      var _stamp_specific_redirects;
      var _headers;
      var _syncFetchPayload = 0;
      var _syncUnloadSender;
      var _offlineListener;
      var _evtNamespace;
      var _endpointUrl;
      var _orgEndpointUrl;
      var _maxBatchSizeInBytes;
      var _beaconSupported;
      var _beaconOnUnloadSupported;
      var _beaconNormalSupported;
      var _customHeaders;
      var _disableTelemetry;
      var _instrumentationKey;
      var _convertUndefined;
      var _isRetryDisabled;
      var _maxBatchInterval;
      var _sessionStorageUsed;
      var _bufferOverrideUsed;
      var _namePrefix;
      var _enableSendPromise;
      var _alwaysUseCustomSend;
      var _disableXhr;
      var _fetchKeepAlive;
      var _xhrSend;
      var _fallbackSend;
      var _disableBeaconSplit;
      var _sendPostMgr;
      var _retryCodes;
      dynamicProto(Sender2, _this, function(_self, _base) {
        _initDefaults();
        _self.pause = function() {
          _clearScheduledTimer();
          _paused = true;
        };
        _self.resume = function() {
          if (_paused) {
            _paused = false;
            _retryAt = null;
            _checkMaxSize();
            _setupTimer();
          }
        };
        _self.flush = function(isAsync, callBack, sendReason) {
          if (isAsync === void 0) {
            isAsync = true;
          }
          if (!_paused) {
            _clearScheduledTimer();
            try {
              return _self[
                _DYN_TRIGGER_SEND
                /* @min:%2etriggerSend */
              ](
                isAsync,
                null,
                sendReason || 1
                /* SendRequestReason.ManualFlush */
              );
            } catch (e) {
              _throwInternal(_self[
                _DYN_DIAG_LOG3
                /* @min:%2ediagLog */
              ](), 1, 22, "flush failed, telemetry will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
            }
          }
        };
        _self.onunloadFlush = function() {
          if (!_paused) {
            if (_beaconSupported || _alwaysUseCustomSend) {
              try {
                return _self[
                  _DYN_TRIGGER_SEND
                  /* @min:%2etriggerSend */
                ](
                  true,
                  _doUnloadSend,
                  2
                  /* SendRequestReason.Unload */
                );
              } catch (e) {
                _throwInternal(_self[
                  _DYN_DIAG_LOG3
                  /* @min:%2ediagLog */
                ](), 1, 20, "failed to flush with beacon sender on page unload, telemetry will not be collected: " + getExceptionName(e), { exception: dumpObj(e) });
              }
            } else {
              _self.flush(false);
            }
          }
        };
        _self.addHeader = function(name, value) {
          _headers[name] = value;
        };
        _self[
          _DYN_INITIALIZE2
          /* @min:%2einitialize */
        ] = function(config, core, extensions, pluginChain) {
          if (_self.isInitialized()) {
            _throwInternal(_self[
              _DYN_DIAG_LOG3
              /* @min:%2ediagLog */
            ](), 1, 28, "Sender is already initialized");
          }
          _base[
            _DYN_INITIALIZE2
            /* @min:%2einitialize */
          ](config, core, extensions, pluginChain);
          var identifier = _self.identifier;
          _serializer = new Serializer(core.logger);
          _consecutiveErrors = 0;
          _retryAt = null;
          _lastSend = 0;
          _self[
            _DYN__SENDER
            /* @min:%2e_sender */
          ] = null;
          _stamp_specific_redirects = 0;
          var diagLog = _self[
            _DYN_DIAG_LOG3
            /* @min:%2ediagLog */
          ]();
          _evtNamespace = mergeEvtNamespace(createUniqueNamespace("Sender"), core.evtNamespace && core.evtNamespace());
          _offlineListener = createOfflineListener(_evtNamespace);
          _self._addHook(onConfigChange(config, function(details) {
            var config2 = details.cfg;
            if (config2.storagePrefix) {
              utlSetStoragePrefix(config2.storagePrefix);
            }
            var ctx = createProcessTelemetryContext(null, config2, core);
            var senderConfig = ctx.getExtCfg(identifier, defaultAppInsightsChannelConfig);
            objDefine(_self, "_senderConfig", {
              g: function() {
                return senderConfig;
              }
            });
            if (_orgEndpointUrl !== senderConfig.endpointUrl) {
              if (_orgEndpointUrl) {
              }
              _endpointUrl = _orgEndpointUrl = senderConfig.endpointUrl;
            }
            if (_customHeaders && _customHeaders !== senderConfig[
              _DYN_CUSTOM_HEADERS
              /* @min:%2ecustomHeaders */
            ]) {
              arrForEach(_customHeaders, function(customHeader) {
                delete _headers[customHeader.header];
              });
            }
            _maxBatchSizeInBytes = senderConfig[
              _DYN_MAX_BATCH_SIZE_IN_BY1
              /* @min:%2emaxBatchSizeInBytes */
            ];
            _beaconSupported = (senderConfig[
              _DYN_ONUNLOAD_DISABLE_BEA2
              /* @min:%2eonunloadDisableBeacon */
            ] === false || senderConfig[
              _DYN_IS_BEACON_API_DISABL3
              /* @min:%2eisBeaconApiDisabled */
            ] === false) && isBeaconsSupported();
            _beaconOnUnloadSupported = senderConfig[
              _DYN_ONUNLOAD_DISABLE_BEA2
              /* @min:%2eonunloadDisableBeacon */
            ] === false && isBeaconsSupported();
            _beaconNormalSupported = senderConfig[
              _DYN_IS_BEACON_API_DISABL3
              /* @min:%2eisBeaconApiDisabled */
            ] === false && isBeaconsSupported();
            _alwaysUseCustomSend = senderConfig[
              _DYN_ALWAYS_USE_XHR_OVERR4
              /* @min:%2ealwaysUseXhrOverride */
            ];
            _disableXhr = !!senderConfig[
              _DYN_DISABLE_XHR
              /* @min:%2edisableXhr */
            ];
            _retryCodes = senderConfig.retryCodes;
            var bufferOverride = senderConfig[
              _DYN_BUFFER_OVERRIDE
              /* @min:%2ebufferOverride */
            ];
            var canUseSessionStorage = !!senderConfig[
              _DYN_ENABLE_SESSION_STORA5
              /* @min:%2eenableSessionStorageBuffer */
            ] && (!!bufferOverride || utlCanUseSessionStorage());
            var namePrefix = senderConfig.namePrefix;
            var shouldUpdate = canUseSessionStorage !== _sessionStorageUsed || canUseSessionStorage && _namePrefix !== namePrefix || canUseSessionStorage && _bufferOverrideUsed !== bufferOverride;
            if (_self[
              _DYN__BUFFER
              /* @min:%2e_buffer */
            ]) {
              if (shouldUpdate) {
                try {
                  _self._buffer = _self._buffer[
                    _DYN_CREATE_NEW2
                    /* @min:%2ecreateNew */
                  ](diagLog, senderConfig, canUseSessionStorage);
                } catch (e) {
                  _throwInternal(_self[
                    _DYN_DIAG_LOG3
                    /* @min:%2ediagLog */
                  ](), 1, 12, "failed to transfer telemetry to different buffer storage, telemetry will be lost: " + getExceptionName(e), { exception: dumpObj(e) });
                }
              }
              _checkMaxSize();
            } else {
              _self[
                _DYN__BUFFER
                /* @min:%2e_buffer */
              ] = canUseSessionStorage ? new SessionStorageSendBuffer(diagLog, senderConfig) : new ArraySendBuffer(diagLog, senderConfig);
            }
            _namePrefix = namePrefix;
            _sessionStorageUsed = canUseSessionStorage;
            _bufferOverrideUsed = bufferOverride;
            _fetchKeepAlive = !senderConfig[
              _DYN_ONUNLOAD_DISABLE_FET6
              /* @min:%2eonunloadDisableFetch */
            ] && isFetchSupported(true);
            _disableBeaconSplit = !!senderConfig[
              _DYN_DISABLE_SEND_BEACON_7
              /* @min:%2edisableSendBeaconSplit */
            ];
            _self._sample = new Sample(senderConfig.samplingPercentage, diagLog);
            _instrumentationKey = senderConfig[
              _DYN_INSTRUMENTATION_KEY
              /* @min:%2einstrumentationKey */
            ];
            if (!_validateInstrumentationKey(_instrumentationKey, config2)) {
              _throwInternal(diagLog, 1, 100, "Invalid Instrumentation key " + _instrumentationKey);
            }
            _customHeaders = senderConfig[
              _DYN_CUSTOM_HEADERS
              /* @min:%2ecustomHeaders */
            ];
            if (!isInternalApplicationInsightsEndpoint(_endpointUrl) && _customHeaders && _customHeaders[
              _DYN_LENGTH4
              /* @min:%2elength */
            ] > 0) {
              arrForEach(_customHeaders, function(customHeader) {
                _this.addHeader(customHeader.header, customHeader.value);
              });
            } else {
              _customHeaders = null;
            }
            _enableSendPromise = senderConfig[
              _DYN_ENABLE_SEND_PROMISE
              /* @min:%2eenableSendPromise */
            ];
            var sendPostConfig = _getSendPostMgrConfig();
            if (!_sendPostMgr) {
              _sendPostMgr = new SenderPostManager();
              _sendPostMgr[
                _DYN_INITIALIZE2
                /* @min:%2einitialize */
              ](sendPostConfig, diagLog);
            } else {
              _sendPostMgr.SetConfig(sendPostConfig);
            }
            var customInterface = senderConfig.httpXHROverride;
            var httpInterface = null;
            var syncInterface = null;
            var theTransports = prependTransports([
              3,
              1,
              2
              /* TransportType.Fetch */
            ], senderConfig.transports);
            httpInterface = _sendPostMgr && _sendPostMgr[
              _DYN_GET_SENDER_INST
              /* @min:%2egetSenderInst */
            ](theTransports, false);
            var xhrInterface = _sendPostMgr && _sendPostMgr.getFallbackInst();
            _xhrSend = function(payload, isAsync) {
              return _doSend(xhrInterface, payload, isAsync);
            };
            _fallbackSend = function(payload, isAsync) {
              return _doSend(xhrInterface, payload, isAsync, false);
            };
            httpInterface = _alwaysUseCustomSend ? customInterface : httpInterface || customInterface || xhrInterface;
            _self[
              _DYN__SENDER
              /* @min:%2e_sender */
            ] = function(payload, isAsync) {
              return _doSend(httpInterface, payload, isAsync);
            };
            if (_fetchKeepAlive) {
              _syncUnloadSender = _fetchKeepAliveSender;
            }
            var syncTransports = prependTransports([
              3,
              1
              /* TransportType.Xhr */
            ], senderConfig[
              _DYN_UNLOAD_TRANSPORTS
              /* @min:%2eunloadTransports */
            ]);
            if (!_fetchKeepAlive) {
              syncTransports = syncTransports.filter(function(transport) {
                return transport !== 2;
              });
            }
            syncInterface = _sendPostMgr && _sendPostMgr[
              _DYN_GET_SENDER_INST
              /* @min:%2egetSenderInst */
            ](syncTransports, true);
            syncInterface = _alwaysUseCustomSend ? customInterface : syncInterface || customInterface;
            if ((_alwaysUseCustomSend || senderConfig[
              _DYN_UNLOAD_TRANSPORTS
              /* @min:%2eunloadTransports */
            ] || !_syncUnloadSender) && syncInterface) {
              _syncUnloadSender = function(payload, isAsync) {
                return _doSend(syncInterface, payload, isAsync);
              };
            }
            if (!_syncUnloadSender) {
              _syncUnloadSender = _xhrSend;
            }
            _disableTelemetry = senderConfig.disableTelemetry;
            _convertUndefined = senderConfig[
              _DYN_CONVERT_UNDEFINED
              /* @min:%2econvertUndefined */
            ] || UNDEFINED_VALUE2;
            _isRetryDisabled = senderConfig.isRetryDisabled;
            _maxBatchInterval = senderConfig[
              _DYN_MAX_BATCH_INTERVAL
              /* @min:%2emaxBatchInterval */
            ];
          }));
        };
        _self.processTelemetry = function(telemetryItem, itemCtx) {
          var _a12;
          itemCtx = _self._getTelCtx(itemCtx);
          var diagLogger = itemCtx[
            _DYN_DIAG_LOG3
            /* @min:%2ediagLog */
          ]();
          try {
            var isValidate = _validate(telemetryItem, diagLogger);
            if (!isValidate) {
              return;
            }
            var aiEnvelope = _getEnvelope(telemetryItem, diagLogger);
            if (!aiEnvelope) {
              return;
            }
            var payload = _serializer[
              _DYN_SERIALIZE
              /* @min:%2eserialize */
            ](aiEnvelope);
            var buffer = _self[
              _DYN__BUFFER
              /* @min:%2e_buffer */
            ];
            _checkMaxSize(payload);
            var payloadItem = (_a12 = {}, _a12[
              _DYN_ITEM
              /* @min:item */
            ] = payload, _a12.cnt = 0, _a12);
            buffer[
              _DYN_ENQUEUE
              /* @min:%2eenqueue */
            ](payloadItem);
            _setupTimer();
          } catch (e) {
            _throwInternal(diagLogger, 2, 12, "Failed adding telemetry to the sender's buffer, some telemetry will be lost: " + getExceptionName(e), { exception: dumpObj(e) });
          }
          _self.processNext(telemetryItem, itemCtx);
        };
        _self.isCompletelyIdle = function() {
          return !_paused && _syncFetchPayload === 0 && _self._buffer[
            _DYN_COUNT2
            /* @min:%2ecount */
          ]() === 0;
        };
        _self._xhrReadyStateChange = function(xhr, payload, countOfItemsInPayload) {
          if (_isStringArr(payload)) {
            return;
          }
          return _xhrReadyStateChange(xhr, payload, countOfItemsInPayload);
        };
        _self[
          _DYN_TRIGGER_SEND
          /* @min:%2etriggerSend */
        ] = function(async, forcedSender, sendReason) {
          if (async === void 0) {
            async = true;
          }
          var result;
          if (!_paused) {
            try {
              var buffer = _self[
                _DYN__BUFFER
                /* @min:%2e_buffer */
              ];
              if (!_disableTelemetry) {
                if (buffer[
                  _DYN_COUNT2
                  /* @min:%2ecount */
                ]() > 0) {
                  var payload = buffer.getItems();
                  _notifySendRequest(sendReason || 0, async);
                  if (forcedSender) {
                    result = forcedSender.call(_self, payload, async);
                  } else {
                    result = _self[
                      _DYN__SENDER
                      /* @min:%2e_sender */
                    ](payload, async);
                  }
                }
                _lastSend = +/* @__PURE__ */ new Date();
              } else {
                buffer[
                  _DYN_CLEAR
                  /* @min:%2eclear */
                ]();
              }
              _clearScheduledTimer();
            } catch (e) {
              var ieVer = getIEVersion();
              if (!ieVer || ieVer > 9) {
                _throwInternal(_self[
                  _DYN_DIAG_LOG3
                  /* @min:%2ediagLog */
                ](), 1, 40, "Telemetry transmission failed, some telemetry will be lost: " + getExceptionName(e), { exception: dumpObj(e) });
              }
            }
          }
          return result;
        };
        _self.getOfflineSupport = function() {
          var _a12;
          return _a12 = {
            getUrl: function() {
              return _endpointUrl;
            },
            createPayload: _createPayload
          }, _a12[
            _DYN_SERIALIZE
            /* @min:serialize */
          ] = _serialize, _a12.batch = _batch, _a12.shouldProcess = function(evt) {
            return !!_validate(evt);
          }, _a12;
        };
        _self._doTeardown = function(unloadCtx, unloadState) {
          _self.onunloadFlush();
          runTargetUnload(_offlineListener, false);
          _initDefaults();
        };
        _self[
          _DYN__ON_ERROR
          /* @min:%2e_onError */
        ] = function(payload, message, event) {
          if (_isStringArr(payload)) {
            return;
          }
          return _onError(payload, message, event);
        };
        _self[
          _DYN__ON_PARTIAL_SUCCESS
          /* @min:%2e_onPartialSuccess */
        ] = function(payload, results) {
          if (_isStringArr(payload)) {
            return;
          }
          return _onPartialSuccess(payload, results);
        };
        _self[
          _DYN__ON_SUCCESS
          /* @min:%2e_onSuccess */
        ] = function(payload, countOfItemsInPayload) {
          if (_isStringArr(payload)) {
            return;
          }
          return _onSuccess(payload, countOfItemsInPayload);
        };
        _self._xdrOnLoad = function(xdr, payload) {
          if (_isStringArr(payload)) {
            return;
          }
          return _xdrOnLoad(xdr, payload);
        };
        function _xdrOnLoad(xdr, payload) {
          var responseText = _getResponseText(xdr);
          if (xdr && (responseText + "" === "200" || responseText === "")) {
            _consecutiveErrors = 0;
            _self[
              _DYN__ON_SUCCESS
              /* @min:%2e_onSuccess */
            ](payload, 0);
          } else {
            var results = parseResponse(responseText);
            if (results && results[
              _DYN_ITEMS_RECEIVED2
              /* @min:%2eitemsReceived */
            ] && results[
              _DYN_ITEMS_RECEIVED2
              /* @min:%2eitemsReceived */
            ] > results[
              _DYN_ITEMS_ACCEPTED
              /* @min:%2eitemsAccepted */
            ] && !_isRetryDisabled) {
              _self[
                _DYN__ON_PARTIAL_SUCCESS
                /* @min:%2e_onPartialSuccess */
              ](payload, results);
            } else {
              _self[
                _DYN__ON_ERROR
                /* @min:%2e_onError */
              ](payload, formatErrorMessageXdr(xdr));
            }
          }
        }
        function _getSendPostMgrConfig() {
          var _a12;
          try {
            var onCompleteFuncs = {
              xdrOnComplete: function(xdr, oncomplete, payload) {
                var data = _getPayloadArr(payload);
                if (!data) {
                  return;
                }
                return _xdrOnLoad(xdr, data);
              },
              fetchOnComplete: function(response, onComplete, resValue, payload) {
                var data = _getPayloadArr(payload);
                if (!data) {
                  return;
                }
                return _checkResponsStatus(response.status, data, response.url, data[
                  _DYN_LENGTH4
                  /* @min:%2elength */
                ], response.statusText, resValue || "");
              },
              xhrOnComplete: function(request, oncomplete, payload) {
                var data = _getPayloadArr(payload);
                if (!data) {
                  return;
                }
                return _xhrReadyStateChange(request, data, data[
                  _DYN_LENGTH4
                  /* @min:%2elength */
                ]);
              },
              beaconOnRetry: function(data, onComplete, canSend) {
                return _onBeaconRetry(data, onComplete, canSend);
              }
            };
            var config = (_a12 = {}, _a12[
              _DYN_ENABLE_SEND_PROMISE
              /* @min:enableSendPromise */
            ] = _enableSendPromise, _a12.isOneDs = false, _a12.disableCredentials = false, _a12[
              _DYN_DISABLE_XHR
              /* @min:disableXhr */
            ] = _disableXhr, _a12.disableBeacon = !_beaconNormalSupported, _a12.disableBeaconSync = !_beaconOnUnloadSupported, _a12.senderOnCompleteCallBack = onCompleteFuncs, _a12);
            return config;
          } catch (e) {
          }
          return null;
        }
        function _xhrReadyStateChange(xhr, payload, countOfItemsInPayload) {
          if (xhr.readyState === 4) {
            _checkResponsStatus(xhr.status, payload, xhr.responseURL, countOfItemsInPayload, formatErrorMessageXhr(xhr), _getResponseText(xhr) || xhr.response);
          }
        }
        function _onError(payload, message, event) {
          _throwInternal(_self[
            _DYN_DIAG_LOG3
            /* @min:%2ediagLog */
          ](), 2, 26, "Failed to send telemetry.", { message });
          _self._buffer && _self._buffer[
            _DYN_CLEAR_SENT
            /* @min:%2eclearSent */
          ](payload);
        }
        function _onPartialSuccess(payload, results) {
          var failed = [];
          var retry = [];
          var errors = results.errors.reverse();
          for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
            var error = errors_1[_i];
            var extracted = payload.splice(error.index, 1)[0];
            if (_isRetriable(error.statusCode)) {
              retry[
                _DYN_PUSH3
                /* @min:%2epush */
              ](extracted);
            } else {
              failed[
                _DYN_PUSH3
                /* @min:%2epush */
              ](extracted);
            }
          }
          if (payload[
            _DYN_LENGTH4
            /* @min:%2elength */
          ] > 0) {
            _self[
              _DYN__ON_SUCCESS
              /* @min:%2e_onSuccess */
            ](payload, results[
              _DYN_ITEMS_ACCEPTED
              /* @min:%2eitemsAccepted */
            ]);
          }
          if (failed[
            _DYN_LENGTH4
            /* @min:%2elength */
          ] > 0) {
            _self[
              _DYN__ON_ERROR
              /* @min:%2e_onError */
            ](failed, formatErrorMessageXhr(null, ["partial success", results[
              _DYN_ITEMS_ACCEPTED
              /* @min:%2eitemsAccepted */
            ], "of", results.itemsReceived].join(" ")));
          }
          if (retry[
            _DYN_LENGTH4
            /* @min:%2elength */
          ] > 0) {
            _resendPayload(retry);
            _throwInternal(_self[
              _DYN_DIAG_LOG3
              /* @min:%2ediagLog */
            ](), 2, 40, "Partial success. Delivered: " + payload[
              _DYN_LENGTH4
              /* @min:%2elength */
            ] + ", Failed: " + failed[
              _DYN_LENGTH4
              /* @min:%2elength */
            ] + ". Will retry to send " + retry[
              _DYN_LENGTH4
              /* @min:%2elength */
            ] + " our of " + results[
              _DYN_ITEMS_RECEIVED2
              /* @min:%2eitemsReceived */
            ] + " items");
          }
        }
        function _onSuccess(payload, countOfItemsInPayload) {
          _self._buffer && _self._buffer[
            _DYN_CLEAR_SENT
            /* @min:%2eclearSent */
          ](payload);
        }
        function _getPayloadArr(payload) {
          try {
            if (payload) {
              var internalPayload = payload;
              var arr = internalPayload[
                _DYN_ORI_PAYLOAD
                /* @min:%2eoriPayload */
              ];
              if (arr && arr[
                _DYN_LENGTH4
                /* @min:%2elength */
              ]) {
                return arr;
              }
              return null;
            }
          } catch (e) {
          }
          return null;
        }
        function _validate(telemetryItem, diagLogger) {
          if (_disableTelemetry) {
            return false;
          }
          if (!telemetryItem) {
            diagLogger && _throwInternal(diagLogger, 1, 7, "Cannot send empty telemetry");
            return false;
          }
          if (telemetryItem.baseData && !telemetryItem[
            _DYN_BASE_TYPE
            /* @min:%2ebaseType */
          ]) {
            diagLogger && _throwInternal(diagLogger, 1, 70, "Cannot send telemetry without baseData and baseType");
            return false;
          }
          if (!telemetryItem[
            _DYN_BASE_TYPE
            /* @min:%2ebaseType */
          ]) {
            telemetryItem[
              _DYN_BASE_TYPE
              /* @min:%2ebaseType */
            ] = "EventData";
          }
          if (!_self[
            _DYN__SENDER
            /* @min:%2e_sender */
          ]) {
            diagLogger && _throwInternal(diagLogger, 1, 28, "Sender was not initialized");
            return false;
          }
          if (!_isSampledIn(telemetryItem)) {
            diagLogger && _throwInternal(diagLogger, 2, 33, "Telemetry item was sampled out and not sent", { SampleRate: _self._sample[
              _DYN_SAMPLE_RATE
              /* @min:%2esampleRate */
            ] });
            return false;
          } else {
            telemetryItem[SampleRate] = _self._sample[
              _DYN_SAMPLE_RATE
              /* @min:%2esampleRate */
            ];
          }
          return true;
        }
        function _getEnvelope(telemetryItem, diagLogger) {
          var defaultEnvelopeIkey = telemetryItem.iKey || _instrumentationKey;
          var aiEnvelope = Sender2.constructEnvelope(telemetryItem, defaultEnvelopeIkey, diagLogger, _convertUndefined);
          if (!aiEnvelope) {
            _throwInternal(diagLogger, 1, 47, "Unable to create an AppInsights envelope");
            return;
          }
          var doNotSendItem = false;
          if (telemetryItem[
            _DYN_TAGS
            /* @min:%2etags */
          ] && telemetryItem[
            _DYN_TAGS
            /* @min:%2etags */
          ][ProcessLegacy]) {
            arrForEach(telemetryItem[
              _DYN_TAGS
              /* @min:%2etags */
            ][ProcessLegacy], function(callBack) {
              try {
                if (callBack && callBack(aiEnvelope) === false) {
                  doNotSendItem = true;
                  _warnToConsole(diagLogger, "Telemetry processor check returns false");
                }
              } catch (e) {
                _throwInternal(diagLogger, 1, 64, "One of telemetry initializers failed, telemetry item will not be sent: " + getExceptionName(e), { exception: dumpObj(e) }, true);
              }
            });
            delete telemetryItem[
              _DYN_TAGS
              /* @min:%2etags */
            ][ProcessLegacy];
          }
          if (doNotSendItem) {
            return;
          }
          return aiEnvelope;
        }
        function _serialize(item) {
          var rlt = EMPTY_STR;
          var diagLogger = _self[
            _DYN_DIAG_LOG3
            /* @min:%2ediagLog */
          ]();
          try {
            var valid = _validate(item, diagLogger);
            var envelope = null;
            if (valid) {
              envelope = _getEnvelope(item, diagLogger);
            }
            if (envelope) {
              rlt = _serializer[
                _DYN_SERIALIZE
                /* @min:%2eserialize */
              ](envelope);
            }
          } catch (e) {
          }
          return rlt;
        }
        function _batch(arr) {
          var rlt = EMPTY_STR;
          if (arr && arr[
            _DYN_LENGTH4
            /* @min:%2elength */
          ]) {
            rlt = "[" + arr.join(",") + "]";
          }
          return rlt;
        }
        function _createPayload(data) {
          var _a12;
          var headers = _getHeaders();
          return _a12 = {
            urlString: _endpointUrl
          }, _a12[
            _DYN_DATA2
            /* @min:data */
          ] = data, _a12.headers = headers, _a12;
        }
        function _isSampledIn(envelope) {
          return _self._sample.isSampledIn(envelope);
        }
        function _getOnComplete(payload, status, headers, response) {
          if (status === 200 && payload) {
            _self._onSuccess(payload, payload[
              _DYN_LENGTH4
              /* @min:%2elength */
            ]);
          } else {
            response && _self[
              _DYN__ON_ERROR
              /* @min:%2e_onError */
            ](payload, response);
          }
        }
        function _doSend(sendInterface, payload, isAsync, markAsSent) {
          if (markAsSent === void 0) {
            markAsSent = true;
          }
          var onComplete = function(status, headers, response) {
            return _getOnComplete(payload, status, headers, response);
          };
          var payloadData = _getPayload(payload);
          var sendPostFunc = sendInterface && sendInterface.sendPOST;
          if (sendPostFunc && payloadData) {
            if (markAsSent) {
              _self._buffer[
                _DYN_MARK_AS_SENT
                /* @min:%2emarkAsSent */
              ](payload);
            }
            return sendPostFunc(payloadData, onComplete, !isAsync);
          }
          return null;
        }
        function _getPayload(payload) {
          var _a12;
          if (isArray(payload) && payload[
            _DYN_LENGTH4
            /* @min:%2elength */
          ] > 0) {
            var batch = _self[
              _DYN__BUFFER
              /* @min:%2e_buffer */
            ].batchPayloads(payload);
            var headers = _getHeaders();
            var payloadData = (_a12 = {}, _a12[
              _DYN_DATA2
              /* @min:data */
            ] = batch, _a12.urlString = _endpointUrl, _a12.headers = headers, _a12.disableXhrSync = _disableXhr, _a12.disableFetchKeepAlive = !_fetchKeepAlive, _a12[
              _DYN_ORI_PAYLOAD
              /* @min:oriPayload */
            ] = payload, _a12);
            return payloadData;
          }
          return null;
        }
        function _getHeaders() {
          try {
            var headers = _headers || {};
            if (isInternalApplicationInsightsEndpoint(_endpointUrl)) {
              headers[RequestHeaders[
                6
                /* eRequestHeaders.sdkContextHeader */
              ]] = RequestHeaders[
                7
                /* eRequestHeaders.sdkContextHeaderAppIdRequest */
              ];
            }
            return headers;
          } catch (e) {
          }
          return null;
        }
        function _checkMaxSize(incomingPayload) {
          var incomingSize = incomingPayload ? incomingPayload[
            _DYN_LENGTH4
            /* @min:%2elength */
          ] : 0;
          if (_self[
            _DYN__BUFFER
            /* @min:%2e_buffer */
          ].size() + incomingSize > _maxBatchSizeInBytes) {
            if (!_offlineListener || _offlineListener.isOnline()) {
              _self[
                _DYN_TRIGGER_SEND
                /* @min:%2etriggerSend */
              ](
                true,
                null,
                10
                /* SendRequestReason.MaxBatchSize */
              );
            }
            return true;
          }
          return false;
        }
        function _checkResponsStatus(status, payload, responseUrl, countOfItemsInPayload, errorMessage, res) {
          var response = null;
          if (!_self._appId) {
            response = parseResponse(res);
            if (response && response.appId) {
              _self._appId = response.appId;
            }
          }
          if ((status < 200 || status >= 300) && status !== 0) {
            if (status === 301 || status === 307 || status === 308) {
              if (!_checkAndUpdateEndPointUrl(responseUrl)) {
                _self[
                  _DYN__ON_ERROR
                  /* @min:%2e_onError */
                ](payload, errorMessage);
                return;
              }
            }
            if (!_isRetryDisabled && _isRetriable(status)) {
              _resendPayload(payload);
              _throwInternal(_self[
                _DYN_DIAG_LOG3
                /* @min:%2ediagLog */
              ](), 2, 40, ". Response code " + status + ". Will retry to send " + payload[
                _DYN_LENGTH4
                /* @min:%2elength */
              ] + " items.");
            } else {
              _self[
                _DYN__ON_ERROR
                /* @min:%2e_onError */
              ](payload, errorMessage);
            }
          } else if (_offlineListener && !_offlineListener.isOnline()) {
            if (!_isRetryDisabled) {
              var offlineBackOffMultiplier = 10;
              _resendPayload(payload, offlineBackOffMultiplier);
              _throwInternal(_self[
                _DYN_DIAG_LOG3
                /* @min:%2ediagLog */
              ](), 2, 40, ". Offline - Response Code: ".concat(status, ". Offline status: ").concat(!_offlineListener.isOnline(), ". Will retry to send ").concat(payload.length, " items."));
            }
          } else {
            _checkAndUpdateEndPointUrl(responseUrl);
            if (status === 206) {
              if (!response) {
                response = parseResponse(res);
              }
              if (response && !_isRetryDisabled) {
                _self[
                  _DYN__ON_PARTIAL_SUCCESS
                  /* @min:%2e_onPartialSuccess */
                ](payload, response);
              } else {
                _self[
                  _DYN__ON_ERROR
                  /* @min:%2e_onError */
                ](payload, errorMessage);
              }
            } else {
              _consecutiveErrors = 0;
              _self[
                _DYN__ON_SUCCESS
                /* @min:%2e_onSuccess */
              ](payload, countOfItemsInPayload);
            }
          }
        }
        function _checkAndUpdateEndPointUrl(responseUrl) {
          if (_stamp_specific_redirects >= 10) {
            return false;
          }
          if (!isNullOrUndefined(responseUrl) && responseUrl !== "") {
            if (responseUrl !== _endpointUrl) {
              _endpointUrl = responseUrl;
              ++_stamp_specific_redirects;
              return true;
            }
          }
          return false;
        }
        function _doUnloadSend(payload, isAsync) {
          if (_syncUnloadSender) {
            _syncUnloadSender(payload, false);
          } else {
            var beaconInst = _sendPostMgr && _sendPostMgr[
              _DYN_GET_SENDER_INST
              /* @min:%2egetSenderInst */
            ]([
              3
              /* TransportType.Beacon */
            ], true);
            return _doSend(beaconInst, payload, isAsync);
          }
        }
        function _onBeaconRetry(payload, onComplete, canSend) {
          var internalPayload = payload;
          var data = internalPayload && internalPayload[
            _DYN_ORI_PAYLOAD
            /* @min:%2eoriPayload */
          ];
          if (!_disableBeaconSplit) {
            var droppedPayload = [];
            for (var lp = 0; lp < data[
              _DYN_LENGTH4
              /* @min:%2elength */
            ]; lp++) {
              var thePayload = data[lp];
              var arr = [thePayload];
              var item = _getPayload(arr);
              if (!canSend(item, onComplete)) {
                droppedPayload[
                  _DYN_PUSH3
                  /* @min:%2epush */
                ](thePayload);
              } else {
                _self._onSuccess(arr, arr[
                  _DYN_LENGTH4
                  /* @min:%2elength */
                ]);
              }
            }
            if (droppedPayload[
              _DYN_LENGTH4
              /* @min:%2elength */
            ] > 0) {
              _fallbackSend && _fallbackSend(droppedPayload, true);
              _throwInternal(_self[
                _DYN_DIAG_LOG3
                /* @min:%2ediagLog */
              ](), 2, 40, ". Failed to send telemetry with Beacon API, retried with normal sender.");
            }
          } else {
            _fallbackSend && _fallbackSend(data, true);
            _throwInternal(_self[
              _DYN_DIAG_LOG3
              /* @min:%2ediagLog */
            ](), 2, 40, ". Failed to send telemetry with Beacon API, retried with normal sender.");
          }
        }
        function _isStringArr(arr) {
          try {
            if (arr && arr[
              _DYN_LENGTH4
              /* @min:%2elength */
            ]) {
              return isString(arr[0]);
            }
          } catch (e) {
          }
          return null;
        }
        function _fetchKeepAliveSender(payload, isAsync) {
          var transport = null;
          if (isArray(payload)) {
            var payloadSize = payload[
              _DYN_LENGTH4
              /* @min:%2elength */
            ];
            for (var lp = 0; lp < payload[
              _DYN_LENGTH4
              /* @min:%2elength */
            ]; lp++) {
              payloadSize += payload[lp].item[
                _DYN_LENGTH4
                /* @min:%2elength */
              ];
            }
            var syncFetchPayload = _sendPostMgr.getSyncFetchPayload();
            if (syncFetchPayload + payloadSize <= FetchSyncRequestSizeLimitBytes) {
              transport = 2;
            } else if (isBeaconsSupported()) {
              transport = 3;
            } else {
              transport = 1;
              _throwInternal(_self[
                _DYN_DIAG_LOG3
                /* @min:%2ediagLog */
              ](), 2, 40, ". Failed to send telemetry with Beacon API, retried with xhrSender.");
            }
            var inst = _sendPostMgr && _sendPostMgr[
              _DYN_GET_SENDER_INST
              /* @min:%2egetSenderInst */
            ]([transport], true);
            return _doSend(inst, payload, isAsync);
          }
          return null;
        }
        function _resendPayload(payload, linearFactor) {
          if (linearFactor === void 0) {
            linearFactor = 1;
          }
          if (!payload || payload[
            _DYN_LENGTH4
            /* @min:%2elength */
          ] === 0) {
            return;
          }
          var buffer = _self[
            _DYN__BUFFER
            /* @min:%2e_buffer */
          ];
          buffer[
            _DYN_CLEAR_SENT
            /* @min:%2eclearSent */
          ](payload);
          _consecutiveErrors++;
          for (var _i = 0, payload_1 = payload; _i < payload_1.length; _i++) {
            var item = payload_1[_i];
            item.cnt = item.cnt || 0;
            item.cnt++;
            buffer[
              _DYN_ENQUEUE
              /* @min:%2eenqueue */
            ](item);
          }
          _setRetryTime(linearFactor);
          _setupTimer();
        }
        function _setRetryTime(linearFactor) {
          var SlotDelayInSeconds = 10;
          var delayInSeconds;
          if (_consecutiveErrors <= 1) {
            delayInSeconds = SlotDelayInSeconds;
          } else {
            var backOffSlot = (Math.pow(2, _consecutiveErrors) - 1) / 2;
            var backOffDelay = Math.floor(Math.random() * backOffSlot * SlotDelayInSeconds) + 1;
            backOffDelay = linearFactor * backOffDelay;
            delayInSeconds = Math.max(Math.min(backOffDelay, 3600), SlotDelayInSeconds);
          }
          var retryAfterTimeSpan = utcNow() + delayInSeconds * 1e3;
          _retryAt = retryAfterTimeSpan;
        }
        function _setupTimer() {
          if (!_timeoutHandle && !_paused) {
            var retryInterval = _retryAt ? Math.max(0, _retryAt - utcNow()) : 0;
            var timerValue = Math.max(_maxBatchInterval, retryInterval);
            _timeoutHandle = scheduleTimeout(function() {
              _timeoutHandle = null;
              _self[
                _DYN_TRIGGER_SEND
                /* @min:%2etriggerSend */
              ](
                true,
                null,
                1
                /* SendRequestReason.NormalSchedule */
              );
            }, timerValue);
          }
        }
        function _clearScheduledTimer() {
          _timeoutHandle && _timeoutHandle.cancel();
          _timeoutHandle = null;
          _retryAt = null;
        }
        function _isRetriable(statusCode) {
          if (!isNullOrUndefined(_retryCodes)) {
            return _retryCodes[
              _DYN_LENGTH4
              /* @min:%2elength */
            ] && _retryCodes.indexOf(statusCode) > -1;
          }
          return statusCode === 401 || statusCode === 408 || statusCode === 429 || statusCode === 500 || statusCode === 502 || statusCode === 503 || statusCode === 504;
        }
        function _getNotifyMgr() {
          var func = "getNotifyMgr";
          if (_self.core[func]) {
            return _self.core[func]();
          }
          return _self.core["_notificationManager"];
        }
        function _notifySendRequest(sendRequest, isAsync) {
          var manager = _getNotifyMgr();
          if (manager && manager[
            _DYN_EVENTS_SEND_REQUEST
            /* @min:%2eeventsSendRequest */
          ]) {
            try {
              manager[
                _DYN_EVENTS_SEND_REQUEST
                /* @min:%2eeventsSendRequest */
              ](sendRequest, isAsync);
            } catch (e) {
              _throwInternal(_self[
                _DYN_DIAG_LOG3
                /* @min:%2ediagLog */
              ](), 1, 74, "send request notification failed: " + getExceptionName(e), { exception: dumpObj(e) });
            }
          }
        }
        function _validateInstrumentationKey(instrumentationKey, config) {
          var disableValidation = config.disableInstrumentationKeyValidation;
          var disableIKeyValidationFlag = isNullOrUndefined(disableValidation) ? false : disableValidation;
          if (disableIKeyValidationFlag) {
            return true;
          }
          var UUID_Regex = "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$";
          var regexp = new RegExp(UUID_Regex);
          return regexp.test(instrumentationKey);
        }
        function _initDefaults() {
          _self[
            _DYN__SENDER
            /* @min:%2e_sender */
          ] = null;
          _self[
            _DYN__BUFFER
            /* @min:%2e_buffer */
          ] = null;
          _self._appId = null;
          _self._sample = null;
          _headers = {};
          _offlineListener = null;
          _consecutiveErrors = 0;
          _retryAt = null;
          _lastSend = null;
          _paused = false;
          _timeoutHandle = null;
          _serializer = null;
          _stamp_specific_redirects = 0;
          _syncFetchPayload = 0;
          _syncUnloadSender = null;
          _evtNamespace = null;
          _endpointUrl = null;
          _orgEndpointUrl = null;
          _maxBatchSizeInBytes = 0;
          _beaconSupported = false;
          _customHeaders = null;
          _disableTelemetry = false;
          _instrumentationKey = null;
          _convertUndefined = UNDEFINED_VALUE2;
          _isRetryDisabled = false;
          _sessionStorageUsed = null;
          _namePrefix = UNDEFINED_VALUE2;
          _disableXhr = false;
          _fetchKeepAlive = false;
          _disableBeaconSplit = false;
          _xhrSend = null;
          _fallbackSend = null;
          _sendPostMgr = null;
          objDefine(_self, "_senderConfig", {
            g: function() {
              return objExtend2({}, defaultAppInsightsChannelConfig);
            }
          });
        }
      });
      return _this;
    }
    Sender2.constructEnvelope = function(orig, iKey, logger, convertUndefined) {
      var envelope;
      if (iKey !== orig.iKey && !isNullOrUndefined(iKey)) {
        envelope = __assignFn(__assignFn({}, orig), { iKey });
      } else {
        envelope = orig;
      }
      var creator = EnvelopeTypeCreator[envelope.baseType] || EventEnvelopeCreator;
      return creator(logger, envelope, convertUndefined);
    };
    return Sender2;
  }(BaseTelemetryPlugin)
);

// node_modules/@microsoft/applicationinsights-dependencies-js/dist-es5/InternalConstants.js
var STR_DURATION2 = "duration";
var STR_PROPERTIES = "properties";

// node_modules/@microsoft/applicationinsights-dependencies-js/dist-es5/__DynamicConstants.js
var _DYN_REQUEST_URL = "requestUrl";
var _DYN_INST = "inst";
var _DYN_LENGTH5 = "length";
var _DYN_TRACE_ID3 = "traceID";
var _DYN_SPAN_ID2 = "spanID";
var _DYN_TRACE_FLAGS2 = "traceFlags";
var _DYN_CONTEXT = "context";
var _DYN_ABORTED = "aborted";
var _DYN_TRACE_ID0 = "traceId";
var _DYN_SPAN_ID1 = "spanId";
var _DYN__ADD_HOOK2 = "_addHook";
var _DYN_CORE2 = "core";
var _DYN_INCLUDE_CORRELATION_2 = "includeCorrelationHeaders";
var _DYN_GET_ABSOLUTE_URL = "getAbsoluteUrl";
var _DYN_HEADERS2 = "headers";
var _DYN_REQUEST_HEADERS = "requestHeaders";
var _DYN_SET_REQUEST_HEADER2 = "setRequestHeader";
var _DYN_TRACK_DEPENDENCY_DAT3 = "trackDependencyDataInternal";
var _DYN_START_TIME2 = "startTime";
var _DYN_TO_LOWER_CASE3 = "toLowerCase";
var _DYN_ENABLE_REQUEST_HEADE4 = "enableRequestHeaderTracking";
var _DYN_ENABLE_AJAX_ERROR_ST5 = "enableAjaxErrorStatusText";
var _DYN_ENABLE_AJAX_PERF_TRA6 = "enableAjaxPerfTracking";
var _DYN_MAX_AJAX_CALLS_PER_V7 = "maxAjaxCallsPerView";
var _DYN_EXCLUDE_REQUEST_FROM8 = "excludeRequestFromAutoTrackingPatterns";
var _DYN_ADD_REQUEST_CONTEXT = "addRequestContext";
var _DYN_DISABLE_AJAX_TRACKIN9 = "disableAjaxTracking";
var _DYN_AJAX_PERF_LOOKUP_DEL10 = "ajaxPerfLookupDelay";
var _DYN_DISABLE_FETCH_TRACKI11 = "disableFetchTracking";
var _DYN_ENABLE_RESPONSE_HEAD12 = "enableResponseHeaderTracking";
var _DYN_STATUS2 = "status";
var _DYN_STATUS_TEXT = "statusText";
var _DYN_HEADER_MAP = "headerMap";
var _DYN_OPEN_DONE = "openDone";
var _DYN_SEND_DONE = "sendDone";
var _DYN_REQUEST_SENT_TIME = "requestSentTime";
var _DYN_ABORT_DONE = "abortDone";
var _DYN_GET_TRACE_ID = "getTraceId";
var _DYN_GET_TRACE_FLAGS = "getTraceFlags";
var _DYN_METHOD2 = "method";
var _DYN_ERROR_STATUS_TEXT = "errorStatusText";
var _DYN_STATE_CHANGE_ATTACHE13 = "stateChangeAttached";
var _DYN_RESPONSE_TEXT = "responseText";
var _DYN_RESPONSE_FINISHED_TI14 = "responseFinishedTime";
var _DYN__CREATE_TRACK_ITEM = "CreateTrackItem";
var _DYN_RESPONSE = "response";
var _DYN_GET_ALL_RESPONSE_HEA15 = "getAllResponseHeaders";
var _DYN_GET_PART_APROPS = "getPartAProps";
var _DYN_PERF_MARK = "perfMark";
var _DYN_NAME4 = "name";
var _DYN_PERF_TIMING = "perfTiming";
var _DYN_EXCEPTION2 = "exception";
var _DYN_AJAX_DIAGNOSTICS_MES16 = "ajaxDiagnosticsMessage";
var _DYN_CORRELATION_CONTEXT = "correlationContext";
var _DYN_AJAX_TOTAL_DURATION = "ajaxTotalDuration";
var _DYN_EVENT_TRACE_CTX = "eventTraceCtx";

// node_modules/@microsoft/applicationinsights-dependencies-js/dist-es5/ajaxRecord.js
function _calcPerfDuration(resourceEntry, start, end) {
  var result = 0;
  var from = resourceEntry[start];
  var to = resourceEntry[end];
  if (from && to) {
    result = dateTimeUtilsDuration(from, to);
  }
  return result;
}
function _setPerfDuration(props, name, resourceEntry, start, end) {
  var result = 0;
  var value = _calcPerfDuration(resourceEntry, start, end);
  if (value) {
    result = _setPerfValue(props, name, msToTimeSpan(value));
  }
  return result;
}
function _setPerfValue(props, name, value) {
  var strPerf = "ajaxPerf";
  var result = 0;
  if (props && name && value) {
    var perfData = props[strPerf] = props[strPerf] || {};
    perfData[name] = value;
    result = 1;
  }
  return result;
}
function _populatePerfData(ajaxData, dependency) {
  var resourceEntry = ajaxData[
    _DYN_PERF_TIMING
    /* @min:%2eperfTiming */
  ];
  var props = dependency[
    STR_PROPERTIES
    /* @min:%2eproperties */
  ] || {};
  var propsSet = 0;
  var strName = "name";
  var strStart = "Start";
  var strEnd = "End";
  var strDomainLookup = "domainLookup";
  var strConnect = "connect";
  var strRedirect = "redirect";
  var strRequest = "request";
  var strResponse = "response";
  var strStartTime = "startTime";
  var strDomainLookupStart = strDomainLookup + strStart;
  var strDomainLookupEnd = strDomainLookup + strEnd;
  var strConnectStart = strConnect + strStart;
  var strConnectEnd = strConnect + strEnd;
  var strRequestStart = strRequest + strStart;
  var strRequestEnd = strRequest + strEnd;
  var strResponseStart = strResponse + strStart;
  var strResponseEnd = strResponse + strEnd;
  var strRedirectStart = strRedirect + strStart;
  var strRedirectEnd = strRedirect = strEnd;
  var strTransferSize = "transferSize";
  var strEncodedBodySize = "encodedBodySize";
  var strDecodedBodySize = "decodedBodySize";
  var strServerTiming = "serverTiming";
  if (resourceEntry) {
    propsSet |= _setPerfDuration(props, strRedirect, resourceEntry, strRedirectStart, strRedirectEnd);
    propsSet |= _setPerfDuration(props, strDomainLookup, resourceEntry, strDomainLookupStart, strDomainLookupEnd);
    propsSet |= _setPerfDuration(props, strConnect, resourceEntry, strConnectStart, strConnectEnd);
    propsSet |= _setPerfDuration(props, strRequest, resourceEntry, strRequestStart, strRequestEnd);
    propsSet |= _setPerfDuration(props, strResponse, resourceEntry, strResponseStart, strResponseEnd);
    propsSet |= _setPerfDuration(props, "networkConnect", resourceEntry, strStartTime, strConnectEnd);
    propsSet |= _setPerfDuration(props, "sentRequest", resourceEntry, strRequestStart, strResponseEnd);
    var duration = resourceEntry[
      STR_DURATION2
      /* @min:%2eduration */
    ];
    if (!duration) {
      duration = _calcPerfDuration(resourceEntry, strStartTime, strResponseEnd) || 0;
    }
    propsSet |= _setPerfValue(props, STR_DURATION2, duration);
    propsSet |= _setPerfValue(props, "perfTotal", duration);
    var serverTiming = resourceEntry[strServerTiming];
    if (serverTiming) {
      var server_1 = {};
      arrForEach(serverTiming, function(value, idx) {
        var name = normalizeJsName(value[strName] || "" + idx);
        var newValue = server_1[name] || {};
        objForEachKey(value, function(key, val) {
          if (key !== strName && isString(val) || isNumber(val)) {
            if (newValue[key]) {
              val = newValue[key] + ";" + val;
            }
            if (val || !isString(val)) {
              newValue[key] = val;
            }
          }
        });
        server_1[name] = newValue;
      });
      propsSet |= _setPerfValue(props, strServerTiming, server_1);
    }
    propsSet |= _setPerfValue(props, strTransferSize, resourceEntry[strTransferSize]);
    propsSet |= _setPerfValue(props, strEncodedBodySize, resourceEntry[strEncodedBodySize]);
    propsSet |= _setPerfValue(props, strDecodedBodySize, resourceEntry[strDecodedBodySize]);
  } else {
    if (ajaxData[
      _DYN_PERF_MARK
      /* @min:%2eperfMark */
    ]) {
      propsSet |= _setPerfValue(props, "missing", ajaxData.perfAttempts);
    }
  }
  if (propsSet) {
    dependency[
      STR_PROPERTIES
      /* @min:%2eproperties */
    ] = props;
  }
}
var XHRMonitoringState = (
  /** @class */
  /* @__PURE__ */ function() {
    function XHRMonitoringState2() {
      var self2 = this;
      self2[
        _DYN_OPEN_DONE
        /* @min:%2eopenDone */
      ] = false;
      self2.setRequestHeaderDone = false;
      self2[
        _DYN_SEND_DONE
        /* @min:%2esendDone */
      ] = false;
      self2[
        _DYN_ABORT_DONE
        /* @min:%2eabortDone */
      ] = false;
      self2[
        _DYN_STATE_CHANGE_ATTACHE13
        /* @min:%2estateChangeAttached */
      ] = false;
    }
    return XHRMonitoringState2;
  }()
);
var ajaxRecord = (
  /** @class */
  function() {
    function ajaxRecord2(traceId, spanId, logger, traceCtx) {
      var _a12;
      var self2 = this;
      var _logger = logger;
      var strResponseText = "responseText";
      self2[
        _DYN_PERF_MARK
        /* @min:%2eperfMark */
      ] = null;
      self2.completed = false;
      self2.requestHeadersSize = null;
      self2[
        _DYN_REQUEST_HEADERS
        /* @min:%2erequestHeaders */
      ] = null;
      self2.responseReceivingDuration = null;
      self2.callbackDuration = null;
      self2[
        _DYN_AJAX_TOTAL_DURATION
        /* @min:%2eajaxTotalDuration */
      ] = null;
      self2[
        _DYN_ABORTED
        /* @min:%2eaborted */
      ] = 0;
      self2.pageUrl = null;
      self2[
        _DYN_REQUEST_URL
        /* @min:%2erequestUrl */
      ] = null;
      self2.requestSize = 0;
      self2[
        _DYN_METHOD2
        /* @min:%2emethod */
      ] = null;
      self2[
        _DYN_STATUS2
        /* @min:%2estatus */
      ] = null;
      self2[
        _DYN_REQUEST_SENT_TIME
        /* @min:%2erequestSentTime */
      ] = null;
      self2.responseStartedTime = null;
      self2[
        _DYN_RESPONSE_FINISHED_TI14
        /* @min:%2eresponseFinishedTime */
      ] = null;
      self2.callbackFinishedTime = null;
      self2.endTime = null;
      self2.xhrMonitoringState = new XHRMonitoringState();
      self2.clientFailure = 0;
      self2[
        _DYN_TRACE_ID3
        /* @min:%2etraceID */
      ] = traceId;
      self2[
        _DYN_SPAN_ID2
        /* @min:%2espanID */
      ] = spanId;
      self2[
        _DYN_TRACE_FLAGS2
        /* @min:%2etraceFlags */
      ] = traceCtx === null || traceCtx === void 0 ? void 0 : traceCtx.getTraceFlags();
      if (traceCtx) {
        self2[
          _DYN_EVENT_TRACE_CTX
          /* @min:%2eeventTraceCtx */
        ] = (_a12 = {}, _a12[
          _DYN_TRACE_ID0
          /* @min:traceId */
        ] = traceCtx[
          _DYN_GET_TRACE_ID
          /* @min:%2egetTraceId */
        ](), _a12[
          _DYN_SPAN_ID1
          /* @min:spanId */
        ] = traceCtx.getSpanId(), _a12[
          _DYN_TRACE_FLAGS2
          /* @min:traceFlags */
        ] = traceCtx[
          _DYN_GET_TRACE_FLAGS
          /* @min:%2egetTraceFlags */
        ](), _a12);
      } else {
        self2[
          _DYN_EVENT_TRACE_CTX
          /* @min:%2eeventTraceCtx */
        ] = null;
      }
      dynamicProto(ajaxRecord2, self2, function(self3) {
        self3.getAbsoluteUrl = function() {
          return self3[
            _DYN_REQUEST_URL
            /* @min:%2erequestUrl */
          ] ? urlGetAbsoluteUrl(self3[
            _DYN_REQUEST_URL
            /* @min:%2erequestUrl */
          ]) : null;
        };
        self3.getPathName = function() {
          return self3[
            _DYN_REQUEST_URL
            /* @min:%2erequestUrl */
          ] ? dataSanitizeUrl(_logger, urlGetCompleteUrl(self3[
            _DYN_METHOD2
            /* @min:%2emethod */
          ], self3[
            _DYN_REQUEST_URL
            /* @min:%2erequestUrl */
          ])) : null;
        };
        self3[
          _DYN__CREATE_TRACK_ITEM
          /* @min:%2eCreateTrackItem */
        ] = function(ajaxType, enableRequestHeaderTracking, getResponse) {
          var _a13;
          self3.ajaxTotalDuration = Math.round(dateTimeUtilsDuration(self3.requestSentTime, self3.responseFinishedTime) * 1e3) / 1e3;
          if (self3[
            _DYN_AJAX_TOTAL_DURATION
            /* @min:%2eajaxTotalDuration */
          ] < 0) {
            return null;
          }
          var dependency = (_a13 = {
            id: "|" + self3[
              _DYN_TRACE_ID3
              /* @min:%2etraceID */
            ] + "." + self3[
              _DYN_SPAN_ID2
              /* @min:%2espanID */
            ],
            target: self3[
              _DYN_GET_ABSOLUTE_URL
              /* @min:%2egetAbsoluteUrl */
            ]()
          }, _a13[
            _DYN_NAME4
            /* @min:name */
          ] = self3.getPathName(), _a13.type = ajaxType, _a13[
            _DYN_START_TIME2
            /* @min:startTime */
          ] = null, _a13.duration = self3[
            _DYN_AJAX_TOTAL_DURATION
            /* @min:%2eajaxTotalDuration */
          ], _a13.success = +self3[
            _DYN_STATUS2
            /* @min:%2estatus */
          ] >= 200 && +self3[
            _DYN_STATUS2
            /* @min:%2estatus */
          ] < 400, _a13.responseCode = +self3[
            _DYN_STATUS2
            /* @min:%2estatus */
          ], _a13[STR_PROPERTIES] = { HttpMethod: self3[
            _DYN_METHOD2
            /* @min:%2emethod */
          ] }, _a13);
          var props = dependency[STR_PROPERTIES];
          if (self3[
            _DYN_ABORTED
            /* @min:%2eaborted */
          ]) {
            props[
              _DYN_ABORTED
              /* @min:%2eaborted */
            ] = true;
          }
          if (self3[
            _DYN_REQUEST_SENT_TIME
            /* @min:%2erequestSentTime */
          ]) {
            dependency[
              _DYN_START_TIME2
              /* @min:%2estartTime */
            ] = /* @__PURE__ */ new Date();
            dependency[
              _DYN_START_TIME2
              /* @min:%2estartTime */
            ].setTime(self3[
              _DYN_REQUEST_SENT_TIME
              /* @min:%2erequestSentTime */
            ]);
          }
          _populatePerfData(self3, dependency);
          if (enableRequestHeaderTracking) {
            if (objKeys(self3.requestHeaders)[
              _DYN_LENGTH5
              /* @min:%2elength */
            ] > 0) {
              props[
                _DYN_REQUEST_HEADERS
                /* @min:%2erequestHeaders */
              ] = self3[
                _DYN_REQUEST_HEADERS
                /* @min:%2erequestHeaders */
              ];
            }
          }
          if (getResponse) {
            var response = getResponse();
            if (response) {
              var correlationContext = response[
                _DYN_CORRELATION_CONTEXT
                /* @min:%2ecorrelationContext */
              ];
              if (correlationContext) {
                dependency.correlationContext = /* dependency.target + " | " + */
                correlationContext;
              }
              if (response[
                _DYN_HEADER_MAP
                /* @min:%2eheaderMap */
              ]) {
                if (objKeys(response.headerMap)[
                  _DYN_LENGTH5
                  /* @min:%2elength */
                ] > 0) {
                  props.responseHeaders = response[
                    _DYN_HEADER_MAP
                    /* @min:%2eheaderMap */
                  ];
                }
              }
              if (self3[
                _DYN_ERROR_STATUS_TEXT
                /* @min:%2eerrorStatusText */
              ]) {
                if (self3[
                  _DYN_STATUS2
                  /* @min:%2estatus */
                ] >= 400) {
                  var responseType = response.type;
                  if (responseType === "" || responseType === "text") {
                    props.responseText = response.responseText ? response[
                      _DYN_STATUS_TEXT
                      /* @min:%2estatusText */
                    ] + " - " + response[strResponseText] : response[
                      _DYN_STATUS_TEXT
                      /* @min:%2estatusText */
                    ];
                  }
                  if (responseType === "json") {
                    props.responseText = response.response ? response[
                      _DYN_STATUS_TEXT
                      /* @min:%2estatusText */
                    ] + " - " + JSON.stringify(response[
                      _DYN_RESPONSE
                      /* @min:%2eresponse */
                    ]) : response[
                      _DYN_STATUS_TEXT
                      /* @min:%2estatusText */
                    ];
                  }
                } else if (self3[
                  _DYN_STATUS2
                  /* @min:%2estatus */
                ] === 0) {
                  props.responseText = response[
                    _DYN_STATUS_TEXT
                    /* @min:%2estatusText */
                  ] || "";
                }
              }
            }
          }
          return dependency;
        };
        self3[
          _DYN_GET_PART_APROPS
          /* @min:%2egetPartAProps */
        ] = function() {
          var _a13;
          var partA = null;
          var traceCtx2 = self3[
            _DYN_EVENT_TRACE_CTX
            /* @min:%2eeventTraceCtx */
          ];
          if (traceCtx2 && (traceCtx2[
            _DYN_TRACE_ID0
            /* @min:%2etraceId */
          ] || traceCtx2[
            _DYN_SPAN_ID1
            /* @min:%2espanId */
          ])) {
            partA = {};
            var traceExt = partA[Extensions.TraceExt] = (_a13 = {}, _a13[
              _DYN_TRACE_ID3
              /* @min:traceID */
            ] = traceCtx2[
              _DYN_TRACE_ID0
              /* @min:%2etraceId */
            ], _a13.parentID = traceCtx2[
              _DYN_SPAN_ID1
              /* @min:%2espanId */
            ], _a13);
            if (!isNullOrUndefined(traceCtx2[
              _DYN_TRACE_FLAGS2
              /* @min:%2etraceFlags */
            ])) {
              traceExt[
                _DYN_TRACE_FLAGS2
                /* @min:%2etraceFlags */
              ] = traceCtx2[
                _DYN_TRACE_FLAGS2
                /* @min:%2etraceFlags */
              ];
            }
          }
          return partA;
        };
      });
    }
    ajaxRecord2.__ieDyn = 1;
    return ajaxRecord2;
  }()
);

// node_modules/@microsoft/applicationinsights-dependencies-js/dist-es5/ajax.js
var _a9;
var AJAX_MONITOR_PREFIX = "ai.ajxmn.";
var strDiagLog = "diagLog";
var AJAX_DATA_CONTAINER = "_ajaxData";
var STR_FETCH = "fetch";
var ERROR_HEADER = "Failed to monitor XMLHttpRequest";
var ERROR_PREFIX = ", monitoring data for this ajax call ";
var ERROR_POSTFIX = ERROR_PREFIX + "may be incorrect.";
var ERROR_NOT_SENT = ERROR_PREFIX + "won't be sent.";
var CORRELATION_HEADER_ERROR = "Failed to get Request-Context correlation header as it may be not included in the response or not accessible.";
var CUSTOM_REQUEST_CONTEXT_ERROR = "Failed to add custom defined request context as configured call back may missing a null check.";
var FAILED_TO_CALCULATE_DURATION_ERROR = "Failed to calculate the duration of the ";
var _markCount = 0;
function _supportsFetch() {
  var _global = getGlobal();
  if (!_global || isNullOrUndefined(_global.Request) || isNullOrUndefined(_global.Request[strShimPrototype]) || isNullOrUndefined(_global[STR_FETCH])) {
    return null;
  }
  return _global[STR_FETCH];
}
function _supportsAjaxMonitoring(ajaxMonitorInstance, ajaxDataId) {
  var _a12, _b4;
  var result = false;
  if (isXhrSupported()) {
    var proto = XMLHttpRequest[strShimPrototype];
    result = !isNullOrUndefined(proto) && !isNullOrUndefined(proto.open) && // eslint-disable-line security/detect-non-literal-fs-filename -- false positive
    !isNullOrUndefined(proto.send) && !isNullOrUndefined(proto.abort);
  }
  var ieVer = getIEVersion();
  if (ieVer && ieVer < 9) {
    result = false;
  }
  if (result) {
    try {
      var xhr = new XMLHttpRequest();
      var xhrData = {
        xh: [],
        i: (_a12 = {}, _a12[ajaxDataId] = {}, _a12)
      };
      xhr[AJAX_DATA_CONTAINER] = xhrData;
      var theOpen = XMLHttpRequest[strShimPrototype].open;
      XMLHttpRequest[strShimPrototype].open = theOpen;
    } catch (e) {
      result = false;
      _throwInternalCritical(ajaxMonitorInstance, 15, "Failed to enable XMLHttpRequest monitoring, extension is not supported", (_b4 = {}, _b4[
        _DYN_EXCEPTION2
        /* @min:exception */
      ] = dumpObj(e), _b4));
    }
  }
  return result;
}
var _getAjaxData = function(xhr, ajaxDataId) {
  if (xhr && ajaxDataId && xhr[AJAX_DATA_CONTAINER]) {
    return (xhr[AJAX_DATA_CONTAINER].i || {})[ajaxDataId];
  }
  return null;
};
var _addSharedXhrHeaders = function(xhr, name, value) {
  if (xhr) {
    var headers = (xhr[AJAX_DATA_CONTAINER] || {}).xh;
    if (headers) {
      headers.push({
        n: name,
        v: value
      });
    }
  }
};
var _isHeaderSet = function(xhr, name) {
  var isPresent = false;
  if (xhr) {
    var headers = (xhr[AJAX_DATA_CONTAINER] || {}).xh;
    if (headers) {
      arrForEach(headers, function(header) {
        if (header.n === name) {
          isPresent = true;
          return -1;
        }
      });
    }
  }
  return isPresent;
};
function _getFailedAjaxDiagnosticsMessage(xhr, ajaxDataId) {
  var result = "";
  try {
    var ajaxData = _getAjaxData(xhr, ajaxDataId);
    if (ajaxData && ajaxData[
      _DYN_REQUEST_URL
      /* @min:%2erequestUrl */
    ]) {
      result += "(url: '" + ajaxData[
        _DYN_REQUEST_URL
        /* @min:%2erequestUrl */
      ] + "')";
    }
  } catch (e) {
  }
  return result;
}
function _throwInternalCritical(ajaxMonitorInstance, msgId, message, properties, isUserAct) {
  _throwInternal(ajaxMonitorInstance[strDiagLog](), 1, msgId, message, properties, isUserAct);
}
function _throwInternalWarning(ajaxMonitorInstance, msgId, message, properties, isUserAct) {
  _throwInternal(ajaxMonitorInstance[strDiagLog](), 2, msgId, message, properties, isUserAct);
}
function _createErrorCallbackFunc(ajaxMonitorInstance, internalMessage, message) {
  return function(callDetails) {
    var _a12;
    _throwInternalCritical(ajaxMonitorInstance, internalMessage, message, (_a12 = {
      ajaxDiagnosticsMessage: _getFailedAjaxDiagnosticsMessage(callDetails[
        _DYN_INST
        /* @min:%2einst */
      ], ajaxMonitorInstance._ajaxDataId)
    }, _a12[
      _DYN_EXCEPTION2
      /* @min:exception */
    ] = dumpObj(callDetails.err), _a12));
  };
}
function _indexOf(value, match) {
  if (value && match) {
    return strIndexOf(value, match);
  }
  return -1;
}
function _addHandler(container, id, theFunc) {
  var theHandler = {
    id,
    fn: theFunc
  };
  container.push(theHandler);
  return {
    remove: function() {
      arrForEach(container, function(initializer, idx) {
        if (initializer.id === theHandler.id) {
          container.splice(idx, 1);
          return -1;
        }
      });
    }
  };
}
function _processDependencyContainer(core, container, details, message) {
  var result = true;
  arrForEach(container, function(theFunc, idx) {
    try {
      if (theFunc.fn.call(null, details) === false) {
        result = false;
      }
    } catch (e) {
      _throwInternal(core && core.logger, 1, 64, "Dependency " + message + " [#" + idx + "] failed: " + getExceptionName(e), { exception: dumpObj(e) }, true);
    }
  });
  return result;
}
function _processDependencyListeners(listeners, core, ajaxData, xhr, input, init) {
  var _a12;
  var initializersCount = listeners[
    _DYN_LENGTH5
    /* @min:%2elength */
  ];
  if (initializersCount > 0) {
    var details = (_a12 = {}, _a12[
      _DYN_CORE2
      /* @min:core */
    ] = core, _a12.xhr = xhr, _a12.input = input, _a12.init = init, _a12.traceId = ajaxData[
      _DYN_TRACE_ID3
      /* @min:%2etraceID */
    ], _a12.spanId = ajaxData[
      _DYN_SPAN_ID2
      /* @min:%2espanID */
    ], _a12.traceFlags = ajaxData[
      _DYN_TRACE_FLAGS2
      /* @min:%2etraceFlags */
    ], _a12.context = ajaxData[
      _DYN_CONTEXT
      /* @min:%2econtext */
    ] || {}, _a12.aborted = !!ajaxData[
      _DYN_ABORTED
      /* @min:%2eaborted */
    ], _a12);
    _processDependencyContainer(core, listeners, details, "listener");
    ajaxData[
      _DYN_TRACE_ID3
      /* @min:%2etraceID */
    ] = details[
      _DYN_TRACE_ID0
      /* @min:%2etraceId */
    ];
    ajaxData[
      _DYN_SPAN_ID2
      /* @min:%2espanID */
    ] = details[
      _DYN_SPAN_ID1
      /* @min:%2espanId */
    ];
    ajaxData[
      _DYN_TRACE_FLAGS2
      /* @min:%2etraceFlags */
    ] = details[
      _DYN_TRACE_FLAGS2
      /* @min:%2etraceFlags */
    ];
    ajaxData[
      _DYN_CONTEXT
      /* @min:%2econtext */
    ] = details[
      _DYN_CONTEXT
      /* @min:%2econtext */
    ];
  }
}
var BLOB_CORE = "*.blob.core.";
var DfltAjaxCorrelationHeaderExDomains = objFreeze([
  BLOB_CORE + "windows.net",
  BLOB_CORE + "chinacloudapi.cn",
  BLOB_CORE + "cloudapi.de",
  BLOB_CORE + "usgovcloudapi.net"
]);
var _internalExcludeEndpoints = [
  /https:\/\/[^\/]*(\.pipe\.aria|aria\.pipe|events\.data|collector\.azure)\.[^\/]+\/(OneCollector\/1|Collector\/3)\.0/i
];
var _defaultConfig2 = objFreeze((_a9 = {}, _a9[
  _DYN_MAX_AJAX_CALLS_PER_V7
  /* @min:maxAjaxCallsPerView */
] = 500, _a9[
  _DYN_DISABLE_AJAX_TRACKIN9
  /* @min:disableAjaxTracking */
] = false, _a9[
  _DYN_DISABLE_FETCH_TRACKI11
  /* @min:disableFetchTracking */
] = false, _a9[
  _DYN_EXCLUDE_REQUEST_FROM8
  /* @min:excludeRequestFromAutoTrackingPatterns */
] = void 0, _a9.disableCorrelationHeaders = false, _a9.distributedTracingMode = 1, _a9.correlationHeaderExcludedDomains = DfltAjaxCorrelationHeaderExDomains, _a9.correlationHeaderDomains = void 0, _a9.correlationHeaderExcludePatterns = void 0, _a9.appId = void 0, _a9.enableCorsCorrelation = false, _a9[
  _DYN_ENABLE_REQUEST_HEADE4
  /* @min:enableRequestHeaderTracking */
] = false, _a9[
  _DYN_ENABLE_RESPONSE_HEAD12
  /* @min:enableResponseHeaderTracking */
] = false, _a9[
  _DYN_ENABLE_AJAX_ERROR_ST5
  /* @min:enableAjaxErrorStatusText */
] = false, _a9[
  _DYN_ENABLE_AJAX_PERF_TRA6
  /* @min:enableAjaxPerfTracking */
] = false, _a9.maxAjaxPerfLookupAttempts = 3, _a9[
  _DYN_AJAX_PERF_LOOKUP_DEL10
  /* @min:ajaxPerfLookupDelay */
] = 25, _a9.ignoreHeaders = [
  "Authorization",
  "X-API-Key",
  "WWW-Authenticate"
], _a9[
  _DYN_ADD_REQUEST_CONTEXT
  /* @min:addRequestContext */
] = void 0, _a9.addIntEndpoints = true, _a9));
var AjaxMonitor = (
  /** @class */
  function(_super) {
    __extendsFn(AjaxMonitor2, _super);
    function AjaxMonitor2() {
      var _this = _super.call(this) || this;
      _this.identifier = AjaxMonitor2.identifier;
      _this.priority = 120;
      var _fetchInitialized;
      var _xhrInitialized;
      var _currentWindowHost;
      var _extensionConfig;
      var _enableRequestHeaderTracking;
      var _enableAjaxErrorStatusText;
      var _trackAjaxAttempts;
      var _context;
      var _isUsingW3CHeaders;
      var _isUsingAIHeaders;
      var _markPrefix;
      var _enableAjaxPerfTracking;
      var _maxAjaxCallsPerView;
      var _enableResponseHeaderTracking;
      var _disabledUrls;
      var _disableAjaxTracking;
      var _disableFetchTracking;
      var _excludeRequestFromAutoTrackingPatterns;
      var _addRequestContext;
      var _evtNamespace;
      var _ajaxDataId;
      var _dependencyHandlerId;
      var _dependencyListeners;
      var _dependencyInitializers;
      var _ignoreHeaders;
      var _maxAjaxPerfLookupAttempts;
      var _ajaxPerfLookupDelay;
      var _distributedTracingMode;
      var _appId;
      var _polyfillInitialized;
      dynamicProto(AjaxMonitor2, _this, function(_self, _base) {
        var _addHook = _base[
          _DYN__ADD_HOOK2
          /* @min:%2e_addHook */
        ];
        _initDefaults();
        _self.initialize = function(config, core, extensions, pluginChain) {
          if (!_self.isInitialized()) {
            _base.initialize(config, core, extensions, pluginChain);
            _evtNamespace = mergeEvtNamespace(createUniqueNamespace("ajax"), core && core.evtNamespace && core.evtNamespace());
            _populateDefaults(config);
            _instrumentXhr();
            _instrumentFetch();
            _populateContext();
          }
        };
        _self._doTeardown = function() {
          _initDefaults();
        };
        _self.trackDependencyData = function(dependency, properties) {
          _reportDependencyInternal(_dependencyInitializers, _self[
            _DYN_CORE2
            /* @min:%2ecore */
          ], null, dependency, properties);
        };
        _self[
          _DYN_INCLUDE_CORRELATION_2
          /* @min:%2eincludeCorrelationHeaders */
        ] = function(ajaxData, input, init, xhr) {
          var currentWindowHost = _self["_currentWindowHost"] || _currentWindowHost;
          _processDependencyListeners(_dependencyListeners, _self[
            _DYN_CORE2
            /* @min:%2ecore */
          ], ajaxData, xhr, input, init);
          if (input || input === "") {
            if (correlationIdCanIncludeCorrelationHeader(_extensionConfig, ajaxData[
              _DYN_GET_ABSOLUTE_URL
              /* @min:%2egetAbsoluteUrl */
            ](), currentWindowHost)) {
              if (!init) {
                init = {};
              }
              var headers = new Headers(init[
                _DYN_HEADERS2
                /* @min:%2eheaders */
              ] || (input instanceof Request ? input[
                _DYN_HEADERS2
                /* @min:%2eheaders */
              ] || {} : {}));
              if (_isUsingAIHeaders) {
                var id = "|" + ajaxData[
                  _DYN_TRACE_ID3
                  /* @min:%2etraceID */
                ] + "." + ajaxData[
                  _DYN_SPAN_ID2
                  /* @min:%2espanID */
                ];
                headers.set(RequestHeaders[
                  3
                  /* eRequestHeaders.requestIdHeader */
                ], id);
                if (_enableRequestHeaderTracking) {
                  ajaxData[
                    _DYN_REQUEST_HEADERS
                    /* @min:%2erequestHeaders */
                  ][RequestHeaders[
                    3
                    /* eRequestHeaders.requestIdHeader */
                  ]] = id;
                }
              }
              var appId = _appId || _context && _context.appId();
              if (appId) {
                headers.set(RequestHeaders[
                  0
                  /* eRequestHeaders.requestContextHeader */
                ], RequestHeaders[
                  2
                  /* eRequestHeaders.requestContextAppIdFormat */
                ] + appId);
                if (_enableRequestHeaderTracking) {
                  ajaxData[
                    _DYN_REQUEST_HEADERS
                    /* @min:%2erequestHeaders */
                  ][RequestHeaders[
                    0
                    /* eRequestHeaders.requestContextHeader */
                  ]] = RequestHeaders[
                    2
                    /* eRequestHeaders.requestContextAppIdFormat */
                  ] + appId;
                }
              }
              if (_isUsingW3CHeaders) {
                var traceFlags = ajaxData[
                  _DYN_TRACE_FLAGS2
                  /* @min:%2etraceFlags */
                ];
                if (isNullOrUndefined(traceFlags)) {
                  traceFlags = 1;
                }
                var traceParent = formatTraceParent(createTraceParent(ajaxData[
                  _DYN_TRACE_ID3
                  /* @min:%2etraceID */
                ], ajaxData[
                  _DYN_SPAN_ID2
                  /* @min:%2espanID */
                ], traceFlags));
                headers.set(RequestHeaders[
                  4
                  /* eRequestHeaders.traceParentHeader */
                ], traceParent);
                if (_enableRequestHeaderTracking) {
                  ajaxData[
                    _DYN_REQUEST_HEADERS
                    /* @min:%2erequestHeaders */
                  ][RequestHeaders[
                    4
                    /* eRequestHeaders.traceParentHeader */
                  ]] = traceParent;
                }
              }
              init[
                _DYN_HEADERS2
                /* @min:%2eheaders */
              ] = headers;
            }
            return init;
          } else if (xhr) {
            if (correlationIdCanIncludeCorrelationHeader(_extensionConfig, ajaxData[
              _DYN_GET_ABSOLUTE_URL
              /* @min:%2egetAbsoluteUrl */
            ](), currentWindowHost)) {
              if (_isUsingAIHeaders) {
                if (!_isHeaderSet(xhr, RequestHeaders[
                  3
                  /* eRequestHeaders.requestIdHeader */
                ])) {
                  var id = "|" + ajaxData[
                    _DYN_TRACE_ID3
                    /* @min:%2etraceID */
                  ] + "." + ajaxData[
                    _DYN_SPAN_ID2
                    /* @min:%2espanID */
                  ];
                  xhr[
                    _DYN_SET_REQUEST_HEADER2
                    /* @min:%2esetRequestHeader */
                  ](RequestHeaders[
                    3
                    /* eRequestHeaders.requestIdHeader */
                  ], id);
                  if (_enableRequestHeaderTracking) {
                    ajaxData[
                      _DYN_REQUEST_HEADERS
                      /* @min:%2erequestHeaders */
                    ][RequestHeaders[
                      3
                      /* eRequestHeaders.requestIdHeader */
                    ]] = id;
                  }
                } else {
                  _throwInternalWarning(_self, 71, "Unable to set [" + RequestHeaders[
                    3
                    /* eRequestHeaders.requestIdHeader */
                  ] + "] as it has already been set by another instance");
                }
              }
              var appId = _appId || _context && _context.appId();
              if (appId) {
                if (!_isHeaderSet(xhr, RequestHeaders[
                  0
                  /* eRequestHeaders.requestContextHeader */
                ])) {
                  xhr[
                    _DYN_SET_REQUEST_HEADER2
                    /* @min:%2esetRequestHeader */
                  ](RequestHeaders[
                    0
                    /* eRequestHeaders.requestContextHeader */
                  ], RequestHeaders[
                    2
                    /* eRequestHeaders.requestContextAppIdFormat */
                  ] + appId);
                  if (_enableRequestHeaderTracking) {
                    ajaxData[
                      _DYN_REQUEST_HEADERS
                      /* @min:%2erequestHeaders */
                    ][RequestHeaders[
                      0
                      /* eRequestHeaders.requestContextHeader */
                    ]] = RequestHeaders[
                      2
                      /* eRequestHeaders.requestContextAppIdFormat */
                    ] + appId;
                  }
                } else {
                  _throwInternalWarning(_self, 71, "Unable to set [" + RequestHeaders[
                    0
                    /* eRequestHeaders.requestContextHeader */
                  ] + "] as it has already been set by another instance");
                }
              }
              if (_isUsingW3CHeaders) {
                var traceFlags = ajaxData[
                  _DYN_TRACE_FLAGS2
                  /* @min:%2etraceFlags */
                ];
                if (isNullOrUndefined(traceFlags)) {
                  traceFlags = 1;
                }
                if (!_isHeaderSet(xhr, RequestHeaders[
                  4
                  /* eRequestHeaders.traceParentHeader */
                ])) {
                  var traceParent = formatTraceParent(createTraceParent(ajaxData[
                    _DYN_TRACE_ID3
                    /* @min:%2etraceID */
                  ], ajaxData[
                    _DYN_SPAN_ID2
                    /* @min:%2espanID */
                  ], traceFlags));
                  xhr[
                    _DYN_SET_REQUEST_HEADER2
                    /* @min:%2esetRequestHeader */
                  ](RequestHeaders[
                    4
                    /* eRequestHeaders.traceParentHeader */
                  ], traceParent);
                  if (_enableRequestHeaderTracking) {
                    ajaxData[
                      _DYN_REQUEST_HEADERS
                      /* @min:%2erequestHeaders */
                    ][RequestHeaders[
                      4
                      /* eRequestHeaders.traceParentHeader */
                    ]] = traceParent;
                  }
                } else {
                  _throwInternalWarning(_self, 71, "Unable to set [" + RequestHeaders[
                    4
                    /* eRequestHeaders.traceParentHeader */
                  ] + "] as it has already been set by another instance");
                }
              }
            }
            return xhr;
          }
          return void 0;
        };
        _self[
          _DYN_TRACK_DEPENDENCY_DAT3
          /* @min:%2etrackDependencyDataInternal */
        ] = function(dependency, properties, systemProperties) {
          if (_maxAjaxCallsPerView === -1 || _trackAjaxAttempts < _maxAjaxCallsPerView) {
            if ((_distributedTracingMode === 2 || _distributedTracingMode === 1) && typeof dependency.id === "string" && dependency.id[dependency.id[
              _DYN_LENGTH5
              /* @min:%2elength */
            ] - 1] !== ".") {
              dependency.id += ".";
            }
            if (isNullOrUndefined(dependency[
              _DYN_START_TIME2
              /* @min:%2estartTime */
            ])) {
              dependency[
                _DYN_START_TIME2
                /* @min:%2estartTime */
              ] = /* @__PURE__ */ new Date();
            }
            var item = createTelemetryItem(dependency, RemoteDependencyData.dataType, RemoteDependencyData.envelopeType, _self[strDiagLog](), properties, systemProperties);
            _self[
              _DYN_CORE2
              /* @min:%2ecore */
            ].track(item);
          } else if (_trackAjaxAttempts === _maxAjaxCallsPerView) {
            _throwInternalCritical(_self, 55, "Maximum ajax per page view limit reached, ajax monitoring is paused until the next trackPageView(). In order to increase the limit set the maxAjaxCallsPerView configuration parameter.", true);
          }
          ++_trackAjaxAttempts;
        };
        _self.addDependencyListener = function(dependencyListener) {
          return _addHandler(_dependencyListeners, _dependencyHandlerId++, dependencyListener);
        };
        _self.addDependencyInitializer = function(dependencyInitializer) {
          return _addHandler(_dependencyInitializers, _dependencyHandlerId++, dependencyInitializer);
        };
        function _initDefaults() {
          var location2 = getLocation();
          _fetchInitialized = false;
          _xhrInitialized = false;
          _polyfillInitialized = false;
          _currentWindowHost = location2 && location2.host && location2.host[
            _DYN_TO_LOWER_CASE3
            /* @min:%2etoLowerCase */
          ]();
          _extensionConfig = null;
          _enableRequestHeaderTracking = false;
          _enableAjaxErrorStatusText = false;
          _trackAjaxAttempts = 0;
          _context = null;
          _isUsingW3CHeaders = false;
          _isUsingAIHeaders = false;
          _markPrefix = null;
          _enableAjaxPerfTracking = false;
          _maxAjaxCallsPerView = 0;
          _enableResponseHeaderTracking = false;
          _disabledUrls = {};
          _disableAjaxTracking = false;
          _disableFetchTracking = false;
          _excludeRequestFromAutoTrackingPatterns = null;
          _addRequestContext = null;
          _evtNamespace = null;
          _dependencyHandlerId = 0;
          _dependencyListeners = [];
          _dependencyInitializers = [];
          _ajaxDataId = createUniqueNamespace("ajaxData");
          _self._ajaxDataId = _ajaxDataId;
          _ignoreHeaders = null;
          _maxAjaxPerfLookupAttempts = 1;
          _ajaxPerfLookupDelay = 1;
          _distributedTracingMode = 1;
          _appId = null;
        }
        function _populateDefaults(config) {
          _self[
            _DYN__ADD_HOOK2
            /* @min:%2e_addHook */
          ](onConfigChange(config, function(details) {
            var config2 = details.cfg;
            var ctx = createProcessTelemetryContext(null, config2, _self[
              _DYN_CORE2
              /* @min:%2ecore */
            ]);
            _extensionConfig = ctx.getExtCfg(AjaxMonitor2.identifier, _defaultConfig2);
            _distributedTracingMode = _extensionConfig.distributedTracingMode;
            _enableRequestHeaderTracking = _extensionConfig[
              _DYN_ENABLE_REQUEST_HEADE4
              /* @min:%2eenableRequestHeaderTracking */
            ];
            _enableAjaxErrorStatusText = _extensionConfig[
              _DYN_ENABLE_AJAX_ERROR_ST5
              /* @min:%2eenableAjaxErrorStatusText */
            ];
            _enableAjaxPerfTracking = _extensionConfig[
              _DYN_ENABLE_AJAX_PERF_TRA6
              /* @min:%2eenableAjaxPerfTracking */
            ];
            _maxAjaxCallsPerView = _extensionConfig[
              _DYN_MAX_AJAX_CALLS_PER_V7
              /* @min:%2emaxAjaxCallsPerView */
            ];
            _excludeRequestFromAutoTrackingPatterns = [].concat(_extensionConfig[
              _DYN_EXCLUDE_REQUEST_FROM8
              /* @min:%2eexcludeRequestFromAutoTrackingPatterns */
            ] || [], _extensionConfig.addIntEndpoints !== false ? _internalExcludeEndpoints : []);
            _addRequestContext = _extensionConfig[
              _DYN_ADD_REQUEST_CONTEXT
              /* @min:%2eaddRequestContext */
            ];
            _isUsingAIHeaders = _distributedTracingMode === 0 || _distributedTracingMode === 1;
            _isUsingW3CHeaders = _distributedTracingMode === 1 || _distributedTracingMode === 2;
            if (_enableAjaxPerfTracking) {
              var iKey = config2.instrumentationKey || "unkwn";
              if (iKey[
                _DYN_LENGTH5
                /* @min:%2elength */
              ] > 5) {
                _markPrefix = AJAX_MONITOR_PREFIX + strSubstring(iKey, iKey[
                  _DYN_LENGTH5
                  /* @min:%2elength */
                ] - 5) + ".";
              } else {
                _markPrefix = AJAX_MONITOR_PREFIX + iKey + ".";
              }
            }
            _disableAjaxTracking = !!_extensionConfig[
              _DYN_DISABLE_AJAX_TRACKIN9
              /* @min:%2edisableAjaxTracking */
            ];
            _maxAjaxPerfLookupAttempts = _extensionConfig.maxAjaxPerfLookupAttempts;
            _ajaxPerfLookupDelay = _extensionConfig[
              _DYN_AJAX_PERF_LOOKUP_DEL10
              /* @min:%2eajaxPerfLookupDelay */
            ];
            _ignoreHeaders = _extensionConfig.ignoreHeaders;
            _appId = _extensionConfig.appId;
          }));
        }
        function _populateContext() {
          var propExt = _self[
            _DYN_CORE2
            /* @min:%2ecore */
          ].getPlugin(PropertiesPluginIdentifier);
          if (propExt) {
            _context = propExt.plugin[
              _DYN_CONTEXT
              /* @min:%2econtext */
            ];
          }
        }
        function _canIncludeHeaders(header) {
          var rlt = true;
          if (header || _ignoreHeaders) {
            arrForEach(_ignoreHeaders, function(key) {
              if (key[
                _DYN_TO_LOWER_CASE3
                /* @min:%2etoLowerCase */
              ]() === header[
                _DYN_TO_LOWER_CASE3
                /* @min:%2etoLowerCase */
              ]()) {
                rlt = false;
                return -1;
              }
            });
          }
          return rlt;
        }
        function _instrumentFetch() {
          var fetch2 = _supportsFetch();
          if (!fetch2) {
            return;
          }
          var global2 = getGlobal();
          var isPolyfill = fetch2.polyfill;
          _self[
            _DYN__ADD_HOOK2
            /* @min:%2e_addHook */
          ](onConfigChange(_extensionConfig, function() {
            _disableFetchTracking = !!_extensionConfig[
              _DYN_DISABLE_FETCH_TRACKI11
              /* @min:%2edisableFetchTracking */
            ];
            _enableResponseHeaderTracking = _extensionConfig[
              _DYN_ENABLE_RESPONSE_HEAD12
              /* @min:%2eenableResponseHeaderTracking */
            ];
            if (!_disableFetchTracking && !_fetchInitialized) {
              _addHook(InstrumentFunc(global2, STR_FETCH, {
                ns: _evtNamespace,
                // Add request hook
                req: function(callDetails, input, init) {
                  var fetchData;
                  if (!_disableFetchTracking && _fetchInitialized && !_isDisabledRequest(null, input, init) && // If we have a polyfil and XHR instrumented then let XHR report otherwise we get duplicates
                  !(isPolyfill && _xhrInitialized)) {
                    var ctx = callDetails.ctx();
                    fetchData = _createFetchRecord(input, init);
                    var newInit = _self[
                      _DYN_INCLUDE_CORRELATION_2
                      /* @min:%2eincludeCorrelationHeaders */
                    ](fetchData, input, init);
                    if (newInit !== init) {
                      callDetails.set(1, newInit);
                    }
                    ctx.data = fetchData;
                  }
                },
                rsp: function(callDetails, input) {
                  if (!_disableFetchTracking) {
                    var fetchData_1 = callDetails.ctx().data;
                    if (fetchData_1) {
                      callDetails.rslt = callDetails.rslt.then(function(response) {
                        _reportFetchMetrics(callDetails, (response || {})[
                          _DYN_STATUS2
                          /* @min:%2estatus */
                        ], input, response, fetchData_1, function() {
                          var _a12;
                          var ajaxResponse = (_a12 = {
                            statusText: (response || {})[
                              _DYN_STATUS_TEXT
                              /* @min:%2estatusText */
                            ]
                          }, _a12[
                            _DYN_HEADER_MAP
                            /* @min:headerMap */
                          ] = null, _a12[
                            _DYN_CORRELATION_CONTEXT
                            /* @min:correlationContext */
                          ] = _getFetchCorrelationContext(response), _a12);
                          if (_enableResponseHeaderTracking && response) {
                            var responseHeaderMap_1 = {};
                            response.headers.forEach(function(value, name) {
                              if (_canIncludeHeaders(name)) {
                                responseHeaderMap_1[name] = value;
                              }
                            });
                            ajaxResponse[
                              _DYN_HEADER_MAP
                              /* @min:%2eheaderMap */
                            ] = responseHeaderMap_1;
                          }
                          return ajaxResponse;
                        });
                        return response;
                      }).catch(function(reason) {
                        _reportFetchMetrics(callDetails, 0, input, null, fetchData_1, null, { error: reason.message || dumpObj(reason) });
                        throw reason;
                      });
                    }
                  }
                },
                // Create an error callback to report any hook errors
                hkErr: _createErrorCallbackFunc(_self, 15, "Failed to monitor Window.fetch" + ERROR_POSTFIX)
              }, true, isWebWorker()));
              _fetchInitialized = true;
            } else if (isPolyfill && !_polyfillInitialized) {
              _addHook(InstrumentFunc(global2, STR_FETCH, {
                ns: _evtNamespace,
                req: function(callDetails, input, init) {
                  _isDisabledRequest(null, input, init);
                }
              }));
              _polyfillInitialized = true;
            }
          }));
          if (isPolyfill) {
            global2[STR_FETCH].polyfill = isPolyfill;
          }
        }
        function _hookProto(target, funcName, callbacks) {
          _addHook(InstrumentProto(target, funcName, callbacks));
        }
        function _instrumentXhr() {
          if (!_supportsAjaxMonitoring(_self, _ajaxDataId)) {
            return;
          }
          _self[
            _DYN__ADD_HOOK2
            /* @min:%2e_addHook */
          ](onConfigChange(_extensionConfig, function() {
            _disableAjaxTracking = !!_extensionConfig[
              _DYN_DISABLE_AJAX_TRACKIN9
              /* @min:%2edisableAjaxTracking */
            ];
            _enableRequestHeaderTracking = _extensionConfig[
              _DYN_ENABLE_REQUEST_HEADE4
              /* @min:%2eenableRequestHeaderTracking */
            ];
            if (!_disableAjaxTracking && !_xhrInitialized) {
              _hookProto(XMLHttpRequest, "open", {
                ns: _evtNamespace,
                req: function(callDetails, method, url, async) {
                  if (!_disableAjaxTracking) {
                    var xhr = callDetails[
                      _DYN_INST
                      /* @min:%2einst */
                    ];
                    var ajaxData = _getAjaxData(xhr, _ajaxDataId);
                    if (!_isDisabledRequest(xhr, url) && _isMonitoredXhrInstance(xhr, ajaxData, true)) {
                      if (!ajaxData || !ajaxData.xhrMonitoringState[
                        _DYN_OPEN_DONE
                        /* @min:%2eopenDone */
                      ]) {
                        ajaxData = _openHandler(xhr, method, url, async);
                      }
                      _attachToOnReadyStateChange(xhr, ajaxData);
                    }
                  }
                },
                hkErr: _createErrorCallbackFunc(_self, 15, ERROR_HEADER + ".open" + ERROR_POSTFIX)
              });
              _hookProto(XMLHttpRequest, "send", {
                ns: _evtNamespace,
                req: function(callDetails, context) {
                  if (!_disableAjaxTracking) {
                    var xhr = callDetails[
                      _DYN_INST
                      /* @min:%2einst */
                    ];
                    var ajaxData = _getAjaxData(xhr, _ajaxDataId);
                    if (_isMonitoredXhrInstance(xhr, ajaxData) && !ajaxData.xhrMonitoringState[
                      _DYN_SEND_DONE
                      /* @min:%2esendDone */
                    ]) {
                      _createMarkId("xhr", ajaxData);
                      ajaxData[
                        _DYN_REQUEST_SENT_TIME
                        /* @min:%2erequestSentTime */
                      ] = dateTimeUtilsNow();
                      _self[
                        _DYN_INCLUDE_CORRELATION_2
                        /* @min:%2eincludeCorrelationHeaders */
                      ](ajaxData, void 0, void 0, xhr);
                      ajaxData.xhrMonitoringState[
                        _DYN_SEND_DONE
                        /* @min:%2esendDone */
                      ] = true;
                    }
                  }
                },
                hkErr: _createErrorCallbackFunc(_self, 17, ERROR_HEADER + ERROR_POSTFIX)
              });
              _hookProto(XMLHttpRequest, "abort", {
                ns: _evtNamespace,
                req: function(callDetails) {
                  if (!_disableAjaxTracking) {
                    var xhr = callDetails[
                      _DYN_INST
                      /* @min:%2einst */
                    ];
                    var ajaxData = _getAjaxData(xhr, _ajaxDataId);
                    if (_isMonitoredXhrInstance(xhr, ajaxData) && !ajaxData.xhrMonitoringState[
                      _DYN_ABORT_DONE
                      /* @min:%2eabortDone */
                    ]) {
                      ajaxData[
                        _DYN_ABORTED
                        /* @min:%2eaborted */
                      ] = 1;
                      ajaxData.xhrMonitoringState[
                        _DYN_ABORT_DONE
                        /* @min:%2eabortDone */
                      ] = true;
                    }
                  }
                },
                hkErr: _createErrorCallbackFunc(_self, 13, ERROR_HEADER + ".abort" + ERROR_POSTFIX)
              });
              _hookProto(XMLHttpRequest, "setRequestHeader", {
                ns: _evtNamespace,
                req: function(callDetails, header, value) {
                  if (!_disableAjaxTracking) {
                    var xhr = callDetails[
                      _DYN_INST
                      /* @min:%2einst */
                    ];
                    var ajaxData = _getAjaxData(xhr, _ajaxDataId);
                    if (ajaxData && _isMonitoredXhrInstance(xhr, ajaxData)) {
                      _addSharedXhrHeaders(xhr, header, value);
                      if (_enableRequestHeaderTracking && _canIncludeHeaders(header)) {
                        if (ajaxData) {
                          ajaxData[
                            _DYN_REQUEST_HEADERS
                            /* @min:%2erequestHeaders */
                          ][header] = value;
                        }
                      }
                    }
                  }
                },
                hkErr: _createErrorCallbackFunc(_self, 71, ERROR_HEADER + ".setRequestHeader" + ERROR_POSTFIX)
              });
              _xhrInitialized = true;
            }
          }));
        }
        function _isDisabledRequest(xhr, request, init) {
          var isDisabled = false;
          var theUrl = ((!isString(request) ? (request || {}).url || "" : request) || "")[
            _DYN_TO_LOWER_CASE3
            /* @min:%2etoLowerCase */
          ]();
          arrForEach(_excludeRequestFromAutoTrackingPatterns, function(regex) {
            var theRegex = regex;
            if (isString(regex)) {
              theRegex = new RegExp(regex);
            }
            if (!isDisabled) {
              isDisabled = theRegex.test(theUrl);
            }
          });
          if (isDisabled) {
            return isDisabled;
          }
          var idx = _indexOf(theUrl, "?");
          var idx2 = _indexOf(theUrl, "#");
          if (idx === -1 || idx2 !== -1 && idx2 < idx) {
            idx = idx2;
          }
          if (idx !== -1) {
            theUrl = theUrl.substring(0, idx);
          }
          if (!isNullOrUndefined(xhr)) {
            isDisabled = xhr[DisabledPropertyName2] === true || theUrl[DisabledPropertyName2] === true;
          } else if (!isNullOrUndefined(request)) {
            isDisabled = (typeof request === "object" ? request[DisabledPropertyName2] === true : false) || (init ? init[DisabledPropertyName2] === true : false);
          }
          if (!isDisabled && theUrl && isInternalApplicationInsightsEndpoint(theUrl)) {
            isDisabled = true;
          }
          if (isDisabled) {
            if (!_disabledUrls[theUrl]) {
              _disabledUrls[theUrl] = 1;
            }
          } else {
            if (_disabledUrls[theUrl]) {
              isDisabled = true;
            }
          }
          return isDisabled;
        }
        function _isMonitoredXhrInstance(xhr, ajaxData, excludeAjaxDataValidation) {
          var ajaxValidation = true;
          var initialized = _xhrInitialized;
          if (!isNullOrUndefined(xhr)) {
            ajaxValidation = excludeAjaxDataValidation === true || !isNullOrUndefined(ajaxData);
          }
          return initialized && ajaxValidation;
        }
        function _getDistributedTraceCtx() {
          var distributedTraceCtx = null;
          if (_self[
            _DYN_CORE2
            /* @min:%2ecore */
          ] && _self[
            _DYN_CORE2
            /* @min:%2ecore */
          ].getTraceCtx) {
            distributedTraceCtx = _self[
              _DYN_CORE2
              /* @min:%2ecore */
            ].getTraceCtx(false);
          }
          if (!distributedTraceCtx && _context && _context.telemetryTrace) {
            distributedTraceCtx = createDistributedTraceContextFromTrace(_context.telemetryTrace);
          }
          return distributedTraceCtx;
        }
        function _openHandler(xhr, method, url, async) {
          var _a12;
          var distributedTraceCtx = _getDistributedTraceCtx();
          var traceID = distributedTraceCtx && distributedTraceCtx[
            _DYN_GET_TRACE_ID
            /* @min:%2egetTraceId */
          ]() || generateW3CId();
          var spanID = strSubstr(generateW3CId(), 0, 16);
          var xhrRequestData = xhr[AJAX_DATA_CONTAINER] = xhr[AJAX_DATA_CONTAINER] || { xh: [], i: {} };
          var ajaxDataCntr = xhrRequestData.i = xhrRequestData.i || {};
          var ajaxData = ajaxDataCntr[_ajaxDataId] = ajaxDataCntr[_ajaxDataId] || new ajaxRecord(traceID, spanID, _self[strDiagLog](), (_a12 = _self.core) === null || _a12 === void 0 ? void 0 : _a12.getTraceCtx());
          ajaxData[
            _DYN_TRACE_FLAGS2
            /* @min:%2etraceFlags */
          ] = distributedTraceCtx && distributedTraceCtx[
            _DYN_GET_TRACE_FLAGS
            /* @min:%2egetTraceFlags */
          ]();
          ajaxData[
            _DYN_METHOD2
            /* @min:%2emethod */
          ] = method;
          ajaxData[
            _DYN_REQUEST_URL
            /* @min:%2erequestUrl */
          ] = url;
          ajaxData.xhrMonitoringState[
            _DYN_OPEN_DONE
            /* @min:%2eopenDone */
          ] = true;
          ajaxData[
            _DYN_REQUEST_HEADERS
            /* @min:%2erequestHeaders */
          ] = {};
          ajaxData.async = async;
          ajaxData[
            _DYN_ERROR_STATUS_TEXT
            /* @min:%2eerrorStatusText */
          ] = _enableAjaxErrorStatusText;
          return ajaxData;
        }
        function _attachToOnReadyStateChange(xhr, ajaxData) {
          ajaxData.xhrMonitoringState[
            _DYN_STATE_CHANGE_ATTACHE13
            /* @min:%2estateChangeAttached */
          ] = eventOn(xhr, "readystatechange", function() {
            var _a12;
            try {
              if (xhr && xhr.readyState === 4 && _isMonitoredXhrInstance(xhr, ajaxData)) {
                _onAjaxComplete(xhr);
              }
            } catch (e) {
              var exceptionText = dumpObj(e);
              if (!exceptionText || _indexOf(exceptionText[
                _DYN_TO_LOWER_CASE3
                /* @min:%2etoLowerCase */
              ](), "c00c023f") === -1) {
                _throwInternalCritical(_self, 16, ERROR_HEADER + " 'readystatechange' event handler" + ERROR_POSTFIX, (_a12 = {}, _a12[
                  _DYN_AJAX_DIAGNOSTICS_MES16
                  /* @min:ajaxDiagnosticsMessage */
                ] = _getFailedAjaxDiagnosticsMessage(xhr, _ajaxDataId), _a12[
                  _DYN_EXCEPTION2
                  /* @min:exception */
                ] = exceptionText, _a12));
              }
            }
          }, _evtNamespace);
        }
        function _getResponseText2(xhr) {
          try {
            var responseType = xhr.responseType;
            if (responseType === "" || responseType === "text") {
              return xhr[
                _DYN_RESPONSE_TEXT
                /* @min:%2eresponseText */
              ];
            }
          } catch (e) {
          }
          return null;
        }
        function _onAjaxComplete(xhr) {
          var ajaxData = _getAjaxData(xhr, _ajaxDataId);
          ajaxData[
            _DYN_RESPONSE_FINISHED_TI14
            /* @min:%2eresponseFinishedTime */
          ] = dateTimeUtilsNow();
          ajaxData[
            _DYN_STATUS2
            /* @min:%2estatus */
          ] = xhr[
            _DYN_STATUS2
            /* @min:%2estatus */
          ];
          function _reportXhrError(e, failedProps) {
            var errorProps = failedProps || {};
            errorProps["ajaxDiagnosticsMessage"] = _getFailedAjaxDiagnosticsMessage(xhr, _ajaxDataId);
            if (e) {
              errorProps["exception"] = dumpObj(e);
            }
            _throwInternalWarning(_self, 14, FAILED_TO_CALCULATE_DURATION_ERROR + "ajax call" + ERROR_NOT_SENT, errorProps);
          }
          _findPerfResourceEntry("xmlhttprequest", ajaxData, function() {
            try {
              var dependency = ajaxData[
                _DYN__CREATE_TRACK_ITEM
                /* @min:%2eCreateTrackItem */
              ]("Ajax", _enableRequestHeaderTracking, function() {
                var _a12;
                var ajaxResponse = (_a12 = {
                  statusText: xhr[
                    _DYN_STATUS_TEXT
                    /* @min:%2estatusText */
                  ]
                }, _a12[
                  _DYN_HEADER_MAP
                  /* @min:headerMap */
                ] = null, _a12[
                  _DYN_CORRELATION_CONTEXT
                  /* @min:correlationContext */
                ] = _getAjaxCorrelationContext(xhr), _a12.type = xhr.responseType, _a12[
                  _DYN_RESPONSE_TEXT
                  /* @min:responseText */
                ] = _getResponseText2(xhr), _a12.response = xhr[
                  _DYN_RESPONSE
                  /* @min:%2eresponse */
                ], _a12);
                if (_enableResponseHeaderTracking) {
                  var headers = xhr[
                    _DYN_GET_ALL_RESPONSE_HEA15
                    /* @min:%2egetAllResponseHeaders */
                  ]();
                  if (headers) {
                    var arr = strTrim(headers).split(/[\r\n]+/);
                    var responseHeaderMap_2 = {};
                    arrForEach(arr, function(line) {
                      var parts = line.split(": ");
                      var header = parts.shift();
                      var value = parts.join(": ");
                      if (_canIncludeHeaders(header)) {
                        responseHeaderMap_2[header] = value;
                      }
                    });
                    ajaxResponse[
                      _DYN_HEADER_MAP
                      /* @min:%2eheaderMap */
                    ] = responseHeaderMap_2;
                  }
                }
                return ajaxResponse;
              });
              var properties = void 0;
              try {
                if (!!_addRequestContext) {
                  properties = _addRequestContext({ status: xhr[
                    _DYN_STATUS2
                    /* @min:%2estatus */
                  ], xhr });
                }
              } catch (e) {
                _throwInternalWarning(_self, 104, CUSTOM_REQUEST_CONTEXT_ERROR);
              }
              if (dependency) {
                if (properties !== void 0) {
                  dependency[
                    STR_PROPERTIES
                    /* @min:%2eproperties */
                  ] = __assignFn(__assignFn({}, dependency.properties), properties);
                }
                var sysProperties = ajaxData[
                  _DYN_GET_PART_APROPS
                  /* @min:%2egetPartAProps */
                ]();
                _reportDependencyInternal(_dependencyInitializers, _self[
                  _DYN_CORE2
                  /* @min:%2ecore */
                ], ajaxData, dependency, null, sysProperties);
              } else {
                _reportXhrError(null, {
                  requestSentTime: ajaxData[
                    _DYN_REQUEST_SENT_TIME
                    /* @min:%2erequestSentTime */
                  ],
                  responseFinishedTime: ajaxData[
                    _DYN_RESPONSE_FINISHED_TI14
                    /* @min:%2eresponseFinishedTime */
                  ]
                });
              }
            } finally {
              try {
                var xhrRequestData = xhr[AJAX_DATA_CONTAINER] || { i: {} };
                var ajaxDataCntr = xhrRequestData.i || {};
                if (ajaxDataCntr[_ajaxDataId]) {
                  ajaxDataCntr[_ajaxDataId] = null;
                }
              } catch (e) {
              }
            }
          }, function(e) {
            _reportXhrError(e, null);
          });
        }
        function _getAjaxCorrelationContext(xhr) {
          var _a12;
          try {
            var responseHeadersString = xhr[
              _DYN_GET_ALL_RESPONSE_HEA15
              /* @min:%2egetAllResponseHeaders */
            ]();
            if (responseHeadersString !== null) {
              var index = _indexOf(responseHeadersString[
                _DYN_TO_LOWER_CASE3
                /* @min:%2etoLowerCase */
              ](), RequestHeaders[
                8
                /* eRequestHeaders.requestContextHeaderLowerCase */
              ]);
              if (index !== -1) {
                var responseHeader = xhr.getResponseHeader(RequestHeaders[
                  0
                  /* eRequestHeaders.requestContextHeader */
                ]);
                return correlationIdGetCorrelationContext(responseHeader);
              }
            }
          } catch (e) {
            _throwInternalWarning(_self, 18, CORRELATION_HEADER_ERROR, (_a12 = {}, _a12[
              _DYN_AJAX_DIAGNOSTICS_MES16
              /* @min:ajaxDiagnosticsMessage */
            ] = _getFailedAjaxDiagnosticsMessage(xhr, _ajaxDataId), _a12[
              _DYN_EXCEPTION2
              /* @min:exception */
            ] = dumpObj(e), _a12));
          }
        }
        function _createMarkId(type, ajaxData) {
          if (ajaxData[
            _DYN_REQUEST_URL
            /* @min:%2erequestUrl */
          ] && _markPrefix && _enableAjaxPerfTracking) {
            var performance_1 = getPerformance();
            if (performance_1 && isFunction(performance_1.mark)) {
              _markCount++;
              var markId = _markPrefix + type + "#" + _markCount;
              performance_1.mark(markId);
              var entries = performance_1.getEntriesByName(markId);
              if (entries && entries[
                _DYN_LENGTH5
                /* @min:%2elength */
              ] === 1) {
                ajaxData[
                  _DYN_PERF_MARK
                  /* @min:%2eperfMark */
                ] = entries[0];
              }
            }
          }
        }
        function _findPerfResourceEntry(initiatorType, ajaxData, trackCallback, reportError) {
          var perfMark = ajaxData[
            _DYN_PERF_MARK
            /* @min:%2eperfMark */
          ];
          var performance = getPerformance();
          var maxAttempts = _maxAjaxPerfLookupAttempts;
          var retryDelay = _ajaxPerfLookupDelay;
          var requestUrl = ajaxData[
            _DYN_REQUEST_URL
            /* @min:%2erequestUrl */
          ];
          var attempt = 0;
          (function locateResourceTiming() {
            try {
              if (performance && perfMark) {
                attempt++;
                var perfTiming = null;
                var entries = performance.getEntries();
                for (var lp = entries[
                  _DYN_LENGTH5
                  /* @min:%2elength */
                ] - 1; lp >= 0; lp--) {
                  var entry = entries[lp];
                  if (entry) {
                    if (entry.entryType === "resource") {
                      if (entry.initiatorType === initiatorType && (_indexOf(entry[
                        _DYN_NAME4
                        /* @min:%2ename */
                      ], requestUrl) !== -1 || _indexOf(requestUrl, entry[
                        _DYN_NAME4
                        /* @min:%2ename */
                      ]) !== -1)) {
                        perfTiming = entry;
                      }
                    } else if (entry.entryType === "mark" && entry[
                      _DYN_NAME4
                      /* @min:%2ename */
                    ] === perfMark[
                      _DYN_NAME4
                      /* @min:%2ename */
                    ]) {
                      ajaxData[
                        _DYN_PERF_TIMING
                        /* @min:%2eperfTiming */
                      ] = perfTiming;
                      break;
                    }
                    if (entry[
                      _DYN_START_TIME2
                      /* @min:%2estartTime */
                    ] < perfMark[
                      _DYN_START_TIME2
                      /* @min:%2estartTime */
                    ] - 1e3) {
                      break;
                    }
                  }
                }
              }
              if (!perfMark || // - we don't have a perfMark or
              ajaxData[
                _DYN_PERF_TIMING
                /* @min:%2eperfTiming */
              ] || // - we have not found the perf entry or
              attempt >= maxAttempts || // - we have tried too many attempts or
              ajaxData.async === false) {
                if (perfMark && isFunction(performance.clearMarks)) {
                  performance.clearMarks(perfMark[
                    _DYN_NAME4
                    /* @min:%2ename */
                  ]);
                }
                ajaxData.perfAttempts = attempt;
                trackCallback();
              } else {
                scheduleTimeout(locateResourceTiming, retryDelay);
              }
            } catch (e) {
              reportError(e);
            }
          })();
        }
        function _createFetchRecord(input, init) {
          var _a12;
          var distributedTraceCtx = _getDistributedTraceCtx();
          var traceID = distributedTraceCtx && distributedTraceCtx[
            _DYN_GET_TRACE_ID
            /* @min:%2egetTraceId */
          ]() || generateW3CId();
          var spanID = strSubstr(generateW3CId(), 0, 16);
          var ajaxData = new ajaxRecord(traceID, spanID, _self[strDiagLog](), (_a12 = _self.core) === null || _a12 === void 0 ? void 0 : _a12.getTraceCtx());
          ajaxData[
            _DYN_TRACE_FLAGS2
            /* @min:%2etraceFlags */
          ] = distributedTraceCtx && distributedTraceCtx[
            _DYN_GET_TRACE_FLAGS
            /* @min:%2egetTraceFlags */
          ]();
          ajaxData[
            _DYN_REQUEST_SENT_TIME
            /* @min:%2erequestSentTime */
          ] = dateTimeUtilsNow();
          ajaxData[
            _DYN_ERROR_STATUS_TEXT
            /* @min:%2eerrorStatusText */
          ] = _enableAjaxErrorStatusText;
          var requestUrl;
          if (input instanceof Request) {
            requestUrl = (input || {}).url || "";
          } else {
            requestUrl = input;
          }
          if (requestUrl === "") {
            var location_1 = getLocation();
            if (location_1 && location_1.href) {
              requestUrl = strSplit(location_1.href, "#")[0];
            }
          }
          ajaxData[
            _DYN_REQUEST_URL
            /* @min:%2erequestUrl */
          ] = requestUrl;
          var method = "GET";
          if (init && init[
            _DYN_METHOD2
            /* @min:%2emethod */
          ]) {
            method = init[
              _DYN_METHOD2
              /* @min:%2emethod */
            ];
          } else if (input && input instanceof Request) {
            method = input[
              _DYN_METHOD2
              /* @min:%2emethod */
            ];
          }
          ajaxData[
            _DYN_METHOD2
            /* @min:%2emethod */
          ] = method;
          var requestHeaders = {};
          if (_enableRequestHeaderTracking) {
            var headers = new Headers((init ? init[
              _DYN_HEADERS2
              /* @min:%2eheaders */
            ] : 0) || (input instanceof Request ? input[
              _DYN_HEADERS2
              /* @min:%2eheaders */
            ] || {} : {}));
            headers.forEach(function(value, key) {
              if (_canIncludeHeaders(key)) {
                requestHeaders[key] = value;
              }
            });
          }
          ajaxData[
            _DYN_REQUEST_HEADERS
            /* @min:%2erequestHeaders */
          ] = requestHeaders;
          _createMarkId(STR_FETCH, ajaxData);
          return ajaxData;
        }
        function _getFailedFetchDiagnosticsMessage(input) {
          var result = "";
          try {
            if (!isNullOrUndefined(input)) {
              if (typeof input === "string") {
                result += "(url: '".concat(input, "')");
              } else {
                result += "(url: '".concat(input.url, "')");
              }
            }
          } catch (e) {
            _throwInternalCritical(_self, 15, "Failed to grab failed fetch diagnostics message", { exception: dumpObj(e) });
          }
          return result;
        }
        function _reportFetchMetrics(callDetails, status, input, response, ajaxData, getResponse, properties) {
          if (!ajaxData) {
            return;
          }
          function _reportFetchError(msgId, e, failedProps) {
            var errorProps = failedProps || {};
            errorProps["fetchDiagnosticsMessage"] = _getFailedFetchDiagnosticsMessage(input);
            if (e) {
              errorProps["exception"] = dumpObj(e);
            }
            _throwInternalWarning(_self, msgId, FAILED_TO_CALCULATE_DURATION_ERROR + "fetch call" + ERROR_NOT_SENT, errorProps);
          }
          ajaxData[
            _DYN_RESPONSE_FINISHED_TI14
            /* @min:%2eresponseFinishedTime */
          ] = dateTimeUtilsNow();
          ajaxData[
            _DYN_STATUS2
            /* @min:%2estatus */
          ] = status;
          _findPerfResourceEntry(STR_FETCH, ajaxData, function() {
            var dependency = ajaxData[
              _DYN__CREATE_TRACK_ITEM
              /* @min:%2eCreateTrackItem */
            ]("Fetch", _enableRequestHeaderTracking, getResponse);
            var properties2;
            try {
              if (!!_addRequestContext) {
                properties2 = _addRequestContext({ status, request: input, response });
              }
            } catch (e) {
              _throwInternalWarning(_self, 104, CUSTOM_REQUEST_CONTEXT_ERROR);
            }
            if (dependency) {
              if (properties2 !== void 0) {
                dependency[
                  STR_PROPERTIES
                  /* @min:%2eproperties */
                ] = __assignFn(__assignFn({}, dependency.properties), properties2);
              }
              var sysProperties = ajaxData[
                _DYN_GET_PART_APROPS
                /* @min:%2egetPartAProps */
              ]();
              _reportDependencyInternal(_dependencyInitializers, _self[
                _DYN_CORE2
                /* @min:%2ecore */
              ], ajaxData, dependency, null, sysProperties);
            } else {
              _reportFetchError(14, null, {
                requestSentTime: ajaxData[
                  _DYN_REQUEST_SENT_TIME
                  /* @min:%2erequestSentTime */
                ],
                responseFinishedTime: ajaxData[
                  _DYN_RESPONSE_FINISHED_TI14
                  /* @min:%2eresponseFinishedTime */
                ]
              });
            }
          }, function(e) {
            _reportFetchError(18, e, null);
          });
        }
        function _getFetchCorrelationContext(response) {
          var _a12;
          if (response && response[
            _DYN_HEADERS2
            /* @min:%2eheaders */
          ]) {
            try {
              var responseHeader = response[
                _DYN_HEADERS2
                /* @min:%2eheaders */
              ].get(RequestHeaders[
                0
                /* eRequestHeaders.requestContextHeader */
              ]);
              return correlationIdGetCorrelationContext(responseHeader);
            } catch (e) {
              _throwInternalWarning(_self, 18, CORRELATION_HEADER_ERROR, (_a12 = {
                fetchDiagnosticsMessage: _getFailedFetchDiagnosticsMessage(response)
              }, _a12[
                _DYN_EXCEPTION2
                /* @min:exception */
              ] = dumpObj(e), _a12));
            }
          }
        }
        function _reportDependencyInternal(initializers, core, ajaxData, dependency, properties, systemProperties) {
          var _a12;
          var result = true;
          var initializersCount = initializers[
            _DYN_LENGTH5
            /* @min:%2elength */
          ];
          if (initializersCount > 0) {
            var details = (_a12 = {
              item: dependency
            }, _a12[
              STR_PROPERTIES
              /* @min:properties */
            ] = properties, _a12.sysProperties = systemProperties, _a12.context = ajaxData ? ajaxData[
              _DYN_CONTEXT
              /* @min:%2econtext */
            ] : null, _a12.aborted = ajaxData ? !!ajaxData[
              _DYN_ABORTED
              /* @min:%2eaborted */
            ] : false, _a12);
            result = _processDependencyContainer(core, initializers, details, "initializer");
          }
          if (result) {
            _self[
              _DYN_TRACK_DEPENDENCY_DAT3
              /* @min:%2etrackDependencyDataInternal */
            ](dependency, properties, systemProperties);
          }
        }
      });
      return _this;
    }
    AjaxMonitor2.prototype.processTelemetry = function(item, itemCtx) {
      this.processNext(item, itemCtx);
    };
    AjaxMonitor2.prototype.addDependencyInitializer = function(dependencyInitializer) {
      return null;
    };
    AjaxMonitor2.identifier = "AjaxDependencyPlugin";
    return AjaxMonitor2;
  }(BaseTelemetryPlugin)
);

// node_modules/@microsoft/applicationinsights-properties-js/dist-es5/Context/Application.js
var Application = (
  /** @class */
  /* @__PURE__ */ function() {
    function Application2() {
    }
    return Application2;
  }()
);

// node_modules/@microsoft/applicationinsights-properties-js/dist-es5/Context/Device.js
var Device = (
  /** @class */
  /* @__PURE__ */ function() {
    function Device2() {
      this.id = "browser";
      this.deviceClass = "Browser";
    }
    return Device2;
  }()
);

// node_modules/@microsoft/applicationinsights-properties-js/dist-es5/Context/Internal.js
var Version = "3.2.1";
var Internal = (
  /** @class */
  /* @__PURE__ */ function() {
    function Internal2(config, unloadHookContainer) {
      var _this = this;
      var unloadHook = onConfigChange(config, function() {
        var prefix = config.sdkExtension;
        _this.sdkVersion = (prefix ? prefix + "_" : "") + "javascript:" + Version;
      });
      unloadHookContainer && unloadHookContainer.add(unloadHook);
    }
    return Internal2;
  }()
);

// node_modules/@microsoft/applicationinsights-properties-js/dist-es5/Context/Location.js
var Location = (
  /** @class */
  /* @__PURE__ */ function() {
    function Location2() {
    }
    return Location2;
  }()
);

// node_modules/@microsoft/applicationinsights-properties-js/dist-es5/__DynamicConstants.js
var _DYN_SESSION_MANAGER = "sessionManager";
var _DYN_UPDATE2 = "update";
var _DYN_IS_USER_COOKIE_SET = "isUserCookieSet";
var _DYN_IS_NEW_USER = "isNewUser";
var _DYN_GET_TRACE_CTX = "getTraceCtx";
var _DYN_TELEMETRY_TRACE = "telemetryTrace";
var _DYN_APPLY_SESSION_CONTEX0 = "applySessionContext";
var _DYN_APPLY_APPLICATION_CO1 = "applyApplicationContext";
var _DYN_APPLY_DEVICE_CONTEXT = "applyDeviceContext";
var _DYN_APPLY_OPERATION_CONT2 = "applyOperationContext";
var _DYN_APPLY_USER_CONTEXT = "applyUserContext";
var _DYN_APPLY_OPERATING_SYST3 = "applyOperatingSystemContxt";
var _DYN_APPLY_LOCATION_CONTE4 = "applyLocationContext";
var _DYN_APPLY_INTERNAL_CONTE5 = "applyInternalContext";
var _DYN_ACCOUNT_ID = "accountId";
var _DYN_GET_SESSION_ID = "getSessionId";
var _DYN_NAME_PREFIX = "namePrefix";
var _DYN_SESSION_COOKIE_POSTF6 = "sessionCookiePostfix";
var _DYN_USER_COOKIE_POSTFIX = "userCookiePostfix";
var _DYN_ID_LENGTH = "idLength";
var _DYN_GET_NEW_ID = "getNewId";
var _DYN_LENGTH6 = "length";
var _DYN_AUTOMATIC_SESSION = "automaticSession";
var _DYN_AUTHENTICATED_ID = "authenticatedId";
var _DYN_ACQUISITION_DATE = "acquisitionDate";
var _DYN_RENEWAL_DATE = "renewalDate";
var _DYN_JOIN = "join";
var _DYN_COOKIE_SEPARATOR = "cookieSeparator";
var _DYN_AUTH_USER_COOKIE_NAM7 = "authUserCookieName";

// node_modules/@microsoft/applicationinsights-properties-js/dist-es5/Context/Session.js
var SESSION_COOKIE_NAME = "ai_session";
var ACQUISITION_SPAN = 864e5;
var RENEWAL_SPAN = 18e5;
var COOKIE_UPDATE_INTERVAL = 6e4;
var Session = (
  /** @class */
  /* @__PURE__ */ function() {
    function Session2() {
    }
    return Session2;
  }()
);
var _SessionManager = (
  /** @class */
  function() {
    function _SessionManager2(config, core, unloadHookContainer) {
      var self2 = this;
      var _storageNamePrefix;
      var _cookieUpdatedTimestamp;
      var _logger = safeGetLogger(core);
      var _cookieManager = safeGetCookieMgr(core);
      var _sessionExpirationMs;
      var _sessionRenewalMs;
      dynamicProto(_SessionManager2, self2, function(_self) {
        if (!config) {
          config = {};
        }
        var unloadHook = onConfigChange(config, function(details) {
          _sessionExpirationMs = config.sessionExpirationMs || ACQUISITION_SPAN;
          _sessionRenewalMs = config.sessionRenewalMs || RENEWAL_SPAN;
          var sessionCookiePostfix = config.sessionCookiePostfix || config[
            _DYN_NAME_PREFIX
            /* @min:%2enamePrefix */
          ] || "";
          _storageNamePrefix = SESSION_COOKIE_NAME + sessionCookiePostfix;
        });
        unloadHookContainer && unloadHookContainer.add(unloadHook);
        _self[
          _DYN_AUTOMATIC_SESSION
          /* @min:%2eautomaticSession */
        ] = new Session();
        _self[
          _DYN_UPDATE2
          /* @min:%2eupdate */
        ] = function() {
          var nowMs = utcNow();
          var isExpired = false;
          var session = _self[
            _DYN_AUTOMATIC_SESSION
            /* @min:%2eautomaticSession */
          ];
          if (!session.id) {
            isExpired = !_initializeAutomaticSession(session, nowMs);
          }
          if (!isExpired && _sessionExpirationMs > 0) {
            var timeSinceAcqMs = nowMs - session[
              _DYN_ACQUISITION_DATE
              /* @min:%2eacquisitionDate */
            ];
            var timeSinceRenewalMs = nowMs - session[
              _DYN_RENEWAL_DATE
              /* @min:%2erenewalDate */
            ];
            isExpired = timeSinceAcqMs < 0 || timeSinceRenewalMs < 0;
            isExpired = isExpired || timeSinceAcqMs > _sessionExpirationMs;
            isExpired = isExpired || timeSinceRenewalMs > _sessionRenewalMs;
          }
          if (isExpired) {
            _renew(nowMs);
          } else {
            if (!_cookieUpdatedTimestamp || nowMs - _cookieUpdatedTimestamp > COOKIE_UPDATE_INTERVAL) {
              _setCookie(session, nowMs);
            }
          }
        };
        _self.backup = function() {
          var session = _self[
            _DYN_AUTOMATIC_SESSION
            /* @min:%2eautomaticSession */
          ];
          _setStorage(session.id, session[
            _DYN_ACQUISITION_DATE
            /* @min:%2eacquisitionDate */
          ], session[
            _DYN_RENEWAL_DATE
            /* @min:%2erenewalDate */
          ]);
        };
        function _initializeAutomaticSession(session, now) {
          var isValid = false;
          var cookieValue = _cookieManager.get(_storageNamePrefix);
          if (cookieValue && isFunction(cookieValue.split)) {
            isValid = _initializeAutomaticSessionWithData(session, cookieValue);
          } else {
            var storageValue = utlGetLocalStorage(_logger, _storageNamePrefix);
            if (storageValue) {
              isValid = _initializeAutomaticSessionWithData(session, storageValue);
            }
          }
          return isValid || !!session.id;
        }
        function _initializeAutomaticSessionWithData(session, sessionData) {
          var isValid = false;
          var sessionReset = ", session will be reset";
          var tokens = sessionData.split("|");
          if (tokens[
            _DYN_LENGTH6
            /* @min:%2elength */
          ] >= 2) {
            try {
              var acqMs = +tokens[1] || 0;
              var renewalMs = +tokens[2] || 0;
              if (isNaN(acqMs) || acqMs <= 0) {
                _throwInternal(_logger, 2, 27, "AI session acquisition date is 0" + sessionReset);
              } else if (isNaN(renewalMs) || renewalMs <= 0) {
                _throwInternal(_logger, 2, 27, "AI session renewal date is 0" + sessionReset);
              } else if (tokens[0]) {
                session.id = tokens[0];
                session[
                  _DYN_ACQUISITION_DATE
                  /* @min:%2eacquisitionDate */
                ] = acqMs;
                session[
                  _DYN_RENEWAL_DATE
                  /* @min:%2erenewalDate */
                ] = renewalMs;
                isValid = true;
              }
            } catch (e) {
              _throwInternal(_logger, 1, 9, "Error parsing ai_session value [" + (sessionData || "") + "]" + sessionReset + " - " + getExceptionName(e), { exception: dumpObj(e) });
            }
          }
          return isValid;
        }
        function _renew(nowMs) {
          var getNewId = config[
            _DYN_GET_NEW_ID
            /* @min:%2egetNewId */
          ] || newId;
          _self.automaticSession.id = getNewId(config[
            _DYN_ID_LENGTH
            /* @min:%2eidLength */
          ] || 22);
          _self[
            _DYN_AUTOMATIC_SESSION
            /* @min:%2eautomaticSession */
          ][
            _DYN_ACQUISITION_DATE
            /* @min:%2eacquisitionDate */
          ] = nowMs;
          _setCookie(_self[
            _DYN_AUTOMATIC_SESSION
            /* @min:%2eautomaticSession */
          ], nowMs);
          if (!utlCanUseLocalStorage()) {
            _throwInternal(_logger, 2, 0, "Browser does not support local storage. Session durations will be inaccurate.");
          }
        }
        function _setCookie(session, nowMs) {
          var acq = session[
            _DYN_ACQUISITION_DATE
            /* @min:%2eacquisitionDate */
          ];
          session[
            _DYN_RENEWAL_DATE
            /* @min:%2erenewalDate */
          ] = nowMs;
          var renewalPeriodMs = _sessionRenewalMs;
          var acqTimeLeftMs = acq + _sessionExpirationMs - nowMs;
          var cookie = [session.id, acq, nowMs];
          var maxAgeSec = 0;
          if (acqTimeLeftMs < renewalPeriodMs) {
            maxAgeSec = acqTimeLeftMs / 1e3;
          } else {
            maxAgeSec = renewalPeriodMs / 1e3;
          }
          var cookieDomain = config.cookieDomain || null;
          _cookieManager.set(_storageNamePrefix, cookie[
            _DYN_JOIN
            /* @min:%2ejoin */
          ]("|"), _sessionExpirationMs > 0 ? maxAgeSec : null, cookieDomain);
          _cookieUpdatedTimestamp = nowMs;
        }
        function _setStorage(guid, acq, renewal) {
          utlSetLocalStorage(_logger, _storageNamePrefix, [guid, acq, renewal][
            _DYN_JOIN
            /* @min:%2ejoin */
          ]("|"));
        }
      });
    }
    _SessionManager2.__ieDyn = 1;
    return _SessionManager2;
  }()
);

// node_modules/@microsoft/applicationinsights-properties-js/dist-es5/Context/TelemetryTrace.js
var TelemetryTrace = (
  /** @class */
  /* @__PURE__ */ function() {
    function TelemetryTrace2(id, parentId, name, logger) {
      var _self = this;
      _self.traceID = id || generateW3CId();
      _self.parentID = parentId;
      var location2 = getLocation();
      if (!name && location2 && location2.pathname) {
        name = location2.pathname;
      }
      _self.name = dataSanitizeString(logger, name);
    }
    return TelemetryTrace2;
  }()
);

// node_modules/@microsoft/applicationinsights-properties-js/dist-es5/Context/User.js
function _validateUserInput(id) {
  if (typeof id !== "string" || !id || id.match(/,|;|=| |\|/)) {
    return false;
  }
  return true;
}
var User = (
  /** @class */
  function() {
    function User2(config, core, unloadHookContainer) {
      this.isNewUser = false;
      this.isUserCookieSet = false;
      var _logger = safeGetLogger(core);
      var _cookieManager = safeGetCookieMgr(core);
      var _storageNamePrefix;
      dynamicProto(User2, this, function(_self) {
        objDefine(_self, "config", {
          g: function() {
            return config;
          }
        });
        var unloadHook = onConfigChange(config, function() {
          var userCookiePostfix = config[
            _DYN_USER_COOKIE_POSTFIX
            /* @min:%2euserCookiePostfix */
          ] || "";
          _storageNamePrefix = User2.userCookieName + userCookiePostfix;
          var cookie = _cookieManager.get(_storageNamePrefix);
          if (cookie) {
            _self[
              _DYN_IS_NEW_USER
              /* @min:%2eisNewUser */
            ] = false;
            var params = cookie.split(User2[
              _DYN_COOKIE_SEPARATOR
              /* @min:%2ecookieSeparator */
            ]);
            if (params[
              _DYN_LENGTH6
              /* @min:%2elength */
            ] > 0) {
              _self.id = params[0];
              _self[
                _DYN_IS_USER_COOKIE_SET
                /* @min:%2eisUserCookieSet */
              ] = !!_self.id;
            }
          }
          if (!_self.id) {
            _self.id = _generateNewId();
            var newCookie = _generateNewCookie(_self.id);
            _setUserCookie(newCookie[
              _DYN_JOIN
              /* @min:%2ejoin */
            ](User2[
              _DYN_COOKIE_SEPARATOR
              /* @min:%2ecookieSeparator */
            ]));
            var name_1 = (config[
              _DYN_NAME_PREFIX
              /* @min:%2enamePrefix */
            ] || "") + "ai_session";
            utlRemoveStorage(_logger, name_1);
          }
          _self[
            _DYN_ACCOUNT_ID
            /* @min:%2eaccountId */
          ] = config[
            _DYN_ACCOUNT_ID
            /* @min:%2eaccountId */
          ] || void 0;
          var authCookie = _cookieManager.get(User2[
            _DYN_AUTH_USER_COOKIE_NAM7
            /* @min:%2eauthUserCookieName */
          ]);
          if (authCookie) {
            authCookie = decodeURI(authCookie);
            var authCookieString = authCookie.split(User2[
              _DYN_COOKIE_SEPARATOR
              /* @min:%2ecookieSeparator */
            ]);
            if (authCookieString[0]) {
              _self[
                _DYN_AUTHENTICATED_ID
                /* @min:%2eauthenticatedId */
              ] = authCookieString[0];
            }
            if (authCookieString[
              _DYN_LENGTH6
              /* @min:%2elength */
            ] > 1 && authCookieString[1]) {
              _self[
                _DYN_ACCOUNT_ID
                /* @min:%2eaccountId */
              ] = authCookieString[1];
            }
          }
        });
        unloadHookContainer && unloadHookContainer.add(unloadHook);
        function _generateNewId() {
          var theConfig = config || {};
          var getNewId = theConfig[
            _DYN_GET_NEW_ID
            /* @min:%2egetNewId */
          ] || newId;
          var id = getNewId(theConfig[
            _DYN_ID_LENGTH
            /* @min:%2eidLength */
          ] ? config[
            _DYN_ID_LENGTH
            /* @min:%2eidLength */
          ] : 22);
          return id;
        }
        function _generateNewCookie(userId) {
          var acqStr = toISOString(/* @__PURE__ */ new Date());
          _self.accountAcquisitionDate = acqStr;
          _self[
            _DYN_IS_NEW_USER
            /* @min:%2eisNewUser */
          ] = true;
          var newCookie = [userId, acqStr];
          return newCookie;
        }
        function _setUserCookie(cookie) {
          var oneYear = 31536e3;
          _self[
            _DYN_IS_USER_COOKIE_SET
            /* @min:%2eisUserCookieSet */
          ] = _cookieManager.set(_storageNamePrefix, cookie, oneYear);
        }
        _self.setAuthenticatedUserContext = function(authenticatedUserId, accountId, storeInCookie) {
          if (storeInCookie === void 0) {
            storeInCookie = false;
          }
          var isInvalidInput = !_validateUserInput(authenticatedUserId) || accountId && !_validateUserInput(accountId);
          if (isInvalidInput) {
            _throwInternal(_logger, 2, 60, "Setting auth user context failed. User auth/account id should be of type string, and not contain commas, semi-colons, equal signs, spaces, or vertical-bars.", true);
            return;
          }
          _self[
            _DYN_AUTHENTICATED_ID
            /* @min:%2eauthenticatedId */
          ] = authenticatedUserId;
          var authCookie = _self[
            _DYN_AUTHENTICATED_ID
            /* @min:%2eauthenticatedId */
          ];
          if (accountId) {
            _self[
              _DYN_ACCOUNT_ID
              /* @min:%2eaccountId */
            ] = accountId;
            authCookie = [_self[
              _DYN_AUTHENTICATED_ID
              /* @min:%2eauthenticatedId */
            ], _self.accountId][
              _DYN_JOIN
              /* @min:%2ejoin */
            ](User2[
              _DYN_COOKIE_SEPARATOR
              /* @min:%2ecookieSeparator */
            ]);
          }
          if (storeInCookie) {
            _cookieManager.set(User2[
              _DYN_AUTH_USER_COOKIE_NAM7
              /* @min:%2eauthUserCookieName */
            ], encodeURI(authCookie));
          }
        };
        _self.clearAuthenticatedUserContext = function() {
          _self[
            _DYN_AUTHENTICATED_ID
            /* @min:%2eauthenticatedId */
          ] = null;
          _self[
            _DYN_ACCOUNT_ID
            /* @min:%2eaccountId */
          ] = null;
          _cookieManager.del(User2[
            _DYN_AUTH_USER_COOKIE_NAM7
            /* @min:%2eauthUserCookieName */
          ]);
        };
        _self[
          _DYN_UPDATE2
          /* @min:%2eupdate */
        ] = function(userId) {
          if (_self.id !== userId || !_self[
            _DYN_IS_USER_COOKIE_SET
            /* @min:%2eisUserCookieSet */
          ]) {
            var user_id = userId ? userId : _generateNewId();
            var user_cookie = _generateNewCookie(user_id);
            _setUserCookie(user_cookie[
              _DYN_JOIN
              /* @min:%2ejoin */
            ](User2[
              _DYN_COOKIE_SEPARATOR
              /* @min:%2ecookieSeparator */
            ]));
          }
        };
      });
    }
    User2.cookieSeparator = "|";
    User2.userCookieName = "ai_user";
    User2.authUserCookieName = "ai_authUser";
    return User2;
  }()
);

// node_modules/@microsoft/applicationinsights-properties-js/dist-es5/TelemetryContext.js
var strExt = "ext";
var strTags = "tags";
function _removeEmpty(target, name) {
  if (target && target[name] && objKeys(target[name])[
    _DYN_LENGTH6
    /* @min:%2elength */
  ] === 0) {
    delete target[name];
  }
}
function _nullResult() {
  return null;
}
var TelemetryContext = (
  /** @class */
  function() {
    function TelemetryContext2(core, defaultConfig2, previousTraceCtx, unloadHookContainer) {
      var _this = this;
      var logger = core.logger;
      dynamicProto(TelemetryContext2, this, function(_self) {
        _self.appId = _nullResult;
        _self[
          _DYN_GET_SESSION_ID
          /* @min:%2egetSessionId */
        ] = _nullResult;
        _self.application = new Application();
        _self.internal = new Internal(defaultConfig2, unloadHookContainer);
        if (hasWindow()) {
          _self[
            _DYN_SESSION_MANAGER
            /* @min:%2esessionManager */
          ] = new _SessionManager(defaultConfig2, core, unloadHookContainer);
          _self.device = new Device();
          _self.location = new Location();
          _self.user = new User(defaultConfig2, core, unloadHookContainer);
          var traceId = void 0;
          var parentId = void 0;
          var name_1;
          if (previousTraceCtx) {
            traceId = previousTraceCtx.getTraceId();
            parentId = previousTraceCtx.getSpanId();
            name_1 = previousTraceCtx.getName();
          }
          _self[
            _DYN_TELEMETRY_TRACE
            /* @min:%2etelemetryTrace */
          ] = new TelemetryTrace(traceId, parentId, name_1, logger);
          _self.session = new Session();
        }
        _self[
          _DYN_GET_SESSION_ID
          /* @min:%2egetSessionId */
        ] = function() {
          var session = _self.session;
          var sesId = null;
          if (session && isString(session.id)) {
            sesId = session.id;
          } else {
            var autoSession = (_self[
              _DYN_SESSION_MANAGER
              /* @min:%2esessionManager */
            ] || {})[
              _DYN_AUTOMATIC_SESSION
              /* @min:%2eautomaticSession */
            ];
            sesId = autoSession && isString(autoSession.id) ? autoSession.id : null;
          }
          return sesId;
        };
        _self[
          _DYN_APPLY_SESSION_CONTEX0
          /* @min:%2eapplySessionContext */
        ] = function(evt, itemCtx) {
          setValue(getSetValue(evt.ext, Extensions.AppExt), "sesId", _self[
            _DYN_GET_SESSION_ID
            /* @min:%2egetSessionId */
          ](), isString);
        };
        _self[
          _DYN_APPLY_OPERATING_SYST3
          /* @min:%2eapplyOperatingSystemContxt */
        ] = function(evt, itemCtx) {
          setValue(evt.ext, Extensions.OSExt, _self.os);
        };
        _self[
          _DYN_APPLY_APPLICATION_CO1
          /* @min:%2eapplyApplicationContext */
        ] = function(evt, itemCtx) {
          var application = _self.application;
          if (application) {
            var tags = getSetValue(evt, strTags);
            setValue(tags, CtxTagKeys.applicationVersion, application.ver, isString);
            setValue(tags, CtxTagKeys.applicationBuild, application.build, isString);
          }
        };
        _self[
          _DYN_APPLY_DEVICE_CONTEXT
          /* @min:%2eapplyDeviceContext */
        ] = function(evt, itemCtx) {
          var device = _self.device;
          if (device) {
            var extDevice = getSetValue(getSetValue(evt, strExt), Extensions.DeviceExt);
            setValue(extDevice, "localId", device.id, isString);
            setValue(extDevice, "ip", device.ip, isString);
            setValue(extDevice, "model", device.model, isString);
            setValue(extDevice, "deviceClass", device.deviceClass, isString);
          }
        };
        _self[
          _DYN_APPLY_INTERNAL_CONTE5
          /* @min:%2eapplyInternalContext */
        ] = function(evt, itemCtx) {
          var internal = _self.internal;
          if (internal) {
            var tags = getSetValue(evt, strTags);
            setValue(tags, CtxTagKeys.internalAgentVersion, internal.agentVersion, isString);
            setValue(tags, CtxTagKeys.internalSdkVersion, dataSanitizeString(logger, internal.sdkVersion, 64), isString);
            if (evt.baseType === _InternalLogMessage.dataType || evt.baseType === PageView.dataType) {
              setValue(tags, CtxTagKeys.internalSnippet, internal.snippetVer, isString);
              setValue(tags, CtxTagKeys.internalSdkSrc, internal.sdkSrc, isString);
            }
          }
        };
        _self[
          _DYN_APPLY_LOCATION_CONTE4
          /* @min:%2eapplyLocationContext */
        ] = function(evt, itemCtx) {
          var location2 = _this.location;
          if (location2) {
            setValue(getSetValue(evt, strTags, []), CtxTagKeys.locationIp, location2.ip, isString);
          }
        };
        _self[
          _DYN_APPLY_OPERATION_CONT2
          /* @min:%2eapplyOperationContext */
        ] = function(evt, itemCtx) {
          var telemetryTrace = _self[
            _DYN_TELEMETRY_TRACE
            /* @min:%2etelemetryTrace */
          ];
          if (telemetryTrace) {
            var extTrace = getSetValue(getSetValue(evt, strExt), Extensions.TraceExt, { traceID: void 0, parentID: void 0 });
            setValue(extTrace, "traceID", telemetryTrace.traceID, isString, isNullOrUndefined);
            setValue(extTrace, "name", telemetryTrace.name, isString, isNullOrUndefined);
            setValue(extTrace, "parentID", telemetryTrace.parentID, isString, isNullOrUndefined);
          }
        };
        _self.applyWebContext = function(evt, itemCtx) {
          var web = _this.web;
          if (web) {
            setValue(getSetValue(evt, strExt), Extensions.WebExt, web);
          }
        };
        _self[
          _DYN_APPLY_USER_CONTEXT
          /* @min:%2eapplyUserContext */
        ] = function(evt, itemCtx) {
          var user = _self.user;
          if (user) {
            var tags = getSetValue(evt, strTags, []);
            setValue(tags, CtxTagKeys.userAccountId, user[
              _DYN_ACCOUNT_ID
              /* @min:%2eaccountId */
            ], isString);
            var extUser = getSetValue(getSetValue(evt, strExt), Extensions.UserExt);
            setValue(extUser, "id", user.id, isString);
            setValue(extUser, "authId", user[
              _DYN_AUTHENTICATED_ID
              /* @min:%2eauthenticatedId */
            ], isString);
          }
        };
        _self.cleanUp = function(evt, itemCtx) {
          var ext = evt.ext;
          if (ext) {
            _removeEmpty(ext, Extensions.DeviceExt);
            _removeEmpty(ext, Extensions.UserExt);
            _removeEmpty(ext, Extensions.WebExt);
            _removeEmpty(ext, Extensions.OSExt);
            _removeEmpty(ext, Extensions.AppExt);
            _removeEmpty(ext, Extensions.TraceExt);
          }
        };
      });
    }
    TelemetryContext2.__ieDyn = 1;
    return TelemetryContext2;
  }()
);

// node_modules/@microsoft/applicationinsights-properties-js/dist-es5/PropertiesPlugin.js
var _a10;
var undefString;
var nullValue = null;
var _defaultConfig3 = objDeepFreeze((_a10 = {}, _a10[
  _DYN_ACCOUNT_ID
  /* @min:accountId */
] = nullValue, _a10.sessionRenewalMs = 30 * 60 * 1e3, _a10.samplingPercentage = 100, _a10.sessionExpirationMs = 24 * 60 * 60 * 1e3, _a10.cookieDomain = nullValue, _a10.sdkExtension = nullValue, _a10.isBrowserLinkTrackingEnabled = false, _a10.appId = nullValue, _a10[
  _DYN_GET_SESSION_ID
  /* @min:getSessionId */
] = nullValue, _a10[
  _DYN_NAME_PREFIX
  /* @min:namePrefix */
] = undefString, _a10[
  _DYN_SESSION_COOKIE_POSTF6
  /* @min:sessionCookiePostfix */
] = undefString, _a10[
  _DYN_USER_COOKIE_POSTFIX
  /* @min:userCookiePostfix */
] = undefString, _a10[
  _DYN_ID_LENGTH
  /* @min:idLength */
] = 22, _a10[
  _DYN_GET_NEW_ID
  /* @min:getNewId */
] = nullValue, _a10));
var PropertiesPlugin = (
  /** @class */
  function(_super) {
    __extendsFn(PropertiesPlugin2, _super);
    function PropertiesPlugin2() {
      var _this = _super.call(this) || this;
      _this.priority = 110;
      _this.identifier = PropertiesPluginIdentifier;
      var _extensionConfig;
      var _distributedTraceCtx;
      var _previousTraceCtx;
      var _context;
      var _disableUserInitMessage;
      dynamicProto(PropertiesPlugin2, _this, function(_self, _base) {
        _initDefaults();
        objDefine(_self, "context", {
          g: function() {
            return _context;
          }
        });
        _self.initialize = function(config, core, extensions, pluginChain) {
          _base.initialize(config, core, extensions, pluginChain);
          _populateDefaults(config);
        };
        _self.processTelemetry = function(event, itemCtx) {
          if (!isNullOrUndefined(event)) {
            itemCtx = _self._getTelCtx(itemCtx);
            if (event.name === PageView.envelopeType) {
              itemCtx.diagLog().resetInternalMessageCount();
            }
            var theContext = _context || {};
            if (theContext.session) {
              if (typeof _context.session.id !== "string" && theContext[
                _DYN_SESSION_MANAGER
                /* @min:%2esessionManager */
              ]) {
                theContext[
                  _DYN_SESSION_MANAGER
                  /* @min:%2esessionManager */
                ][
                  _DYN_UPDATE2
                  /* @min:%2eupdate */
                ]();
              }
            }
            var userCtx = theContext.user;
            if (userCtx && !userCtx[
              _DYN_IS_USER_COOKIE_SET
              /* @min:%2eisUserCookieSet */
            ]) {
              userCtx[
                _DYN_UPDATE2
                /* @min:%2eupdate */
              ](theContext.user.id);
            }
            _processTelemetryInternal(event, itemCtx);
            if (userCtx && userCtx[
              _DYN_IS_NEW_USER
              /* @min:%2eisNewUser */
            ]) {
              userCtx[
                _DYN_IS_NEW_USER
                /* @min:%2eisNewUser */
              ] = false;
              if (!_disableUserInitMessage) {
                var message = new _InternalLogMessage(72, (getNavigator() || {}).userAgent || "");
                _logInternalMessage(itemCtx.diagLog(), 1, message);
              }
            }
            _self.processNext(event, itemCtx);
          }
        };
        _self._doTeardown = function(unloadCtx, unloadState) {
          var core = (unloadCtx || {}).core();
          if (core && core[
            _DYN_GET_TRACE_CTX
            /* @min:%2egetTraceCtx */
          ]) {
            var traceCtx = core[
              _DYN_GET_TRACE_CTX
              /* @min:%2egetTraceCtx */
            ](false);
            if (traceCtx === _distributedTraceCtx) {
              core.setTraceCtx(_previousTraceCtx);
            }
          }
          _initDefaults();
        };
        function _initDefaults() {
          _extensionConfig = null;
          _distributedTraceCtx = null;
          _previousTraceCtx = null;
          _context = null;
          _disableUserInitMessage = true;
        }
        function _populateDefaults(config) {
          var identifier = _self.identifier;
          var core = _self.core;
          _self._addHook(onConfigChange(config, function() {
            var ctx = createProcessTelemetryContext(null, config, core);
            if (config.storagePrefix) {
              utlSetStoragePrefix(config.storagePrefix);
            }
            _disableUserInitMessage = config.disableUserInitMessage === false ? false : true;
            _extensionConfig = ctx.getExtCfg(identifier, _defaultConfig3);
            _self["_extConfig"] = _extensionConfig;
          }));
          _previousTraceCtx = core[
            _DYN_GET_TRACE_CTX
            /* @min:%2egetTraceCtx */
          ](false);
          _context = new TelemetryContext(core, _extensionConfig, _previousTraceCtx, _self._unloadHooks);
          _distributedTraceCtx = createDistributedTraceContextFromTrace(_self.context[
            _DYN_TELEMETRY_TRACE
            /* @min:%2etelemetryTrace */
          ], _previousTraceCtx);
          core.setTraceCtx(_distributedTraceCtx);
          _self.context.appId = function() {
            var breezeChannel = core.getPlugin(BreezeChannelIdentifier);
            return breezeChannel ? breezeChannel.plugin["_appId"] : null;
          };
        }
        function _processTelemetryInternal(evt, itemCtx) {
          getSetValue(evt, "tags", []);
          getSetValue(evt, "ext", {});
          var ctx = _self.context;
          ctx[
            _DYN_APPLY_SESSION_CONTEX0
            /* @min:%2eapplySessionContext */
          ](evt, itemCtx);
          ctx[
            _DYN_APPLY_APPLICATION_CO1
            /* @min:%2eapplyApplicationContext */
          ](evt, itemCtx);
          ctx[
            _DYN_APPLY_DEVICE_CONTEXT
            /* @min:%2eapplyDeviceContext */
          ](evt, itemCtx);
          ctx[
            _DYN_APPLY_OPERATION_CONT2
            /* @min:%2eapplyOperationContext */
          ](evt, itemCtx);
          ctx[
            _DYN_APPLY_USER_CONTEXT
            /* @min:%2eapplyUserContext */
          ](evt, itemCtx);
          ctx[
            _DYN_APPLY_OPERATING_SYST3
            /* @min:%2eapplyOperatingSystemContxt */
          ](evt, itemCtx);
          ctx.applyWebContext(evt, itemCtx);
          ctx[
            _DYN_APPLY_LOCATION_CONTE4
            /* @min:%2eapplyLocationContext */
          ](evt, itemCtx);
          ctx[
            _DYN_APPLY_INTERNAL_CONTE5
            /* @min:%2eapplyInternalContext */
          ](evt, itemCtx);
          ctx.cleanUp(evt, itemCtx);
        }
      });
      return _this;
    }
    PropertiesPlugin2.__ieDyn = 1;
    return PropertiesPlugin2;
  }(BaseTelemetryPlugin)
);
var PropertiesPlugin_default = PropertiesPlugin;

// node_modules/@microsoft/applicationinsights-web/dist-es5/InternalConstants.js
var _AUTHENTICATED_USER_CONTEXT = "AuthenticatedUserContext";
var _TRACK = "track";
var STR_SNIPPET = "snippet";
var STR_GET_COOKIE_MGR = "getCookieMgr";
var STR_START_TRACK_PAGE = "startTrackPage";
var STR_STOP_TRACK_PAGE = "stopTrackPage";
var STR_FLUSH = "flush";
var STR_START_TRACK_EVENT = "startTrackEvent";
var STR_STOP_TRACK_EVENT = "stopTrackEvent";
var STR_ADD_TELEMETRY_INITIALIZER = "addTelemetryInitializer";
var STR_ADD_TELEMETRY_INITIALIZERS = STR_ADD_TELEMETRY_INITIALIZER + "s";
var STR_POLL_INTERNAL_LOGS = "pollInternalLogs";
var STR_GET_PLUGIN = "getPlugin";
var STR_EVT_NAMESPACE = "evtNamespace";
var STR_TRACK_EVENT = _TRACK + "Event";
var STR_TRACK_TRACE = _TRACK + "Trace";
var STR_TRACK_METRIC = _TRACK + "Metric";
var STR_TRACK_PAGE_VIEW = _TRACK + "PageView";
var STR_TRACK_EXCEPTION = _TRACK + "Exception";
var STR_TRACK_DEPENDENCY_DATA = _TRACK + "DependencyData";
var STR_SET_AUTHENTICATED_USER_CONTEXT = "set" + _AUTHENTICATED_USER_CONTEXT;
var STR_CLEAR_AUTHENTICATED_USER_CONTEXT = "clear" + _AUTHENTICATED_USER_CONTEXT;
var CONFIG_ENDPOINT_URL = "https://js.monitor.azure.com/scripts/b/ai.config.1.cfg.json";

// node_modules/@microsoft/applicationinsights-web/dist-es5/__DynamicConstants.js
var _DYN_VERSION2 = "version";
var _DYN_QUEUE = "queue";
var _DYN_CONNECTION_STRING = "connectionString";
var _DYN_ENDPOINT_URL = "endpointUrl";
var _DYN_USER_OVERRIDE_ENDPOI0 = "userOverrideEndpointUrl";
var _DYN_INSTRUMENTATION_KEY2 = "instrumentationKey";
var _DYN_ONUNLOAD_FLUSH = "onunloadFlush";
var _DYN_CONTEXT2 = "context";
var _DYN_ADD_HOUSEKEEPING_BEF1 = "addHousekeepingBeforeUnload";
var _DYN_SEND_MESSAGE = "sendMessage";
var _DYN_UPDATE_SNIPPET_DEFIN2 = "updateSnippetDefinitions";

// node_modules/@microsoft/applicationinsights-web/dist-es5/AISku.js
var _a11;
var _b3;
var _c;
var _d;
var _internalSdkSrc;
var _ignoreUpdateSnippetProperties = [
  STR_SNIPPET,
  "dependencies",
  "properties",
  "_snippetVersion",
  "appInsightsNew",
  "getSKUDefaults"
];
var IKEY_USAGE = "iKeyUsage";
var CDN_USAGE = "CdnUsage";
var SDK_LOADER_VER = "SdkLoaderVer";
var UNDEFINED_VALUE3 = void 0;
var default_limit = {
  samplingRate: 100,
  maxSendNumber: 1
};
var default_interval = {
  monthInterval: 3,
  daysOfMonth: [28]
};
var default_throttle_config = {
  disabled: true,
  limit: cfgDfMerge(default_limit),
  interval: cfgDfMerge(default_interval)
};
var defaultConfigValues = (_a11 = {}, _a11[
  _DYN_CONNECTION_STRING
  /* @min:connectionString */
] = UNDEFINED_VALUE3, _a11[
  _DYN_ENDPOINT_URL
  /* @min:endpointUrl */
] = UNDEFINED_VALUE3, _a11[
  _DYN_INSTRUMENTATION_KEY2
  /* @min:instrumentationKey */
] = UNDEFINED_VALUE3, _a11[
  _DYN_USER_OVERRIDE_ENDPOI0
  /* @min:userOverrideEndpointUrl */
] = UNDEFINED_VALUE3, _a11.diagnosticLogInterval = cfgDfValidate(_chkDiagLevel, 1e4), _a11.featureOptIn = (_b3 = {}, _b3[IKEY_USAGE] = {
  mode: 3
  /* FeatureOptInMode.enable */
}, _b3[CDN_USAGE] = {
  mode: 2
  /* FeatureOptInMode.disable */
}, _b3[SDK_LOADER_VER] = {
  mode: 2
  /* FeatureOptInMode.disable */
}, _b3), _a11.throttleMgrCfg = cfgDfMerge((_c = {}, _c[
  109
  /* _eInternalMessageId.DefaultThrottleMsgKey */
] = cfgDfMerge(default_throttle_config), _c[
  106
  /* _eInternalMessageId.InstrumentationKeyDeprecation */
] = cfgDfMerge(default_throttle_config), _c[
  111
  /* _eInternalMessageId.SdkLdrUpdate */
] = cfgDfMerge(default_throttle_config), _c[
  110
  /* _eInternalMessageId.CdnDeprecation */
] = cfgDfMerge(default_throttle_config), _c)), _a11.extensionConfig = cfgDfMerge((_d = {}, _d["AppInsightsCfgSyncPlugin"] = cfgDfMerge({
  cfgUrl: CONFIG_ENDPOINT_URL,
  syncMode: 2
  /* ICfgSyncMode.Receive */
}), _d)), _a11);
function _chkDiagLevel(value) {
  return value && value > 0;
}
var AppInsightsSku = (
  /** @class */
  function() {
    function AppInsightsSku2(snippet) {
      var _this = this;
      var dependencies;
      var properties;
      var _sender;
      var _snippetVersion;
      var _evtNamespace;
      var _houseKeepingNamespace;
      var _core;
      var _config;
      var _analyticsPlugin;
      var _cfgSyncPlugin;
      var _throttleMgr;
      var _iKeySentMessage;
      var _cdnSentMessage;
      var _sdkVerSentMessage;
      dynamicProto(AppInsightsSku2, this, function(_self) {
        _initDefaults();
        objDefine(_self, "config", {
          g: function() {
            return _config;
          }
        });
        arrForEach(["pluginVersionStringArr", "pluginVersionString"], function(key) {
          objDefine(_self, key, {
            g: function() {
              if (_core) {
                return _core[key];
              }
              return null;
            }
          });
        });
        _snippetVersion = "" + (snippet.sv || snippet[
          _DYN_VERSION2
          /* @min:%2eversion */
        ] || "");
        snippet[
          _DYN_QUEUE
          /* @min:%2equeue */
        ] = snippet[
          _DYN_QUEUE
          /* @min:%2equeue */
        ] || [];
        snippet[
          _DYN_VERSION2
          /* @min:%2eversion */
        ] = snippet[
          _DYN_VERSION2
          /* @min:%2eversion */
        ] || 2;
        var cfgHandler = createDynamicConfig(snippet.config || {}, defaultConfigValues);
        _config = cfgHandler.cfg;
        _analyticsPlugin = new AnalyticsPlugin();
        objDefine(_self, "appInsights", {
          g: function() {
            return _analyticsPlugin;
          }
        });
        properties = new PropertiesPlugin_default();
        dependencies = new AjaxMonitor();
        _sender = new Sender();
        _core = new AppInsightsCore();
        objDefine(_self, "core", {
          g: function() {
            return _core;
          }
        });
        _addUnloadHook(onConfigChange(cfgHandler, function() {
          if (_config[
            _DYN_CONNECTION_STRING
            /* @min:%2econnectionString */
          ]) {
            var cs = parseConnectionString(_config[
              _DYN_CONNECTION_STRING
              /* @min:%2econnectionString */
            ]);
            var ingest = cs.ingestionendpoint;
            _config[
              _DYN_ENDPOINT_URL
              /* @min:%2eendpointUrl */
            ] = _config[
              _DYN_USER_OVERRIDE_ENDPOI0
              /* @min:%2euserOverrideEndpointUrl */
            ] ? _config[
              _DYN_USER_OVERRIDE_ENDPOI0
              /* @min:%2euserOverrideEndpointUrl */
            ] : ingest + DEFAULT_BREEZE_PATH;
            _config[
              _DYN_INSTRUMENTATION_KEY2
              /* @min:%2einstrumentationKey */
            ] = cs.instrumentationkey || _config[
              _DYN_INSTRUMENTATION_KEY2
              /* @min:%2einstrumentationKey */
            ];
          }
          _config[
            _DYN_ENDPOINT_URL
            /* @min:%2eendpointUrl */
          ] = _config[
            _DYN_USER_OVERRIDE_ENDPOI0
            /* @min:%2euserOverrideEndpointUrl */
          ] ? _config[
            _DYN_USER_OVERRIDE_ENDPOI0
            /* @min:%2euserOverrideEndpointUrl */
          ] : _config[
            _DYN_ENDPOINT_URL
            /* @min:%2eendpointUrl */
          ];
        }));
        _self[
          STR_SNIPPET
          /* @min:%2esnippet */
        ] = snippet;
        _self[
          STR_FLUSH
          /* @min:%2eflush */
        ] = function(async, callBack) {
          if (async === void 0) {
            async = true;
          }
          var result;
          doPerf(_core, function() {
            return "AISKU.flush";
          }, function() {
            if (async && !callBack) {
              result = createPromise(function(resolve) {
                callBack = resolve;
              });
            }
            var waiting = 1;
            var flushDone = function() {
              waiting--;
              if (waiting === 0) {
                callBack();
              }
            };
            arrForEach(_core.getChannels(), function(channel) {
              if (channel) {
                waiting++;
                channel[
                  STR_FLUSH
                  /* @min:%2eflush */
                ](async, flushDone);
              }
            });
            flushDone();
          }, null, async);
          return result;
        };
        _self[
          _DYN_ONUNLOAD_FLUSH
          /* @min:%2eonunloadFlush */
        ] = function(async) {
          if (async === void 0) {
            async = true;
          }
          arrForEach(_core.getChannels(), function(channel) {
            if (channel[
              _DYN_ONUNLOAD_FLUSH
              /* @min:%2eonunloadFlush */
            ]) {
              channel[
                _DYN_ONUNLOAD_FLUSH
                /* @min:%2eonunloadFlush */
              ]();
            } else {
              channel[
                STR_FLUSH
                /* @min:%2eflush */
              ](async);
            }
          });
        };
        _self.loadAppInsights = function(legacyMode, logger, notificationManager) {
          if (legacyMode === void 0) {
            legacyMode = false;
          }
          if (legacyMode) {
            throwUnsupported("Legacy Mode is no longer supported");
          }
          function _updateSnippetProperties(snippet2) {
            if (snippet2) {
              var snippetVer = "";
              if (!isNullOrUndefined(_snippetVersion)) {
                snippetVer += _snippetVersion;
              }
              if (_self[
                _DYN_CONTEXT2
                /* @min:%2econtext */
              ] && _self[
                _DYN_CONTEXT2
                /* @min:%2econtext */
              ].internal) {
                _self[
                  _DYN_CONTEXT2
                  /* @min:%2econtext */
                ].internal.snippetVer = snippetVer || "-";
              }
              objForEachKey(_self, function(field, value) {
                if (isString(field) && !isFunction(value) && field && field[0] !== "_" && // Don't copy "internal" values
                arrIndexOf(_ignoreUpdateSnippetProperties, field) === -1) {
                  if (snippet2[field] !== value) {
                    snippet2[field] = value;
                  }
                }
              });
            }
          }
          doPerf(_self.core, function() {
            return "AISKU.loadAppInsights";
          }, function() {
            _core.initialize(_config, [_sender, properties, dependencies, _analyticsPlugin, _cfgSyncPlugin], logger, notificationManager);
            objDefine(_self, "context", {
              g: function() {
                return properties[
                  _DYN_CONTEXT2
                  /* @min:%2econtext */
                ];
              }
            });
            if (!_throttleMgr) {
              _throttleMgr = new ThrottleMgr(_core);
            }
            var sdkSrc = _findSdkSourceFile();
            if (sdkSrc && _self[
              _DYN_CONTEXT2
              /* @min:%2econtext */
            ]) {
              _self[
                _DYN_CONTEXT2
                /* @min:%2econtext */
              ].internal.sdkSrc = sdkSrc;
            }
            _updateSnippetProperties(_self[
              STR_SNIPPET
              /* @min:%2esnippet */
            ]);
            _self.emptyQueue();
            _self[
              STR_POLL_INTERNAL_LOGS
              /* @min:%2epollInternalLogs */
            ]();
            _self[
              _DYN_ADD_HOUSEKEEPING_BEF1
              /* @min:%2eaddHousekeepingBeforeUnload */
            ](_self);
            _addUnloadHook(onConfigChange(cfgHandler, function() {
              var defaultEnable = false;
              if (_config.throttleMgrCfg[
                109
                /* _eInternalMessageId.DefaultThrottleMsgKey */
              ]) {
                defaultEnable = !_config.throttleMgrCfg[
                  109
                  /* _eInternalMessageId.DefaultThrottleMsgKey */
                ].disabled;
              }
              if (!_throttleMgr.isReady() && _config.extensionConfig && _config.extensionConfig[_cfgSyncPlugin.identifier] && defaultEnable) {
                _throttleMgr.onReadyState(true);
              }
              var result;
              if (!_iKeySentMessage && !_config[
                _DYN_CONNECTION_STRING
                /* @min:%2econnectionString */
              ] && isFeatureEnabled(IKEY_USAGE, _config)) {
                result = _throttleMgr[
                  _DYN_SEND_MESSAGE
                  /* @min:%2esendMessage */
                ](106, "See Instrumentation key support at aka.ms/IkeyMigrate");
                _iKeySentMessage = true;
              }
              if (!_cdnSentMessage && _self[
                _DYN_CONTEXT2
                /* @min:%2econtext */
              ].internal.sdkSrc && _self[
                _DYN_CONTEXT2
                /* @min:%2econtext */
              ].internal.sdkSrc.indexOf("az416426") != -1 && isFeatureEnabled(CDN_USAGE, _config)) {
                result = _throttleMgr[
                  _DYN_SEND_MESSAGE
                  /* @min:%2esendMessage */
                ](110, "See Cdn support notice at aka.ms/JsActiveCdn");
                _cdnSentMessage = true;
              }
              if (!_sdkVerSentMessage && parseInt(_snippetVersion) < 6 && isFeatureEnabled(SDK_LOADER_VER, _config)) {
                result = _throttleMgr[
                  _DYN_SEND_MESSAGE
                  /* @min:%2esendMessage */
                ](111, "An updated Sdk Loader is available, see aka.ms/SnippetVer");
                _sdkVerSentMessage = true;
              }
            }));
          });
          return _self;
        };
        _self[
          _DYN_UPDATE_SNIPPET_DEFIN2
          /* @min:%2eupdateSnippetDefinitions */
        ] = function(snippet2) {
          proxyAssign(snippet2, _self, function(name) {
            return name && arrIndexOf(_ignoreUpdateSnippetProperties, name) === -1;
          });
        };
        _self.emptyQueue = function() {
          try {
            if (isArray(_self.snippet[
              _DYN_QUEUE
              /* @min:%2equeue */
            ])) {
              var length_1 = _self.snippet[
                _DYN_QUEUE
                /* @min:%2equeue */
              ].length;
              for (var i = 0; i < length_1; i++) {
                var call = _self.snippet[
                  _DYN_QUEUE
                  /* @min:%2equeue */
                ][i];
                call();
              }
              _self.snippet[
                _DYN_QUEUE
                /* @min:%2equeue */
              ] = void 0;
              delete _self.snippet[
                _DYN_QUEUE
                /* @min:%2equeue */
              ];
            }
          } catch (exception) {
            var properties_1 = {};
            if (exception && isFunction(exception.toString)) {
              properties_1.exception = exception.toString();
            }
          }
        };
        _self[
          _DYN_ADD_HOUSEKEEPING_BEF1
          /* @min:%2eaddHousekeepingBeforeUnload */
        ] = function(appInsightsInstance) {
          if (hasWindow() || hasDocument()) {
            var performHousekeeping_1 = function() {
              appInsightsInstance[
                _DYN_ONUNLOAD_FLUSH
                /* @min:%2eonunloadFlush */
              ](false);
              if (isFunction(_self.core[
                STR_GET_PLUGIN
                /* @min:%2egetPlugin */
              ])) {
                var loadedPlugin = _this.core[
                  STR_GET_PLUGIN
                  /* @min:%2egetPlugin */
                ](PropertiesPluginIdentifier);
                if (loadedPlugin) {
                  var propertiesPlugin = loadedPlugin.plugin;
                  if (propertiesPlugin && propertiesPlugin[
                    _DYN_CONTEXT2
                    /* @min:%2econtext */
                  ] && propertiesPlugin[
                    _DYN_CONTEXT2
                    /* @min:%2econtext */
                  ]._sessionManager) {
                    propertiesPlugin[
                      _DYN_CONTEXT2
                      /* @min:%2econtext */
                    ]._sessionManager.backup();
                  }
                }
              }
            };
            var added_1 = false;
            if (!_houseKeepingNamespace) {
              _houseKeepingNamespace = mergeEvtNamespace(_evtNamespace, _core[
                STR_EVT_NAMESPACE
                /* @min:%2eevtNamespace */
              ] && _core[
                STR_EVT_NAMESPACE
                /* @min:%2eevtNamespace */
              ]());
            }
            _addUnloadHook(onConfigChange(_config, function(details) {
              var coreConfig = details.cfg;
              var analyticsPlugin = appInsightsInstance.appInsights;
              var ctx = createProcessTelemetryContext(null, coreConfig, analyticsPlugin.core);
              var extConfig = ctx.getExtCfg(analyticsPlugin.identifier || AnalyticsPluginIdentifier);
              _removePageEventHandlers();
              var excludePageUnloadEvents = coreConfig.disablePageUnloadEvents;
              if (!extConfig.disableFlushOnBeforeUnload) {
                if (addPageUnloadEventListener(performHousekeeping_1, excludePageUnloadEvents, _houseKeepingNamespace)) {
                  added_1 = true;
                }
                if (addPageHideEventListener(performHousekeeping_1, excludePageUnloadEvents, _houseKeepingNamespace)) {
                  added_1 = true;
                }
                if (!added_1 && !isReactNative()) {
                  _throwInternal(_core.logger, 1, 19, "Could not add handler for beforeunload and pagehide");
                }
              }
              if (!added_1 && !extConfig.disableFlushOnUnload) {
                addPageHideEventListener(performHousekeeping_1, excludePageUnloadEvents, _houseKeepingNamespace);
              }
            }));
          }
        };
        _self.getSender = function() {
          return _sender;
        };
        _self.unload = function(isAsync, unloadComplete, cbTimeout) {
          var unloadDone = false;
          var result;
          if (isAsync && !unloadComplete) {
            result = createPromise(function(resolve) {
              unloadComplete = resolve;
            });
          }
          function _unloadCallback(unloadState) {
            if (!unloadDone) {
              unloadDone = true;
              _initDefaults();
              unloadComplete && unloadComplete(unloadState);
            }
          }
          _self[
            _DYN_ONUNLOAD_FLUSH
            /* @min:%2eonunloadFlush */
          ](isAsync);
          _removePageEventHandlers();
          _core.unload && _core.unload(isAsync, _unloadCallback, cbTimeout);
          return result;
        };
        proxyFunctions(_self, _analyticsPlugin, [
          STR_GET_COOKIE_MGR,
          STR_TRACK_EVENT,
          STR_TRACK_PAGE_VIEW,
          "trackPageViewPerformance",
          STR_TRACK_EXCEPTION,
          "_onerror",
          STR_TRACK_TRACE,
          STR_TRACK_METRIC,
          STR_START_TRACK_PAGE,
          STR_STOP_TRACK_PAGE,
          STR_START_TRACK_EVENT,
          STR_STOP_TRACK_EVENT
        ]);
        proxyFunctions(_self, _getCurrentDependencies, [
          STR_TRACK_DEPENDENCY_DATA,
          "addDependencyListener",
          "addDependencyInitializer"
        ]);
        proxyFunctions(_self, _core, [
          STR_ADD_TELEMETRY_INITIALIZER,
          STR_POLL_INTERNAL_LOGS,
          "stopPollingInternalLogs",
          STR_GET_PLUGIN,
          "addPlugin",
          STR_EVT_NAMESPACE,
          "addUnloadCb",
          "getTraceCtx",
          "updateCfg",
          "onCfgChange"
        ]);
        proxyFunctions(_self, function() {
          var context = properties[
            _DYN_CONTEXT2
            /* @min:%2econtext */
          ];
          return context ? context.user : null;
        }, [
          STR_SET_AUTHENTICATED_USER_CONTEXT,
          STR_CLEAR_AUTHENTICATED_USER_CONTEXT
        ]);
        function _getCurrentDependencies() {
          return dependencies;
        }
        function _initDefaults() {
          _evtNamespace = createUniqueNamespace("AISKU");
          _houseKeepingNamespace = null;
          dependencies = null;
          properties = null;
          _sender = null;
          _snippetVersion = null;
          _throttleMgr = null;
          _iKeySentMessage = false;
          _cdnSentMessage = false;
          _sdkVerSentMessage = false;
          _cfgSyncPlugin = new CfgSyncPlugin();
        }
        function _removePageEventHandlers() {
          if (_houseKeepingNamespace) {
            removePageUnloadEventListener(null, _houseKeepingNamespace);
            removePageHideEventListener(null, _houseKeepingNamespace);
          }
        }
        function _addUnloadHook(hooks) {
          _core.addUnloadHook(hooks);
        }
      });
    }
    AppInsightsSku2.prototype.addDependencyInitializer = function(dependencyInitializer) {
      return null;
    };
    return AppInsightsSku2;
  }()
);
function _findSdkSourceFile() {
  if (_internalSdkSrc) {
    return _internalSdkSrc;
  }
  var sdkSrc = null;
  var isModule = false;
  var cdns = [
    "://js.monitor.azure.com/",
    "://az416426.vo.msecnd.net/"
  ];
  try {
    var scrpt = (document || {}).currentScript;
    if (scrpt) {
      sdkSrc = scrpt.src;
    }
  } catch (e) {
  }
  if (sdkSrc) {
    try {
      var url_1 = sdkSrc.toLowerCase();
      if (url_1) {
        var src_1 = "";
        arrForEach(cdns, function(value, idx) {
          if (strIndexOf(url_1, value) !== -1) {
            src_1 = "cdn" + (idx + 1);
            if (strIndexOf(url_1, "/scripts/") === -1) {
              if (strIndexOf(url_1, "/next/") !== -1) {
                src_1 += "-next";
              } else if (strIndexOf(url_1, "/beta/") !== -1) {
                src_1 += "-beta";
              }
            }
            _internalSdkSrc = src_1 + (isModule ? ".mod" : "");
            return -1;
          }
        });
      }
    } catch (e) {
    }
    _internalSdkSrc = sdkSrc;
  }
  return _internalSdkSrc;
}

// node_modules/@microsoft/applicationinsights-web/dist-es5/ApplicationInsightsContainer.js
var ApplicationInsightsContainer = (
  /** @class */
  function() {
    function ApplicationInsightsContainer2() {
    }
    ApplicationInsightsContainer2.getAppInsights = function(snippet, version2) {
      var theSku = new AppInsightsSku(snippet);
      if (version2 >= 2) {
        theSku[
          _DYN_UPDATE_SNIPPET_DEFIN2
          /* @min:%2eupdateSnippetDefinitions */
        ](snippet);
        theSku.loadAppInsights(false);
        return theSku;
      }
      throwUnsupported("V1 API compatibility is no longer supported");
    };
    return ApplicationInsightsContainer2;
  }()
);
export {
  AppInsightsCore,
  AnalyticsPlugin as ApplicationAnalytics,
  AppInsightsSku as ApplicationInsights,
  ApplicationInsightsContainer,
  BaseTelemetryPlugin,
  CfgSyncPlugin,
  AjaxMonitor as DependenciesPlugin,
  DistributedTracingModes,
  Event2 as Event,
  EventPersistence,
  Exception,
  LoggingSeverity,
  Metric,
  NotificationManager,
  PageView,
  PageViewPerformance,
  PerfEvent,
  PerfManager,
  PropertiesPlugin_default as PropertiesPlugin,
  RemoteDependencyData,
  Sender,
  SeverityLevel,
  Trace,
  doPerf
};
/*! Bundled license information:

@nevware21/ts-utils/dist/es5/mod/ts-utils.js:
  (*! https://github.com/nevware21/ts-utils v0.11.2 *)

@nevware21/ts-async/dist/es5/mod/ts-async.js:
  (*!
   * NevWare21 - ts-async, 0.5.1
   * https://github.com/nevware21/ts-async
   * Copyright (c) NevWare21 and contributors. All rights reserved.
   * Licensed under the MIT license.
   *)
*/
//# sourceMappingURL=@microsoft_applicationinsights-web.js.map

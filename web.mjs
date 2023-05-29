"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;
//mam.ts
;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
var $;
(function ($) {
    $.$mol_ambient_ref = Symbol('$mol_ambient_ref');
    function $mol_ambient(overrides) {
        return Object.setPrototypeOf(overrides, this || $);
    }
    $.$mol_ambient = $mol_ambient;
})($ || ($ = {}));
//mol/ambient/ambient.ts
;
"use strict";
var $;
(function ($) {
    const instances = new WeakSet();
    function $mol_delegate(proto, target) {
        const proxy = new Proxy(proto, {
            get: (_, field) => {
                const obj = target();
                let val = Reflect.get(obj, field);
                if (typeof val === 'function') {
                    val = val.bind(obj);
                }
                return val;
            },
            has: (_, field) => Reflect.has(target(), field),
            set: (_, field, value) => Reflect.set(target(), field, value),
            getOwnPropertyDescriptor: (_, field) => Reflect.getOwnPropertyDescriptor(target(), field),
            ownKeys: () => Reflect.ownKeys(target()),
            getPrototypeOf: () => Reflect.getPrototypeOf(target()),
            setPrototypeOf: (_, donor) => Reflect.setPrototypeOf(target(), donor),
            isExtensible: () => Reflect.isExtensible(target()),
            preventExtensions: () => Reflect.preventExtensions(target()),
            apply: (_, self, args) => Reflect.apply(target(), self, args),
            construct: (_, args, retarget) => Reflect.construct(target(), args, retarget),
            defineProperty: (_, field, descr) => Reflect.defineProperty(target(), field, descr),
            deleteProperty: (_, field) => Reflect.deleteProperty(target(), field),
        });
        instances.add(proxy);
        return proxy;
    }
    $.$mol_delegate = $mol_delegate;
    Reflect.defineProperty($mol_delegate, Symbol.hasInstance, {
        value: (obj) => instances.has(obj),
    });
})($ || ($ = {}));
//mol/delegate/delegate.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_owning_map = new WeakMap();
    function $mol_owning_allow(having) {
        try {
            if (!having)
                return false;
            if (typeof having !== 'object')
                return false;
            if (having instanceof $mol_delegate)
                return false;
            if (typeof having['destructor'] !== 'function')
                return false;
            return true;
        }
        catch {
            return false;
        }
    }
    $.$mol_owning_allow = $mol_owning_allow;
    function $mol_owning_get(having, Owner) {
        if (!$mol_owning_allow(having))
            return null;
        while (true) {
            const owner = $.$mol_owning_map.get(having);
            if (!owner)
                return owner;
            if (!Owner)
                return owner;
            if (owner instanceof Owner)
                return owner;
            having = owner;
        }
    }
    $.$mol_owning_get = $mol_owning_get;
    function $mol_owning_check(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having) !== owner)
            return false;
        return true;
    }
    $.$mol_owning_check = $mol_owning_check;
    function $mol_owning_catch(owner, having) {
        if (!$mol_owning_allow(having))
            return false;
        if ($.$mol_owning_map.get(having))
            return false;
        $.$mol_owning_map.set(having, owner);
        return true;
    }
    $.$mol_owning_catch = $mol_owning_catch;
})($ || ($ = {}));
//mol/owning/owning.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail(error) {
        throw error;
    }
    $.$mol_fail = $mol_fail;
})($ || ($ = {}));
//mol/fail/fail.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_hidden(error) {
        throw error;
    }
    $.$mol_fail_hidden = $mol_fail_hidden;
})($ || ($ = {}));
//mol/fail/hidden/hidden.ts
;
"use strict";
//mol/type/writable/writable.ts
;
"use strict";
var $;
(function ($) {
    class $mol_object2 {
        static $ = $;
        [Symbol.toStringTag];
        [$mol_ambient_ref] = null;
        get $() {
            if (this[$mol_ambient_ref])
                return this[$mol_ambient_ref];
            const owner = $mol_owning_get(this);
            return this[$mol_ambient_ref] = owner?.$ || $mol_object2.$;
        }
        set $(next) {
            if (this[$mol_ambient_ref])
                $mol_fail_hidden(new Error('Context already defined'));
            this[$mol_ambient_ref] = next;
        }
        static create(init) {
            const obj = new this;
            if (init)
                init(obj);
            return obj;
        }
        static [Symbol.toPrimitive]() {
            return this.toString();
        }
        static toString() {
            if (Symbol.toStringTag in this)
                return this[Symbol.toStringTag];
            return this.name;
        }
        destructor() { }
        toString() {
            return this[Symbol.toStringTag] || this.constructor.name + '()';
        }
        toJSON() {
            return this.toString();
        }
    }
    $.$mol_object2 = $mol_object2;
})($ || ($ = {}));
//mol/object2/object2.ts
;
"use strict";
var $;
(function ($_1) {
    let $$;
    (function ($$) {
        let $;
    })($$ = $_1.$$ || ($_1.$$ = {}));
    $_1.$mol_object_field = Symbol('$mol_object_field');
    class $mol_object extends $mol_object2 {
        static make(config) {
            return super.create(obj => {
                for (let key in config)
                    obj[key] = config[key];
            });
        }
    }
    $_1.$mol_object = $mol_object;
})($ || ($ = {}));
//mol/object/object.ts
;
"use strict";
var $;
(function ($) {
    let $mol_wire_cursor;
    (function ($mol_wire_cursor) {
        $mol_wire_cursor[$mol_wire_cursor["stale"] = -1] = "stale";
        $mol_wire_cursor[$mol_wire_cursor["doubt"] = -2] = "doubt";
        $mol_wire_cursor[$mol_wire_cursor["fresh"] = -3] = "fresh";
        $mol_wire_cursor[$mol_wire_cursor["final"] = -4] = "final";
    })($mol_wire_cursor = $.$mol_wire_cursor || ($.$mol_wire_cursor = {}));
})($ || ($ = {}));
//mol/wire/cursor/cursor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub extends Object {
        data = [];
        static get [Symbol.species]() {
            return Array;
        }
        sub_from = 0;
        get sub_list() {
            const res = [];
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                res.push(this.data[i]);
            }
            return res;
        }
        get sub_empty() {
            return this.sub_from === this.data.length;
        }
        sub_on(sub, pub_pos) {
            const pos = this.data.length;
            this.data.push(sub, pub_pos);
            return pos;
        }
        sub_off(sub_pos) {
            if (!(sub_pos < this.data.length)) {
                $mol_fail(new Error(`Wrong pos ${sub_pos}`));
            }
            const end = this.data.length - 2;
            if (sub_pos !== end) {
                this.peer_move(end, sub_pos);
            }
            this.data.pop();
            this.data.pop();
            if (this.data.length === this.sub_from)
                this.reap();
        }
        reap() { }
        promote() {
            $mol_wire_auto()?.track_next(this);
        }
        fresh() { }
        complete() { }
        get incompleted() {
            return false;
        }
        emit(quant = $mol_wire_cursor.stale) {
            for (let i = this.sub_from; i < this.data.length; i += 2) {
                ;
                this.data[i].absorb(quant);
            }
        }
        peer_move(from_pos, to_pos) {
            const peer = this.data[from_pos];
            const self_pos = this.data[from_pos + 1];
            this.data[to_pos] = peer;
            this.data[to_pos + 1] = self_pos;
            peer.peer_repos(self_pos, to_pos);
        }
        peer_repos(peer_pos, self_pos) {
            this.data[peer_pos + 1] = self_pos;
        }
    }
    $.$mol_wire_pub = $mol_wire_pub;
})($ || ($ = {}));
//mol/wire/pub/pub.ts
;
"use strict";
//mol/wire/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_wire_auto_sub = null;
    function $mol_wire_auto(next = $.$mol_wire_auto_sub) {
        return $.$mol_wire_auto_sub = next;
    }
    $.$mol_wire_auto = $mol_wire_auto;
    $.$mol_wire_affected = [];
})($ || ($ = {}));
//mol/wire/wire.ts
;
"use strict";
var $;
(function ($) {
    $['devtoolsFormatters'] ||= [];
    function $mol_dev_format_register(config) {
        $['devtoolsFormatters'].push(config);
    }
    $.$mol_dev_format_register = $mol_dev_format_register;
    $.$mol_dev_format_head = Symbol('$mol_dev_format_head');
    $.$mol_dev_format_body = Symbol('$mol_dev_format_body');
    $mol_dev_format_register({
        header: (val, config = false) => {
            if (config)
                return null;
            if (!val)
                return null;
            if ($.$mol_dev_format_head in val) {
                return val[$.$mol_dev_format_head]();
            }
            if (typeof val === 'function') {
                return $mol_dev_format_native(val);
            }
            return null;
        },
        hasBody: val => val[$.$mol_dev_format_body],
        body: val => val[$.$mol_dev_format_body](),
    });
    function $mol_dev_format_native(obj) {
        if (typeof obj === 'undefined')
            return $.$mol_dev_format_shade('undefined');
        if (typeof obj !== 'object' && typeof obj !== 'function')
            return obj;
        return [
            'object',
            {
                object: obj,
                config: true,
            },
        ];
    }
    $.$mol_dev_format_native = $mol_dev_format_native;
    function $mol_dev_format_auto(obj) {
        if (obj == null)
            return $.$mol_dev_format_shade(String(obj));
        if (typeof obj === 'object' && $.$mol_dev_format_head in obj) {
            return obj[$.$mol_dev_format_head]();
        }
        return [
            'object',
            {
                object: obj,
                config: false,
            },
        ];
    }
    $.$mol_dev_format_auto = $mol_dev_format_auto;
    function $mol_dev_format_element(element, style, ...content) {
        const styles = [];
        for (let key in style)
            styles.push(`${key} : ${style[key]}`);
        return [
            element,
            {
                style: styles.join(' ; '),
            },
            ...content,
        ];
    }
    $.$mol_dev_format_element = $mol_dev_format_element;
    function $mol_dev_format_span(style, ...content) {
        return $mol_dev_format_element('span', {
            'vertical-align': '8%',
            ...style,
        }, ...content);
    }
    $.$mol_dev_format_span = $mol_dev_format_span;
    $.$mol_dev_format_div = $mol_dev_format_element.bind(null, 'div');
    $.$mol_dev_format_ol = $mol_dev_format_element.bind(null, 'ol');
    $.$mol_dev_format_li = $mol_dev_format_element.bind(null, 'li');
    $.$mol_dev_format_table = $mol_dev_format_element.bind(null, 'table');
    $.$mol_dev_format_tr = $mol_dev_format_element.bind(null, 'tr');
    $.$mol_dev_format_td = $mol_dev_format_element.bind(null, 'td');
    $.$mol_dev_format_accent = $mol_dev_format_span.bind(null, {
        'color': 'magenta',
    });
    $.$mol_dev_format_strong = $mol_dev_format_span.bind(null, {
        'font-weight': 'bold',
    });
    $.$mol_dev_format_string = $mol_dev_format_span.bind(null, {
        'color': 'green',
    });
    $.$mol_dev_format_shade = $mol_dev_format_span.bind(null, {
        'color': 'gray',
    });
    $.$mol_dev_format_indent = $.$mol_dev_format_div.bind(null, {
        'margin-left': '13px'
    });
})($ || ($ = {}));
//mol/dev/format/format.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_pub_sub extends $mol_wire_pub {
        pub_from = 0;
        cursor = $mol_wire_cursor.stale;
        get temp() {
            return false;
        }
        get pub_list() {
            const res = [];
            const max = this.cursor >= 0 ? this.cursor : this.sub_from;
            for (let i = this.pub_from; i < max; i += 2) {
                if (this.data[i])
                    res.push(this.data[i]);
            }
            return res;
        }
        track_on() {
            this.cursor = this.pub_from;
            const sub = $mol_wire_auto();
            $mol_wire_auto(this);
            return sub;
        }
        promote() {
            if (this.cursor >= this.pub_from) {
                $mol_fail(new Error('Circular subscription'));
            }
            super.promote();
        }
        track_next(pub) {
            if (this.cursor < 0)
                $mol_fail(new Error('Promo to non begun sub'));
            if (this.cursor < this.sub_from) {
                const next = this.data[this.cursor];
                if (pub === undefined)
                    return next ?? null;
                if (next === pub) {
                    this.cursor += 2;
                    return next;
                }
                if (next) {
                    if (this.sub_from < this.data.length) {
                        this.peer_move(this.sub_from, this.data.length);
                    }
                    this.peer_move(this.cursor, this.sub_from);
                    this.sub_from += 2;
                }
            }
            else {
                if (pub === undefined)
                    return null;
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.sub_from, this.data.length);
                }
                this.sub_from += 2;
            }
            this.data[this.cursor] = pub;
            this.data[this.cursor + 1] = pub.sub_on(this, this.cursor);
            this.cursor += 2;
            return pub;
        }
        track_off(sub) {
            $mol_wire_auto(sub);
            if (this.cursor < 0) {
                $mol_fail(new Error('End of non begun sub'));
            }
            for (let cursor = this.pub_from; cursor < this.cursor; cursor += 2) {
                const pub = this.data[cursor];
                pub.fresh();
            }
            this.cursor = $mol_wire_cursor.fresh;
        }
        pub_off(sub_pos) {
            this.data[sub_pos] = undefined;
            this.data[sub_pos + 1] = undefined;
        }
        destructor() {
            for (let cursor = this.data.length - 2; cursor >= this.sub_from; cursor -= 2) {
                const sub = this.data[cursor];
                const pos = this.data[cursor + 1];
                sub.pub_off(pos);
                this.data.pop();
                this.data.pop();
            }
            this.cursor = this.pub_from;
            this.track_cut();
            this.cursor = $mol_wire_cursor.final;
        }
        track_cut() {
            if (this.cursor < this.pub_from) {
                $mol_fail(new Error('Cut of non begun sub'));
            }
            let tail = 0;
            for (let cursor = this.cursor; cursor < this.sub_from; cursor += 2) {
                const pub = this.data[cursor];
                pub?.sub_off(this.data[cursor + 1]);
                if (this.sub_from < this.data.length) {
                    this.peer_move(this.data.length - 2, cursor);
                    this.data.pop();
                    this.data.pop();
                }
                else {
                    ++tail;
                }
            }
            for (; tail; --tail) {
                this.data.pop();
                this.data.pop();
            }
            this.sub_from = this.cursor;
        }
        complete() { }
        complete_pubs() {
            const limit = this.cursor < 0 ? this.sub_from : this.cursor;
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                if (pub?.incompleted)
                    return;
            }
            for (let cursor = this.pub_from; cursor < limit; cursor += 2) {
                const pub = this.data[cursor];
                pub?.complete();
            }
        }
        absorb(quant = $mol_wire_cursor.stale) {
            if (this.cursor === $mol_wire_cursor.final)
                return;
            if (this.cursor >= quant)
                return;
            this.cursor = quant;
            this.emit($mol_wire_cursor.doubt);
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_native(this);
        }
        get pub_empty() {
            return this.sub_from === this.pub_from;
        }
    }
    $.$mol_wire_pub_sub = $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/pub/sub/sub.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_frame extends $mol_object2 {
        task;
        static _promise = null;
        static get promise() {
            if (this._promise)
                return this._promise;
            return this._promise = new Promise(done => {
                const complete = () => {
                    this._promise = null;
                    done();
                };
                if (typeof requestAnimationFrame === 'function') {
                    requestAnimationFrame(complete);
                }
                else {
                    setTimeout(complete, 16);
                }
            });
        }
        cancelled = false;
        promise;
        constructor(task) {
            super();
            this.task = task;
            this.promise = $mol_after_frame.promise.then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_frame = $mol_after_frame;
})($ || ($ = {}));
//mol/after/frame/frame.web.ts
;
"use strict";
var $;
(function ($) {
    function $mol_promise_like(val) {
        return val && typeof val.then === 'function';
    }
    $.$mol_promise_like = $mol_promise_like;
})($ || ($ = {}));
//mol/promise/like/like.ts
;
"use strict";
var $;
(function ($) {
    const handled = new WeakSet();
    class $mol_wire_fiber extends $mol_wire_pub_sub {
        task;
        host;
        static warm = true;
        static planning = new Set();
        static reaping = new Set();
        static plan_task = null;
        static plan() {
            if (this.plan_task)
                return;
            this.plan_task = new $mol_after_frame(() => {
                try {
                    this.sync();
                }
                finally {
                    $mol_wire_fiber.plan_task = null;
                }
            });
        }
        static sync() {
            while (this.planning.size) {
                for (const fiber of this.planning) {
                    this.planning.delete(fiber);
                    if (fiber.cursor >= 0)
                        continue;
                    if (fiber.cursor === $mol_wire_cursor.final)
                        continue;
                    fiber.fresh();
                }
            }
            while (this.reaping.size) {
                const fibers = this.reaping;
                this.reaping = new Set;
                for (const fiber of fibers) {
                    if (!fiber.sub_empty)
                        continue;
                    fiber.destructor();
                }
            }
        }
        [Symbol.toStringTag];
        cache = undefined;
        get args() {
            return this.data.slice(0, this.pub_from);
        }
        result() {
            if ($mol_promise_like(this.cache))
                return;
            if (this.cache instanceof Error)
                return;
            return this.cache;
        }
        get incompleted() {
            return $mol_promise_like(this.cache);
        }
        field() {
            return this.task.name + '()';
        }
        constructor(id, task, host, args) {
            super();
            this.task = task;
            this.host = host;
            if (args)
                this.data.push(...args);
            this.pub_from = this.sub_from = args?.length ?? 0;
            this[Symbol.toStringTag] = id;
        }
        plan() {
            $mol_wire_fiber.planning.add(this);
            $mol_wire_fiber.plan();
        }
        reap() {
            $mol_wire_fiber.reaping.add(this);
            $mol_wire_fiber.plan();
        }
        toString() {
            return this[Symbol.toStringTag];
        }
        toJSON() {
            return this[Symbol.toStringTag];
        }
        [$mol_dev_format_head]() {
            const cursor = {
                [$mol_wire_cursor.stale]: '🔴',
                [$mol_wire_cursor.doubt]: '🟡',
                [$mol_wire_cursor.fresh]: '🟢',
                [$mol_wire_cursor.final]: '🔵',
            }[this.cursor] ?? this.cursor.toString();
            return $mol_dev_format_div({}, $mol_dev_format_native(this), $mol_dev_format_shade(cursor + ' '), $mol_dev_format_auto(this.cache));
        }
        get $() {
            return (this.host ?? this.task)['$'];
        }
        emit(quant = $mol_wire_cursor.stale) {
            if (this.sub_empty)
                this.plan();
            else
                super.emit(quant);
        }
        fresh() {
            if (this.cursor === $mol_wire_cursor.fresh)
                return;
            if (this.cursor === $mol_wire_cursor.final)
                return;
            check: if (this.cursor === $mol_wire_cursor.doubt) {
                for (let i = this.pub_from; i < this.sub_from; i += 2) {
                    ;
                    this.data[i]?.fresh();
                    if (this.cursor !== $mol_wire_cursor.doubt)
                        break check;
                }
                this.cursor = $mol_wire_cursor.fresh;
                return;
            }
            const bu = this.track_on();
            let result;
            try {
                switch (this.pub_from) {
                    case 0:
                        result = this.task.call(this.host);
                        break;
                    case 1:
                        result = this.task.call(this.host, this.data[0]);
                        break;
                    default:
                        result = this.task.call(this.host, ...this.args);
                        break;
                }
                if ($mol_promise_like(result)) {
                    const put = (res) => {
                        if (this.cache === result)
                            this.put(res);
                        return res;
                    };
                    result = Object.assign(result.then(put, put), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            catch (error) {
                if (error instanceof Error || $mol_promise_like(error)) {
                    result = error;
                }
                else {
                    result = new Error(String(error), { cause: error });
                }
                if ($mol_promise_like(result) && !handled.has(result)) {
                    result = Object.assign(result.finally(() => {
                        if (this.cache === result)
                            this.absorb();
                    }), {
                        destructor: result['destructor'] ?? (() => { })
                    });
                    handled.add(result);
                }
            }
            if (!$mol_promise_like(result)) {
                this.track_cut();
            }
            this.track_off(bu);
            this.put(result);
        }
        refresh() {
            this.cursor = $mol_wire_cursor.stale;
            this.fresh();
        }
        sync() {
            if (!$mol_wire_fiber.warm) {
                return this.result();
            }
            this.promote();
            this.fresh();
            if (this.cache instanceof Error) {
                return $mol_fail_hidden(this.cache);
            }
            if ($mol_promise_like(this.cache)) {
                return $mol_fail_hidden(this.cache);
            }
            return this.cache;
        }
        async async() {
            while (true) {
                this.fresh();
                if (this.cache instanceof Error) {
                    $mol_fail_hidden(this.cache);
                }
                if (!$mol_promise_like(this.cache))
                    return this.cache;
                await this.cache;
                if (this.cursor === $mol_wire_cursor.final) {
                    await new Promise(() => { });
                }
            }
        }
    }
    $.$mol_wire_fiber = $mol_wire_fiber;
})($ || ($ = {}));
//mol/wire/fiber/fiber.ts
;
"use strict";
var $;
(function ($) {
    const named = new WeakSet();
    function $mol_func_name(func) {
        let name = func.name;
        if (name?.length > 1)
            return name;
        if (named.has(func))
            return name;
        for (let key in this) {
            try {
                if (this[key] !== func)
                    continue;
                name = key;
                Object.defineProperty(func, 'name', { value: name });
                break;
            }
            catch { }
        }
        named.add(func);
        return name;
    }
    $.$mol_func_name = $mol_func_name;
    function $mol_func_name_from(target, source) {
        Object.defineProperty(target, 'name', { value: source.name });
        return target;
    }
    $.$mol_func_name_from = $mol_func_name_from;
})($ || ($ = {}));
//mol/func/name/name.ts
;
"use strict";
var $;
(function ($) {
    function $mol_guid(length = 8, exists = () => false) {
        for (;;) {
            let id = Math.random().toString(36).substring(2, length + 2).toUpperCase();
            if (exists(id))
                continue;
            return id;
        }
    }
    $.$mol_guid = $mol_guid;
})($ || ($ = {}));
//mol/guid/guid.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_key_store = new WeakMap();
    function $mol_key(value) {
        if (!value)
            return JSON.stringify(value);
        if (typeof value !== 'object' && typeof value !== 'function')
            return JSON.stringify(value);
        return JSON.stringify(value, (field, value) => {
            if (!value)
                return value;
            if (typeof value !== 'object' && typeof value !== 'function')
                return value;
            if (Array.isArray(value))
                return value;
            const proto = Reflect.getPrototypeOf(value);
            if (!proto)
                return value;
            if (Reflect.getPrototypeOf(proto) === null)
                return value;
            if ('toJSON' in value)
                return value;
            if (value instanceof RegExp)
                return value.toString();
            let key = $.$mol_key_store.get(value);
            if (key)
                return key;
            key = $mol_guid();
            $.$mol_key_store.set(value, key);
            return key;
        });
    }
    $.$mol_key = $mol_key;
})($ || ($ = {}));
//mol/key/key.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_compare_deep_cache = new WeakMap();
    function $mol_compare_deep(left, right) {
        if (Object.is(left, right))
            return true;
        if (left === null)
            return false;
        if (right === null)
            return false;
        if (typeof left !== 'object')
            return false;
        if (typeof right !== 'object')
            return false;
        const left_proto = Reflect.getPrototypeOf(left);
        const right_proto = Reflect.getPrototypeOf(right);
        if (left_proto !== right_proto)
            return false;
        if (left instanceof Boolean)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Number)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof String)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof Date)
            return Object.is(left.valueOf(), right['valueOf']());
        if (left instanceof RegExp)
            return left.source === right.source && left.flags === right.flags;
        if (left instanceof Error)
            return left.message === right.message && left.stack === right.stack;
        let left_cache = $.$mol_compare_deep_cache.get(left);
        if (left_cache) {
            const right_cache = left_cache.get(right);
            if (typeof right_cache === 'boolean')
                return right_cache;
        }
        else {
            left_cache = new WeakMap([[right, true]]);
            $.$mol_compare_deep_cache.set(left, left_cache);
        }
        let result;
        try {
            if (!left_proto)
                result = compare_pojo(left, right);
            else if (!Reflect.getPrototypeOf(left_proto))
                result = compare_pojo(left, right);
            else if (Array.isArray(left))
                result = compare_array(left, right);
            else if (left instanceof Set)
                result = compare_set(left, right);
            else if (left instanceof Map)
                result = compare_map(left, right);
            else if (ArrayBuffer.isView(left))
                result = compare_buffer(left, right);
            else if (Symbol.iterator in left)
                result = compare_iterator(left[Symbol.iterator](), right[Symbol.iterator]());
            else if (Symbol.toPrimitive in left)
                result = compare_primitive(left, right);
            else
                result = false;
        }
        finally {
            left_cache.set(right, result);
        }
        return result;
    }
    $.$mol_compare_deep = $mol_compare_deep;
    function compare_array(left, right) {
        const len = left.length;
        if (len !== right.length)
            return false;
        for (let i = 0; i < len; ++i) {
            if (!$mol_compare_deep(left[i], right[i]))
                return false;
        }
        return true;
    }
    function compare_buffer(left, right) {
        const len = left.byteLength;
        if (len !== right.byteLength)
            return false;
        for (let i = 0; i < len; ++i) {
            if (left[i] !== right[i])
                return false;
        }
        return true;
    }
    function compare_iterator(left, right) {
        while (true) {
            const left_next = left.next();
            const right_next = right.next();
            if (left_next.done !== right_next.done)
                return false;
            if (left_next.done)
                break;
            if (!$mol_compare_deep(left_next.value, right_next.value))
                return false;
        }
        return true;
    }
    function compare_set(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.values(), right.values());
    }
    function compare_map(left, right) {
        if (left.size !== right.size)
            return false;
        return compare_iterator(left.keys(), right.keys())
            && compare_iterator(left.values(), right.values());
    }
    function compare_pojo(left, right) {
        const left_keys = Object.getOwnPropertyNames(left);
        const right_keys = Object.getOwnPropertyNames(right);
        if (!compare_array(left_keys, right_keys))
            return false;
        for (let key of left_keys) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        const left_syms = Object.getOwnPropertySymbols(left);
        const right_syms = Object.getOwnPropertySymbols(right);
        if (!compare_array(left_syms, right_syms))
            return false;
        for (let key of left_syms) {
            if (!$mol_compare_deep(left[key], right[key]))
                return false;
        }
        return true;
    }
    function compare_primitive(left, right) {
        return Object.is(left[Symbol.toPrimitive]('default'), right[Symbol.toPrimitive]('default'));
    }
})($ || ($ = {}));
//mol/compare/deep/deep.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_task extends $mol_wire_fiber {
        static getter(task) {
            return function $mol_wire_task_get(host, args) {
                const sub = $mol_wire_auto();
                const existen = sub?.track_next();
                reuse: if (existen) {
                    if (!existen.temp)
                        break reuse;
                    if (existen.host !== host)
                        break reuse;
                    if (existen.task !== task)
                        break reuse;
                    if (!$mol_compare_deep(existen.args, args))
                        break reuse;
                    return existen;
                }
                return new $mol_wire_task(`${host?.[Symbol.toStringTag] ?? host}.${task.name}(#)`, task, host, args);
            };
        }
        get temp() {
            return true;
        }
        complete() {
            if ($mol_promise_like(this.cache))
                return;
            this.destructor();
        }
        put(next) {
            const prev = this.cache;
            this.cache = next;
            if ($mol_promise_like(next)) {
                this.cursor = $mol_wire_cursor.fresh;
                if (next !== prev)
                    this.emit();
                return next;
            }
            this.cursor = $mol_wire_cursor.final;
            if (this.sub_empty)
                this.destructor();
            else if (next !== prev)
                this.emit();
            return next;
        }
    }
    $.$mol_wire_task = $mol_wire_task;
})($ || ($ = {}));
//mol/wire/task/task.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_method(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const temp = $mol_wire_task.getter(orig);
        const value = function (...args) {
            const fiber = temp(this ?? null, args);
            return fiber.sync();
        };
        Object.defineProperty(value, 'name', { value: orig.name + ' ' });
        Object.assign(value, { orig });
        const descr2 = { ...descr, value };
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_method = $mol_wire_method;
})($ || ($ = {}));
//mol/wire/method/method.ts
;
"use strict";
//mol/type/tail/tail.ts
;
"use strict";
//mol/type/foot/foot.ts
;
"use strict";
var $;
(function ($) {
    const catched = new WeakMap();
    function $mol_fail_catch(error) {
        if (typeof error !== 'object')
            return false;
        if ($mol_promise_like(error))
            $mol_fail_hidden(error);
        if (catched.get(error))
            return false;
        catched.set(error, true);
        return true;
    }
    $.$mol_fail_catch = $mol_fail_catch;
})($ || ($ = {}));
//mol/fail/catch/catch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_fail_log(error) {
        if ($mol_promise_like(error))
            return false;
        if (!$mol_fail_catch(error))
            return false;
        console.error(error);
        return true;
    }
    $.$mol_fail_log = $mol_fail_log;
})($ || ($ = {}));
//mol/fail/log/log.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wire_atom extends $mol_wire_fiber {
        static solo(host, task) {
            const field = task.name + '()';
            const existen = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            if (existen)
                return existen;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const key = `${prefix}.${field}`;
            const fiber = new $mol_wire_atom(key, task, host, []);
            (host ?? task)[field] = fiber;
            return fiber;
        }
        static plex(host, task, key) {
            const field = task.name + '()';
            let dict = Object.getOwnPropertyDescriptor(host ?? task, field)?.value;
            const prefix = host?.[Symbol.toStringTag] ?? (host instanceof Function ? $$.$mol_func_name(host) : host);
            const id = `${prefix}.${task.name}(${$mol_key(key)})`;
            if (dict) {
                const existen = dict.get(id);
                if (existen)
                    return existen;
            }
            else {
                dict = (host ?? task)[field] = new Map();
            }
            const fiber = new $mol_wire_atom(id, task, host, [key]);
            dict.set(id, fiber);
            return fiber;
        }
        static watching = new Set();
        static watcher = null;
        static watch() {
            $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            for (const atom of $mol_wire_atom.watching) {
                if (atom.cursor === $mol_wire_cursor.final) {
                    $mol_wire_atom.watching.delete(atom);
                }
                else {
                    atom.cursor = $mol_wire_cursor.stale;
                    atom.fresh();
                }
            }
        }
        watch() {
            if (!$mol_wire_atom.watcher) {
                $mol_wire_atom.watcher = new $mol_after_frame($mol_wire_atom.watch);
            }
            $mol_wire_atom.watching.add(this);
        }
        resync(args) {
            return this.put(this.task.call(this.host, ...args));
        }
        once() {
            return this.sync();
        }
        channel() {
            return Object.assign((next) => {
                if (next !== undefined)
                    return this.resync([...this.args, next]);
                if (!$mol_wire_fiber.warm)
                    return this.result();
                if ($mol_wire_auto()?.temp) {
                    return this.once();
                }
                else {
                    return this.sync();
                }
            }, { atom: this });
        }
        destructor() {
            super.destructor();
            const prev = this.cache;
            if ($mol_owning_check(this, prev)) {
                prev.destructor();
            }
            if (this.pub_from === 0) {
                ;
                (this.host ?? this.task)[this.field()] = null;
            }
            else {
                ;
                (this.host ?? this.task)[this.field()].delete(this[Symbol.toStringTag]);
            }
        }
        put(next) {
            const prev = this.cache;
            update: if (next !== prev) {
                try {
                    if ($mol_compare_deep(prev, next))
                        break update;
                }
                catch (error) {
                    $mol_fail_log(error);
                }
                if ($mol_owning_check(this, prev)) {
                    prev.destructor();
                }
                if ($mol_owning_catch(this, next)) {
                    try {
                        next[Symbol.toStringTag] = this[Symbol.toStringTag];
                    }
                    catch {
                        Object.defineProperty(next, Symbol.toStringTag, { value: this[Symbol.toStringTag] });
                    }
                }
                if (!this.sub_empty)
                    this.emit();
            }
            this.cache = next;
            this.cursor = $mol_wire_cursor.fresh;
            if ($mol_promise_like(next))
                return next;
            this.complete_pubs();
            return next;
        }
    }
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "resync", null);
    __decorate([
        $mol_wire_method
    ], $mol_wire_atom.prototype, "once", null);
    $.$mol_wire_atom = $mol_wire_atom;
})($ || ($ = {}));
//mol/wire/atom/atom.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solo(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.solo(this, orig);
                if ((args.length === 0) || (args[0] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_solo = $mol_wire_solo;
})($ || ($ = {}));
//mol/wire/solo/solo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_plex(host, field, descr) {
        if (!descr)
            descr = Reflect.getOwnPropertyDescriptor(host, field);
        const orig = descr?.value ?? host[field];
        const sup = Reflect.getPrototypeOf(host);
        if (typeof sup[field] === 'function') {
            Object.defineProperty(orig, 'name', { value: sup[field].name });
        }
        const descr2 = {
            ...descr,
            value: function (...args) {
                let atom = $mol_wire_atom.plex(this, orig, args[0]);
                if ((args.length === 1) || (args[1] === undefined)) {
                    if (!$mol_wire_fiber.warm)
                        return atom.result();
                    if ($mol_wire_auto()?.temp) {
                        return atom.once();
                    }
                    else {
                        return atom.sync();
                    }
                }
                return atom.resync(args);
            }
        };
        Reflect.defineProperty(descr2.value, 'name', { value: orig.name + ' ' });
        Object.assign(descr2.value, { orig });
        Reflect.defineProperty(host, field, descr2);
        return descr2;
    }
    $.$mol_wire_plex = $mol_wire_plex;
})($ || ($ = {}));
//mol/wire/plex/plex.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_mem = $mol_wire_solo;
    $.$mol_mem_key = $mol_wire_plex;
})($ || ($ = {}));
//mol/mem/mem.ts
;
"use strict";
var $;
(function ($) {
    class $mol_window extends $mol_object {
        static size() {
            this.resizes();
            return {
                width: self.innerWidth,
                height: self.innerHeight,
            };
        }
        static resizes(next) { return next; }
    }
    __decorate([
        $mol_mem
    ], $mol_window, "size", null);
    __decorate([
        $mol_mem
    ], $mol_window, "resizes", null);
    $.$mol_window = $mol_window;
    self.addEventListener('resize', event => $mol_window.resizes(event));
})($ || ($ = {}));
//mol/window/window.web.ts
;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));
//mol/dom/context/context.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));
//mol/dom/context/context.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_after_tick extends $mol_object2 {
        task;
        promise;
        cancelled = false;
        constructor(task) {
            super();
            this.task = task;
            this.promise = Promise.resolve().then(() => {
                if (this.cancelled)
                    return;
                task();
            });
        }
        destructor() {
            this.cancelled = true;
        }
    }
    $.$mol_after_tick = $mol_after_tick;
})($ || ($ = {}));
//mol/after/tick/tick.ts
;
"use strict";
var $;
(function ($) {
    class $mol_view_selection extends $mol_object {
        static focused(next, notify) {
            const parents = [];
            let element = next?.[0] ?? $mol_dom_context.document.activeElement;
            while (element) {
                parents.push(element);
                element = element.parentNode;
            }
            if (!next || notify)
                return parents;
            new $mol_after_tick(() => {
                const element = this.focused()[0];
                if (element)
                    element.focus();
                else
                    $mol_dom_context.blur();
            });
            return parents;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view_selection, "focused", null);
    $.$mol_view_selection = $mol_view_selection;
})($ || ($ = {}));
//mol/view/selection/selection.ts
;
"use strict";
var $;
(function ($) {
    function $mol_maybe(value) {
        return (value == null) ? [] : [value];
    }
    $.$mol_maybe = $mol_maybe;
})($ || ($ = {}));
//mol/maybe/maybe.ts
;
"use strict";
var $;
(function ($) {
    if ($mol_dom_context.document) {
        $mol_dom_context.document.documentElement.addEventListener('focus', (event) => {
            $mol_view_selection.focused($mol_maybe($mol_dom_context.document.activeElement), 'notify');
        }, true);
    }
})($ || ($ = {}));
//mol/view/selection/selection.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_wrapper extends $mol_object2 {
        static wrap;
        static run(task) {
            return this.func(task)();
        }
        static func(func) {
            return this.wrap(func);
        }
        static get class() {
            return (Class) => {
                const construct = (target, args) => new Class(...args);
                const handler = {
                    construct: this.func(construct)
                };
                handler[Symbol.toStringTag] = Class.name + '#';
                return new Proxy(Class, handler);
            };
        }
        static get method() {
            return (obj, name, descr) => {
                descr.value = this.func(descr.value);
                return descr;
            };
        }
        static get field() {
            return (obj, name, descr) => {
                descr.get = descr.set = this.func(descr.get);
                return descr;
            };
        }
    }
    $.$mol_wrapper = $mol_wrapper;
})($ || ($ = {}));
//mol/wrapper/wrapper.ts
;
"use strict";
var $;
(function ($) {
    class $mol_memo extends $mol_wrapper {
        static wrap(task) {
            const store = new WeakMap();
            return function (next) {
                if (next === undefined && store.has(this))
                    return store.get(this);
                const val = task.call(this, next) ?? next;
                store.set(this, val);
                return val;
            };
        }
    }
    $.$mol_memo = $mol_memo;
})($ || ($ = {}));
//mol/memo/memo.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_qname(name) {
        return name.replace(/\W/g, '').replace(/^(?=\d+)/, '_');
    }
    $.$mol_dom_qname = $mol_dom_qname;
})($ || ($ = {}));
//mol/dom/qname/qname.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_probe(task, def) {
        const warm = $mol_wire_fiber.warm;
        try {
            $mol_wire_fiber.warm = false;
            const res = task();
            if (res === undefined)
                return def;
            return res;
        }
        finally {
            $mol_wire_fiber.warm = warm;
        }
    }
    $.$mol_wire_probe = $mol_wire_probe;
})($ || ($ = {}));
//mol/wire/probe/probe.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_watch() {
        const atom = $mol_wire_auto();
        if (atom instanceof $mol_wire_atom) {
            atom.watch();
        }
        else {
            $mol_fail(new Error('Atom is required for watching'));
        }
    }
    $.$mol_wire_watch = $mol_wire_watch;
})($ || ($ = {}));
//mol/wire/watch/watch.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_solid() {
        const current = $mol_wire_auto();
        if (current.reap !== nothing) {
            current?.sub_on(sub, sub.data.length);
        }
        current.reap = nothing;
    }
    $.$mol_wire_solid = $mol_wire_solid;
    const nothing = () => { };
    const sub = new $mol_wire_pub_sub;
})($ || ($ = {}));
//mol/wire/solid/solid.ts
;
"use strict";
var $;
(function ($) {
    function $mol_const(value) {
        const getter = (() => value);
        getter['()'] = value;
        getter[Symbol.toStringTag] = value;
        return getter;
    }
    $.$mol_const = $mol_const;
})($ || ($ = {}));
//mol/const/const.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_attributes(el, attrs) {
        for (let name in attrs) {
            let val = attrs[name];
            if (val === null || val === false) {
                if (!el.hasAttribute(name))
                    continue;
                el.removeAttribute(name);
            }
            else {
                const str = String(val);
                if (el.getAttribute(name) === str)
                    continue;
                el.setAttribute(name, str);
            }
        }
    }
    $.$mol_dom_render_attributes = $mol_dom_render_attributes;
})($ || ($ = {}));
//mol/dom/render/attributes/attributes.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_async(obj) {
        let fiber;
        const temp = $mol_wire_task.getter(obj);
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                let fiber;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_async(...args) {
                    fiber?.destructor();
                    fiber = temp(obj, args);
                    return fiber.async();
                };
            },
            apply(obj, self, args) {
                fiber?.destructor();
                fiber = temp(self, args);
                return fiber.async();
            },
        });
    }
    $.$mol_wire_async = $mol_wire_async;
})($ || ($ = {}));
//mol/wire/async/async.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_events(el, events, passive = false) {
        for (let name in events) {
            el.addEventListener(name, events[name], { passive });
        }
    }
    $.$mol_dom_render_events = $mol_dom_render_events;
})($ || ($ = {}));
//mol/dom/render/events/events.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_styles(el, styles) {
        for (let name in styles) {
            let val = styles[name];
            const style = el.style;
            const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
            if (typeof val === 'number') {
                style.setProperty(kebab(name), `${val}px`);
            }
            else {
                style.setProperty(kebab(name), val);
            }
        }
    }
    $.$mol_dom_render_styles = $mol_dom_render_styles;
})($ || ($ = {}));
//mol/dom/render/styles/styles.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));
//mol/dom/render/children/children.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_fields(el, fields) {
        for (let key in fields) {
            const val = fields[key];
            if (val === undefined)
                continue;
            el[key] = val;
        }
    }
    $.$mol_dom_render_fields = $mol_dom_render_fields;
})($ || ($ = {}));
//mol/dom/render/fields/fields.ts
;
"use strict";
//mol/type/keys/extract/extract.ts
;
"use strict";
//mol/type/pick/pick.ts
;
"use strict";
var $;
(function ($) {
    let all = [];
    let el = null;
    let timer = null;
    function $mol_style_attach(id, text) {
        all.push(`/* ${id} */\n\n${text}`);
        if (timer)
            return el;
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        el = doc.createElement('style');
        el.id = `$mol_style_attach`;
        doc.head.appendChild(el);
        timer = new $mol_after_tick(() => {
            el.innerHTML = '\n' + all.join('\n\n');
            all = [];
            el = null;
            timer = null;
        });
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));
//mol/style/attach/attach.ts
;
"use strict";
var $;
(function ($) {
    class $mol_decor {
        value;
        constructor(value) {
            this.value = value;
        }
        prefix() { return ''; }
        valueOf() { return this.value; }
        postfix() { return ''; }
        toString() {
            return `${this.prefix()}${this.valueOf()}${this.postfix()}`;
        }
    }
    $.$mol_decor = $mol_decor;
})($ || ($ = {}));
//mol/decor/decor.ts
;
"use strict";
var $;
(function ($) {
    class $mol_style_unit extends $mol_decor {
        literal;
        constructor(value, literal) {
            super(value);
            this.literal = literal;
        }
        postfix() {
            return this.literal;
        }
        static per(value) { return `${value}%`; }
        static px(value) { return `${value}px`; }
        static mm(value) { return `${value}mm`; }
        static cm(value) { return `${value}cm`; }
        static Q(value) { return `${value}Q`; }
        static in(value) { return `${value}in`; }
        static pc(value) { return `${value}pc`; }
        static pt(value) { return `${value}pt`; }
        static cap(value) { return `${value}cap`; }
        static ch(value) { return `${value}ch`; }
        static em(value) { return `${value}em`; }
        static rem(value) { return `${value}rem`; }
        static ex(value) { return `${value}ex`; }
        static ic(value) { return `${value}ic`; }
        static lh(value) { return `${value}lh`; }
        static rlh(value) { return `${value}rlh`; }
        static vh(value) { return `${value}vh`; }
        static vw(value) { return `${value}vw`; }
        static vi(value) { return `${value}vi`; }
        static vb(value) { return `${value}vb`; }
        static vmin(value) { return `${value}vmin`; }
        static vmax(value) { return `${value}vmax`; }
        static deg(value) { return `${value}deg`; }
        static rad(value) { return `${value}rad`; }
        static grad(value) { return `${value}grad`; }
        static turn(value) { return `${value}turn`; }
        static s(value) { return `${value}s`; }
        static ms(value) { return `${value}ms`; }
    }
    $.$mol_style_unit = $mol_style_unit;
})($ || ($ = {}));
//mol/style/unit/unit.ts
;
"use strict";
var $;
(function ($) {
    const { per } = $mol_style_unit;
    class $mol_style_func extends $mol_decor {
        name;
        constructor(name, value) {
            super(value);
            this.name = name;
        }
        prefix() { return this.name + '('; }
        postfix() { return ')'; }
        static calc(value) {
            return new $mol_style_func('calc', value);
        }
        static vary(name) {
            return new $mol_style_func('var', name);
        }
        static url(href) {
            return new $mol_style_func('url', JSON.stringify(href));
        }
        static hsla(hue, saturation, lightness, alpha) {
            return new $mol_style_func('hsla', [hue, per(saturation), per(lightness), alpha]);
        }
        static clamp(min, mid, max) {
            return new $mol_style_func('clamp', [min, mid, max]);
        }
        static rgba(red, green, blue, alpha) {
            return new $mol_style_func('rgba', [red, green, blue, alpha]);
        }
        static scale(zoom) {
            return new $mol_style_func('scale', [zoom]);
        }
        static cubic_bezier(x1, y1, x2, y2) {
            return new $mol_style_func('cubic-bezier', [x1, y1, x2, y2]);
        }
    }
    $.$mol_style_func = $mol_style_func;
})($ || ($ = {}));
//mol/style/func/func.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_theme = {
        back: vary('--mol_theme_back'),
        hover: vary('--mol_theme_hover'),
        card: vary('--mol_theme_card'),
        current: vary('--mol_theme_current'),
        special: vary('--mol_theme_special'),
        text: vary('--mol_theme_text'),
        control: vary('--mol_theme_control'),
        shade: vary('--mol_theme_shade'),
        line: vary('--mol_theme_line'),
        focus: vary('--mol_theme_focus'),
        field: vary('--mol_theme_field'),
        image: vary('--mol_theme_image'),
    };
})($ || ($ = {}));
//mol/theme/theme.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/theme/theme.css", ":root {\n\t--mol_theme_hue: 210deg;\n\t--mol_theme_luma: -1;\n\t--mol_theme_satur: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme] {\n\tcolor: var(--mol_theme_text);\n\tfill: var(--mol_theme_text);\n}\n:where([mol_theme]) {\n\tbackground-color: var(--mol_theme_back);\n}\n\t\n:root, [mol_theme] {\n\t--mol_theme_back: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 20% ), calc( 55% + 45% * var(--mol_theme_luma) ) );\n\t--mol_theme_text: hsl( var(--mol_theme_hue), 0%, calc( 40% - 40% * var(--mol_theme_luma) ) );\n\t--mol_theme_field: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 54% + 46% * var(--mol_theme_luma) ), .25 );\n\t\n\t--mol_theme_card: hsl( var(--mol_theme_hue), calc( var(--mol_theme_satur) * 50% ), calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 0%, 50%, .1 );\n\t--mol_theme_line: hsl( var(--mol_theme_hue), 0%, 50%, .2 );\n\t--mol_theme_shade: hsl( var(--mol_theme_hue), 0%, 50%, 1 );\n\t\n\t--mol_theme_control: hsl( var(--mol_theme_hue), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_current: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_special: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 50% - 10% * var(--mol_theme_luma) ) );\n\t--mol_theme_focus: hsl( calc( var(--mol_theme_hue) + 180deg ), 100%, calc( 55% - 10% * var(--mol_theme_luma) ) );\n\t\n}\n\n[mol_theme=\"$mol_theme_light\"] {\n\t--mol_theme_luma: 1;\n\t--mol_theme_image: none;\n}\n\n[mol_theme=\"$mol_theme_dark\"] {\n\t--mol_theme_luma: -1;\n\t--mol_theme_image: invert(1) hue-rotate( 180deg );\n}\n\n[mol_theme=\"$mol_theme_base\"] {\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( var(--mol_theme_hue), 50%, 40% );\n\t--mol_theme_hover: hsl( var(--mol_theme_hue), 60%, 30% );\n\t--mol_theme_current: hsl( var(--mol_theme_hue), 100%, 20% );\n}\n\n[mol_theme=\"$mol_theme_current\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) - 90deg ), 50%, calc( 50% + 30% * var(--mol_theme_luma) ) );\n}\n\n[mol_theme=\"$mol_theme_special\"] {\n\t--mol_theme_card: hsl( calc( var(--mol_theme_hue) + 90deg ), 50%, calc( 55% + 35% * var(--mol_theme_luma) ), .25 );\n}\n\n[mol_theme=\"$mol_theme_accent\"] {\n\tbackground-color: var(--mol_theme_back);\n\t--mol_theme_luma: -2;\n\t--mol_theme_back: hsl( calc( var(--mol_theme_hue) + 180deg ), 90%, 50% );\n\t--mol_theme_hover: hsl( calc( var(--mol_theme_hue) + 180deg ), 80%, 35% );\n}\n\n[mol_theme=\"$mol_theme_accent\"] [mol_theme=\"$mol_theme_accent\"] {\n\t--mol_theme_back: black;\n}\n");
})($ || ($ = {}));
//mol/theme/-css/theme.css.ts
;
"use strict";
var $;
(function ($) {
    const { vary } = $mol_style_func;
    $.$mol_gap = {
        block: vary('--mol_gap_block'),
        text: vary('--mol_gap_text'),
        round: vary('--mol_gap_round'),
        space: vary('--mol_gap_space'),
        blur: vary('--mol_gap_blur'),
    };
})($ || ($ = {}));
//mol/gap/gap.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/gap/gap.css", ":root {\n\t--mol_gap_block: .75rem;\n\t--mol_gap_text: .5rem .75rem;\n\t--mol_gap_round: .25rem;\n\t--mol_gap_space: .25rem;\n\t--mol_gap_blur: .5rem;\n}\n");
})($ || ($ = {}));
//mol/gap/-css/gap.css.ts
;
"use strict";
var $;
(function ($) {
    function $mol_view_visible_width() {
        return $mol_window.size().width;
    }
    $.$mol_view_visible_width = $mol_view_visible_width;
    function $mol_view_visible_height() {
        return $mol_window.size().height;
    }
    $.$mol_view_visible_height = $mol_view_visible_height;
    function $mol_view_state_key(suffix) {
        return suffix;
    }
    $.$mol_view_state_key = $mol_view_state_key;
    const error_showed = new WeakMap();
    class $mol_view extends $mol_object {
        static Root(id) {
            return new this;
        }
        autorun() {
            try {
                this.dom_tree();
                document.title = this.title();
            }
            catch (error) {
                $mol_fail_log(error);
            }
        }
        static autobind() {
            const nodes = $mol_dom_context.document.querySelectorAll('[mol_view_root]:not([mol_view_root=""])');
            for (let i = nodes.length - 1; i >= 0; --i) {
                const name = nodes.item(i).getAttribute('mol_view_root');
                const View = $[name];
                if (!View) {
                    console.error(`Can not attach view. Class not found: ${name}`);
                    continue;
                }
                const view = View.Root(i);
                view.dom_node(nodes.item(i));
                view.autorun();
            }
        }
        title() {
            return this.toString().match(/.*\.(\w+)/)?.[1] ?? this.toString();
        }
        focused(next) {
            let node = this.dom_node();
            const value = $mol_view_selection.focused(next === undefined ? undefined : (next ? [node] : []));
            return value.indexOf(node) !== -1;
        }
        state_key(suffix = '') {
            return this.$.$mol_view_state_key(suffix);
        }
        dom_name() {
            return $mol_dom_qname(this.constructor.toString()) || 'div';
        }
        dom_name_space() { return 'http://www.w3.org/1999/xhtml'; }
        sub() {
            return [];
        }
        sub_visible() {
            return this.sub();
        }
        minimal_width() {
            let min = 0;
            try {
                const sub = this.sub();
                if (!sub)
                    return 0;
                sub.forEach(view => {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_width());
                    }
                });
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        maximal_width() {
            return this.minimal_width();
        }
        minimal_height() {
            let min = 0;
            try {
                for (const view of this.sub() ?? []) {
                    if (view instanceof $mol_view) {
                        min = Math.max(min, view.minimal_height());
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                return 24;
            }
            return min;
        }
        static watchers = new Set();
        view_rect() {
            if ($mol_wire_probe(() => this.view_rect()) === undefined) {
                $mol_wire_watch();
                return null;
            }
            else {
                const { width, height, left, right, top, bottom } = this.dom_node().getBoundingClientRect();
                return { width, height, left, right, top, bottom };
            }
        }
        dom_id() {
            return this.toString();
        }
        dom_node(next) {
            $mol_wire_solid();
            const node = next || $mol_dom_context.document.createElementNS(this.dom_name_space(), this.dom_name());
            const id = this.dom_id();
            node.setAttribute('id', id);
            node.toString = $mol_const('<#' + id + '>');
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            $mol_dom_render_events(node, events);
            return node;
        }
        dom_final() {
            this.render();
            const sub = this.sub_visible();
            if (!sub)
                return;
            for (const el of sub) {
                if (el && typeof el === 'object' && 'dom_final' in el) {
                    el['dom_final']();
                }
            }
            return this.dom_node();
        }
        dom_tree(next) {
            const node = this.dom_node(next);
            render: try {
                $mol_dom_render_attributes(node, { mol_view_error: null });
                try {
                    this.render();
                }
                finally {
                    for (let plugin of this.plugins()) {
                        if (plugin instanceof $mol_plugin) {
                            plugin.dom_tree();
                        }
                    }
                }
            }
            catch (error) {
                $mol_fail_log(error);
                $mol_dom_render_attributes(node, { mol_view_error: error.name || error.constructor.name });
                if ($mol_promise_like(error))
                    break render;
                if ((error_showed.get(error) ?? this) !== this)
                    break render;
                try {
                    const message = error.message || error;
                    node.innerText = message.replace(/^|$/mg, '\xA0\xA0');
                }
                catch { }
                error_showed.set(error, this);
            }
            try {
                this.auto();
            }
            catch (error) {
                $mol_fail_log(error);
            }
            return node;
        }
        dom_node_actual() {
            const node = this.dom_node();
            $mol_dom_render_styles(node, this.style_size());
            const attr = this.attr();
            const style = this.style();
            const fields = this.field();
            $mol_dom_render_attributes(node, attr);
            $mol_dom_render_styles(node, style);
            return node;
        }
        auto() {
            return null;
        }
        render() {
            const node = this.dom_node_actual();
            const sub = this.sub_visible();
            if (!sub)
                return;
            const nodes = sub.map(child => {
                if (child == null)
                    return null;
                return (child instanceof $mol_view)
                    ? child.dom_node()
                    : child instanceof $mol_dom_context.Node
                        ? child
                        : String(child);
            });
            $mol_dom_render_children(node, nodes);
            for (const el of sub)
                if (el && typeof el === 'object' && 'dom_tree' in el)
                    el['dom_tree']();
            $mol_dom_render_fields(node, this.field());
        }
        static view_classes() {
            const proto = this.prototype;
            let current = proto;
            const classes = [];
            while (current) {
                if (current.constructor.name !== classes.at(-1)?.name) {
                    classes.push(current.constructor);
                }
                if (!(current instanceof $mol_view))
                    break;
                current = Object.getPrototypeOf(current);
            }
            return classes;
        }
        static _view_names;
        static view_names(suffix) {
            let cache = Reflect.getOwnPropertyDescriptor(this, '_view_names')?.value;
            if (!cache)
                cache = this._view_names = new Map;
            const cached = cache.get(suffix);
            if (cached)
                return cached;
            const names = [];
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            for (const Class of this.view_classes()) {
                if (suffix in Class.prototype)
                    names.push(this.$.$mol_func_name(Class) + suffix2);
                else
                    break;
            }
            cache.set(suffix, names);
            return names;
        }
        view_names_owned() {
            const names = [];
            let owner = $mol_owning_get(this);
            if (!(owner?.host instanceof $mol_view))
                return names;
            const suffix = owner.task.name.trim();
            const suffix2 = '_' + suffix[0].toLowerCase() + suffix.substring(1);
            names.push(...owner.host.constructor.view_names(suffix));
            for (let prefix of owner.host.view_names_owned()) {
                names.push(prefix + suffix2);
            }
            return names;
        }
        view_names() {
            const names = new Set();
            for (let name of this.view_names_owned())
                names.add(name);
            for (let Class of this.constructor.view_classes()) {
                const name = this.$.$mol_func_name(Class);
                if (name)
                    names.add(name);
            }
            return names;
        }
        attr_static() {
            let attrs = {};
            for (let name of this.view_names())
                attrs[name.replace(/\$/g, '').replace(/^(?=\d)/, '_').toLowerCase()] = '';
            return attrs;
        }
        attr() {
            return {};
        }
        style_size() {
            return {
                minHeight: this.minimal_height(),
                minWidth: this.minimal_width(),
            };
        }
        style() {
            return {};
        }
        field() {
            return {};
        }
        event() {
            return {};
        }
        plugins() {
            return [];
        }
        [$mol_dev_format_head]() {
            return $mol_dev_format_span({}, $mol_dev_format_native(this));
        }
        *view_find(check, path = []) {
            if (check(this))
                return yield [...path, this];
            try {
                for (const item of this.sub()) {
                    if (item instanceof $mol_view) {
                        yield* item.view_find(check, [...path, this]);
                    }
                }
            }
            catch (error) {
                if ($mol_promise_like(error))
                    $mol_fail_hidden(error);
                $mol_fail_log(error);
            }
        }
        force_render(path) {
            const kids = this.sub();
            const index = kids.findIndex(item => {
                if (item instanceof $mol_view) {
                    return path.has(item);
                }
                else {
                    return false;
                }
            });
            if (index >= 0) {
                kids[index].force_render(path);
            }
        }
        ensure_visible(view, align = "start") {
            const path = this.view_find(v => v === view).next().value;
            this.force_render(new Set(path));
            this.dom_final();
            view.dom_node().scrollIntoView({ block: align });
        }
        bring() {
            const win = this.$.$mol_dom_context;
            if (win.parent !== win.self && !win.document.hasFocus())
                return;
            new this.$.$mol_after_frame(() => {
                this.dom_node().scrollIntoView({ block: 'start', inline: 'end' });
                this.focused(true);
            });
        }
    }
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "autorun", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "title", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "focused", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "dom_name", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_width", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "minimal_height", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "view_rect", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_final", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_tree", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "dom_node_actual", null);
    __decorate([
        $mol_mem
    ], $mol_view.prototype, "render", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names_owned", null);
    __decorate([
        $mol_memo.method
    ], $mol_view.prototype, "view_names", null);
    __decorate([
        $mol_mem_key
    ], $mol_view, "Root", null);
    __decorate([
        $mol_mem
    ], $mol_view, "autobind", null);
    __decorate([
        $mol_memo.method
    ], $mol_view, "view_classes", null);
    $.$mol_view = $mol_view;
})($ || ($ = {}));
//mol/view/view/view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/view/view/view.css", "[mol_view] {\n\ttransition-property: height, width, min-height, min-width, max-width, max-height, transform;\n\ttransition-duration: .2s;\n\ttransition-timing-function: ease-out;\n\t-webkit-appearance: none;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-shrink: 0;\n\tcontain: style;\n\tscrollbar-color: var(--mol_theme_line) transparent;\n\tscrollbar-width: thin;\n}\t\n\n[mol_view]::selection {\n\tbackground: var(--mol_theme_line);\n}\t\n\n[mol_view]::-webkit-scrollbar {\n\twidth: .25rem;\n\theight: .25rem;\n}\n\n[mol_view]::-webkit-scrollbar-corner {\n\tbackground-color: var(--mol_theme_line);\n}\n\n[mol_view]::-webkit-scrollbar-track {\n\tbackground-color: transparent;\n}\n\n[mol_view]::-webkit-scrollbar-thumb {\n\tbackground-color: var(--mol_theme_line);\n\tborder-radius: var(--mol_gap_round);\n}\n\n[mol_view] > * {\n\tword-break: inherit;\n}\n\n[mol_view_root] {\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tfont-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n\tbackground: var(--mol_theme_back);\n\tcolor: var(--mol_theme_text);\n\tcontain: unset; /** Fixes bg ignoring when applied to body on Chrome */\n\ttab-size: 4;\n}\n\n@media print {\n\t[mol_view_root] {\n\t\theight: auto;\n\t}\n}\n\n[mol_view][mol_view_error]:not([mol_view_error=\"Promise\"]) {\n\tbackground-image: repeating-linear-gradient(\n\t\t-45deg,\n\t\t#f92323,\n\t\t#f92323 .5rem,\n\t\t#ff3d3d .5rem,\n\t\t#ff3d3d 1.5rem\n\t);\n\tcolor: black;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n@keyframes mol_view_wait {\n\tfrom {\n\t\topacity: .25;\n\t}\n\t20% {\n\t\topacity: .75;\n\t}\n\tto {\n\t\topacity: .25;\n\t}\n}\n\n:where([mol_view][mol_view_error=\"Promise\"]) {\n\tbackground: var(--mol_theme_hover);\n}\n\n[mol_view][mol_view_error=\"Promise\"] {\n\tanimation: mol_view_wait 1s steps( 20, end ) infinite;\n}\n");
})($ || ($ = {}));
//mol/view/view/-css/view.css.ts
;
"use strict";
var $;
(function ($) {
    $mol_dom_context.document?.addEventListener('DOMContentLoaded', () => $mol_view.autobind(), { once: true });
})($ || ($ = {}));
//mol/view/view/view.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_scroll extends $mol_view {
        scroll_top(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        scroll_left(val) {
            if (val !== undefined)
                return val;
            return 0;
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        event() {
            return {
                ...super.event(),
                scroll: (event) => this.event_scroll(event)
            };
        }
        tabindex() {
            return -1;
        }
        event_scroll(event) {
            if (event !== undefined)
                return event;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_top", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "scroll_left", null);
    __decorate([
        $mol_mem
    ], $mol_scroll.prototype, "event_scroll", null);
    $.$mol_scroll = $mol_scroll;
})($ || ($ = {}));
//mol/scroll/-view.tree/scroll.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_dom_listener extends $mol_object {
        _node;
        _event;
        _handler;
        _config;
        constructor(_node, _event, _handler, _config = { passive: true }) {
            super();
            this._node = _node;
            this._event = _event;
            this._handler = _handler;
            this._config = _config;
            this._node.addEventListener(this._event, this._handler, this._config);
        }
        destructor() {
            this._node.removeEventListener(this._event, this._handler, this._config);
            super.destructor();
        }
    }
    $.$mol_dom_listener = $mol_dom_listener;
})($ || ($ = {}));
//mol/dom/listener/listener.ts
;
"use strict";
var $;
(function ($) {
    class $mol_print extends $mol_object {
        static before() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'beforeprint', () => {
                this.active(true);
            });
        }
        static after() {
            return new $mol_dom_listener(this.$.$mol_dom_context, 'afterprint', () => {
                this.active(false);
            });
        }
        static active(next) {
            this.before();
            this.after();
            return next || false;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_print, "before", null);
    __decorate([
        $mol_mem
    ], $mol_print, "after", null);
    __decorate([
        $mol_mem
    ], $mol_print, "active", null);
    $.$mol_print = $mol_print;
})($ || ($ = {}));
//mol/print/print.ts
;
"use strict";
//mol/type/override/override.ts
;
"use strict";
//mol/style/properties/properties.ts
;
"use strict";
//mol/style/pseudo/class.ts
;
"use strict";
//mol/style/pseudo/element.ts
;
"use strict";
//mol/type/error/error.ts
;
"use strict";
//mol/style/guard/guard.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_sheet(Component, config0) {
        let rules = [];
        const block = $mol_dom_qname($mol_ambient({}).$mol_func_name(Component));
        const kebab = (name) => name.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
        const make_class = (prefix, path, config) => {
            const props = [];
            const selector = (prefix, path) => {
                if (path.length === 0)
                    return prefix || `[${block}]`;
                let res = `[${block}_${path.join('_')}]`;
                if (prefix)
                    res = prefix + ' :where(' + res + ')';
                return res;
            };
            for (const key of Object.keys(config).reverse()) {
                if (/^(--)?[a-z]/.test(key)) {
                    const addProp = (keys, val) => {
                        if (Array.isArray(val)) {
                            if (val[0] && [Array, Object].includes(val[0].constructor)) {
                                val = val.map(v => {
                                    return Object.entries(v).map(([n, a]) => {
                                        if (a === true)
                                            return kebab(n);
                                        if (a === false)
                                            return null;
                                        return String(a);
                                    }).filter(Boolean).join(' ');
                                }).join(',');
                            }
                            else {
                                val = val.join(' ');
                            }
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                        else if (val.constructor === Object) {
                            for (let suffix in val) {
                                addProp([...keys, kebab(suffix)], val[suffix]);
                            }
                        }
                        else {
                            props.push(`\t${keys.join('-')}: ${val};\n`);
                        }
                    };
                    addProp([kebab(key)], config[key]);
                }
                else if (/^[A-Z]/.test(key)) {
                    make_class(prefix, [...path, key.toLowerCase()], config[key]);
                }
                else if (key[0] === '$') {
                    make_class(selector(prefix, path) + ' :where([' + $mol_dom_qname(key) + '])', [], config[key]);
                }
                else if (key === '>') {
                    const types = config[key];
                    for (let type in types) {
                        make_class(selector(prefix, path) + ' > :where([' + $mol_dom_qname(type) + '])', [], types[type]);
                    }
                }
                else if (key === '@') {
                    const attrs = config[key];
                    for (let name in attrs) {
                        for (let val in attrs[name]) {
                            make_class(selector(prefix, path) + ':where([' + name + '=' + JSON.stringify(val) + '])', [], attrs[name][val]);
                        }
                    }
                }
                else if (key === '@media') {
                    const media = config[key];
                    for (let query in media) {
                        rules.push('}\n');
                        make_class(prefix, path, media[query]);
                        rules.push(`${key} ${query} {\n`);
                    }
                }
                else {
                    make_class(selector(prefix, path) + key, [], config[key]);
                }
            }
            if (props.length) {
                rules.push(`${selector(prefix, path)} {\n${props.reverse().join('')}}\n`);
            }
        };
        make_class('', [], config0);
        return rules.reverse().join('');
    }
    $.$mol_style_sheet = $mol_style_sheet;
})($ || ($ = {}));
//mol/style/sheet/sheet.ts
;
"use strict";
var $;
(function ($) {
    function $mol_style_define(Component, config) {
        return $mol_style_attach(Component.name, $mol_style_sheet(Component, config));
    }
    $.$mol_style_define = $mol_style_define;
})($ || ($ = {}));
//mol/style/define/define.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_scroll extends $.$mol_scroll {
            scroll_top(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollTop = next;
                return el.scrollTop;
            }
            scroll_left(next, cache) {
                const el = this.dom_node();
                if (next !== undefined && !cache)
                    el.scrollLeft = next;
                return el.scrollLeft;
            }
            event_scroll(next) {
                const el = this.dom_node();
                this.scroll_left(el.scrollLeft, 'cache');
                this.scroll_top(el.scrollTop, 'cache');
            }
            minimal_height() {
                return this.$.$mol_print.active() ? null : 0;
            }
            minimal_width() {
                return this.$.$mol_print.active() ? null : 0;
            }
        }
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_top", null);
        __decorate([
            $mol_mem
        ], $mol_scroll.prototype, "scroll_left", null);
        $$.$mol_scroll = $mol_scroll;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem, px } = $mol_style_unit;
        $mol_style_define($mol_scroll, {
            overflow: 'auto',
        });
        $mol_style_define($mol_scroll, {
            display: 'flex',
            overflow: 'overlay',
            flex: {
                direction: 'column',
                grow: 1,
                shrink: 1,
            },
            outline: 'none',
            alignSelf: 'stretch',
            boxSizing: 'border-box',
            willChange: 'scroll-position',
            scroll: {
                padding: [rem(.75), 0],
            },
            maxHeight: per(100),
            maxWidth: per(100),
            webkitOverflowScrolling: 'touch',
            contain: 'content',
            '>': {
                $mol_view: {
                    transform: 'translateZ(0)',
                },
            },
            '::before': {
                display: 'none',
            },
            '::after': {
                display: 'none',
            },
            '::-webkit-scrollbar': {
                width: rem(.25),
                height: rem(.25),
            },
            ':hover': {
                '::-webkit-scrollbar': {
                    width: rem(.5),
                    height: rem(.5),
                },
            },
            '@media': {
                'print': {
                    overflow: 'visible',
                    contain: 'none',
                    maxHeight: 'unset',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/scroll/scroll.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_page extends $mol_view {
        dom_name() {
            return "article";
        }
        field() {
            return {
                ...super.field(),
                tabIndex: this.tabindex()
            };
        }
        sub() {
            return [
                this.Head(),
                this.Body(),
                this.Foot()
            ];
        }
        tabindex() {
            return -1;
        }
        Logo() {
            return null;
        }
        title_content() {
            return [
                this.Logo(),
                this.title()
            ];
        }
        Title() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "h1";
            obj.sub = () => this.title_content();
            return obj;
        }
        tools() {
            return [];
        }
        Tools() {
            const obj = new this.$.$mol_view();
            obj.sub = () => this.tools();
            return obj;
        }
        head() {
            return [
                this.Title(),
                this.Tools()
            ];
        }
        Head() {
            const obj = new this.$.$mol_view();
            obj.minimal_height = () => 64;
            obj.dom_name = () => "header";
            obj.sub = () => this.head();
            return obj;
        }
        body() {
            return [];
        }
        body_scroll_top(val) {
            return this.Body().scroll_top(val);
        }
        Body() {
            const obj = new this.$.$mol_scroll();
            obj.sub = () => this.body();
            return obj;
        }
        foot() {
            return [];
        }
        Foot() {
            const obj = new this.$.$mol_view();
            obj.dom_name = () => "footer";
            obj.sub = () => this.foot();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Title", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Tools", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Head", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Body", null);
    __decorate([
        $mol_mem
    ], $mol_page.prototype, "Foot", null);
    $.$mol_page = $mol_page;
})($ || ($ = {}));
//mol/page/-view.tree/page.view.tree.ts
;
"use strict";
var $;
(function ($) {
    class $mol_plugin extends $mol_view {
        dom_node(next) {
            const node = next || $mol_owning_get(this).host.dom_node();
            $mol_dom_render_attributes(node, this.attr_static());
            const events = $mol_wire_async(this.event());
            for (let event_name in events) {
                node.addEventListener(event_name, events[event_name], { passive: false });
            }
            return node;
        }
        attr_static() {
            return {};
        }
        event() {
            return {};
        }
        render() {
            this.dom_node_actual();
        }
    }
    __decorate([
        $mol_mem
    ], $mol_plugin.prototype, "dom_node", null);
    $.$mol_plugin = $mol_plugin;
})($ || ($ = {}));
//mol/plugin/plugin.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        const { per, rem } = $mol_style_unit;
        const { calc } = $mol_style_func;
        $mol_style_define($mol_page, {
            display: 'flex',
            flex: {
                basis: 'auto',
                direction: 'column',
            },
            position: 'relative',
            alignSelf: 'stretch',
            maxWidth: per(100),
            maxHeight: per(100),
            boxSizing: 'border-box',
            color: $mol_theme.text,
            ':focus': {
                outline: 'none',
            },
            Head: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                flex: 'none',
                position: 'relative',
                margin: 0,
                minHeight: rem(4),
                padding: $mol_gap.block,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 2,
            },
            Title: {
                minHeight: rem(2),
                margin: 0,
                padding: $mol_gap.text,
                gap: $mol_gap.text,
                wordBreak: 'normal',
                textShadow: '0 0',
                font: {
                    size: 'inherit',
                    weight: 'normal',
                },
                flex: {
                    grow: 1,
                    shrink: 1,
                    basis: 'auto',
                },
            },
            Tools: {
                flex: {
                    basis: 'auto',
                    grow: 1000,
                    shrink: 1,
                },
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
            },
            Body: {
                flex: {
                    grow: 1000,
                    shrink: 1,
                    basis: per(100),
                },
                padding: $mol_gap.block,
            },
            Foot: {
                display: 'flex',
                justifyContent: 'space-between',
                flex: 'none',
                margin: 0,
                background: {
                    color: $mol_theme.card,
                },
                border: {
                    radius: $mol_gap.round,
                },
                boxShadow: `0 -0.5rem 0.5rem -0.5rem hsla(0,0%,0%,.25)`,
                zIndex: 1,
                padding: $mol_gap.block,
                ':empty': {
                    display: 'none',
                },
            },
        });
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/page/page.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_image extends $mol_view {
        dom_name() {
            return "img";
        }
        field() {
            return {
                ...super.field(),
                src: this.uri(),
                alt: this.title(),
                loading: this.loading(),
                decoding: this.decoding(),
                crossOrigin: this.cors()
            };
        }
        attr() {
            return {
                ...super.attr(),
                width: this.natural_width(),
                height: this.natural_height()
            };
        }
        event() {
            return {
                load: (next) => this.load(next)
            };
        }
        minimal_width() {
            return 16;
        }
        minimal_height() {
            return 16;
        }
        uri() {
            return "";
        }
        loading() {
            return "eager";
        }
        decoding() {
            return "async";
        }
        cors() {
            return null;
        }
        natural_width(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        natural_height(next) {
            if (next !== undefined)
                return next;
            return 0;
        }
        load(next) {
            if (next !== undefined)
                return next;
            return null;
        }
    }
    __decorate([
        $mol_mem
    ], $mol_image.prototype, "natural_width", null);
    __decorate([
        $mol_mem
    ], $mol_image.prototype, "natural_height", null);
    __decorate([
        $mol_mem
    ], $mol_image.prototype, "load", null);
    $.$mol_image = $mol_image;
})($ || ($ = {}));
//mol/image/-view.tree/image.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_image extends $.$mol_image {
            natural_width(next) {
                const dom = this.dom_node();
                if (dom.naturalWidth)
                    return dom.naturalWidth;
                const found = this.uri().match(/\bwidth=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            natural_height(next) {
                const dom = this.dom_node();
                if (dom.naturalHeight)
                    return dom.naturalHeight;
                const found = this.uri().match(/\bheight=(\d+)/);
                return found ? Number(found[1]) : null;
            }
            load() {
                this.natural_width(null);
                this.natural_height(null);
            }
        }
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_width", null);
        __decorate([
            $mol_mem
        ], $mol_image.prototype, "natural_height", null);
        $$.$mol_image = $mol_image;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/image/image.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/image/image.view.css", "[mol_image] {\n\tborder-radius: var(--mol_gap_round);\n\toverflow: hidden;\n\tflex: 0 1 auto;\n\tmax-width: 100%;\n\tobject-fit: cover;\n\theight: fit-content;\n}\n");
})($ || ($ = {}));
//mol/image/-css/image.view.css.ts
;
"use strict";
var $;
(function ($) {
    class $mol_paragraph extends $mol_view {
        line_height() {
            return 24;
        }
        letter_width() {
            return 7;
        }
        width_limit() {
            return +Infinity;
        }
        row_width() {
            return 0;
        }
        sub() {
            return [
                this.title()
            ];
        }
    }
    $.$mol_paragraph = $mol_paragraph;
})($ || ($ = {}));
//mol/paragraph/-view.tree/paragraph.view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $mol_paragraph extends $.$mol_paragraph {
            maximal_width() {
                let width = 0;
                const letter = this.letter_width();
                for (const kid of this.sub()) {
                    if (!kid)
                        continue;
                    if (kid instanceof $mol_view) {
                        width += kid.maximal_width();
                    }
                    else if (typeof kid !== 'object') {
                        width += String(kid).length * letter;
                    }
                }
                return width;
            }
            width_limit() {
                return this.$.$mol_window.size().width;
            }
            minimal_width() {
                return this.letter_width();
            }
            row_width() {
                return Math.max(Math.min(this.width_limit(), this.maximal_width()), this.letter_width());
            }
            minimal_height() {
                return Math.max(1, Math.ceil(this.maximal_width() / this.row_width())) * this.line_height();
            }
        }
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "maximal_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "row_width", null);
        __decorate([
            $mol_mem
        ], $mol_paragraph.prototype, "minimal_height", null);
        $$.$mol_paragraph = $mol_paragraph;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//mol/paragraph/paragraph.view.ts
;
"use strict";
var $;
(function ($) {
    $mol_style_attach("mol/paragraph/paragraph.view.css", ":where([mol_paragraph]) {\n\tmargin: 0;\n\tmax-width: 100%;\n}\n");
})($ || ($ = {}));
//mol/paragraph/-css/paragraph.view.css.ts
;
"use strict";
var $;
(function ($) {
    $.$mol_action = $mol_wire_method;
})($ || ($ = {}));
//mol/action/action.ts
;
"use strict";
var $;
(function ($) {
    function $mol_wire_sync(obj) {
        return new Proxy(obj, {
            get(obj, field) {
                const val = obj[field];
                if (typeof val !== 'function')
                    return val;
                const temp = $mol_wire_task.getter(val);
                return function $mol_wire_sync(...args) {
                    const fiber = temp(obj, args);
                    return fiber.sync();
                };
            },
            apply(obj, self, args) {
                const temp = $mol_wire_task.getter(obj);
                const fiber = temp(self, args);
                return fiber.sync();
            },
        });
    }
    $.$mol_wire_sync = $mol_wire_sync;
})($ || ($ = {}));
//mol/wire/sync/sync.ts
;
"use strict";
var $;
(function ($) {
    function $mol_dom_parse(text, type = 'application/xhtml+xml') {
        const parser = new $mol_dom_context.DOMParser();
        const doc = parser.parseFromString(text, type);
        const error = doc.getElementsByTagName('parsererror');
        if (error.length)
            throw new Error(error[0].textContent);
        return doc;
    }
    $.$mol_dom_parse = $mol_dom_parse;
})($ || ($ = {}));
//mol/dom/parse/parse.ts
;
"use strict";
//node/node.ts
;
"use strict";
var $node = $node || {};
//node/node.web.ts
;
"use strict";
var $;
(function ($) {
    class $mol_fetch_response extends $mol_object2 {
        native;
        constructor(native) {
            super();
            this.native = native;
        }
        status() {
            const types = ['unknown', 'inform', 'success', 'redirect', 'wrong', 'failed'];
            return types[Math.floor(this.native.status / 100)];
        }
        code() {
            return this.native.status;
        }
        message() {
            return this.native.statusText || `HTTP Error ${this.code()}`;
        }
        headers() {
            return this.native.headers;
        }
        mime() {
            return this.headers().get('content-type');
        }
        stream() {
            return this.native.body;
        }
        text() {
            const buffer = this.buffer();
            const native = this.native;
            const mime = native.headers.get('content-type') || '';
            const [, charset] = /charset=(.*)/.exec(mime) || [, 'utf-8'];
            const decoder = new TextDecoder(charset);
            return decoder.decode(buffer);
        }
        json() {
            return $mol_wire_sync(this.native).json();
        }
        buffer() {
            return $mol_wire_sync(this.native).arrayBuffer();
        }
        xml() {
            return $mol_dom_parse(this.text(), 'application/xml');
        }
        xhtml() {
            return $mol_dom_parse(this.text(), 'application/xhtml+xml');
        }
        html() {
            return $mol_dom_parse(this.text(), 'text/html');
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch_response.prototype, "html", null);
    $.$mol_fetch_response = $mol_fetch_response;
    class $mol_fetch extends $mol_object2 {
        static request(input, init = {}) {
            const native = globalThis.fetch ?? $node['undici'].fetch;
            const controller = new AbortController();
            let done = false;
            const promise = native(input, {
                ...init,
                signal: controller.signal,
            }).finally(() => {
                done = true;
            });
            return Object.assign(promise, {
                destructor: () => {
                    if (!done && !controller.signal.aborted)
                        controller.abort();
                },
            });
        }
        static response(input, init) {
            return new $mol_fetch_response($mol_wire_sync(this).request(input, init));
        }
        static success(input, init) {
            const response = this.response(input, init);
            if (response.status() === 'success')
                return response;
            throw new Error(response.message());
        }
        static stream(input, init) {
            return this.success(input, init).stream();
        }
        static text(input, init) {
            return this.success(input, init).text();
        }
        static json(input, init) {
            return this.success(input, init).json();
        }
        static buffer(input, init) {
            return this.success(input, init).buffer();
        }
        static xml(input, init) {
            return this.success(input, init).xml();
        }
        static xhtml(input, init) {
            return this.success(input, init).xhtml();
        }
        static html(input, init) {
            return this.success(input, init).html();
        }
    }
    __decorate([
        $mol_action
    ], $mol_fetch, "response", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "success", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "stream", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "text", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "json", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "buffer", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "xhtml", null);
    __decorate([
        $mol_action
    ], $mol_fetch, "html", null);
    $.$mol_fetch = $mol_fetch;
})($ || ($ = {}));
//mol/fetch/fetch.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_base {
        static patterns = {};
        static formatter(pattern) {
            if (this.patterns[pattern])
                return this.patterns[pattern];
            var tokens = Object.keys(this.patterns)
                .sort()
                .reverse()
                .map((token) => token.replace(/([-+*.\[\]()\^])/g, '\\$1'));
            var lexer = RegExp('(.*?)(' + tokens.join('|') + '|$)', 'g');
            var funcs = [];
            pattern.replace(lexer, (str, text, token) => {
                if (text)
                    funcs.push(() => text);
                if (token)
                    funcs.push(this.patterns[token]);
                return str;
            });
            return this.patterns[pattern] = (arg) => {
                return funcs.reduce((res, func) => res + func(arg), '');
            };
        }
        toString(pattern) {
            const Base = this.constructor;
            const formatter = Base.formatter(pattern);
            return formatter(this);
        }
    }
    $.$mol_time_base = $mol_time_base;
})($ || ($ = {}));
//mol/time/base/base.ts
;
"use strict";
var $;
(function ($) {
    class $mol_time_duration extends $mol_time_base {
        constructor(config = 0) {
            super();
            if (typeof config === 'number') {
                this.second = config / 1000;
                return;
            }
            if (typeof config === 'string') {
                if (config === 'Z') {
                    this.hour = 0;
                    this.minute = 0;
                    return;
                }
                duration: {
                    const parser = /^P(?:([+-]?\d+(?:\.\d+)?)Y)?(?:([+-]?\d+(?:\.\d+)?)M)?(?:([+-]?\d+(?:\.\d+)?)D)?(?:T(?:([+-]?\d+(?:\.\d+)?)h)?(?:([+-]?\d+(?:\.\d+)?)m)?(?:([+-]?\d+(?:\.\d+)?)s)?)?$/i;
                    const found = parser.exec(config);
                    if (!found)
                        break duration;
                    if (found[1])
                        this.year = Number(found[1]);
                    if (found[2])
                        this.month = Number(found[2]);
                    if (found[3])
                        this.day = Number(found[3]);
                    if (found[4])
                        this.hour = Number(found[4]);
                    if (found[5])
                        this.minute = Number(found[5]);
                    if (found[6])
                        this.second = Number(found[6]);
                    return;
                }
                offset: {
                    var parser = /^[+-](\d\d)(?::?(\d\d))?$/i;
                    var found = parser.exec(config);
                    if (!found)
                        break offset;
                    if (found[1])
                        this.hour = Number(found[1]);
                    if (found[2])
                        this.minute = Number(found[2]);
                    return;
                }
                throw new Error(`Can not parse time duration (${config})`);
            }
            this.year = config.year || 0;
            this.month = config.month || 0;
            this.day = config.day || 0;
            this.hour = config.hour || 0;
            this.minute = config.minute || 0;
            this.second = config.second || 0;
        }
        year = 0;
        month = 0;
        day = 0;
        hour = 0;
        minute = 0;
        second = 0;
        summ(config) {
            const duration = new $mol_time_duration(config);
            return new $mol_time_duration({
                year: this.year + duration.year,
                month: this.month + duration.month,
                day: this.day + duration.day,
                hour: this.hour + duration.hour,
                minute: this.minute + duration.minute,
                second: this.second + duration.second,
            });
        }
        mult(numb) {
            return new $mol_time_duration({
                year: this.year && this.year * numb,
                month: this.month && this.month * numb,
                day: this.day && this.day * numb,
                hour: this.hour && this.hour * numb,
                minute: this.minute && this.minute * numb,
                second: this.second && this.second * numb,
            });
        }
        count(config) {
            const duration = new $mol_time_duration(config);
            return this.valueOf() / duration.valueOf();
        }
        valueOf() {
            var day = this.year * 365 + this.month * 30.4 + this.day;
            var second = ((day * 24 + this.hour) * 60 + this.minute) * 60 + this.second;
            return second * 1000;
        }
        toJSON() { return this.toString(); }
        toString(pattern = 'P#Y#M#DT#h#m#s') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            '#Y': (duration) => {
                if (!duration.year)
                    return '';
                return duration.year + 'Y';
            },
            '#M': (duration) => {
                if (!duration.month)
                    return '';
                return duration.month + 'M';
            },
            '#D': (duration) => {
                if (!duration.day)
                    return '';
                return duration.day + 'D';
            },
            '#h': (duration) => {
                if (!duration.hour)
                    return '';
                return duration.hour + 'H';
            },
            '#m': (duration) => {
                if (!duration.minute)
                    return '';
                return duration.minute + 'M';
            },
            '#s': (duration) => {
                if (!duration.second)
                    return '';
                return duration.second + 'S';
            },
        };
    }
    $.$mol_time_duration = $mol_time_duration;
})($ || ($ = {}));
//mol/time/duration/duration.ts
;
"use strict";
var $;
(function ($) {
    let $mol_time_moment_weekdays;
    (function ($mol_time_moment_weekdays) {
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["monday"] = 0] = "monday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["tuesday"] = 1] = "tuesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["wednesday"] = 2] = "wednesday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["thursday"] = 3] = "thursday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["friday"] = 4] = "friday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["saturday"] = 5] = "saturday";
        $mol_time_moment_weekdays[$mol_time_moment_weekdays["sunday"] = 6] = "sunday";
    })($mol_time_moment_weekdays = $.$mol_time_moment_weekdays || ($.$mol_time_moment_weekdays = {}));
    function numb(str, max) {
        const numb = Number(str);
        if (numb < max)
            return numb;
        $mol_fail(new Error(`Wrong time component ${str}`));
    }
    class $mol_time_moment extends $mol_time_base {
        constructor(config = new Date) {
            super();
            if (typeof config === 'number')
                config = new Date(config);
            if (typeof config === 'string') {
                const parsed = /^(?:(\d\d?\d?\d?)(?:-?(\d\d?)(?:-?(\d\d?))?)?)?(?:[T ](?:(\d\d?)(?::?(\d\d?)(?::?(\d\d?(?:\.\d+)?))?)?)?(Z|[\+\-]\d\d?(?::?(?:\d\d?)?)?)?)?$/.exec(config);
                if (!parsed)
                    throw new Error(`Can not parse time moment (${config})`);
                if (parsed[1])
                    this.year = numb(parsed[1], 9999);
                if (parsed[2])
                    this.month = numb(parsed[2], 13) - 1;
                if (parsed[3])
                    this.day = numb(parsed[3], 32) - 1;
                if (parsed[4])
                    this.hour = numb(parsed[4], 60);
                if (parsed[5])
                    this.minute = numb(parsed[5], 60);
                if (parsed[6])
                    this.second = numb(parsed[6], 60);
                if (parsed[7])
                    this.offset = new $mol_time_duration(parsed[7]);
                return;
            }
            if (config instanceof Date) {
                this.year = config.getFullYear();
                this.month = config.getMonth();
                this.day = config.getDate() - 1;
                this.hour = config.getHours();
                this.minute = config.getMinutes();
                this.second = config.getSeconds() + config.getMilliseconds() / 1000;
                const offset = -config.getTimezoneOffset();
                this.offset = new $mol_time_duration({
                    hour: (offset < 0) ? Math.ceil(offset / 60) : Math.floor(offset / 60),
                    minute: offset % 60
                });
                return;
            }
            this.year = config.year;
            this.month = config.month;
            this.day = config.day;
            this.hour = config.hour;
            this.minute = config.minute;
            this.second = config.second;
            this.offset = config.offset == null ? config.offset : new $mol_time_duration(config.offset);
        }
        year;
        month;
        day;
        hour;
        minute;
        second;
        offset;
        get weekday() {
            return (this.native.getDay() + 6) % 7;
        }
        _native;
        get native() {
            if (this._native)
                return this._native;
            const utc = this.toOffset('Z');
            return this._native = new Date(Date.UTC(utc.year ?? 0, utc.month ?? 0, (utc.day ?? 0) + 1, utc.hour ?? 0, utc.minute ?? 0, utc.second != undefined ? Math.floor(utc.second) : 0, utc.second != undefined ? Math.floor((utc.second - Math.floor(utc.second)) * 1000) : 0));
        }
        _normal;
        get normal() {
            if (this._normal)
                return this._normal;
            const moment = new $mol_time_moment(this.native);
            return this._normal = new $mol_time_moment({
                year: this.year === undefined ? undefined : moment.year,
                month: this.month === undefined ? undefined : moment.month,
                day: this.day === undefined ? undefined : moment.day,
                hour: this.hour === undefined ? undefined : moment.hour,
                minute: this.minute === undefined ? undefined : moment.minute,
                second: this.second === undefined ? undefined : moment.second,
                offset: this.offset === undefined ? undefined : moment.offset,
            });
        }
        merge(config) {
            const moment = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: moment.year === undefined ? this.year : moment.year,
                month: moment.month === undefined ? this.month : moment.month,
                day: moment.day === undefined ? this.day : moment.day,
                hour: moment.hour === undefined ? this.hour : moment.hour,
                minute: moment.minute === undefined ? this.minute : moment.minute,
                second: moment.second === undefined ? this.second : moment.second,
                offset: moment.offset === undefined ? this.offset : moment.offset,
            });
        }
        shift(config) {
            const duration = new $mol_time_duration(config);
            const moment = new $mol_time_moment().merge({
                year: this.year,
                month: this.month,
                day: this.day,
                hour: this.hour ?? 0,
                minute: this.minute ?? 0,
                second: this.second ?? 0,
                offset: this.offset ?? 0
            });
            const second = moment.second + (duration.second ?? 0);
            const native = new Date(moment.year + (duration.year ?? 0), moment.month + (duration.month ?? 0), moment.day + 1 + (duration.day ?? 0), moment.hour + (duration.hour ?? 0), moment.minute + (duration.minute ?? 0), Math.floor(second), (second - Math.floor(second)) * 1000);
            if (isNaN(native.valueOf()))
                throw new Error('Wrong time');
            return new $mol_time_moment({
                year: this.year === undefined ? undefined : native.getFullYear(),
                month: this.month === undefined ? undefined : native.getMonth(),
                day: this.day === undefined ? undefined : native.getDate() - 1,
                hour: this.hour === undefined ? undefined : native.getHours(),
                minute: this.minute === undefined ? undefined : native.getMinutes(),
                second: this.second === undefined ? undefined : native.getSeconds() + native.getMilliseconds() / 1000,
                offset: this.offset,
            });
        }
        mask(config) {
            const mask = new $mol_time_moment(config);
            return new $mol_time_moment({
                year: mask.year === undefined ? undefined : this.year,
                month: mask.month === undefined ? undefined : this.month,
                day: mask.day === undefined ? undefined : this.day,
                hour: mask.hour === undefined ? undefined : this.hour,
                minute: mask.minute === undefined ? undefined : this.minute,
                second: mask.second === undefined ? undefined : this.second,
                offset: mask.offset === undefined ? undefined : this.offset,
            });
        }
        toOffset(config = new $mol_time_moment().offset) {
            const duration = new $mol_time_duration(config);
            const offset = this.offset || new $mol_time_moment().offset;
            let with_time = new $mol_time_moment('T00:00:00').merge(this);
            const moment = with_time.shift(duration.summ(offset.mult(-1)));
            return moment.merge({ offset: duration });
        }
        valueOf() { return this.native.getTime(); }
        toJSON() { return this.toString(); }
        toString(pattern = 'YYYY-MM-DDThh:mm:ss.sssZ') {
            return super.toString(pattern);
        }
        [Symbol.toPrimitive](mode) {
            return mode === 'number' ? this.valueOf() : this.toString();
        }
        static patterns = {
            'YYYY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year);
            },
            'AD': (moment) => {
                if (moment.year == null)
                    return '';
                return String(Math.floor(moment.year / 100) + 1);
            },
            'YY': (moment) => {
                if (moment.year == null)
                    return '';
                return String(moment.year % 100);
            },
            'Month': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'long' })),
            'DD Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'long' })),
            'D Month': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Month'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'long' })),
            'Mon': (pattern => (moment) => {
                if (moment.month == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { month: 'short' })),
            'DD Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['DD'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: '2-digit', month: 'short' })),
            'D Mon': (pattern => (moment) => {
                if (moment.month == null) {
                    if (moment.day == null) {
                        return '';
                    }
                    else {
                        return $mol_time_moment.patterns['D'](moment);
                    }
                }
                else {
                    if (moment.day == null) {
                        return $mol_time_moment.patterns['Mon'](moment);
                    }
                    else {
                        return pattern.format(moment.native);
                    }
                }
            })(new Intl.DateTimeFormat(undefined, { day: 'numeric', month: 'short' })),
            '-MM': (moment) => {
                if (moment.month == null)
                    return '';
                return '-' + $mol_time_moment.patterns['MM'](moment);
            },
            'MM': (moment) => {
                if (moment.month == null)
                    return '';
                return String(100 + moment.month + 1).slice(1);
            },
            'M': (moment) => {
                if (moment.month == null)
                    return '';
                return String(moment.month + 1);
            },
            'WeekDay': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'long' })),
            'WD': (pattern => (moment) => {
                if (moment.day == null)
                    return '';
                if (moment.month == null)
                    return '';
                if (moment.year == null)
                    return '';
                return pattern.format(moment.native);
            })(new Intl.DateTimeFormat(undefined, { weekday: 'short' })),
            '-DD': (moment) => {
                if (moment.day == null)
                    return '';
                return '-' + $mol_time_moment.patterns['DD'](moment);
            },
            'DD': (moment) => {
                if (moment.day == null)
                    return '';
                return String(100 + moment.day + 1).slice(1);
            },
            'D': (moment) => {
                if (moment.day == null)
                    return '';
                return String(moment.day + 1);
            },
            'Thh': (moment) => {
                if (moment.hour == null)
                    return '';
                return 'T' + $mol_time_moment.patterns['hh'](moment);
            },
            'hh': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(100 + moment.hour).slice(1);
            },
            'h': (moment) => {
                if (moment.hour == null)
                    return '';
                return String(moment.hour);
            },
            ':mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return ':' + $mol_time_moment.patterns['mm'](moment);
            },
            'mm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(100 + moment.minute).slice(1);
            },
            'm': (moment) => {
                if (moment.minute == null)
                    return '';
                return String(moment.minute);
            },
            ':ss': (moment) => {
                if (moment.second == null)
                    return '';
                return ':' + $mol_time_moment.patterns['ss'](moment);
            },
            'ss': (moment) => {
                if (moment.second == null)
                    return '';
                return String(100 + moment.second | 0).slice(1);
            },
            's': (moment) => {
                if (moment.second == null)
                    return '';
                return String(moment.second | 0);
            },
            '.sss': (moment) => {
                if (moment.second == null)
                    return '';
                if (moment.second === (moment.second | 0))
                    return '';
                return '.' + $mol_time_moment.patterns['sss'](moment);
            },
            'sss': (moment) => {
                if (moment.second == null)
                    return '';
                const millisecond = Math.floor((moment.second - Math.floor(moment.second)) * 1000);
                return String(1000 + millisecond).slice(1);
            },
            'Z': (moment) => {
                const offset = moment.offset;
                if (!offset)
                    return '';
                let hour = offset.hour;
                let sign = '+';
                if (hour < 0) {
                    sign = '-';
                    hour = -hour;
                }
                return sign + String(100 + hour).slice(1) + ':' + String(100 + offset.minute).slice(1);
            }
        };
    }
    $.$mol_time_moment = $mol_time_moment;
})($ || ($ = {}));
//mol/time/moment/moment.ts
;
"use strict";
var $;
(function ($) {
    class $dark extends $mol_page {
        src() {
            return "https://ai.img-converter.com/txt2img/info/realistic-sexy-foreign-girls-wearing-sexy-transparent-saree-and-tight-pants-hug-gzhus";
        }
        body() {
            return [
                this.created_by(),
                this.Picture(),
                this.CreatedAt()
            ];
        }
        avatar_src() {
            return "";
        }
        Avatar() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.avatar_src();
            obj.natural_width = () => 32;
            obj.natural_height = () => 32;
            return obj;
        }
        avatar_nickname() {
            return "anonim";
        }
        Nickname() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.avatar_nickname();
            return obj;
        }
        created_by() {
            const obj = new this.$.$mol_view();
            obj.sub = () => [
                this.Avatar(),
                this.Nickname()
            ];
            return obj;
        }
        img_src() {
            return "";
        }
        img_width() {
            return 512;
        }
        img_height() {
            return 512;
        }
        Picture() {
            const obj = new this.$.$mol_image();
            obj.uri = () => this.img_src();
            obj.natural_width = () => this.img_width();
            obj.natural_height = () => this.img_height();
            obj.minimal_width = () => 512;
            obj.minimal_height = () => 512;
            return obj;
        }
        createdAt() {
            return "";
        }
        CreatedAt() {
            const obj = new this.$.$mol_paragraph();
            obj.title = () => this.createdAt();
            return obj;
        }
    }
    __decorate([
        $mol_mem
    ], $dark.prototype, "Avatar", null);
    __decorate([
        $mol_mem
    ], $dark.prototype, "Nickname", null);
    __decorate([
        $mol_mem
    ], $dark.prototype, "created_by", null);
    __decorate([
        $mol_mem
    ], $dark.prototype, "Picture", null);
    __decorate([
        $mol_mem
    ], $dark.prototype, "CreatedAt", null);
    $.$dark = $dark;
})($ || ($ = {}));
//dark/-view.tree/view.tree.ts
;
"use strict";
var $;
(function ($) {
    var $$;
    (function ($$) {
        class $dark extends $.$dark {
            picture_info() {
                return $mol_fetch.json(this.src());
            }
            img_src() {
                return this.picture_info().thumbnail;
            }
            img_width() {
                return Number(this.picture_info().size.split('x')[0]);
            }
            img_height() {
                return Number(this.picture_info().size.split('x')[1]);
            }
            avatar_src() {
                return this.picture_info().picture;
            }
            avatar_nickname() {
                return this.picture_info().nickname;
            }
            createdAt() {
                return (new $mol_time_moment(this.picture_info().createdAt)).toString('YYYY-MM-DD hh:mm (WeekDay)');
            }
        }
        __decorate([
            $mol_mem
        ], $dark.prototype, "picture_info", null);
        $$.$dark = $dark;
    })($$ = $.$$ || ($.$$ = {}));
})($ || ($ = {}));
//dark/view.tree.ts
;
export default $
//# sourceMappingURL=web.mjs.map

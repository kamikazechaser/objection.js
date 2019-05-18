(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{199:function(e,t,r){"use strict";r.r(t);var n=r(0),o=Object(n.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("p",[e._v("Objection.js is an "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Object-relational_mapping",target:"_blank",rel:"noopener noreferrer"}},[e._v("ORM"),r("OutboundLink")],1),e._v(" for "),r("a",{attrs:{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),r("OutboundLink")],1),e._v(" that aims to stay out of your way and make it as easy as possible to use the full power of SQL and the underlying database engine while still making the common stuff easy and enjoyable.")]),e._v(" "),e._m(0),e._v(" "),r("p",[e._v("Objection.js is built on an SQL query builder called "),r("a",{attrs:{href:"http://knexjs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("knex"),r("OutboundLink")],1),e._v(". All databases supported by knex are supported by objection.js. "),r("strong",[e._v("SQLite3")]),e._v(", "),r("strong",[e._v("Postgres")]),e._v(" and "),r("strong",[e._v("MySQL")]),e._v(" are "),r("a",{attrs:{href:"https://travis-ci.org/Vincit/objection.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("thoroughly tested"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("What objection.js gives you:")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("An easy declarative way of "),r("router-link",{attrs:{to:"/guide/models.html"}},[e._v("defining models")]),e._v(" and relationships between them")],1)]),e._v(" "),r("li",[r("strong",[e._v("Simple and fun way to "),r("router-link",{attrs:{to:"/guide/query-examples.html#basic-queries"}},[e._v("fetch, insert, update and delete")]),e._v(" objects using the full power of SQL")],1)]),e._v(" "),r("li",[r("strong",[e._v("Powerful mechanisms for "),r("router-link",{attrs:{to:"/guide/query-examples.html#eager-loading"}},[e._v("eager loading")]),e._v(", "),r("router-link",{attrs:{to:"/guide/query-examples.html#graph-inserts"}},[e._v("inserting")]),e._v(" and "),r("router-link",{attrs:{to:"/guide/query-examples.html#graph-upserts"}},[e._v("upserting")]),e._v(" object graphs")],1)]),e._v(" "),r("li",[r("strong",[e._v("Easy to use "),r("router-link",{attrs:{to:"/guide/transactions.html"}},[e._v("transactions")])],1)]),e._v(" "),r("li",[r("strong",[e._v("Official "),r("a",{attrs:{href:"https://github.com/Vincit/objection.js/blob/master/typings/objection/index.d.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("TypeScript"),r("OutboundLink")],1),e._v(" support")])]),e._v(" "),r("li",[r("strong",[e._v("Optional "),r("router-link",{attrs:{to:"/guide/validation.html"}},[e._v("JSON schema")]),e._v(" validation")],1)]),e._v(" "),r("li",[r("strong",[e._v("A way to "),r("router-link",{attrs:{to:"/guide/documents.html"}},[e._v("store complex documents")]),e._v(" as single rows")],1)])]),e._v(" "),e._m(1),e._v(" "),r("ul",[r("li",[r("strong",[e._v("A custom query DSL. SQL is used as a query language.")]),e._v("\nThis doesn't mean you have to write SQL strings though. A query builder based on "),r("a",{attrs:{href:"http://knexjs.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("knex"),r("OutboundLink")],1),e._v(" is\nused to build the SQL. However, if the query builder fails you for some reason, raw SQL strings can be easily\nwritten using the "),r("router-link",{attrs:{to:"/api/objection/#raw"}},[e._v("raw")]),e._v(" helper function.")],1),e._v(" "),r("li",[r("strong",[e._v("Automatic database schema creation and migration from model definitions.")]),e._v("\nFor simple things it is useful that the database schema is automatically generated from the model definitions,\nbut usually just gets in your way when doing anything non-trivial. Objection.js leaves the schema related things\nto you. knex has a great "),r("a",{attrs:{href:"http://knexjs.org/#Migrations",target:"_blank",rel:"noopener noreferrer"}},[e._v("migration tool"),r("OutboundLink")],1),e._v(" that we recommend for this job. Check\nout the "),r("a",{attrs:{href:"https://github.com/Vincit/objection.js/tree/master/examples/express-es6",target:"_blank",rel:"noopener noreferrer"}},[e._v("example project"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("p",[e._v("The best way to get started is to clone our "),r("a",{attrs:{href:"https://github.com/Vincit/objection.js/tree/master/examples/express-es6",target:"_blank",rel:"noopener noreferrer"}},[e._v("ES2015"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://github.com/Vincit/objection.js/tree/master/examples/express-es7",target:"_blank",rel:"noopener noreferrer"}},[e._v("ESNext"),r("OutboundLink")],1),e._v(" or "),r("a",{attrs:{href:"https://github.com/Vincit/objection.js/tree/master/examples/express-ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("typescript"),r("OutboundLink")],1),e._v(" example project.")]),e._v(" "),r("p",[e._v("Check out "),r("a",{attrs:{href:"https://github.com/Vincit/objection.js/issues/1069",target:"_blank",rel:"noopener noreferrer"}},[e._v("this issue"),r("OutboundLink")],1),e._v(" to see who is using objection and what they think about it.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Even though ORM is the best commonly known acronym to describe objection, a more accurate description is to call it "),t("strong",[this._v("a relational query builder")]),this._v(". You get all the benefits of an SQL query builder but also a powerful set of tools for working with relations.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("What objection.js "),t("strong",[this._v("doesn't")]),this._v(" give you:")])}],!1,null,null,null);t.default=o.exports}}]);
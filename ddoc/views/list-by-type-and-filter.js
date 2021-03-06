module.exports = {
  map: function (doc) {
    if (doc.type && doc.data) {
        try {
          var schema = require('views/lib/types/' + doc.type),
              dotaccess = require('views/lib/dotaccess'),
              jsonselect = require('views/lib/jsonselect'),
              list_by_type_and_filter = require('views/lib/list_by_type_and_filter');

          list_by_type_and_filter(schema, doc, emit, dotaccess, jsonselect);
        } catch(e) { log(e); }
    }
  },
  reduce: "_count"
}

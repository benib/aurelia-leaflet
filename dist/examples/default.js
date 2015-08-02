System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var inject, useView, Simple;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      useView = _aureliaFramework.useView;
    }],
    execute: function () {
      Simple = (function () {
        function Simple() {
          _classCallCheck(this, _Simple);

          this.jsFile = 'default.js';
          this.htmlFile = 'default.html';
        }

        var _Simple = Simple;
        Simple = useView('./default.html')(Simple) || Simple;
        return Simple;
      })();

      _export('Simple', Simple);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2RlZmF1bHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3VCQUdhLE1BQU07Ozs7OztpQ0FIWCxNQUFNO2tDQUFFLE9BQU87OztBQUdWLFlBQU07aUJBQU4sTUFBTTs7O2VBRWpCLE1BQU0sR0FBRyxZQUFZO2VBQ3JCLFFBQVEsR0FBRyxjQUFjOzs7c0JBSGQsTUFBTTtBQUFOLGNBQU0sR0FEbEIsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQ2IsTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNIiwiZmlsZSI6ImV4YW1wbGVzL2RlZmF1bHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgdXNlVmlld30gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AdXNlVmlldygnLi9kZWZhdWx0Lmh0bWwnKVxuZXhwb3J0IGNsYXNzIFNpbXBsZSB7XG4gIC8vIGRlbW9cbiAganNGaWxlID0gJ2RlZmF1bHQuanMnO1xuICBodG1sRmlsZSA9ICdkZWZhdWx0Lmh0bWwnO1xuICAvLyBkZW1vZW5kXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
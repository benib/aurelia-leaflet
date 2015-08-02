System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var computedFrom, QuickStart;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      computedFrom = _aureliaFramework.computedFrom;
    }],
    execute: function () {
      QuickStart = (function () {
        function QuickStart() {
          _classCallCheck(this, QuickStart);
        }

        _createClass(QuickStart, [{
          key: 'attached',
          value: function attached() {
            for (var i = 0; i < this.container.querySelectorAll('code').length; i++) {
              hljs.highlightBlock(this.container.querySelectorAll('code').item(i));
            }
          }
        }]);

        return QuickStart;
      })();

      _export('QuickStart', QuickStart);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1aWNrc3RhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O29CQUVhLFVBQVU7Ozs7Ozs7O3VDQUZmLFlBQVk7OztBQUVQLGdCQUFVO2lCQUFWLFVBQVU7Z0NBQVYsVUFBVTs7O3FCQUFWLFVBQVU7O2lCQUNiLG9CQUFHO0FBQ1QsaUJBQUssSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNyRSxrQkFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RFO1dBRUY7OztlQU5VLFVBQVUiLCJmaWxlIjoicXVpY2tzdGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29tcHV0ZWRGcm9tfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmV4cG9ydCBjbGFzcyBRdWlja1N0YXJ0IHtcbiAgYXR0YWNoZWQoKSB7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgdGhpcy5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnY29kZScpLmxlbmd0aDsgaSsrKSB7XG4gICAgICBobGpzLmhpZ2hsaWdodEJsb2NrKHRoaXMuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2NvZGUnKS5pdGVtKGkpKTtcbiAgICB9XG4gICAgXG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
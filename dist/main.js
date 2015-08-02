System.register(['fetch'], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin('benib/aurelia-leaflet');

    aurelia.globalizeResources('./example-code/example-code');

    aurelia.container.registerInstance('Leaflet', window.L);

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [function (_fetch) {}],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDakMsV0FBTyxDQUFDLEdBQUcsQ0FDUixxQkFBcUIsRUFBRSxDQUN2QixrQkFBa0IsRUFBRSxDQUNwQixNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7QUFFbkMsV0FBTyxDQUFDLGtCQUFrQixDQUFDLDZCQUE2QixDQUFDLENBQUM7O0FBRTFELFdBQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFeEQsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7YUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO0tBQUEsQ0FBQyxDQUFDO0dBQ3hDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2ZldGNoJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShhdXJlbGlhKSB7XG4gIGF1cmVsaWEudXNlXG4gICAgLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgLmRldmVsb3BtZW50TG9nZ2luZygpXG4gICAgLnBsdWdpbignYmVuaWIvYXVyZWxpYS1sZWFmbGV0Jyk7XG5cbiAgYXVyZWxpYS5nbG9iYWxpemVSZXNvdXJjZXMoJy4vZXhhbXBsZS1jb2RlL2V4YW1wbGUtY29kZScpO1xuXG4gIGF1cmVsaWEuY29udGFpbmVyLnJlZ2lzdGVySW5zdGFuY2UoJ0xlYWZsZXQnLCB3aW5kb3cuTCk7XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oYSA9PiBhLnNldFJvb3QoKSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
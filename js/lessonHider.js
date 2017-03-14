angular.module('directivePractice')
    .directive('lessonHider', function () {
        return {
            scope:{
                lesson: '=',
                dayAlert: '&'
            },
            templateUrl: 'lessonHider.html',
            restrict: 'E',
            controller: function ($scope, lessonService) {
                $scope.getSchedule = lessonService.getSchedule();
            },
            link: function (scope, ele, attr) {
                scope.getSchedule.then(function (response) {
                    scope.schedule = response.data;
                scope.schedule.forEach(function (scheduleDay) {
                    if(scheduleDay.lesson === scope.lesson){
                        scope.lessonDay = scheduleDay.weekday;
                        ele.css('text-decoration', 'line-through');
                        return;
                    }
                });
                });
            }
        }
    });


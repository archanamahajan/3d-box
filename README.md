# 3d-box
draw 3d box/cube using highchart

This plugin lets you draw a 3d box/cube:

Steps to use the plugin:

1) Include highchart and jquery in your HTML file.
        <script type="text/javascript" src="plugin/jquery.min.js"></script>
        <script src="plugin/highcharts.js"></script>

2) Create a div to render highchart
        <div id="3dBoxContainer"></div>
        
3) Create Highchart.Chart object
      var chart = new Highcharts.Chart({});
      
4) Create Draw3DRectangle object and pass following config properties
      var obj = new Draw3DRectangle({
            ren: render object,
            xAxis: xAxis,
            yAxis: yAxis,
            height : height,
            width: width,
            breath: breath,
            leftRectangleId: 'id',
            bottomRectangleId: 'id',
            frontRectColor: 'color',
            leftRectColor: 'color',
            bottomRectColor: 'color'
        });
        
5) Summary:

        var chart = new Highcharts.Chart({	
            chart: {
                renderTo: '3dBoxContainer',
                backgroundColor: '#ffffff',
                events: {
                    load: function () {
                        var ren = this.renderer;
                        var obj = new Draw3DRectangle({
                            ren: ren,
                            xAxis: 200,
                            yAxis: 100,
                            height : 180,
                            width: 100,
                            breath: 50,
                            leftRectangleId: 'leftRectId_1',
                            bottomRectangleId: 'bottomRectId_1',
                            frontRectColor: '#ff0000',
                            leftRectColor: '#e50000',
                            bottomRectColor: '#cc0000'
                        });
                    }
                }
            }
        });
      

/*
 3d box

 2016 Archana Mahajan
*/
function Draw3DRectangle(data){
    setTimeout(function(){
        var leftBoxXAxis = data.xAxis - data.breath;
        var leftBoxYAxis = data.yAxis + data.breath + data.breath/2;
        var bottomBoxXAxis = data.xAxis;
        var bottomBoxYAxis = data.yAxis + data.height;
        $('#'+data.leftRectangleId).attr('transform', 'translate('+ leftBoxXAxis +','+ leftBoxYAxis +') skewY(-56)');
        $('#'+data.bottomRectangleId).attr('transform', 'translate('+ bottomBoxXAxis +','+ bottomBoxYAxis +') skewX(-35)');
    }, 0);

    //Front rectangle
    data.ren.rect(data.xAxis, data.yAxis, data.width, data.height)
        .attr({
                fill: data.frontRectColor
        })
    .add();

    //Left rectangle
    data.ren.rect(0, 0, data.breath, data.height)
        .attr({
           fill: data.leftRectColor,
           id: data.leftRectangleId
        })
    .add();

    //Bottom rectangle
    data.ren.rect(0, 0, data.width, data.breath + data.breath/2)
    .attr({
        fill: data.bottomRectColor,
        id: data.bottomRectangleId
    })
    .add();
}
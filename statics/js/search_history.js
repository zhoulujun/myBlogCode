var searchHistory;
var searchkeywordsArr=[];
var q = $("#q");
var typeid = $("#typeid");
function setSearchHistory () {
    searchkeywordsArr.push({
        keyword:q.val(),
        keywordtypeid:typeid.val(),
    });
    localStorage.setItem('searchHistory',JSON.stringify(searchkeywordsArr));
}
if(localStorage){
     searchHistory=localStorage.getItem('searchHistory');

    if(searchHistory){
        searchkeywordsArr=JSON.parse(searchHistory);
        //搜索历史
        var history_htmlArr=searchkeywordsArr.map(function (data) {
            var keyword = data['keyword'];
            var keywordtypeid = data['keywordtypeid'];
            return '<li><a href="?m=search&c=index&a=init&typeid='+keywordtypeid+'&q='+keyword+'">'+keyword+'</a></li>';

        });

        $('#history_ul').removeClass("hidden").find(".tab-item").html(history_htmlArr.join(''));
    }

}



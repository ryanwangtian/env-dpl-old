var data = [{id: 'l1', name: '一级菜单A', children: [
        {id: 'l11', name: '二级菜单A1'},
        {id: 'l12', name: '二级菜单A2'},
        {id: 'l13', name: '二级菜单A3'},
        {id: 'l14', name: '二级菜单A4'},
        {id: 'l15', name: '二级菜单A5'}
    ]},
    {id: 'l2', name: '非常长非常长非常长非常长非常长非常长非常长非常长非常长的一级菜单B', children: [
        {id: 'l21', name: '二级菜单B1'},
        {id: 'l22', name: '二级菜单B2'},
        {id: 'l23', name: '非常长非常长非常长非常长非常长非常长非常长非常长非常长的二级菜单B3'},
        {id: 'l24', name: '二级菜单B4'},
        {id: 'l25', name: '二级菜单B5'}
    ]},
    {id: 'l3', name: '一级菜单C'},
    {id: 'l4', name: '一级菜单D'},
    {id: 'l5', name: '一级菜单E'},
    {id: 'l6', name: '一级菜单F'},
    {id: 'l7', name: '一级菜单G'},
    {id: 'l8', name: '一级菜单H'}];

$(function() {
    $("#test").envLeftMenu({
        data: data,
        onMenuItemClicked: function(menuItem) {
            if (menuItem.children.length <= 0) {
                alert(JSON.stringify(menuItem.data));
            }
        }
    });
});
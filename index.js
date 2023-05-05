// Hide submenus
$('#body-row .collapse').collapse('hide'); 

// Collapse/Expand icon
$('#collapse-icon').addClass('fa-angle-double-left'); 

// Collapse click
$('[data-toggle=sidebar-colapse]').click(function() {
    SidebarCollapse();
});

function SidebarCollapse () {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    
    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if ( SeparatorTitle.hasClass('d-flex') ) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }
    
    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}

databaseArray = [];
window.onload = function(){
    fetch('./db.json')
    .then((response) => response.json())
    .then((json) => {
        for (let index = 0; index < json.length; index++) {
            const element = json[index];
            addArray(element);
        }
    });
};

function submitArrayForm() {
    var dashboard_group = $("#dashboardGroup").find(":selected").val();
    var dashboard_type = $("#dashboardType").find(":selected").val();
    var dashboard_name = $("#dashboardName").find(":selected").val();
    var dashboard_id = $("#dashboardId").find(":selected").val();
    var role_id = $("#roleId").find(":selected").val();
    var dashboard_form_object = { 
        "dashboard_type": dashboard_type,
        "dashboard_group": dashboard_group,
        "dashboard_name": dashboard_name,
        "dashboard_description": "Test Description",
        "dashboard_id": dashboard_id,
        "dashboard_role": role_id
    };
    addArray(dashboard_form_object);
    // $("#btn-cancel").click();
}

function addArray(arrayElement) {
    if(arrayElement['dashboard_id'] === 1) {
        $("#dashboardGroupContainer").append('<div class="col-4 mb-20"><div class="flex-start btn-container btn-active"><div class="mr-10"><i class="fa-solid fa-star"></i></div><div class=""><h6 class="m0">'+arrayElement['dashboard_name']+'</h6><p class="m0 fs-14">'+arrayElement['dashboard_group']+'</p></div></div></div>');
    } else {
        $("#dashboardGroupContainer").append('<div class="col-4 mb-20"><div class="flex-start btn-container"><div class="mr-10"><i class="fa-regular fa-star"></i></div><div class=""><h6 class="m0">'+arrayElement['dashboard_name']+'</h6><p class="m0 fs-14">'+arrayElement['dashboard_group']+'</p></div></div></div>');
    }
    databaseArray.push(arrayElement);
    $('#exampleModalCenter').modal('hide');
}

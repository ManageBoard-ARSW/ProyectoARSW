/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function connect() {
    var socket = new SockJS('/stompendpoint');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        
        stompClient.subscribe('/topic/', function (data) {
            
        });
    });
};

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}


var fields = [
    {name: "id", type: "string"},
    {name: "status", map: "state", type: "string"},
    {name: "text", map: "label", type: "string"},
    {name: "tags", type: "string"},
    {name: "color", map: "hex", type: "string"},
    {name: "resourceId", type: "number"}
];
var source = {
    //Informacion de las tareas
    localData: [
        {id: "1161", state: "new", label: "Make a new Dashboard", tags: "dashboard", hex: "#96c443", resourceId: 3},
        {id: "1645", state: "work", label: "Prepare la comida", tags: "release", hex: "#f6ca43", resourceId: 1},
        {id: "9213", state: "new", label: "One item added to the cart", tags: "cart", hex: "#ffc443", resourceId: 3},
        {id: "6546", state: "done", label: "Edit Item Price", tags: "price, edit", hex: "#96c443", resourceId: 4},
        {id: "9034", state: "new", label: "Login 404 issue", tags: "issue, login", hex: "#96c443"}
    ],
    dataType: "array",
    dataFields: fields
};

function tablero() {
        open("tableroView.html","_self");
    } 

var getIconClassName = function () {
    switch (theme) {
        case "darkblue":
        case "black":
        case "shinyblack":
        case "ui-le-frog":
        case "metrodark":
        case "orange":
        case "darkblue":
        case "highcontrast":
        case "ui-sunny":
        case "ui-darkness":
            return "jqx-icon-plus-alt-white ";
    }
    return "jqx-icon-plus-alt";
}

$(document).ready(function () {
            
    var dataAdapter = new $.jqx.dataAdapter(source);
    var resourcesAdapterFunc = function () {
        var resourcesSource =
                {
                    localData: [
                        {id: 0, name: "No name", image: "../../jqwidgets/styles/images/common.png", common: true},
                        {id: 1, name: "Andrew Fuller", image: "../../images/andrew.png"},
                        {id: 2, name: "Janet Leverling", image: "../../images/janet.png"},
                        {id: 3, name: "Steven Buchanan", image: "../../images/steven.png"},
                        {id: 4, name: "Nancy Davolio", image: "../../images/nancy.png"},
                        {id: 5, name: "Michael Buchanan", image: "../../images/Michael.png"},
                        {id: 6, name: "Margaret Buchanan", image: "../../images/margaret.png"},
                        {id: 7, name: "Robert Buchanan", image: "../../images/robert.png"},
                        {id: 8, name: "Laura Buchanan", image: "../../images/Laura.png"},
                        {id: 9, name: "Laura Buchanan", image: "../../images/Anne.png"}
                    ],
                    dataType: "array",
                    dataFields: [
                        {name: "id", type: "number"},
                        {name: "name", type: "string"},
                        {name: "image", type: "string"},
                        {name: "common", type: "boolean"}
                    ]
                };
        var resourcesDataAdapter = new $.jqx.dataAdapter(resourcesSource);
        return resourcesDataAdapter;
    }
    
    
    $('#kanban1').jqxKanban({
        
        template: "<div class='jqx-kanban-item' id=''>"
                + "<div class='jqx-kanban-item-color-status'></div>"
                + "<div style='display: none;' class='jqx-kanban-item-avatar'></div>"
                + "<div class='jqx-icon jqx-icon-close jqx-kanban-item-template-content jqx-kanban-template-icon'></div>"
                + "<div class='jqx-kanban-item-text'></div>"
                + "<div style='display: none;' class='jqx-kanban-item-footer'></div>"
                + "</div>",
        
        //Datos con los que arranca mostrando ---
        resources: resourcesAdapterFunc(),  //Nuevas tareas
        source: dataAdapter,
        //------
        
        
        // render items.
        itemRenderer: function (element, item, resource)
        {
            $(element).find(".jqx-kanban-item-color-status").html("<span style='line-height: 23px; margin-left: 5px;'>" + resource.name + "</span>");
            $(element).find(".jqx-kanban-item-text").css('background', item.color);
        },
        columns: [
            {text: "To Do", iconClassName: getIconClassName(), dataField: "new", maxItems: 10},
            {text: "Doing Developing", iconClassName: getIconClassName(), dataField: "work", maxItems: 10},
            {text: "Doing Testing", iconClassName: getIconClassName(), dataField: "work", maxItems: 10},
            {text: "Done", iconClassName: getIconClassName(), dataField: "done", maxItems: 20}
        ],
        // render column headers.
        columnRenderer: function (element, collapsedElement, column) {
            var columnItems = $("#kanban1").jqxKanban('getColumnItems', column.dataField).length;
            // update header's status.
            element.find(".jqx-kanban-column-header-status").html(" (" + columnItems + "/" + column.maxItems + ")");
            // update collapsed header's status.
            collapsedElement.find(".jqx-kanban-column-header-status").html(" (" + columnItems + "/" + column.maxItems + ")");
        }
    });

    // handle item clicks.
    $('#kanban1').on("itemAttrCl icked", function (event) {
        var args = event.args;
        if (args.attribute == "template") {
            $('#kanban1').jqxKanban('removeItem', args.item.id);
        }
    });
    // handle column clicks.
    var itemIndex = 0;
    $('#kanban1').on('columnAttrClicked', function (event) {
        var args = event.args;
        if (args.attribute == "button") {
            args.cancelToggle = true;
            if (!args.column.collapsed) {
                var colors = ['#f19b60', '#5dc3f0', '#6bbd49', '#dd230d']
                $('#kanban1').jqxKanban('addItem', {
                    status: args.column.dataField,
                    text: "<input placeholder='(No Title)' style='width: 96%; margin-top:2px; border-radius: 3px; border-color: #ddd; line-height:20px; height: 20px;' class='jqx-input' id='newItem" + itemIndex + "' value=''/>",
                    tags: "new task",
                    color: colors[Math.floor(Math.random() * 4)],
                    resourceId: Math.floor(Math.random() * 4),
                });
                var input = $("#newItem" + itemIndex);
                input.mousedown(function (event) {
                    event.stopPropagation();
                });
                input.mouseup(function (event) {
                    event.stopPropagation();
                });
                input.keydown(function (event) {
                    if (event.keyCode == 13) {
                        $("<span>" + $(event.target).val() + "</span>").insertBefore($(event.target));
                        $(event.target).remove();
                    }
                });
                input.focus();
                itemIndex++;
            }
        }
    });
});

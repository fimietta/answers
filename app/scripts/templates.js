define(function(){

this["JST"] = this["JST"] || {};

this["JST"]["app/scripts/templates/AnswerDetailView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h3 class="title">' +
((__t = (title)) == null ? '' : __t) +
'</h3>\n<p class="created-by">Created By ' +
((__t = (createdBy)) == null ? '' : __t) +
'</p>\n\n<div class="description">\n    <p>' +
((__t = (description)) == null ? '' : __t) +
'</p>\n</div>\n\n<br />\n<div class="pull-right">\n    <a href="#" id="add-comment">Add Comment</a>\n</div>\n\n<div id="comments-container">\n\n</div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/AnswerFormView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form>\n    <div class="form-group">\n        <label for="answer-title">Title</label>\n        <input type="text" class="form-control" id="answer-title" placeholder="Title">\n    </div>\n    <div class="form-group">\n        <label for="answer-description">Description</label>\n        <textarea id="answer-description" class="form-control" rows="3"></textarea>\n    </div>\n\n\n    <form id="fileupload" method="post" action="upload.php" enctype="multipart/form-data">\n        <div id="dropzone-new">\n            Drop Here\n\n            <a>Browse</a>\n            <input type="file" name="upl" multiple />\n        </div>\n\n        <ul>\n            <!-- The file uploads will be shown here -->\n        </ul>\n\n    </form>\n</form>\n';

}
return __p
};

this["JST"]["app/scripts/templates/AnswerItemView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href=\'#answer/' +
((__t = (id)) == null ? '' : __t) +
'\'>' +
((__t = (title)) == null ? '' : __t) +
'</a>\n<div class="truncate">' +
((__t = (description)) == null ? '' : __t) +
'</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/AnswersStatisticsView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n    <div class="col-lg-6">\n        <div id="newest-answers-region">\n\n        </div>\n    </div>\n    <div class="col-lg-6">\n        <div id="most-searched-answers-region">\n\n        </div>\n    </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/AnswersTableView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>All Answers</h2>\n\n<table id="all-answers-table" class="display" cellspacing="0" width="100%">\n    <thead>\n    <tr>\n        <th>Title</th>\n        <th>CreatedBy</th>\n        <th>Created At</th>\n        <th>Number of Comments</th>\n    </tr>\n    </thead>\n    <tfoot>\n    <tr>\n        <th>Title</th>\n        <th>Created By</th>\n        <th>Created At</th>\n        <th>Number of Comments</th>\n    </tr>\n    </tfoot>\n</table>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/BaseModalView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="modal-dialog">\n    <div class="modal-content">\n        <div class="modal-header">\n            <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n            <h4 class="modal-title">Modal title</h4>\n        </div>\n        <div class="modal-body">\n\n        </div>\n        <div class="modal-footer">\n            <a href="#" class="btn" id="close-button" data-dismiss="modal">Close</a>\n            <a href="#" class="btn btn-primary" id="save-button">Save changes</a>\n        </div>\n    </div><!-- /.modal-content -->\n</div><!-- /.modal-dialog -->\n';

}
return __p
};

this["JST"]["app/scripts/templates/CommentFormView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<form>\n    <div class="form-group">\n        <label for="comment-description">Description</label>\n        <textarea id="comment-description" class="form-control" rows="3"></textarea>\n    </div>\n\n    <form id="fileupload" method="post" action="/upload" enctype="multipart/form-data">\n        <div id="dropzone-new">\n            Drop Here\n\n            <a>Browse</a>\n            <input type="file" name="upl" multiple />\n        </div>\n\n        <ul>\n            <!-- The file uploads will be shown here -->\n        </ul>\n\n    </form>\n</form>\n';

}
return __p
};

this["JST"]["app/scripts/templates/CommentItemView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="description">\n    ' +
((__t = (text)) == null ? '' : __t) +
'\n</div>\n<div class="pull-right">\n    <p>Created by: <strong>' +
((__t = (createdBy)) == null ? '' : __t) +
'</strong> - Created at: <strong>' +
((__t = (createdAt)) == null ? '' : __t) +
'</strong></p>\n</div>\n\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/CommentsView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Comments</h2>\n<div id="comments-list"></div>\n';

}
return __p
};

this["JST"]["app/scripts/templates/DashboardView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="row">\n    <div class="col-lg-12">\n        <div id="search-box-region">\n\n        </div>\n        <div id="menu-region">\n\n        </div>\n    </div>\n</div>\n\n<div class="row">\n    <div class="col-lg-12">\n        <div id="content-region">\n\n        </div>\n    </div>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/MenuView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="pull-right">\n    <a href="#answers" id="show-all">Show All</a>\n    &nbsp; | &nbsp;\n    <a href="#" id="create-new-answer">Create New</a>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/MostSearchedAnswersView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Most Searched</h2>\n<div id="most-searched-list"></div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/NewestAnswersView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>Recent Answers</h2>\n<div id="newest-list"></div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/SavedAnswerSuccessView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="box">\n    <a href="#" id="create-new-modal">Create NEW</a>\n</div>\n<div class="box">\n    <a href="#" id="close-modal" data-dismiss="modal">Close</a>\n</div>\n<div class="box">\n    <a href="#" id="show-answer-modal">Show Answer</a>\n</div>\n\n';

}
return __p
};

this["JST"]["app/scripts/templates/SearchView.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="search-answers">\n    <h2>Search Your Answer</h2>\n    <p>For example: javascript, rome</p>\n    <input class="typeahead" id="searchbox" type="hidden" placeholder="Search for an Answer">\n</div>\n';

}
return __p
};

  return this["JST"];

});
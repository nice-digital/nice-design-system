<%
// Template used for generating a JSON file of the context from grunt-webfont.
// Used so we can display the glyphs within the Design System website.

var obj = arguments[0];

// Remove unnecessary path information
delete obj["cssTemplate"];
delete obj["cache"];
%>
<%= JSON.stringify(obj, null, '\t') %>

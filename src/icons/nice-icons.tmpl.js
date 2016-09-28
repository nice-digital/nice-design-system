<%
// Template used for generating a JSON file of the context from grunt-webfont.
// Used so we can display the glyphs within the style guide web app
%>
<%= JSON.stringify(arguments[0], null, '\t') %>

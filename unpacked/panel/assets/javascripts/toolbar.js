SAMLChrome.factory('toolbar', function()
{

return {

    buttons: [],

    createButton: function(icon, name, input, callback)
    {
        this.buttons.push({
            icon: icon,
            name: name,
            input: input,
            callback: callback
        });
    },

    render: function()
    {
        var $html = $('<div class="toolbar"></div>');

        $.each(this.buttons, function(i, button)
        {
            var $button;

            if (button.input === true) {
                $button = $('<a href="#" title="' + button.name + '"><i class="fa fa-' + button.icon + '"></i></a><input id="' + button.name + 'Input" type="file"/>');
            } else {
                $button = $('<a href="#" title="' + button.name + '"><i class="fa fa-' + button.icon + '"></i></a>');
            }
            $button.on('click', button.callback);

            $html.append($button);
        });

        return $html;
    }

};

});
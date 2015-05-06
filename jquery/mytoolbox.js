jQuery.fn.mytoolbox = function() {
        return this.each(function() {
                jQuery(this).click(function () {
                       alert(this.id);
                });
        });
};

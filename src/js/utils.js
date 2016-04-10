export default {
    ucfirst: (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    generateRandomString: (length = 15) => {
        return Math.random().toString(36).substr(2, length);
    },

    getClosestWithClassName: (el, className) => {
        return MediumEditor.util.traverseUp(el, (element) => {
            return element.classList.contains(className);
        });
    },

    isChildOf: (el, parent) => {
        return MediumEditor.util.traverseUp(el, (element) => {
            return element === parent;
        }) ? true : false;
    },

    getElementsByClassName: (editors, className) => {
        const results = [];

        editors.forEach((editor) => {
            const elements = editor.getElementsByClassName(className);

            Array.prototype.forEach.call(elements, (element) => {
                results.push(element);
            });
        });

        return results;
    }
};

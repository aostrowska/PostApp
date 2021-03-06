module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
        "semi": ["off"],
        "comma-dangle": ["off"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/anchor-is-valid": ["error", {
            "components": ["Link"],
            "specialLink": ["hrefLeft", "hrefRight", "to"],
            "aspects": ["noHref", "invalidHref", "preferButton"]
        }]
    },
    "env": {
        "browser": true,
    },
};
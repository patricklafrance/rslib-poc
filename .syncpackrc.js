// @ts-check

/** @type {import("syncpack").RcFile} */
export default {
    "lintFormatting": false,
    "dependencyTypes": ["prod", "dev"],
    "semverGroups": [
        {
            "range": "",
            "dependencyTypes": ["prod", "dev"],
            "dependencies": ["**"],
            "packages": ["**"],
            "label": "packages version should be pinned"
        }
    ],
    "versionGroups": [
        {
            "dependencyTypes": ["prod", "dev"],
            "preferVersion": "highestSemver",
            "dependencies": ["**"],
            "packages": ["**"],
            "label": "packages should have a single version across the repository"
        },
        {
            "dependencies": ["@types/**"],
            "dependencyTypes": ["!dev"],
            "isBanned": true,
            "label": "@types packages should only be under devDependencies"
        }
    ],
    "indent": "    ",
    "sortFirst": [
        "name",
        "version",
        "type",
        "private",
        "files",
        "exports",
        "scripts",
        "dependencies",
        "devDependencies",
        "peerDependencies"
    ]
};

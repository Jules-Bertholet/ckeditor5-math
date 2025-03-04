# Changelog

## [27.1.4](https://github.com/isaul32/ckeditor5-math/compare/v27.1.3...v27.1.4) (current)

-   #45: docs(README,CHANGELOG): Format with prettier 2.3.0
-   #42: use `SwitchButton` to toggle "display mode". Thanks you @Jules-Bertholet!

## [27.1.3](https://github.com/isaul32/ckeditor5-math/compare/v27.1.2...27.1.3) (2021-05-16)

-   #41: Prevent inserting empty equations, thank you @Jules-Bertholet.

## [27.1.2](https://github.com/isaul32/ckeditor5-math/compare/v27.1.1...v27.1.2) (2021-03-29)

-   #38: You can now boot into a development instance with `yarn start` (supports
    live reload)
-   #40 (fixed #39): Support for upcasting Quill style tags

## [27.1.1](https://github.com/isaul32/ckeditor5-math/compare/v27.1.0...v27.1.1) (2021-03-29)

-   Update dependencies for CKEditor 27.1.0 ([Release
    notes](https://github.com/ckeditor/ckeditor5/releases/tag/v27.1.0))

## [27.1.0](https://github.com/isaul32/ckeditor5-math/compare/v27.0.1...v27.1.0) (2021-03-29)

-   #33: New optional config variables: `previewClassName` and `popupClassName` as an array
    of classes, this makes it easier to style the preview:

    ```javascript
    {
    	"math": {
    		"popupClassName": ["myeditor"],
    		"previewClassName": ["myeditor"]
    	}
    }
    ```

    This assures the preview appended to `document.body` and the popup both are
    accessible via `.myeditor`.

## [27.0.1](https://github.com/isaul32/ckeditor5-math/compare/v27.0.0...v27.0.1) (2021-03-29)

-   Typo fix from #32.

## [27.0.0](https://github.com/isaul32/ckeditor5-math/compare/v26.0.0...v27.0.0) (2021-03-29)

-   Update dependencies.

## [26.0.0](https://github.com/isaul32/ckeditor5-math/compare/v25.0.0...v26.0.0) (2021-03-04)

-   Update dependencies.

## [25.0.0](https://github.com/isaul32/ckeditor5-math/compare/v24.0.1...v25.0.0) (2021-03-02)

-   Update dependencies.

## [24.0.1](https://github.com/isaul32/ckeditor5-math/compare/24.0.0...v24.0.1) (2021-02-28)

-   Fix balloon view position.

## [24.0.0](https://github.com/isaul32/ckeditor5-math/compare/v23.3.0...24.0.0) (2020-12-12)

-   Update dependencies.

## [23.3.0](https://github.com/isaul32/ckeditor5-math/compare/23.2.2...v23.3.0) (2020-11-07)

-   Add autoformat support. ([3354872](https://github.com/isaul32/ckeditor5-math/commit/3354872))

## [23.2.2](https://github.com/isaul32/ckeditor5-math/compare/v23.2.1...23.2.2) (2020-11-03)

-   Fix placeholder handling. ([dc288ea](https://github.com/isaul32/ckeditor5-math/commit/dc288ea))
-   Fix selection after entering inline expression. ([2fea2e2](https://github.com/isaul32/ckeditor5-math/commit/2fea2e2))

## [23.2.1](https://github.com/isaul32/ckeditor5-math/compare/v23.2.0...v23.2.1) (2020-10-18)

-   Fix math editing button for balloon editor. ([3629401](https://github.com/isaul32/ckeditor5-math/commit/3629401))

## [23.2.0](https://github.com/isaul32/ckeditor5-math/compare/v23.1.0...v23.2.0) (2020-10-18)

-   Add math editing button for balloon editor. ([aa0392c](https://github.com/isaul32/ckeditor5-math/commit/aa0392c))

## [23.1.0](https://github.com/isaul32/ckeditor5-math/compare/v23.0.0...v23.1.0) (2020-10-11)

-   Add typesetting auto load feature. ([a665b64](https://github.com/isaul32/ckeditor5-math/commit/a665b64))

## [23.0.0](https://github.com/isaul32/ckeditor5-math/compare/v22.0.0...v23.0.0) (2020-10-02)

-   Update dependencies.

## [22.0.0](https://github.com/isaul32/ckeditor5-math/compare/v21.0.0...v22.0.0) (2020-08-29)

-   Seperate schema to display and inline.

### Bug fixes

-   Fix writer. ([7d0cd01](https://github.com/isaul32/ckeditor5-math/commit/7d0cd01))

### Other changes

-   Update dependencies.

## [21.0.0](https://github.com/isaul32/ckeditor5-math/compare/v20.0.0...v21.0.0) (2020-08-03)

-   Update dependencies.

## [20.0.0](https://github.com/isaul32/ckeditor5-math/compare/v19.0.0...v20.0.0) (2020-07-13)

-   Update dependencies.

## [19.0.0](https://github.com/isaul32/ckeditor5-math/compare/v18.0.1...v19.0.0) (2020-05-12)

-   Update dependencies.

## [18.0.1](https://github.com/isaul32/ckeditor5-math/compare/v18.0.0...v18.0.1) (2020-04-05)

### Bug fixes

-   Fix spacebar before formula bug in Firefox. [isaul32/ckeditor5-math#2](https://github.com/isaul32/ckeditor5-math/issues/2). ([9d15010](https://github.com/isaul32/ckeditor5-math/commit/9d15010))

## [18.0.0](https://github.com/isaul32/ckeditor5-math/compare/v17.0.1...v18.0.0) (2020-03-30)

-   Update dependencies.

## [17.0.1](https://github.com/isaul32/ckeditor5-math/compare/v17.0.0...v17.0.1) (2020-02-27)

### Bug fixes

-   Fix missing dependencies.

## [17.0.0](https://github.com/isaul32/ckeditor5-math/compare/v1.0.3...v17.0.0) (2020-02-27)

### Bug fixes

-   Fix dependencies resolving problem. Closes [isaul32/ckeditor5-math#1](https://github.com/isaul32/ckeditor5-math/issues/1). ([7d40a2c](https://github.com/isaul32/ckeditor5-math/commit/7d40a2c))

## [1.0.3](https://github.com/isaul32/ckeditor5-math/compare/v1.0.2...v1.0.3) (2019-10-11)

### Bug fixes

-   Fix preview flickering effect. ([70fefa8](https://github.com/isaul32/ckeditor5-math/commit/70fefa8))

-   Fix disabled eslint lines. ([1f96286](https://github.com/isaul32/ckeditor5-math/commit/1f96286))

### Other changes

-   Update some tests.

-   Update readme.

## [1.0.2](https://github.com/isaul32/ckeditor5-math/compare/v1.0.1...v1.0.2) (2019-10-07)

### Other changes

-   Update readme.

-   Add unique identifier for math preview. ([8b6804c](https://github.com/isaul32/ckeditor5-math/commit/98815fc))

## [1.0.1](https://github.com/isaul32/ckeditor5-math/compare/v1.0.0...v1.0.1) (2019-10-04)

### Bug fixes

-   Fix preview rendering bug. ([070f84e](https://github.com/isaul32/ckeditor5-math/commit/070f84e))

### Other changes

-   Remove paste from office dependency. ([8b6804c](https://github.com/isaul32/ckeditor5-math/commit/8b6804c))

## [1.0.0](https://github.com/isaul32/ckeditor5-math/compare/v1.0.0...v1.0.0) (2019-10-03)

Initial release.

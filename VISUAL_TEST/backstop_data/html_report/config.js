report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_The_F_thing_Homepage_0_exampleModalmodal-content_0_desktop_13_inc.png",
        "test": "../bitmaps_test/20190313-164548/backstop_default_The_F_thing_Homepage_0_exampleModalmodal-content_0_desktop_13_inc.png",
        "selector": "#exampleModal .modal-content",
        "fileName": "backstop_default_The_F_thing_Homepage_0_exampleModalmodal-content_0_desktop_13_inc.png",
        "label": "The F thing Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3333",
        "referenceUrl": "https://thefthing.com",
        "expect": 0,
        "viewportLabel": "desktop 13 inc",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "24.20",
          "analysisTime": 26
        },
        "diffImage": "../bitmaps_test/20190313-164548/failed_diff_backstop_default_The_F_thing_Homepage_0_exampleModalmodal-content_0_desktop_13_inc.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_The_F_thing_Men_0_document_0_desktop_13_inc.png",
        "test": "../bitmaps_test/20190313-164548/backstop_default_The_F_thing_Men_0_document_0_desktop_13_inc.png",
        "selector": "document",
        "fileName": "backstop_default_The_F_thing_Men_0_document_0_desktop_13_inc.png",
        "label": "The F thing Men",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3333/men",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop 13 inc",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ],
  "id": "backstop_default"
});
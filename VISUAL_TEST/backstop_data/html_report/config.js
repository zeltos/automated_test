report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_The_F_thing_Homepage_0_exampleModalmodal-content_0_desktop_13_inc.png",
        "test": "../bitmaps_test/20190311-113827/backstop_default_The_F_thing_Homepage_0_exampleModalmodal-content_0_desktop_13_inc.png",
        "selector": "#exampleModal .modal-content",
        "fileName": "backstop_default_The_F_thing_Homepage_0_exampleModalmodal-content_0_desktop_13_inc.png",
        "label": "The F thing Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://localhost:3333",
        "referenceUrl": "",
        "expect": 0,
        "viewportLabel": "desktop 13 inc",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -1
          },
          "misMatchPercentage": "11.05",
          "analysisTime": 31
        },
        "diffImage": "../bitmaps_test/20190311-113827/failed_diff_backstop_default_The_F_thing_Homepage_0_exampleModalmodal-content_0_desktop_13_inc.png"
      },
      "status": "fail"
    }
  ],
  "id": "backstop_default"
});
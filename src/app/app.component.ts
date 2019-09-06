import { Component, ViewChild, OnInit } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "./field.interface";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: FieldConfig[] = [
    {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
     {
      type: "input",
      label: "Username",
      inputType: "text",
      name: "name",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Email Address",
      inputType: "email",
      name: "email",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Email Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern(
            "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"
          ),
          message: "Invalid email"
        }
      ]
    },
    {
      type: "input",
      label: "Password",
      inputType: "password",
      name: "password",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Password Required"
        }
      ]
    },
    {
      type: "radiobutton",
      label: "Gender",
      name: "gender",
      options: ["Male", "Female"],
      value: "Male"
    },
    {
      type: "date",
      label: "DOB",
      name: "dob",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Birth Required"
        }
      ]
    },
    {
      type: "select",
      label: "Country",
      name: "country",
      value: "UK",
      options: ["India", "UAE", "UK", "US"]
    },
    {
      type: "checkbox",
      label: "Accept Terms",
      name: "term",
      value: true
    },
    {
      type: "button",
      label: "Save"
    }
    
  ];

ngOnInit() {
  let data = JSON.parse(JSON.stringify({
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://www.innomate.com.au/schema.json",
  "title": "Education Roadshow Demo - 2 Pods",
  "description": "Crestron Education Roadshow Demo Configuration JSON Schema",
  "type": "object",
  "required": [
    "Properties",
    "Devices",
    "User Interfaces",
    "Sources",
    "Destinations"
  ],
  "properties": {
    "Properties": {
      "description": "System Properties",
      "type": "object",
      "required": [
        "System Name",
        "Version",
        "Author",
        "Logo",
        "Log Level"
      ],
      "properties": {
        "System Name": {
          "description": "Name of the System Type",
          "type": "string"
        },
        "Version": {
          "description": "Version number of this System Configuration",
          "type": "string"
        },
        "Author": {
          "description": "Author of this System Configuration",
          "type": "string"
        },
        "Logo": {
          "description": "URL for logo graphics (optimal resolution: 330x80)",
          "type": "string"
        },
        "Log Level": {
          "description": "The Logging Level for this System Deployment",
          "type": "string",
          "enum": [
            "Trace",
            "Notice",
            "Warning",
            "Error",
            "Fatal"
          ]
        }
      }
    },
    "Devices": {
      "type": "array",
      "description": "The devices in this System Type",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "required": [
          "Name",
          "ID",
          "Type",
          "Class",
          "Connection"
        ],
        "properties": {
          "Name": {
            "type": "string"
          },
          "ID": {
            "type": "string",
            "description": "This is the ID by which other components of this Configuration File will reference this Device"
          },
          "Type": {
            "type": "string",
            "enum": [
              "Touch Panel",
              "NVX"
            ]
          },
          "Class": {
            "type": "string",
            "description": "The object class, usually a Crestron Library class controlling this Device"
          },
          "Connection": {
            "type": "object",
            "description": "The connection parameters for this Device",
            "required": [
              "IPID"
            ],
            "properties": {
              "IPID": {
                "type": "number",
                "description": "The device's Crestron IPID for connecting to the VC-4 controller.",
                "maximum": 255
              }
            }
          }
        }
      }
    },
    "User Interfaces": {
      "type": "array",
      "description": "The User Interfaces for this System Type",
      "items": {
        "type": "object",
        "required": [
          "Name",
          "Device ID"
        ],
        "properties": {
          "Name": {
            "type": "string"
          },
          "Device ID": {
            "type": "string",
            "description": "The ID of the device as defined under #/Devices/ID"
          }
        }
      }
    },
    "Sources": {
      "type": "array",
      "description": "The Audiovisual Sources available for this System Type",
      "minItems": 5,
      "maxItems": 5,
      "items": {
        "type": "object",
        "required": [
          "Name",
          "Device ID",
          "Group"
        ],
        "properties": {
          "Name": {
            "type": "string",
            "description": "The source name defined here is propagated to related button labels on the touch panel."
          },
          "Device ID": {
            "type": "string",
            "description": "The ID of the source device as defined under #/Devices/ID"
          },
          "Group": {
            "type": "string",
            "description": "Note: sources defined in the Pods group will activate the 'Pod HDMI' group source button when selected.",
            "enum": [
              "Presenter",
              "Pods"
            ]
          }
        }
      }
    },
    "Destinations": {
      "type": "array",
      "description": "The Audiovisual Destinations in this System Type",
      "minItems": 4,
      "maxItems": 4,
      "items": {
        "type": "object",
        "required": [
          "Name",
          "Device ID",
          "Group",
          "Display"
        ],
        "properties": {
          "Name": {
            "type": "string",
            "description": "The destination name defined here is propagated to related button labels on the touch panel."
          },
          "Device ID": {
            "type": "string",
            "description": "The ID of the destination device as defined under #/Devices/ID"
          },
          "Group": {
            "type": "string",
            "description": "Note: all destinations that belong to the same Group receive the same source input on a route.",
            "enum": [
              "Main",
              "Preview",
              "Pods"
            ]
          },
          "Display": {
            "type": "object",
            "description": "The display type used for this destination",
            
            "properties": {
              "Model": {
                "type": "string",
                "enum": [
                  "None",
                  "Sony VPL Projector",
                  "Epson EB/EH Projector",
                  "Panasonic PT Projector",
                  "Samsung LCD"
                ]
              },
              "IP Address": {
                "type": "string",
                "anyOf": [{
                    "format": "hostname"
                  },
                  {
                    "format": "ipv4"
                  }
                ]
              }
            }
          }
        }
      }
    }
  },
  "form": [{
      "key": "Properties",
      "expandable": true,
      "items": [
        "Properties.System Name",
        "Properties.Version",
        "Properties.Author",
        "Properties.Logo",
        "Properties.Log Level"
      ]
    }, {
      "key": "Devices",
      "expandable": true,
      "items": [
        "Devices[].Name",
        "Devices[].ID",
        "Devices[].Type",
        "Devices[].Class",
        "Devices[].Connection.IPID"
      ]
    }, {
      "key": "User Interfaces",
      "expandable": true,
      "items": [
        "User Interfaces[].Name",
        "User Interfaces[].Device ID"
      ]
    },
    {
      "key": "Sources",
      "expandable": true,
      "items": [
        "Sources[].Name",
        "Sources[].Device ID",
        "Sources[].Group"
      ]
    },
    {
      "key": "Destinations",
	  
      "expandable": true,
      "items": [
        "Destinations[].Name",
        "Destinations[].Device ID",
        "Destinations[].Group",
        "Destinations[].Display.Model",
        "Destinations[].Display.IP Address"
      ]
    }
  ]
}
))
  console.log(data,"");

// this.regConfig = data;

  };
  submit(value: any) {
}
}



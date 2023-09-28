# Google Sheets Row Insert Formula

Automatically injects custom formulas into specific columns in Google Sheets upon row insertion or content edits using Apps Script.

## Getting Started

### 1. Accessing Google Apps Script Editor

- Open your Google Sheet.
- Click on `Extensions` > `Apps Script`. This will open the Google Apps Script editor in a new tab.

### 2. Adding the Script

- In the Apps Script editor, remove any default code.
- Copy and paste the content from the `code.js` file in this repository into the editor.

### 3. Setting Up Triggers

- In the Apps Script editor, click on the clock icon on the left sidebar. This opens the project's triggers.
- Click on the blue `+ Add Trigger` button at the bottom right.
- In the function dropdown, select `onChange`.
- For event source, choose `From form` > `On change`.
- Save the trigger.

### 4. Granting Permissions

The first time the script tries to run, Google might prompt you to review permissions. Make sure to allow necessary permissions for the script to interact with your Google Sheet.

## Usage

Once set up, whenever a new row is added to the 'chatgpt' sheet, the script will automatically insert the specified formulas into columns G and H of the newly added row.
const settings = require('./config/settings');

const launchOnionSkin = require('./controllers/onionSkin');
const createNull = require('./controllers/createNull');
const createFolders = require('./controllers/createFolders');
const setSameLabelColors = require('./controllers/setSameLabelColors');
const clearShape = require('./controllers/clearShape');
const separateShapesDifferentLayers = require('./controllers/extractShapeDifferentLayers');
const separateShapesSingleLayer = require('./controllers/extractShapeSingleLayer');

Image.prototype.onDraw = require('./prototypes/imageDraw');

const buttonIcons = require('./files/buttons');

const myScriptBuildUI = (thisObj) => {
	const myPanel = (thisObj instanceof Panel) ?
		thisObj :
		new Window('palette', 'Untime Toolbox', undefined);

	// set groups >
	const mainGrp = myPanel.add('group', undefined);
	mainGrp.orientation = settings.general.orientation;
	mainGrp.alignment = ['left', 'top'];
	mainGrp.alignChildren = ['left', 'top'];

	const groupOne = mainGrp.add('group', undefined);
	groupOne.orientation = 'row';

	const separator01 = mainGrp.add('group', settings.general.separatorSize);
	changeBGcolor(separator01, [0, 0, 0, .2]);

	const groupTwo = mainGrp.add('group', undefined);
	groupTwo.orientation = 'row';

	const separator02 = mainGrp.add('group', settings.general.separatorSize);
	changeBGcolor(separator02, [0, 0, 0, .2]);

	const groupThree = mainGrp.add('group', undefined);
	groupThree.orientation = 'row';
	// set groups  <
	// set buttons >
	const createNullButton = groupOne.add('iconbutton', [0, 0, 24, 24], buttonIcons.createNull, { style: 'toolbutton', toggle: false });
	createNullButton.size = settings.general.buttonsSize;
	createNullButton.onClick = createNull;
	createNullButton.helpTip = 'Create a Null';

	onionSkinButton = groupOne.add('iconbutton', [0, 0, 24, 24], buttonIcons.onionSkin, { style: 'toolbutton', toggle: false });
	onionSkinButton.size = settings.general.buttonsSize;
	onionSkinButton.onClick = launchOnionSkin;
	onionSkinButton.helpTip = 'Enable/Disable Onion Skin';

	createFoldersButton = groupOne.add('iconbutton', [0, 0, 24, 24], buttonIcons.addFolder, { style: 'toolbutton', toggle: false });
	createFoldersButton.size = settings.general.buttonsSize;
	createFoldersButton.onClick = createFolders;
	createFoldersButton.helpTip = 'Create Folders';

	setSameLabelColorsButton = groupOne.add('iconbutton', [0, 0, 24, 24], buttonIcons.labelFolder, { style: 'toolbutton', toggle: false });
	setSameLabelColorsButton.size = settings.general.buttonsSize;
	setSameLabelColorsButton.onClick = setSameLabelColors;
	setSameLabelColorsButton.helpTip = 'Change label of Folders';

	clearShapeButton = groupTwo.add('iconbutton', [0, 0, 24, 24], buttonIcons.clearShape, { style: 'toolbutton', toggle: false });
	clearShapeButton.size = settings.general.buttonsSize;
	clearShapeButton.onClick = clearShape;
	clearShapeButton.helpTip = 'Clear Shape';

	separateShapesSingleLayerButton = groupTwo.add('iconbutton', [0, 0, 24, 24], buttonIcons.separateShapesSingleLayer, { style: 'toolbutton', toggle: false });
	separateShapesSingleLayerButton.size = settings.general.buttonsSize;
	separateShapesSingleLayerButton.onClick = separateShapesSingleLayer;
	separateShapesSingleLayerButton.helpTip = 'Separate shape into single layer';

	separateShapesDifferentLayersButton = groupTwo.add('iconbutton', [0, 0, 24, 24], buttonIcons.separateShapesDifferentLayers, { style: 'toolbutton', toggle: false });
	separateShapesDifferentLayersButton.size = settings.general.buttonsSize;
	separateShapesDifferentLayersButton.onClick = separateShapesDifferentLayers;
	separateShapesDifferentLayersButton.helpTip = 'Separate shape into different layers';

	// settingsButton = groupThree.add('button', undefined, 'S');
	// settingsButton.size = settings.general.buttonsSize;
	// settingsButton.onClick = openSettings;
	// settingsButton.helpTip = 'Settings';
	// settingsButton.enabled = false;
	// set buttons <

	// Setup panel sizing and make panel resizable
	myPanel.layout.layout(true);
	myPanel.minimumSize = mainGrp.size;
	myPanel.layout.resize();
	myPanel.onResizing = myPanel.onResize = () => this.layout.resize();

	return myPanel;
};

const myScript = (thisObj) => {
	const myScriptPal = myScriptBuildUI(thisObj);

	// if ((myScriptPal != null) && (myScriptPal instanceof Window)) {
	// 	myScriptPal.center();
	// 	myScriptPal.show();
	// }
};

myScript(this);

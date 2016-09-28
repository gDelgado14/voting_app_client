import jsdom from 'jsdom'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
const win = doc.defaultView

// create jsdom versions of document and window
// which would normally be provided by the browser
// then we put them on the node global object
// in order to not require us to refer to document and window for 
// object method calls such as navigator
// otherwise we would have to specify window.navigator
global.document = doc
global.window = win

// we need to take all the properties of of window
// and hoist them to the global object
Object.keys(window).forEach(key => {
	if (!(key in global))
		global[key] = window[key]
})

chai.use(chaiImmutable)
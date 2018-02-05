import getFormId from './getFormId'

const degRange = 2
const randAngle = () => Math.random()*degRange - degRange / 2

export default () => ({
	formId: getFormId(),
	rotation: randAngle(),
})
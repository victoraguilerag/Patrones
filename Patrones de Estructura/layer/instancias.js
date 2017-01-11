//Instacias

ui = new PresentationLayer();
logic = new LogicLayer();
data = new DataLayer();

ui.setLowerLayer(logic);
logic.setLowerLayer(data);

ui.s3('exampleParam')

console.log(ui,logic,data);
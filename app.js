//DEPENDENCIAS DA APLICAÇÃO 
const { createError, path, express, cors } = require('./config/dependenciasApp')

//ROTAS DOS PRODUTOS 
const { indexRouterRequest, molduraRouterRequest, lousaRouterRequest, sinalRouterRequest} = require('./config/routesApp')
const app = express();

//(Cross-Origin Resource Sharing)
app.use(cors());

// DEFIÇÃO DAS VIEWS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ARQUIVOS ESTÁTICOS
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static('assets'));
app.use('/style', express.static('style'));
app.use('/public', express.static('public'));

// TODAS AS ROTAS DISPONIVEIS 
app.use('/', indexRouterRequest)
app.use('/moldura', molduraRouterRequest)
app.use('/lousa', lousaRouterRequest)
app.use('/sinal', sinalRouterRequest)

// ERROS DE CONEXÃO COM O SERVIDOS
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

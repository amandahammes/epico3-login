Projeto realizado para praticar CSS/ HTML / JS.

Criando página de login:

- Estruturação do HTML
    Informações importantes no HEADER;
    Organização dos elementos no body, separando por sections, form e divs.

- Criação de #IDs e .CLASSEs

- Estilização da página com CSS usando #IDs e .CLASSEs
    Posições, tamanhos, cores e fontes;
    Responsividade;

- Estuturação da interatividade da página com .js


Deploy:

    - Realização de deploy no netlify;
    - Configuração no Publish Directory: autalização com a pasta: src 
    - Inserção de arquivos netlify.toml e _redirects para carregamento do código na página do projeto.


Informações em cada arquivo:

netlify.toml

[build]
  publish = "src"


_redirects

/*    /index.html   200
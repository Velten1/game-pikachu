# Game Extension – Runner do Pikachu (HTML/CSS/JS)

Um mini jogo estilo runner feito com HTML, CSS e JavaScript puro. Desvie dos obstáculos, acumule pontos e use o botão Restart para recomeçar a qualquer momento.

## 📸 Preview

Abra o `game-extension.html` no navegador para jogar. Você também pode hospedar via GitHub Pages (passo a passo abaixo).

## 🎮 Como jogar

- **Pular**: pressione qualquer tecla do teclado.
- **Objetivo**: evitar a colisão com a `pokeball` e com o `charizard`.
- **Pontuação**: aumenta continuamente enquanto você sobrevive. Em marcos de pontuação, a velocidade dos inimigos aumenta.
- **Reiniciar**: clique em **Restart** para voltar ao início (pontuação zera e as animações são restauradas).

## 🚀 Executar localmente

1. Baixe/clonar este repositório.
2. Abra o arquivo `game-extension.html` em um navegador moderno (Chrome, Edge, Firefox). Basta dar dois cliques.
   - Dica: você pode usar uma extensão/servidor local (ex.: Live Server) se preferir.

## 🧩 Funcionalidades e mecânicas

- Personagem principal: `pikachu.gif` com animação de pulo.
- Obstáculos: `pokeball` e `charizard` com animações contínuas.
- Progressão de dificuldade baseada no score (1000, 2000, 3000, 4000, 5000).
- Detecção de colisão pausando as animações e trocando sprite do Pikachu para `crash.png`.
- Botão **Restart** que restaura estado, classes e reinicia o loop do jogo.

## 🗂️ Estrutura do projeto

```
game-extension/
├─ background.gif (opcional)
├─ button.png
├─ charizard.gif
├─ clouds.png
├─ crash.png
├─ game-extension.css
├─ game-extension.html
├─ game-extension.js
├─ nuvens.png (não utilizado diretamente)
├─ pikachu.gif
└─ pokeball.png
```

## 🏗️ Como o código está organizado

- `game-extension.html`: estrutura do jogo (board, imagens, botão Restart e placar).
- `game-extension.css`: estilos e keyframes para pulo, nuvens, pokebola e charizard.
- `game-extension.js`:
  - `jump()`: aplica/remover a classe de pulo.
  - `updatescore1..5()`: aumentam dificuldade conforme score.
  - `startGameLoop()`: inicia o loop principal que atualiza score e verifica colisões.
  - `restart()`: restaura sprites, classes e estilos inline, zera score e reinicia o loop. Também é exposta via `window.restart` para funcionar com o `onclick` do HTML.

## 🛠️ Personalização rápida

- Velocidade dos inimigos: ajuste as `animation-duration` nas classes `.pokeball*` e `.charizard*` em `game-extension.css`.
- Marcos de dificuldade: altere os limites dentro de `updatescore1..5()` em `game-extension.js`.
- Pulo do Pikachu: ajuste o keyframe `@keyframes jump` (alturas/tempos) no CSS.
- Colisão: as regras de colisão estão no loop em `game-extension.js` (comparações de posição).

## 🌐 Publicar no GitHub Pages

1. Faça push do repositório para o GitHub.
2. No repositório, vá em Settings → Pages.
3. Em "Build and deployment", selecione a branch (ex.: `main`) e a pasta `/root`.
4. Salve. O GitHub Pages irá gerar uma URL pública para o jogo.

## 🧪 Solução de problemas

- **Restart não funciona**: verifique se `window.restart = restart` está presente no `game-extension.js` e se o `id="restart"` do botão está correto no HTML.
- **Imagem de colisão não aparece**: garanta que o caminho é `crash.png` (mesmo diretório do HTML) e que o arquivo existe.
- **Nada se mexe**: certifique-se de abrir o `game-extension.html` (não abra somente o CSS/JS).
- **Pulo não dispara**: o `keydown` é global; cheque se a janela está focada.

## 🤝 Contribuição

Sinta-se à vontade para abrir issues e enviar PRs com melhorias de gameplay, sprites, organização de código ou novas mecânicas.

## 📄 Licença

Defina a licença que preferir neste projeto (ex.: MIT). Se optar por MIT, crie um arquivo `LICENSE` com o texto correspondente.



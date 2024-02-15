import turtle

# Configuração inicial
t = turtle.Turtle()
t.speed(3)  # Velocidade do desenho

# Desenha um coração
t.fillcolor('red')
t.begin_fill()
t.left(140)
t.forward(180)
t.circle(-90, 200)
t.setheading(60)
t.circle(-90, 200)
t.forward(180)
t.end_fill()

# Esconde a tartaruga
t.hideturtle()

# Mantém a janela aberta
turtle.done()



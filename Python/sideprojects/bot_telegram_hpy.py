import logging
from telegram import Update
from telegram.ext import ApplicationBuilder, ContextTypes, CommandHandler, MessageHandler, filters

# 1. Configurare logare
logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

# 2. Definim funcțiile (Handlerele)
async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await context.bot.send_message(chat_id=update.effective_chat.id, text="Salut! Trimite-mi un GIF.")

async def handle_gif(update: Update, context: ContextTypes.DEFAULT_TYPE):
    # Luăm file_id-ul animației (GIF-ului)
    gif_file_id = update.message.animation.file_id
    # Trimitere înapoi
    await context.bot.send_animation(chat_id=update.effective_chat.id, animation=gif_file_id)

# 3. Construim și pornim botul
if __name__ == '__main__':
    application = ApplicationBuilder().token("8837202603:AAHWvkw61SR82AuOgoL9fSzDQVtVvUyjXLAi").build()
    
    # Adăugăm handlerele
    application.add_handler(CommandHandler('start', start))
    application.add_handler(MessageHandler(filters.ANIMATION, handle_gif))
    
    # Pornim
    application.run_polling()

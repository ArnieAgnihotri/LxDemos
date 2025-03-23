export type IndustryCategory =
  | "Data Science & Research"
  | "Healthcare"
  | "System Administration"
  | "Biology Research"
  | "DevOps"
  | "Web Development"
  | "Software Engineering"
  | "Cybersecurity"
  | "Cloud Computing"
  | "Machine Learning"
  | "Game Development"
  | "IoT & Embedded Systems"
  | "Finance"
  | "Education"
  | "Media & Entertainment"

export interface ConfigurationData {
  id: string
  title: string
  author: string
  stars: number
  description: string
  content: string
  category: string
  industries: IndustryCategory[]
  createdAt: string
  updatedAt: string
  tags: string[]
}

// Mock data for configurations with industry categories
export const CONFIGURATIONS: Record<string, ConfigurationData[]> = {
  vim: [
    {
      id: "1",
      title: "Minimal Vim",
      author: "vimmaster",
      stars: 245,
      description: "A lightweight vim configuration for beginners",
      content:
        "\" Minimal Vim Configuration\nset nocompatible\nfiletype plugin indent on\nsyntax on\nset number\nset relativenumber\nset incsearch\nset hlsearch\nset ignorecase\nset smartcase\nset tabstop=4\nset shiftwidth=4\nset expandtab\nset autoindent\nset smartindent\nset backspace=indent,eol,start\nset showcmd\nset showmode\nset showmatch\nset ruler\nset wildmenu\nset wildmode=list:longest,full\nset laststatus=2\nset statusline=%F%m%r%h%w\\ [FORMAT=%{&ff}]\\ [TYPE=%Y]\\ [POS=%l,%v][%p%%]\\ %{strftime('%d/%m/%y\\ -\\ %H:%M')}\nset history=1000\nset undolevels=1000\nset title\nset visualbell\nset noerrorbells\nset t_vb=\nset tm=500\nset foldmethod=indent\nset foldnestmax=3\nset nofoldenable",
      category: "vim",
      industries: ["Web Development", "Software Engineering", "Education"],
      createdAt: "Jan 15, 2023",
      updatedAt: "Mar 22, 2023",
      tags: ["vim", "terminal", "linux", "productivity"],
    },
    {
      id: "2",
      title: "Ultimate Vim",
      author: "poweruser",
      stars: 1024,
      description: "Feature-rich vim setup for power users",
      content:
        "\" Ultimate Vim Configuration\n\" This is a comprehensive vim configuration for power users\n\nset nocompatible\nfiletype off\n\n\" Vundle setup\nset rtp+=~/.vim/bundle/Vundle.vim\ncall vundle#begin()\n\nPlugin 'VundleVim/Vundle.vim'\nPlugin 'tpope/vim-fugitive'\nPlugin 'tpope/vim-surround'\nPlugin 'scrooloose/nerdtree'\nPlugin 'scrooloose/syntastic'\nPlugin 'vim-airline/vim-airline'\nPlugin 'vim-airline/vim-airline-themes'\nPlugin 'altercation/vim-colors-solarized'\nPlugin 'kien/ctrlp.vim'\nPlugin 'easymotion/vim-easymotion'\nPlugin 'majutsushi/tagbar'\nPlugin 'airblade/vim-gitgutter'\nPlugin 'Valloric/YouCompleteMe'\nPlugin 'SirVer/ultisnips'\nPlugin 'honza/vim-snippets'\n\ncall vundle#end()\nfiletype plugin indent on\n\n\" General settings\nsyntax enable\nset background=dark\ncolorscheme solarized\nset number\nset relativenumber\nset cursorline\nset wildmenu\nset showmatch\nset incsearch\nset hlsearch\nset ignorecase\nset smartcase\nset foldenable\nset foldlevelstart=10\nset foldnestmax=10\nset foldmethod=indent\nset backspace=indent,eol,start\nset tabstop=4\nset softtabstop=4\nset shiftwidth=4\nset expandtab\nset autoindent\nset smartindent\nset laststatus=2\nset noshowmode\nset showcmd\nset ruler\nset visualbell\nset t_vb=\nset tm=500\nset history=1000\nset undolevels=1000\nset undofile\nset undodir=~/.vim/undodir\nset backup\nset backupdir=~/.vim/backupdir\nset directory=~/.vim/swapdir\n\n\" Key mappings\nlet mapleader = ','\nnnoremap <leader>w :w<CR>\nnnoremap <leader>q :q<CR>\nnnoremap <leader>x :x<CR>\nnnoremap <leader>e :e<Space>\nnnoremap <leader>v :vsplit<Space>\nnnoremap <leader>s :split<Space>\nnnoremap <leader>h :set hlsearch!<CR>\nnnoremap <leader>n :NERDTreeToggle<CR>\nnnoremap <leader>t :TagbarToggle<CR>\nnnoremap <leader>g :GitGutterToggle<CR>\nnnoremap <leader>p :CtrlP<CR>\nnnoremap <leader>b :CtrlPBuffer<CR>\n\n\" Plugin settings\nlet g:airline_powerline_fonts = 1\nlet g:airline_theme = 'solarized'\nlet g:syntastic_always_populate_loc_list = 1\nlet g:syntastic_auto_loc_list = 1\nlet g:syntastic_check_on_open = 1\nlet g:syntastic_check_on_wq = 0\nlet g:ctrlp_map = '<c-p>'\nlet g:ctrlp_cmd = 'CtrlP'\nlet g:ctrlp_working_path_mode = 'ra'\nlet g:UltiSnipsExpandTrigger = '<tab>'\nlet g:UltiSnipsJumpForwardTrigger = '<tab>'\nlet g:UltiSnipsJumpBackwardTrigger = '<s-tab>'",
      category: "vim",
      industries: ["Software Engineering", "DevOps", "System Administration"],
      createdAt: "Feb 10, 2023",
      updatedAt: "Mar 15, 2023",
      tags: ["vim", "terminal", "linux", "productivity", "advanced"],
    },
  ],
  bashrc: [],
  zshrc: [],
  tmux: [],
  neovim: [],
}

// Helper function to get configurations by industry
export function getConfigurationsByIndustry(industry: IndustryCategory): ConfigurationData[] {
  const configurations: ConfigurationData[] = []
  for (const category in CONFIGURATIONS) {
    CONFIGURATIONS[category].forEach((config) => {
      if (config.industries.includes(industry)) {
        configurations.push(config)
      }
    })
  }
  return configurations
}

// Helper function to get configuration by category and ID
export function getConfig(category: string, id: string): ConfigurationData | null {
  const configs = CONFIGURATIONS[category]
  if (!configs) return null

  const config = configs.find((c) => c.id === id)
  return config || null
}

// Helper function to get configuration by ID
export function getConfigurationById(id: string): ConfigurationData | null {
  // Iterate through all categories to find the configuration with the given ID
  for (const category in CONFIGURATIONS) {
    const configs = CONFIGURATIONS[category]
    const config = configs.find((c) => c.id === id)
    if (config) {
      return config
    }
  }
  return null
}

// Helper function to get installation instructions based on category
export function getInstallInstructions(category: string): string {
  switch (category) {
    case "vim":
      return `# Installation Instructions for Vim Configuration

1. First, make sure you have Vim installed:
   \`\`\`bash
   sudo apt update
   sudo apt install vim
   \`\`\`

2. Create or backup your existing .vimrc file:
   \`\`\`bash
   mv ~/.vimrc ~/.vimrc.backup # Backup existing file if needed
   touch ~/.vimrc
   \`\`\`

3. Copy the configuration to your .vimrc file:
   \`\`\`bash
   # Copy the configuration from above and paste it into ~/.vimrc
   vim ~/.vimrc
   \`\`\`

4. Install any required plugins (if applicable).

5. Restart Vim to apply the changes.`
    case "bashrc":
      return `# Installation Instructions for Bash Configuration

1. Make sure you're using Bash as your shell:
   \`\`\`bash
   echo $SHELL # Should output /bin/bash
   \`\`\`

2. Create or backup your existing .bashrc file:
   \`\`\`bash
   mv ~/.bashrc ~/.bashrc.backup # Backup existing file if needed
   touch ~/.bashrc
   \`\`\`

3. Copy the configuration to your .bashrc file:
   \`\`\`bash
   # Copy the configuration from above and paste it into ~/.bashrc
   vim ~/.bashrc
   \`\`\`

4. Apply the changes:
   \`\`\`bash
   source ~/.bashrc
   \`\`\``
    default:
      return "# Installation Instructions\n\nNo specific instructions available for this configuration type."
  }
}

// Helper function to get all industries
export function getAllIndustries(): IndustryCategory[] {
  const industries: IndustryCategory[] = [
    "Data Science & Research",
    "Healthcare",
    "System Administration",
    "Biology Research",
    "DevOps",
    "Web Development",
    "Software Engineering",
    "Cybersecurity",
    "Cloud Computing",
    "Machine Learning",
    "Game Development",
    "IoT & Embedded Systems",
    "Finance",
    "Education",
    "Media & Entertainment",
  ]
  return industries
}


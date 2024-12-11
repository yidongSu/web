const story = {
    start: {
        text: `艾丽，一位私家侦探，接到了一封来自偏远小镇的匿名信，信中提到一系列未解的失踪案可能与镇上的古老传说有关。尽管心中充满疑惑，她还是决定前往调查。(Aly, a private detective, received an anonymous letter from a remote town, mentioning a series of unsolved disappearances that might be related to the town's ancient legends. Despite her doubts, she decided to investigate.)`,
        options: [
            { key: 'chapter1.A', text: `直接前往警局，了解情况 (Go directly to the police station to gather information)` },
            { key: 'chapter1.B', text: `先找当地居民打听消息 (Ask the local residents for information first)` },
            { key: 'chapter1.C', text: `晚上独自探索小镇，感受氛围 (Explore the town alone at night and feel the atmosphere)` }
        ]
    },
    chapter1: {
        A: {
            text: `警长透露了一些奇怪的现象，最近夜晚总能听到孩子们唱着古老的歌谣。(The chief mentioned some strange phenomena; recently, children have been singing ancient songs at night.)`,
            options: [
                { key: 'chapter2.D', text: `你骂了一顿警长，说他是菜比，这都搞不定(You scolded the chief and called him a fool for not being able to handle this)` },
                { key: 'chapter2.A', text: `请求查看失踪者的档案和资料 (Request access to the missing person's records and files)` }
            ]
        },
        B: {
            text: `一位老妇人警告你说，每当月圆之夜，镇中心的钟楼就会发出不祥的声音。(An old woman warned you that during every full moon night, the central bell tower emits ominous sounds.)`,
            options: [
                { key: 'chapter2.B', text: `晚上守在钟楼附近观察 (Observe the bell tower area at night)` },
                { key: 'chapter2.E', text: `继续向其他居民收集信息 (Continue gathering information from other residents)` }
            ]
        },
        C: {
            text: `在寂静的街道上，你听到了微弱的吟唱声，似乎来自地下。(On the quiet street, you heard faint chanting, seemingly coming from underground.)`,
            options: [
                { key: 'chapter2.C', text: `跟随声音寻找源头 (Follow the voices to find their source)` },
                { key: 'chapter2.F', text: `回到旅馆整理思路 (Return to the lodge to organize your thoughts)` }
            ]
        }
    },
    chapter2: {
        A: {
            text: `发现了关于献祭仪式的手抄本。(Find a handwritten book about a sacrificial ritual.)`,
            options: [
                { key: 'chapter3.A', text: `尝试解读手抄本 (Try to decipher the handwritten book)` },
                { key: 'chapter3.A', text: `向专家求助理解内容 (Ask an expert to help understand the content)` }
            ]
        },
        B: {
            text: `半夜时分，钟楼突然响起一阵急促的钟声，随后一切归于平静。(At midnight, a series of clocksounds suddenly rang out from the bell tower, followed by silence.)`,
            options: [
                { key: 'chapter3.B', text: `第二天询问钟楼管理员 (Ask the bell-tower administrator next day)` },
                { key: 'chapter3.C', text: `检查钟楼内部 (Check inside the bell tower)` }
            ]
        },
        C: {
            text: `声音带你来到了一片废弃的墓地，这里立着一块刻满符文的石碑。(The sound carries you to a desolate graveyard, where a stone tablet is set in the center, bearing a rune script.)`,
            options: [
                { key: 'chapter3.D', text: `触摸石碑 (Touch the tablet)` },
                { key: 'chapter3.E', text: `拍照记录并离开 (Take a photo and leave)` }
            ]
        },
        D: {
            text:'你被警长赶回家了(The chief policeman sends you home.)'
        },
        E: {
            text: '你因扰民被驱逐出镇子(The town mayor expels you from the town for disturbing the peace.)'
        },
        F: {
            text: '你预感到有大问题，直接跑路了。你以为自己逃脱了所有诡异事件，过上了平凡的生活。然而，在某个深夜，你收到了一封神秘的包裹，里面有一张照片——那是你从未见过的地方，照片背后写着：“我们一直在等你。” 这封信改变了你对整个事件的看法，迫使你重新审视过去的每一个选择，并考虑是否要再次踏入那片未知的土地(You have a premonition that something is wrong and run away. You think you have escaped all the weird events and live an ordinary life. However, late one night, you receive a mysterious package with a photo inside – a place you have never seen before, with the words on the back of the photo: "We have been waiting for you." This letter changes your perspective on the whole affair, forcing you to revisit every choice you made in the past and consider whether you want to set foot in that unknown land again)'
        }
    },
    chapter3: {
        A: {
            text:'手抄本里揭示出一个隐藏多年的家族秘密，他们世代守护着某种力量。(The handwritten book reveals a long-hidden family secret: they have been guarding a certain power for generations.)',
            options: [
                { key: 'chapter4.A', text: `联系可能的家族成员(Contact possible family members)` },
                { key: 'chapter4.B', text: `保护这份知识不被外人知晓(Protect this knowledge from outsiders)`}
            ]
        },
        B: {
            text: ` 管理员显得非常紧张，暗示说钟声是警告，而不是召唤。(The administrator seems very tense, hinting that the bell is a warning, not a summon.)`,
            options: [
                { key: 'chapter4.D', text: `相信他的说法(Believe his statement)` },
                { key: 'chapter4.E', text: `怀疑他有所隐瞒，继续追问(Skepticism, continue to ask questions)`}
            ]
        },
        C: {
            text: `你发现了一扇奇怪的门(You found a strange door)`,
            options: [
                { key: 'chapter4.D', text: `你打开了门(You opened the door)` },
                { key: 'chapter4.F', text: `你选择回去询问管理员(You decided to go back and ask the administrator)`}
            ]
        },
        D: {
            text: `石碑开始发光，周围环境变得扭曲，仿佛进入了另一个时空。(The stone tablet begins to glow, and the surrounding environment becomes distorted, as if entering another time and space.)`,
            options: [
                { key: 'chapter4.G', text: `留在原地(Stay in place)` },
                { key: 'chapter4.H', text: `逃离这个地方(Escape this place)`}
            ]
        },
        E: {
            text: `你在照片中看见了鬼魂，直接吓尿跑路了(You saw the ghost in the photo and directly ran away in fear of urination.)`,
        }

    },
    chapter4: {
        A: {
            text: `他们希望你保守秘密(They hope you keep your secrets.)`,
            options: [
                { key: 'chapter4.B', text: `你选择保守秘密(You choose to keep it a secret.)`},
                { key: 'chapter4.C', text: `你选择告诉别人(You choose to tell others.)`},
            ]
        },
        B: {
            text: `家族成员感谢你的帮助，并揭露了亚特兰蒂斯文明留下的遗产。(The family members thank you for your help and reveal the legacy left behind by the Atlantis civilization.)`,
            options: [
                { key: 'chapter5.A', text: `加入他们共同守护秘密(Join them to guard the secret together.)`},
                { key: 'chapter5.B', text: `拒绝参与，但承诺保守秘密(Refuse to participate but promise to keep the secret.)`},
            ]
        },
        C: {
            text:'你在路上被车撞死了(You were run over by a car on the way.)'
        },
        D: {
            text:' 你发现自己是个傻比(You found out that you are a fool.)'
        },
        E: {
            text:' 管理员终于坦白，原来钟楼之下藏着通往亡灵世界的门户。(The caretaker finally confesses that there is a gate to the world of the dead hidden beneath the clock tower.)',
            options: [
                { key: 'chapter5.C', text: `你不信，选择骂管理员是个傻逼(You don't believe it, so you choose to mock the caretaker.)`},
                { key: 'chapter4.F', text: `利用门户探索未知世界(Explore the unknown world through the portal)`},
             ]
                },
        F: {
            text:'管理员把你带到门那，把你丢了进去。(The caretaker took you to the door and threw you in.)'
            ,
            options: [
                { key: 'chapter5.D', text: `你在情急之下把他也拉了进来(In a panic, you also pulled him in)`},
                { key: 'chapter5.C', text: `你大骂他(You curse him)`},
            ]
        } ,
        G: {
            text:'你发现自己置身于一个由亡灵构成的世界，这里有无数等待人肉的灵魂。(You find yourself in a world composed of spirits, where there are countless souls waiting to be eaten.)'
            ,
            options: [
                { key: 'chapter5.E', text: `你边跑边寻找返回现实世界的方法(You run around looking for a way to return to the real world)`},
                { key: 'chapter5.A', text: `你选择躺下等死(You choose to lie down and die)`},
            ]
        },
        H: {
            text:'你把鬼魂全放了出来，你完了(You released all the ghosts, and you are finished.)'
        }
    },
    chapter5: {
       A:{ text: `你被他们献祭了(You were sacrificed to them.)`,
       },
       B:{text: `你回到了日常生活中，但不久之后发现自己不断重复同一天的经历。每次循环，你都能学到更多关于小镇的秘密，直到有一天，你遇到了未来的自己，他告诉你你已经接触太多了，逃不出去了。兄弟们一波了(You returned to your daily life, but you soon discovered that you were repeating the same day over and over again. Every time you looped, you learned more about the secrets of the town, until one day, you encountered your future self, who told you that you had been exposed too much and could not escape.)`,
       },
       C:{text: `管理员把你禁言了,你把自己憋死了(The administrator banned you from speaking, and you suffocated yourself.)`,
       },
       D:{text: `你们都被鬼魂献祭了(You were all sacrificed to ghosts.)`,
   },
       E:{text:'跑不动了，你死了(You ran out of energy and died.)'}
    }
};

function showStory(chapter) {
    const storyDiv = document.getElementById('story');
    storyDiv.innerHTML = ''; // 清空之前的内容

    if (typeof chapter === 'object') {
        storyDiv.innerHTML = `<p>${chapter.text}</p >`;
        chapter.options.forEach(option => {
            const button = document.createElement('a');
            button.href = '#';
            button.className = 'button';
            button.textContent = option.text;
            button.onclick = function(event) {
                event.preventDefault();
                console.log(`Next path: ${option.key}`); // 调试信息
                nextStory(option.key);
            };
            storyDiv.appendChild(button);
        });
    } else if (typeof chapter === 'string') {
        storyDiv.innerHTML = `<p>${chapter}</p >`;
    }
}

function nextStory(path) {
    let currentChapter = story;
    const pathParts = path.split('.');
    for (let part of pathParts) {
        if (currentChapter[part]) {
            currentChapter = currentChapter[part];
        } else {
            console.error(`Path not found: ${path}`);
            alert(`路径错误: ${path}`);
            return;
        }
    }
    console.log(`Loading chapter:`, currentChapter); // 调试信息
    showStory(currentChapter);
}

// 初始化故事
showStory(story.start);
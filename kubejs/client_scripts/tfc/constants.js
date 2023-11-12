// priority: 199

const tfcItemsToHide = [
    // Simple metals
    // Bismuth
    'tfc:metal/ingot/bismuth',
    'tfc:metal/sheet/bismuth',
    'tfc:metal/double_sheet/bismuth',
    'tfc:metal/rod/bismuth',
    
    // Gold
    'tfc:metal/ingot/gold',
    'tfc:metal/sheet/gold',
    'tfc:metal/double_sheet/gold',

    // Nickel
    'tfc:metal/sheet/nickel',
    'tfc:metal/double_sheet/nickel',

    // Rose Gold
    'tfc:metal/ingot/rose_gold',
    'tfc:metal/sheet/rose_gold',
    'tfc:metal/double_sheet/rose_gold',
    'tfc:metal/rod/rose_gold',

    // Silver
    'tfc:metal/sheet/silver',
    'tfc:metal/double_sheet/silver',

    // Tin
    'tfc:metal/sheet/tin',
    'tfc:metal/double_sheet/tin',

    // Brass
    'tfc:metal/sheet/brass',
    'tfc:metal/double_sheet/brass',

    // Zinc
    'tfc:metal/sheet/zinc',
    'tfc:metal/double_sheet/zinc',

    // Sterling Silver
    'tfc:metal/ingot/sterling_silver',
    'tfc:metal/sheet/sterling_silver',
    'tfc:metal/double_sheet/sterling_silver',
    'tfc:metal/rod/sterling_silver',

    // Cast
    'tfc:metal/ingot/cast_iron',
    'tfc:metal/sheet/cast_iron',
    'tfc:metal/double_sheet/cast_iron',
    'tfc:metal/rod/cast_iron',

    // Metals with tools
    // Copper
    'tfc:metal/ingot/copper', 
    'tfc:metal/sheet/copper', 
    'tfc:metal/double_sheet/copper', 
    'tfc:metal/rod/copper', 
    'tfc:metal/pickaxe/copper', 
    'tfc:metal/pickaxe_head/copper', 
    'tfc:metal/axe/copper', 
    'tfc:metal/axe_head/copper', 
    'tfc:metal/shovel/copper', 
    'tfc:metal/shovel_head/copper', 
    'tfc:metal/hoe/copper', 
    'tfc:metal/hoe_head/copper', 
    'tfc:metal/hammer/copper', 
    'tfc:metal/hammer_head/copper', 
    'tfc:metal/saw/copper', 
    'tfc:metal/saw_blade/copper', 
    'tfc:metal/sword/copper', 
    'tfc:metal/sword_blade/copper', 
    'tfc:metal/knife/copper', 
    'tfc:metal/knife_blade/copper', 
    'tfc:metal/scythe/copper', 
    'tfc:metal/scythe_blade/copper',

    // Bismuth Bronze
    'tfc:metal/ingot/bismuth_bronze', 
    'tfc:metal/sheet/bismuth_bronze', 
    'tfc:metal/double_sheet/bismuth_bronze', 
    'tfc:metal/rod/bismuth_bronze', 
    'tfc:metal/pickaxe/bismuth_bronze', 
    'tfc:metal/pickaxe_head/bismuth_bronze', 
    'tfc:metal/axe/bismuth_bronze', 
    'tfc:metal/axe_head/bismuth_bronze', 
    'tfc:metal/shovel/bismuth_bronze', 
    'tfc:metal/shovel_head/bismuth_bronze', 
    'tfc:metal/hoe/bismuth_bronze', 
    'tfc:metal/hoe_head/bismuth_bronze', 
    'tfc:metal/hammer/bismuth_bronze', 
    'tfc:metal/hammer_head/bismuth_bronze', 
    'tfc:metal/saw/bismuth_bronze', 
    'tfc:metal/saw_blade/bismuth_bronze', 
    'tfc:metal/sword/bismuth_bronze', 
    'tfc:metal/sword_blade/bismuth_bronze', 
    'tfc:metal/knife/bismuth_bronze', 
    'tfc:metal/knife_blade/bismuth_bronze', 
    'tfc:metal/scythe/bismuth_bronze', 
    'tfc:metal/scythe_blade/bismuth_bronze',

    // Bronze
    'tfc:metal/ingot/bronze', 
    'tfc:metal/sheet/bronze', 
    'tfc:metal/double_sheet/bronze', 
    'tfc:metal/rod/bronze', 
    'tfc:metal/pickaxe/bronze', 
    'tfc:metal/pickaxe_head/bronze', 
    'tfc:metal/axe/bronze', 
    'tfc:metal/axe_head/bronze', 
    'tfc:metal/shovel/bronze', 
    'tfc:metal/shovel_head/bronze', 
    'tfc:metal/hoe/bronze', 
    'tfc:metal/hoe_head/bronze', 
    'tfc:metal/hammer/bronze', 
    'tfc:metal/hammer_head/bronze', 
    'tfc:metal/saw/bronze', 
    'tfc:metal/saw_blade/bronze', 
    'tfc:metal/sword/bronze', 
    'tfc:metal/sword_blade/bronze', 
    'tfc:metal/knife/bronze', 
    'tfc:metal/knife_blade/bronze', 
    'tfc:metal/scythe/bronze', 
    'tfc:metal/scythe_blade/bronze',

    // Black Bronze
    'tfc:metal/ingot/black_bronze', 
    'tfc:metal/sheet/black_bronze', 
    'tfc:metal/double_sheet/black_bronze', 
    'tfc:metal/rod/black_bronze', 
    'tfc:metal/pickaxe/black_bronze', 
    'tfc:metal/pickaxe_head/black_bronze', 
    'tfc:metal/axe/black_bronze', 
    'tfc:metal/axe_head/black_bronze', 
    'tfc:metal/shovel/black_bronze', 
    'tfc:metal/shovel_head/black_bronze', 
    'tfc:metal/hoe/black_bronze', 
    'tfc:metal/hoe_head/black_bronze', 
    'tfc:metal/hammer/black_bronze', 
    'tfc:metal/hammer_head/black_bronze', 
    'tfc:metal/saw/black_bronze', 
    'tfc:metal/saw_blade/black_bronze', 
    'tfc:metal/sword/black_bronze', 
    'tfc:metal/sword_blade/black_bronze', 
    'tfc:metal/knife/black_bronze', 
    'tfc:metal/knife_blade/black_bronze', 
    'tfc:metal/scythe/black_bronze', 
    'tfc:metal/scythe_blade/black_bronze',

    // Wrought Iron
    'tfc:metal/ingot/wrought_iron', 
    'tfc:metal/sheet/wrought_iron', 
    'tfc:metal/double_sheet/wrought_iron', 
    'tfc:metal/rod/wrought_iron', 
    'tfc:metal/pickaxe/wrought_iron', 
    'tfc:metal/pickaxe_head/wrought_iron', 
    'tfc:metal/axe/wrought_iron', 
    'tfc:metal/axe_head/wrought_iron', 
    'tfc:metal/shovel/wrought_iron', 
    'tfc:metal/shovel_head/wrought_iron', 
    'tfc:metal/hoe/wrought_iron', 
    'tfc:metal/hoe_head/wrought_iron', 
    'tfc:metal/hammer/wrought_iron', 
    'tfc:metal/hammer_head/wrought_iron', 
    'tfc:metal/saw/wrought_iron', 
    'tfc:metal/saw_blade/wrought_iron', 
    'tfc:metal/sword/wrought_iron', 
    'tfc:metal/sword_blade/wrought_iron', 
    'tfc:metal/knife/wrought_iron', 
    'tfc:metal/knife_blade/wrought_iron', 
    'tfc:metal/scythe/wrought_iron', 
    'tfc:metal/scythe_blade/wrought_iron',

    // Steel
    'tfc:metal/ingot/steel', 
    'tfc:metal/sheet/steel', 
    'tfc:metal/double_sheet/steel', 
    'tfc:metal/rod/steel', 
    'tfc:metal/pickaxe/steel', 
    'tfc:metal/pickaxe_head/steel', 
    'tfc:metal/axe/steel', 
    'tfc:metal/axe_head/steel', 
    'tfc:metal/shovel/steel', 
    'tfc:metal/shovel_head/steel', 
    'tfc:metal/hoe/steel', 
    'tfc:metal/hoe_head/steel', 
    'tfc:metal/hammer/steel', 
    'tfc:metal/hammer_head/steel', 
    'tfc:metal/saw/steel', 
    'tfc:metal/saw_blade/steel', 
    'tfc:metal/sword/steel', 
    'tfc:metal/sword_blade/steel', 
    'tfc:metal/knife/steel', 
    'tfc:metal/knife_blade/steel', 
    'tfc:metal/scythe/steel', 
    'tfc:metal/scythe_blade/steel',

    // Black Steel
    'tfc:metal/ingot/black_steel', 
    'tfc:metal/sheet/black_steel', 
    'tfc:metal/double_sheet/black_steel', 
    'tfc:metal/rod/black_steel', 
    'tfc:metal/pickaxe/black_steel', 
    'tfc:metal/pickaxe_head/black_steel', 
    'tfc:metal/axe/black_steel', 
    'tfc:metal/axe_head/black_steel', 
    'tfc:metal/shovel/black_steel', 
    'tfc:metal/shovel_head/black_steel', 
    'tfc:metal/hoe/black_steel', 
    'tfc:metal/hoe_head/black_steel', 
    'tfc:metal/hammer/black_steel', 
    'tfc:metal/hammer_head/black_steel', 
    'tfc:metal/saw/black_steel', 
    'tfc:metal/saw_blade/black_steel', 
    'tfc:metal/sword/black_steel', 
    'tfc:metal/sword_blade/black_steel', 
    'tfc:metal/knife/black_steel', 
    'tfc:metal/knife_blade/black_steel', 
    'tfc:metal/scythe/black_steel', 
    'tfc:metal/scythe_blade/black_steel',

    // Red Steel
    'tfc:metal/ingot/red_steel', 
    'tfc:metal/sheet/red_steel', 
    'tfc:metal/double_sheet/red_steel', 
    'tfc:metal/rod/red_steel', 
    'tfc:metal/pickaxe/red_steel', 
    'tfc:metal/pickaxe_head/red_steel', 
    'tfc:metal/axe/red_steel', 
    'tfc:metal/axe_head/red_steel', 
    'tfc:metal/shovel/red_steel', 
    'tfc:metal/shovel_head/red_steel', 
    'tfc:metal/hoe/red_steel', 
    'tfc:metal/hoe_head/red_steel', 
    'tfc:metal/hammer/red_steel', 
    'tfc:metal/hammer_head/red_steel', 
    'tfc:metal/saw/red_steel', 
    'tfc:metal/saw_blade/red_steel', 
    'tfc:metal/sword/red_steel', 
    'tfc:metal/sword_blade/red_steel', 
    'tfc:metal/knife/red_steel', 
    'tfc:metal/knife_blade/red_steel', 
    'tfc:metal/scythe/red_steel', 
    'tfc:metal/scythe_blade/red_steel',

    // Blue Steel
    'tfc:metal/ingot/blue_steel', 
    'tfc:metal/sheet/blue_steel', 
    'tfc:metal/double_sheet/blue_steel', 
    'tfc:metal/rod/blue_steel', 
    'tfc:metal/pickaxe/blue_steel', 
    'tfc:metal/pickaxe_head/blue_steel', 
    'tfc:metal/axe/blue_steel', 
    'tfc:metal/axe_head/blue_steel', 
    'tfc:metal/shovel/blue_steel', 
    'tfc:metal/shovel_head/blue_steel', 
    'tfc:metal/hoe/blue_steel', 
    'tfc:metal/hoe_head/blue_steel', 
    'tfc:metal/hammer/blue_steel', 
    'tfc:metal/hammer_head/blue_steel', 
    'tfc:metal/saw/blue_steel', 
    'tfc:metal/saw_blade/blue_steel', 
    'tfc:metal/sword/blue_steel', 
    'tfc:metal/sword_blade/blue_steel', 
    'tfc:metal/knife/blue_steel', 
    'tfc:metal/knife_blade/blue_steel', 
    'tfc:metal/scythe/blue_steel', 
    'tfc:metal/scythe_blade/blue_steel',
   
    // Ores
    'tfc:ore/poor_native_copper', 
    'tfc:ore/normal_native_copper', 
    'tfc:ore/rich_native_copper',
    'tfc:ore/poor_native_gold', 
    'tfc:ore/normal_native_gold', 
    'tfc:ore/rich_native_gold', 
    'tfc:ore/poor_hematite', 
    'tfc:ore/normal_hematite', 
    'tfc:ore/rich_hematite', 
    'tfc:ore/rich_tetrahedrite', 
    'tfc:ore/normal_tetrahedrite', 
    'tfc:ore/poor_tetrahedrite',
    'tfc:ore/rich_sphalerite', 
    'tfc:ore/normal_sphalerite', 
    'tfc:ore/poor_sphalerite', 
    'tfc:ore/rich_limonite', 
    'tfc:ore/normal_limonite', 
    'tfc:ore/poor_limonite', 
    'tfc:ore/rich_magnetite', 
    'tfc:ore/normal_magnetite', 
    'tfc:ore/poor_magnetite', 
    'tfc:ore/rich_malachite', 
    'tfc:ore/normal_malachite', 
    'tfc:ore/poor_malachite', 
    'tfc:ore/rich_garnierite', 
    'tfc:ore/normal_garnierite', 
    'tfc:ore/poor_garnierite', 
    'tfc:ore/rich_bismuthinite', 
    'tfc:ore/normal_bismuthinite', 
    'tfc:ore/poor_bismuthinite', 
    'tfc:ore/rich_cassiterite', 
    'tfc:ore/normal_cassiterite', 
    'tfc:ore/poor_cassiterite', 
    'tfc:ore/rich_native_silver', 
    'tfc:ore/normal_native_silver', 
    'tfc:ore/poor_native_silver',

    // Gems
    'tfc:gem/amethyst', 
    'tfc:gem/diamond', 
    'tfc:gem/lapis_lazuli', 
    'tfc:gem/emerald', 
    'tfc:gem/pyrite', 
    'tfc:gem/opal', 
    'tfc:gem/ruby', 
    'tfc:gem/sapphire', 
    'tfc:gem/topaz', 
    'tfc:ore/amethyst', 
    'tfc:ore/diamond', 
    'tfc:ore/lapis_lazuli', 
    'tfc:ore/emerald', 
    'tfc:ore/pyrite', 
    'tfc:ore/opal', 
    'tfc:ore/ruby', 
    'tfc:ore/sapphire', 
    'tfc:ore/topaz',

    'tfc:ore/graphite', 
    'tfc:ore/sulfur', 
    'tfc:ore/cinnabar', 
    'tfc:ore/cryolite', 
    'tfc:ore/saltpeter', 
    'tfc:ore/borax', 
    'tfc:ore/sylvite',
    'tfc:ore/bituminous_coal',
    'tfc:ore/lignite',
    'tfc:ore/halite'
]

const tfcSimpleMaterials = [
    "gypsum",
    "cinnabar",
    "cryolite",
    "saltpeter",
    "sylvite",
    "borax",
    "halite",
    "amethyst",
    "opal",
    "pyrite",
    "topaz",
    "bituminous_coal",
    "lignite",
    "graphite",
    "sulfur",
    "diamond",
    "emerald",
    "lapis_lazuli",
    "ruby",
    "sapphire"
]

const tfcOreTypes = [
    "poor",
    "normal",
    "rich"
]

const tfcOreMaterials = [
    "bismuthinite",
    "cassiterite",
    "garnierite",
    "hematite",
    "limonite",
    "magnetite",
    "malachite",
    "native_copper",
    "native_gold",
    "native_silver",
    "sphalerite",
    "tetrahedrite"
]

const tfcDepositeMaterials = [
    "cassiterite",
    "native_copper",
    "native_gold",
    "native_silver"
]
